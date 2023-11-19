## What is ‘undefined’?
An ‘undefined’ datatype in MongoDB is a data type that signifies that the value of a field has not been set or has been removed. It represents the absence of a value.

### Why should it not be used?
In the newer versions of MongoDB, it is recommended to use the null value for representing missing or undefined values in the database. Although the undefined datatype is still supported for backward compatibility, it is advised to avoid the use of it, as the null value is more widely accepted and understood.

Here is an example to show the difference between null and undefined:
```
{
  "field1": null,
  "field2": undefined
}
```
In this example, field1 has a null value, while field2 has an undefined value. However, it is recommended to use null instead of undefined to maintain better readability and compatibility.

