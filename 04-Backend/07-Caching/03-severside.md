## Server side
Server-side caching temporarily stores web files and data on the origin server to reuse later.

When the user first requests for the webpage, the website goes under the normal process of retrieving data from the server and generates or constructs the webpage of the website. After the request has happened and the response has been sent back, the server copies the webpage and stores it as a cache.

Next time the user revisits the website, it loads the already saved or cached copy of the webpage, thus making it faster.

![](https://files.codingninjas.in/article_images/server-side-caching-and-client-side-caching-1-1640194508.webp)

![](https://files.codingninjas.in/article_images/server-side-caching-and-client-side-caching-2-1640194508.webp)

### Types of Server-side Caching
- Object Caching - In Object Caching, we store database queries. As a result, it is easier to access the next time the request is made.
![](https://files.codingninjas.in/article_images/server-side-caching-and-client-side-caching-4-1640194509.webp)

- Opcode Caching - Opcode Caching is a performance booster for PHP that compiles human-readable PHP to bytecode understood by web servers.
![](https://files.codingninjas.in/article_images/server-side-caching-and-client-side-caching-5-1640194509.webp)

- CDN Caching - Content Delivery Network or CDN Caching is a group of servers around the globe to provide content delivery to website visitors.
![](https://files.codingninjas.in/article_images/server-side-caching-and-client-side-caching-6-1640194510.webp)

## Redis
Redis is an open source (BSD licensed), in-memory data structure store used as a database, cache, message broker, and streaming engine. Redis provides data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes, and streams. Redis has built-in replication, Lua scripting, LRU eviction, transactions, and different levels of on-disk persistence, and provides high availability 

[](https://redis.io/)

## Memcached
Memcached (pronounced variously mem-cash-dee or mem-cashed) is a general-purpose distributed memory-caching system. It is often used to speed up dynamic database-driven websites by caching data and objects in RAM to reduce the number of times an external data source (such as a database or API) must be read. Memcached is free and open-source software, licensed under the Revised BSD license. Memcached runs on Unix-like operating systems (Linux and macOS) and on Microsoft Windows. It depends on the libevent library.

Memcached’s APIs provide a very large hash table distributed across multiple machines. When the table is full, subsequent inserts cause older data to be purged in the least recently used (LRU) order. Applications using Memcached typically layer requests and additions into RAM before falling back on a slower backing store, such as a database.

Memcached has no internal mechanism to track misses which may happen. However, some third-party utilities provide this functionality.

[](https://github.com/memcached/memcached#readme)