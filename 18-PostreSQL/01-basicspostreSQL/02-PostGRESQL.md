
PostgreSQL is a powerful, open-source Object-Relational Database Management System (ORDBMS) that is known for its robustness, extensibility, and SQL compliance. It was initially developed at the University of California, Berkeley, in the 1980s and has since become one of the most popular open-source databases in the world.
[official documentation](https://www.postgresql.org/docs/current/datatype.html)

### Key Features
- ACID Compliance: PostgreSQL is fully ACID-compliant, ensuring the reliability and data integrity of the database transactions.
- Extensibility: PostgreSQL allows users to define their data types, operators, functions, and more. This makes it highly customizable and adaptable to various use cases.
- Concurrency Control: Through its Multi-Version Concurrency Control (MVCC) mechanism, PostgreSQL efficiently handles concurrent queries without lock contention.
- Full-Text Search: PostgreSQL provides powerful text searching capabilities, including text indexing and various search functions.
- Spatial Database Capabilities: Through the PostGIS extension, PostgreSQL offers support for geographic objects and spatial querying, making it ideal for GIS applications.
- High Availability: PostgreSQL has built-in support for replication, allowing for high availability and fault tolerance.
### Benefits of PostgreSQL
- One of the key benefits of PostgreSQL is its open-source and community-driven approach, which means that it is free for use and is continuously worked on and improved by a dedicated group of developers.
- It is highly scalable, making it suitable for both small-scale projects and large-scale enterprise applications.
- It is platform-independent, which means it can run on various operating systems like Windows, Linux, and macOS.
### Use Cases
PostgreSQL can be used for a wide variety of applications, thanks to its versatility and extensibility. Some common use cases include:

- Web applications
- Geographic Information Systems (GIS)
- Data warehousing and analytics
- Financial and banking systems
- Content management systems (CMS)
- Enterprise Resource Planning (ERP) systems

## PostgreSQL vs. MySQL / MariaDB
MySQL and its fork, MariaDB, are both popular open-source relational database management systems (RDBMS). Here’s how PostgreSQL compares to them:

- Concurrency: PostgreSQL uses multi-version concurrency control (MVCC), which allows for improved performance in situations where multiple users or applications are accessing the database simultaneously. MySQL and MariaDB use table level-locking, which can be less efficient in high concurrency scenarios.

- Data Types: PostgreSQL supports a larger number of custom and advanced data types, including arrays, hstore (key-value store), and JSON. MySQL and MariaDB mainly deal with basic data types like numbers, strings, and dates.

- Query Optimization: PostgreSQL generally has a more sophisticated query optimizer that can make better use of indexes and statistics, which can lead to better query performance.

- Extensions: PostgreSQL has a rich ecosystem of extensions that can be used to add functionality to the database system, such as PostGIS for spatial and geographic data. MySQL and MariaDB also have plugins, but the ecosystem may not be as extensive as Postgres.

## PostgreSQL vs. SQLite
SQLite is an embedded database system, meaning it is included within applications and does not require a separate server, like PostgreSQL does. Here are the main differences between PostgreSQL and SQLite:

- Scalability: SQLite is designed for small-scale applications and personal projects, while PostgreSQL is designed for enterprise-level applications and can handle large amounts of data and concurrent connections.

- Concurrency: As mentioned earlier, PostgreSQL uses MVCC for better concurrent access to the database. SQLite, on the other hand, uses file level-locking, which can lead to database locking issues in high concurrency scenarios.

- Features: PostgreSQL boasts a wide array of advanced features and data types, whereas SQLite offers a more limited feature set that has been optimized for simplicity and minimal resource usage.

## PostgreSQL vs. Oracle
Oracle is a commercial, proprietary RDBMS system that offers many high-end features aimed at large enterprises. Here’s how PostgreSQL compares to Oracle:

- Cost: PostgreSQL is open-source and free to use, while Oracle has a steep licensing cost that can be prohibitively expensive for smaller projects and businesses.

- Performance: While both databases have good performance and can handle large amounts of data, Oracle has certain optimizations and features that can make it more suitable for some specific high-performance, mission-critical applications.

- Community: PostgreSQL has a large, active open-source community that provides support, development, and extensions. Oracle, being a proprietary system, relies on its company’s support and development team, which might not offer the same level of openness and collaboration.

## Database type
PostgreSQL is a relational database management system (RDBMS) that uses SQL as its main query language. It is designed to store structured data, and it is based on the relational model, which means that data is represented as tables with rows and columns.

NoSQL (Not only SQL) is a term used to describe a variety of non-relational database management systems, which are designed to store unstructured or semi-structured data. Some common types of NoSQL databases are:

- Document databases (e.g., MongoDB, Couchbase)
- Key-Value databases (e.g., Redis, Riak)
- Column-family databases (e.g., Cassandra, HBase)
- Graph databases (e.g., Neo4j, Amazon Neptune)
## Scalability
PostgreSQL provides vertical scalability, which means that you can increase the performance of a single server by adding more resources (e.g., CPU, RAM). On the other hand, horizontal scalability (adding more servers to a database cluster to distribute the load) is more challenging in PostgreSQL. You can achieve this through read replicas or sharding, but it requires a more complex configuration and may have limitations depending on your use case.

NoSQL databases, in general, are designed for horizontal scalability. They can easily distribute data across multiple servers, making them a suitable choice for large-scale applications or those that require high availability and high write/read throughput. That said, different NoSQL databases implement this in various ways, which may impact performance and feature set.

## Data modeling
PostgreSQL uses a schema-based approach for data modeling, where you define tables and relationships between them using SQL. This allows you to enforce data integrity and consistency through constraints, such as primary keys, foreign keys, and unique indexes.

NoSQL databases, given their non-relational nature, use more flexible data models, such as JSON or key-value pairs. This allows you to store complex, hierarchical, and dynamic data without having to design a rigid schema first. However, this also means that you may have to handle data consistency and integrity at the application level.

## Query language
PostgreSQL uses SQL (Structured Query Language) for querying and managing data. SQL is a powerful and widely used language that allows you to perform complex queries and analyze data with ease.

NoSQL databases use a variety of query languages, depending on the database type. Some, like MongoDB, use query languages similar to JSON, while others, like Neo4j, have their own tailored query languages (e.g., Cypher). This variety may lead to a steeper learning curve, but it also allows you to choose the database with the most suitable and expressive query language for your needs.

### Use cases
PostgreSQL is a great choice for:

- Applications that require consistent and well-structured data, such as financial or banking systems.
- Complex reporting and data analysis.
- Applications that can benefit from advanced features, such as stored procedures, triggers, and full-text search.

NoSQL databases are a better fit for:

- Applications that deal with large volumes of unstructured or semi-structured data, such as social media platforms, IoT devices, or content management systems.
- Applications that require high performance, scalability, and availability, such as real-time analytics, gaming platforms, or search engines.
- Projects where data modeling and schema design may evolve over time, due to the flexible storage approach.