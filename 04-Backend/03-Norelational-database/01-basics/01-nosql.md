NoSQL databases offer data storage and retrieval that is modelled differently to “traditional” relational databases. NoSQL databases typically focus more on horizontal scaling, eventual consistency, speed and flexibility and is used commonly for big data and real-time streaming applications. NoSQL is often described as a BASE system (Basically Available, Soft state, Eventual consistency) as opposed to SQL/relational which typically focus on ACID (Atomicity, Consistency, Isolation, Durability). Common NoSQL data structures include key-value pair, wide column, graph and document.
### NoSQL database features
Each NoSQL database has its own unique features. At a high level, many NoSQL databases have the following features:

- Flexible schemas
- Horizontal scaling
- Fast queries due to the data model
- Ease of use for developers

### Difference between RDBMS and NoSQL databases
While a variety of differences exist between relational database management systems (RDBMS) and NoSQL databases, one of the key differences is the way the data is modeled in the database. In this section, we'll work through an example of modeling the same data in a relational database and a NoSQL database. Then, we'll highlight some of the other key differences between relational databases and NoSQL databases.

### example
The data model we design for a NoSQL database will depend on the type of NoSQL database we choose. Let's consider how to store the same information about a user and their hobbies in a 
document database
 like MongoDB.

```

{

   "_id": 1,

   "first_name": "Leslie",

   "last_name": "Yepp",

   "cell": "8125552344",

   "city": "Pawnee",

   "hobbies": ["scrapbooking", "eating waffles", "working"]

}
```
