## Caching
Caching is the process of storing frequently accessed data in a temporary storage location, called a cache, in order to quickly retrieve it without the need to query the original data source. This can improve the performance of an application by reducing the number of times a data source must be accessed.

There are several caching strategies:

- Refresh Ahead
You can configure the cache to automatically refresh any recently accessed cache entry prior to its expiration.

Refresh-ahead can result in reduced latency vs read-through if the cache can accurately predict which items are likely to be needed in the future.

#### Disadvantage of refresh-ahead:
Not accurately predicting which items are likely to be needed in the future can result in reduced performance than without refresh-ahead.
- Write-Behind
In write-behind, the application does the following:

Add/update entry in cache
Asynchronously write entry to the data store, improving write performance
Disadvantages of write-behind:
There could be data loss if the cache goes down prior to its contents hitting the data store.
It is more complex to implement write-behind than it is to implement cache-aside or write-through.
![](https://i.imgur.com/XDsb7RS.png)
- Write-through
The application uses the cache as the main data store, reading and writing data to it, while the cache is responsible for reading and writing to the database:

Application adds/updates entry in cache
Cache synchronously writes entry to data store
Return
Application code:
```
set_user(12345, {"foo":"bar"})
```
Cache code:
```
def set_user(user_id, values):
  user = db.query("UPDATE Users WHERE id = {0}", user_id, values)
  cache.set(user_id, user)
```
Write-through is a slow overall operation due to the write operation, but subsequent reads of just written data are fast. Users are generally more tolerant of latency when updating data than reading data. Data in the cache is not stale.

#### Disadvantages
When a new node is created due to failure or scaling, the new node will not cache entries until the entry is updated in the database. Cache-aside in conjunction with write through can mitigate this issue.
Most data written might never be read, which can be minimized with a TTL.
- Cache Aside
The application is responsible for reading and writing from storage. The cache does not interact with storage directly. The application does the following:

1. Look for entry in cache, resulting in a cache miss
2. Load entry from the database
3. Add entry to cache
4. Return entry
```
def get_user(self, user_id):
  user = cache.get("user.{0}", user_id)
  if user is None:
    user = db.query("SELECT * FROM users WHERE user_id = {0}", user_id)
      if user is not None:
        key = "user.{0}".format(user_id)
        cache.set(key, json.dumps(user))
  return user
```
Memcached is generally used in this manner. Subsequent reads of data added to cache are fast. Cache-aside is also referred to as lazy loading. Only requested data is cached, which avoids filling up the cache with data that isn’t requested.



Also, you can have the cache in several places, examples include:

- Client Caching

Client-side caching refers to the practice of storing frequently accessed data on the client’s device rather than the server. This type of caching can help improve the performance of an application by reducing the number of times the client needs to request data from the server.

One common example of client-side caching is web browsers caching frequently accessed web pages and resources. When a user visits a web page, the browser stores a copy of the page and its resources (such as images, stylesheets, and scripts) in the browser’s cache. If the user visits the same page again, the browser can retrieve the cached version of the page and its resources instead of requesting them from the server, which can reduce the load time of the page.

Another example of client-side caching is application-level caching. Some applications, such as mobile apps, can cache data on the client’s device to improve performance and reduce the amount of data that needs to be transferred over the network.

Client side caching has some advantages like reducing server load, faster page load times, and reducing network traffic. However, it also has some drawbacks like the potential for stale data if the client-side cache is not properly managed, or consuming memory or disk space on the client’s device.
- CDN Caching

A Content Delivery Network (CDN) is a distributed network of servers that are strategically placed in various locations around the world. The main purpose of a CDN is to serve content to end-users with high availability and high performance by caching frequently accessed content on servers that are closer to the end-users/

When a user requests content from a website that is using a CDN, the CDN will first check if the requested content is available in the cache of a nearby server. If the content is found in the cache, it is served to the user from the nearby server. If the content is not found in the cache, it is requested from the origin server (the original source of the content) and then cached on the nearby server for future requests.

CDN caching can significantly improve the performance and availability of a website by reducing the distance that data needs to travel, reducing the load on the origin server, and allowing for faster delivery of content to end-users.
- Web Server Caching

Reverse proxies and caches such as Varnish can serve static and dynamic content directly. Web servers can also cache requests, returning responses without having to contact application servers.
- Database Caching

Your database usually includes some level of caching in a default configuration, optimized for a generic use case. Tweaking these settings for specific usage patterns can further boost performance.
- Application Caching

In-memory caches such as Memcached and Redis are key-value stores between your application and your data storage. Since the data is held in RAM, it is much faster than typical databases where data is stored on disk. RAM is more limited than disk, so cache invalidation algorithms such as least recently used (LRU) can help invalidate ‘cold’ entries and keep ‘hot’ data in RAM.

Redis has the following additional features:

1. Persistence option
2. Built-in data structures such as sorted sets and lists

Generally, you should try to avoid file-based caching, as it makes cloning and auto-scaling more difficult.