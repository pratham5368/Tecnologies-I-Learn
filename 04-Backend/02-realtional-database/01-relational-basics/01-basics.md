RDBMS is an acronym for Relational Database Management System.
A relational database is a type of database that stores and provides access to data points that are related to one another. Relational databases store data in a series of tables. Interconnections between the tables are specified as foreign keys. A foreign key is a unique reference from one row in a relational table to another row in a table, which can be the same table but is most commonly a different table.


Here are some of the popular relational database management systems:

1. MySQL.
2. Microsoft SQL Server.
3. SQLite.
4. PostgreSQL.
5. Oracle Database.
6. Microsoft SQL Server.
7. IBM Db2.
8. MariaDB.

### There are also cloud based relational databases like:

1. Oracle Cloud.
2. Google Cloud SQL.
3. IBM Db2 on Cloud.
4. AWS Databases(Amazon Relational Database Service (RDS))

![](https://res.cloudinary.com/practicaldev/image/fetch/s--hpoC3PEF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fepb1wlewokyg66bi7m1.png)
- Attributes: The columns in the table. Attributes define a relationship, like First_Name or Student_ID.
- Relation schema: Represents the name of the relation with its attributes. For example, Student (First_Name, Student_ID, Student_Age) is a relation schema for Student.
- Tuples: A single row of a table containing a single record. The table above has three tuples, and one of them is Elliot 17 20.
- Degree: The number of attributes in the relation. The above relation has three.
- Carindality: The number of tuples in the relation. The above relation has three

### Advantages of relational databases
There are many advantages to using the relational database model for data management and data storage, including:

- Flexibility: It’s easy to expand, update, and delete data whenever needed.
- Atomicity: Atomic transactions ensure that you either commit to the entire transaction or have no transaction at all. If there’s a lost connection, the relational database goes back to its previous state.
- Durability: The changes that are made to the database will survive permanently, even in the event of a system crash.
- Consistency: The only data allowed to be written into the database is data that follows data validation rules.

Relational database uses
Relational databases are useful for many different things, such as:

- Application development
- Data warehousing
- Data maintenance in applications
- Storing structured data
- Logging applications


They're also useful in many different industries, such as:

- Retail and e-commerce
- Finance
- Banking
- Insurance
- IT
- Telecom
- Health
- Manufacturing

### What is SQL?
SQL, or Structured Query Language, is the programming language used to work with data in a relational database. All of the major relational database management systems use SQL as their database language.

SQL is the standard choice because of its benefits. With SQL, users can:

- Access data in their RDMS
- Describe, define, and manipulate data
- Use SQL modules, libraries, and pre-compilers to embed it into other programming languages
- Make and delete databases and tables
- Set permissions on tables, processes, and views

You can use SQL statements to interact with your relational database. These commands are organized into three different groups:

- Data Definition Language (DDL)

    - CREATE
    - ALTER
    - DROP
    
- Data Manipulation Langauge (DML)

    - SELECT
    - INSERT
    - UPDATE
    - DELETE
- Data Control Language (DCL)
   - GRANT
   - REVOKE

Let's take a look at how to use one of these commands. Here’s how to use the CREATE DATABASE command:
```
CREATE DATABASE DatabaseName;
```
If you want to create two databases and then display the list of your databases, you can do this:
```
CREATE DATABASE sampleDB1;
CREATE DATABASE sampleDB2;
SHOW DATABASES;

---> 
Database
information_schema
mysql
performance_schema
ri_db
sampleDB1
sampleDB2
sys
```
Note: The SHOW DATABASE command is used to display your databases.

### Properties of relational tables
Let's explore some of the characteristics of relational tables:

#### Each row is unique

No two rows in a table are the same.

#### Values are atomic

Atomic values can't be broken down into smaller pieces. Relational tables don't contain repeating groups or multi-valued attributes. This simplifies data manipulation.

#### Column values are of the same type

All values in a column come from the same domain based on their data type. This allows for simplified data access because you can be sure of the type of data contained within a given column.

#### The sequence of columns doesn't matter

Columns can be retrieved in any order. This allows users to share the same table without worrying about its organization.

#### The sequence of rows doesn't matter

The rows of a relational table can be retrieved in any order. Adding new data to a table doesn't affect existing queries.

#### Each column has a different name

Since the sequence of columns doesn't matter, so they must be referred to by name. A column name doesn't need to be unique within an entire database, but only within the relation it belongs in.

