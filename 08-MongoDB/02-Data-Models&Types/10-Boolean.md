## Boolean
The Boolean data type in MongoDB is used to store true or false values. Booleans are used when you want to represent a binary state, where a field can have one of two possible values. MongoDB supports the standard true and false literals for this data type.

Examples of usage can include representing active/inactive statuses, toggling settings (e.g., sending email notifications), and denoting the presence/absence of a specific feature.

### Storing Boolean Data
To store a boolean data value in a MongoDB document, you may use the true or false literals. Here’s an example of a document containing a boolean field named isActive:
```
{
    "name": "John Doe",
    "isActive": true,
    "email": "john.doe@example.com"
}
```
### Querying Data by Boolean Value
When you need to query documents based on a boolean value, you can use a query filter that specifies the desired boolean value. For example, if you want to find all active users in the users collection:
```
db.users.find({ isActive: true });
```
Similarly, you can retrieve all inactive users with the following query:
```
db.users.find({ isActive: false });
```
### Updating Boolean Data
Updating or modifying boolean values is as simple as using the $set operator with the desired new value. Let’s say we want to deactivate a user:
```
db.users.updateOne({ name: 'John Doe' }, { $set: { isActive: false } });
```
This would change the user’s isActive field value to false in the document.