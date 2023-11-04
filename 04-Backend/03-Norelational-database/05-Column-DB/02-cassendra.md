[website](https://cassandra.apache.org/_/index.html)
### STEP 1: GET CASSANDRA USING DOCKER
You’ll need to have Docker Desktop for Mac, Docker Desktop for Windows, or similar software installed on your computer.

Apache Cassandra is also available as a tarball or package download.
```
docker pull cassandra:latest
```
### STEP 2: START CASSANDRA
A Docker network allows us to access the container’s ports without exposing them on the host.
```
docker network create cassandra

docker run --rm -d --name cassandra --hostname cassandra --network 
cassandra cassandra
```
### STEP 3: CREATE FILES
The Cassandra Query Language (CQL) is very similar to SQL but suited for the JOINless structure of Cassandra.

Create a file named data.cql and paste the following CQL script in it. This script will create a keyspace, the layer at which Cassandra replicates its data, a table to hold the data, and insert some data into that table:
```
-- Create a keyspace
CREATE KEYSPACE IF NOT EXISTS store WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' };

-- Create a table
CREATE TABLE IF NOT EXISTS store.shopping_cart (
userid text PRIMARY KEY,
item_count int,
last_update_timestamp timestamp
);

-- Insert some data
INSERT INTO store.shopping_cart
(userid, item_count, last_update_timestamp)
VALUES ('9876', 2, toTimeStamp(now()));
INSERT INTO store.shopping_cart
(userid, item_count, last_update_timestamp)
VALUES ('1234', 5, toTimeStamp(now()));
```
### STEP 4: LOAD DATA WITH CQLSH
The CQL shell, or cqlsh, is one tool to use in interacting with the database. We’ll use it to load some data into the database using the script you just saved.
```
docker run --rm --network cassandra -v "$(pwd)/data.cql:/scripts/data.cql" -e CQLSH_HOST=cassandra -e CQLSH_PORT=9042 -e CQLVERSION=3.4.6 nuvo/docker-cqlsh
```
Note: The cassandra server itself (the first docker run command you ran) takes a few seconds to start up. The above command will throw an error if the server hasn’t finished its init sequence yet, so give it a few seconds to spin up.

### STEP 5: INTERACTIVE CQLSH
Much like an SQL shell, you can also of course use CQLSH to run CQL commands interactively.
```
docker run --rm -it --network cassandra nuvo/docker-cqlsh cqlsh cassandra 9042 --cqlversion='3.4.5'
```
This should get you a prompt like so:
```
Connected to Test Cluster at cassandra:9042.
[cqlsh 5.0.1 | Cassandra 4.0.4 | CQL spec 3.4.5 | Native protocol v5]
Use HELP for help.
cqlsh>
```
### STEP 6: READ SOME DATA
```
SELECT * FROM store.shopping_cart;
 ```
### STEP 7: WRITE SOME MORE DATA
```
INSERT INTO store.shopping_cart (userid, item_count) VALUES ('4567', 20);
```
### STEP 8: CLEAN UP
```
docker kill cassandra
docker network rm cassandra
```
