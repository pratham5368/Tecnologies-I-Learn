### Working with Date
To create a new Date instance, you can use the JavaScript Date object. Here’s an example:
```
const currentDate = new Date();
```
When inserting a document with a Date field, you can store the date value as follows:
```
db.events.insertOne({ title: 'Sample Event', eventDate: new Date() });
```
You can also store the current date and time using MongoDB’s $currentDate operator when updating a document:
```
db.events.updateOne(
  { _id: ObjectId('your_document_id') },
  {
    $set: {
      title: 'Sample Event',
      eventDate: { $currentDate: { $type: 'date' } }
    }
  }
);
```
### Querying Dates
To query documents based on date values, you can perform comparisons using various query operators such as $lt, $lte, $gt, $gte, and $eq. Here are some examples:
```
// Find events that are happening before a certain date
const filterDate = new Date('2021-12-31');
db.events.find({ eventDate: { $lt: filterDate } });

// Find events that are happening after a certain date
const filterDate = new Date('2022-01-01');
db.events.find({ eventDate: { $gt: filterDate } });
```
### Date Aggregations
MongoDB also provides aggregation functions for working with date values. Some common operations include $year, $month, $dayOfMonth, $hour, and $minute.

Example using the $dayOfYear and $year operators:
```
db.events.aggregate([
  {
    $group: {
      _id: {
        year: { $year: '$eventDate' },
        day: { $dayOfYear: '$eventDate' },
      },
      count: { $sum: 1 },
    },
  },
]);
```
This query groups events by the day and year, providing a count of events for each day.