SQL, or Structured Query Language, uses a specific set of commands to interact with a database. It includes the use of keyword-like statements to accomplish several tasks such as creating, deleting, or modifying tables, retrieving, inserting, or modifying data.

[learn](https://mode.com/sql-tutorial/)

The SELECT statement is used to retrieve data from a database. The data returned is stored in a result table, called the result-set.
```
SELECT column1, column2 FROM table_name;
```
The INSERT INTO statement is used to insert new rows of data in a table.
```
INSERT INTO table_name (column1, column2, column3)
VALUES (value1, value2, value3);
```
The UPDATE statement is used to modify existing records in a table.
```
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;
```
The DELETE statement is used to remove rows from a table.
```
DELETE FROM table_name WHERE condition;
```
The CREATE TABLE statement is used to create a new table in a database.
```
CREATE TABLE table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    column3 datatype constraints
);
```
The ALTER TABLE statement is used to add, delete/drop or modify columns in the existing table. It is also used to add and drop constraints on the existing table.
```
-- To add a column
ALTER TABLE table_name
ADD column_name datatype;

-- To delete/drop column
ALTER TABLE table_name
DROP COLUMN column_name;

-- To modify existing column
ALTER TABLE table_name
MODIFY COLUMN column_name datatype;
The DROP TABLE statement is used to drop an existing table in a database.

DROP TABLE table_name;
```

## SQL keywords
SQL employs a number of standard command keywords that are integral to interact with databases. Keywords in SQL provide instructions as to what action should be performed.

Here are some of the primary SQL keywords:

SELECT: This keyword retrieves data from a database. For example,
```
SELECT * FROM Customers;
```
In the above statement * indicates that all records should be retrieved from the Customers table.

FROM: Used in conjunction with SELECT to specify the table from which to fetch data.

WHERE: Used to filter records. Incorporating a WHERE clause, you might specify conditions that must be met. For example,
```
SELECT * FROM Customers WHERE Country='Germany';
```
INSERT INTO: This command is used to insert new data into a database.
```
INSERT INTO Customers (CustomerID, CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal','Tom B. Erichsen','Skagen 21','Stavanger','4006','Norway');
```
UPDATE: This keyword updates existing data within a table. For example,
```
UPDATE Customers SET ContactName='Alfred Schmidt', City='Frankfurt' WHERE CustomerID=1;
```
DELETE: This command removes one or more records from a table. For example,
```
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
```
CREATE DATABASE: As implied by its name, this keyword creates a new database.
```
CREATE DATABASE mydatabase;
```
ALTER DATABASE, DROP DATABASE, CREATE TABLE, ALTER TABLE, DROP TABLE: These keywords are used to modify databases and tables.

Remember that SQL is not case sensitive, meaning keywords can be written in lower case. The convention is to write them in ALL CAPS for readability. There are many more keywords in SQL, but these are some of the most common.