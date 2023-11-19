The relational model is an approach to organizing and structuring data using tables, also referred to as “relations”. It was first introduced by Edgar F. Codd in 1970 and has since become the foundation for most database management systems (DBMS), including PostgreSQL. This model organizes data into tables with rows and columns, where each row represents a single record and each column represents an attribute or field of the record.

The core concepts of the relational model include:

- Attributes: An attribute is a column within a table that represents a specific characteristic or property of an entity, such as “name”, “age”, “email”, etc.
### Properties of Attributes
- There are a few essential properties of attributes to keep in mind while using them in relational databases.

     - Name: Each attribute must have a unique name within the table (relation) to avoid ambiguity. Attribute names should be descriptive and adhere to the naming conventions of the database system.

     - Data Type: Attributes have a specific data type, defining the kind of values they can store. Common data types in PostgreSQL include INTEGER, FLOAT, VARCHAR, TEXT, DATE, and TIMESTAMP. It’s crucial to carefully consider the appropriate data type for each attribute to maintain data integrity and optimize storage.

     - Constraints: Attributes can have constraints applied to them, restricting the values they can hold. Constraints are useful for maintaining data integrity and consistency within the table. Some common constraints include NOT NULL, UNIQUE, CHECK, and the FOREIGN KEY constraint for referencing values in another table.

     - Default Value: Attributes can have a default value that is used when a record is inserted without an explicit value for the attribute. This can be a constant or a function.
- Tuples: A tuple is a single row within a table that represents a specific instance of an entity with its corresponding attribute values.



- Relations: A relation is a table that consists of a set of tuples with the same attributes. It represents the relationship between entities and their attributes.

- Primary Key: A primary key is a unique identifier for each tuple within a table. It enforces the uniqueness of records and is used to establish relationships between tables.

- Foreign Key: A foreign key is an attribute within a table that references the primary key of another table. It is used to establish and enforce connections between relations.

- Normalization: Normalization is a process of organizing data in a way to minimize redundancy and improve data integrity. It involves decomposing complex tables into simpler tables, ensuring unique records, and properly defining foreign keys.

- Data Manipulation Language (DML): DML is a subset of SQL used to perform operations on data stored within the relational database, such as INSERT, UPDATE, DELETE, and SELECT.

- Data Definition Language (DDL): DDL is another subset of SQL used to define, modify, or delete database structures, such as CREATE, ALTER, and DROP.

### Domains in PostgreSQL
Domains in PostgreSQL are essentially user-defined data types that can be created using the CREATE DOMAIN command. These custom data types allow you to apply constraints and validation rules to columns in your tables by defining a set of values that are valid for a particular attribute or field. This ensures consistency and data integrity within your relational database.

#### Creating Domains
To create a custom domain, you need to define a name for your domain, specify its underlying data type, and set any constraints or default values you want to apply. The syntax for creating a new domain is:
```
CREATE DOMAIN domain_name AS underlying_data_type
  [DEFAULT expression]
  [NOT NULL]
  [CHECK (condition)];
```
- domain_name: The name of the custom domain you want to create.
- underlying_data_type: The existing PostgreSQL data type on which your domain is based.
- DEFAULT expression: An optional default value for the domain when no value is provided.
- NOT NULL: Determines whether null values are allowed in the domain. If set, null values are not allowed.
- CHECK (condition): Specifies a constraint that must be met for values in the domain.
### Example
Suppose you want to create a custom domain to store phone numbers. This domain should only accept valid 10-digit phone numbers as input. Here’s an example of how you might define this domain:
```
CREATE DOMAIN phone_number AS VARCHAR(10)
  NOT NULL
  CHECK (VALUE ~ '^[0-9]{10}$');
```
Now that your phone_number domain is created, you can use it when defining columns in your tables. For example:
```
CREATE TABLE customers (
  id serial PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  phone phone_number
);
```
In this example, the phone column is based on the phone_number domain and will only accept values that pass the defined constraints.

### Modifying and Deleting Domains
You can alter your custom domains by using the ALTER DOMAIN command. To delete a domain, you can use the DROP DOMAIN command. Be aware that dropping a domain may affect the tables with columns based on it.


## Constraints in PostgreSQL
Constraints are an essential part of the relational model, as they define rules that the data within the database must follow. They ensure that the data is consistent, accurate, and reliable. In this section, we’ll explore various types of constraints in PostgreSQL and how to implement them.

### Primary Key
A primary key constraint is a column or a set of columns that uniquely identifies each row in a table. There can only be one primary key per table, and its value must be unique and non-null for each row.
```
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);
```
### Foreign Key
A foreign key constraint ensures that a column or columns in a table refer to an existing row in another table. It helps maintain referential integrity between tables.
```
CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  user_id INTEGER,
  product_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (product_id) REFERENCES products (id)
);
```
### Unique
A unique constraint ensures that the values in a column or set of columns are unique across all rows in a table. In other words, it prevents duplicate entries in the specified column(s).
```
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);
```
### Check
A check constraint verifies that the values entered into a column meet a specific condition. It helps to maintain data integrity by restricting the values that can be inserted into a column.
```
CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  price NUMERIC CHECK (price >= 0)
);
```
### Not Null
A NOT NULL constraint enforces that a column cannot contain a NULL value. This ensures that a value must be provided for the specified column when inserting or updating data in the table.
```
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);
```
### Exclusion
An exclusion constraint is a more advanced form of constraint that allows you to specify conditions that should not exist when comparing multiple rows in a table. It helps maintain data integrity by preventing conflicts in data.
```
CREATE TABLE reservation (
  user_id INTEGER,
  reserved_from TIMESTAMP NOT NULL,
  reserved_to TIMESTAMP NOT NULL,
  EXCLUDE USING gist (user_id WITH =, tsrange(reserved_from, reserved_to) WITH &&)
);
```