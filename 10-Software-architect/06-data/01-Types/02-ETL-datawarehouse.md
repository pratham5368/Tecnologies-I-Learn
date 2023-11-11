## ETL Datawarehouses
In the world of data warehousing, if you need to bring data from multiple different data sources into one, centralized database, you must first:

- EXTRACT data from its original source
- TRANSFORM data by deduplicating it, combining it, and - ensuring quality, to then
- LOAD data into the target database

ETL tools enable data integration strategies by allowing companies to gather data from multiple data sources and consolidate it into a single, centralized location. ETL tools also make it possible for different types of data to work together.
## ETL PROCESS
There are three unique processes in extract, transform, load. These are:

1. Extraction, in which raw data is pulled from a source or multiple sources. Data could come from transactional applications, such as customer relationship management (CRM) data from Salesforce or enterprise resource planning (ERP) data from SAP, or Internet of Things (IoT) sensors that gather readings from a production line or factory floor operation, for example. To create a data warehouse, extraction typically involves combining data from these various sources into a single data set and then validating the data with invalid data flagged or removed. Extracted data may be several formats, such as relational databases, XML, JSON, and others.

2. Transformation, in which data is updated to match the needs of an organization and the requirements of its data storage solution. Transformation can involve standardizing (converting all data types to the same format), cleansing (resolving inconsistencies and inaccuracies), mapping (combining data elements from two or more data models), augmenting (pulling in data from other sources), and others. During this process, rules and functions are applied, and data cleansed to prevent including bad or non-matching data to the destination repository. Rules that could be applied include loading only specific columns, deduplicating, and merging, among others.

3. Loading, in which data is delivered and secured for sharing, making business-ready data available to other users and departments, both within the organization and externally. This process may include overwriting the destination’s existing data.

## SNOWFLAKE AND ETL
There are several potential points of failure during any ETL process. Snowflake eliminates the need for lengthy, risky, and often labor-intensive ETL processes by making data easily accessible for internal and external partners via secure data sharing and data collaboration.

That said, Snowflake supports both transformations during (extract, transform, load) or after loading (extract, load, transform). Snowflake works with a wide range of data integration tools, including Informatica, Talend, Tableau, Matillion, and others.

In data engineering, new tools and self-service pipelines eliminate traditional tasks such as manual ETL coding and data cleaning companies. Snowpark is a developer framework for Snowflake that brings data processing and pipelines written in Python, Java, and Scala to Snowflake's elastic processing engine. Snowpark allows data engineers, data scientists, and data developers to execute pipelines feeding ML models and applications faster and more securely in a single platform using their language of choice. 

With easy ETL or ELT options via Snowflake, data engineers can instead spend more time working on critical data strategy and pipeline optimization projects. In addition, with the Snowflake Cloud Platform as your data lake and data warehouse, extract, transform, load can be effectively eliminated, as no pre-transformations or pre-schemas are needed.