### Database Normalization
Database normalization is the process of structuring a relational database in accordance with a series of so-called normal forms in order to reduce data redundancy and improve data integrity. It was first proposed by Edgar F. Codd as part of his relational model.

Normalization entails organizing the columns (attributes) and tables (relations) of a database to ensure that their dependencies are properly enforced by database integrity constraints. It is accomplished by applying some formal rules either by a process of synthesis (creating a new database design) or decomposition (improving an existing database design).
 

Here is a list of Normal Forms in SQL:

- 1NF (First Normal Form)
     - Each table cell should contain a single value.
     - Each record needs to be unique.
- 2NF (Second Normal Form)
    - Rule 1- Be in 1NF
    - Rule 2- Single Column Primary Key that does not functionally dependant on any subset of candidate key relation
- 3NF (Third Normal Form)
    - Rule 1- Be in 2NF
    - Rule 2- Has no transitive functional dependencies
- BCNF (Boyce-Codd Normal Form):-Even when a database is in 3rd Normal Form, still there would be anomalies resulted if it has more than one Candidate Key.

Sometimes is BCNF is also referred as 3.5 Normal Form.
    
- 4NF (Fourth Normal Form):-If no database table instance contains two or more, independent and multivalued data describing the relevant entity, then it is in 4th Normal Form.

- 5NF (Fifth Normal Form):-A table is in 5th Normal Form only if it is in 4NF and it cannot be decomposed into any number of smaller tables without loss of data.

- 6NF (Sixth Normal Form):-6th Normal Form is not standardized, yet however, it is being discussed by database experts for some time. Hopefully, we would have a clear & standardized definition for 6th Normal Form in the near future…

![](https://www.guru99.com/images/NormalizationProcess(1).png)


### What is a KEY in SQL
A KEY in SQL is a value used to identify records in a table uniquely. An SQL KEY is a single column or combination of multiple columns used to uniquely identify rows or tuples in the table. SQL Key is used to identify duplicate information, and it also helps establish a relationship between multiple tables in the database.

### What is a Primary Key?
A primary is a single column value used to identify a database record uniquely.

It has following attributes

- A primary key cannot be NULL
- A primary key value must be unique
- The primary key values should rarely be changed
- The primary key must be given a value when a new record is inserted.

### What is Composite Key?
A composite key is a primary key composed of multiple columns used to identify a record uniquely

### Foreign Key
Foreign Key references the primary key of another Table! It helps connect your Tables

- A foreign key can have a different name from its primary key
- It ensures rows in one table have corresponding rows in another
- Unlike the Primary key, they do not have to be unique. Most often they aren’t
- Foreign keys can be null even though primary keys can not
