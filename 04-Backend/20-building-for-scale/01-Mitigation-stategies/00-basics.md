TL;DR
#### Let’s start with a summary of the most important points:

- Try to make the schema changes backwards compatible
- Separated data sources for each deployment unit
- Schema update and data migration
    - Relational databases: Use a migration tool to track changes and to automatically update the database.
    - NoSQL databases: No database update necessary as long as the application handles the varying data structure. Nevertheless, we may still want to migrate our data.
- Coordinated workflow for deployment and data migration during operation
    - It’s easy without high availability constraints: Shutdown application, update database, deploy new application, restart application
    - It’s hard when high availability is required: Multiple intermediate versions of the application and update application instances step by step

[link](https://phauer.com/2015/databases-challenge-continuous-delivery/)