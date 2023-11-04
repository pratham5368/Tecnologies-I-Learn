## CQRS
CQRS, or command query responsibility segregation, defines an architectural pattern where the main focus is to separate the approach of reading and writing operations for a data store. CQRS can also be used along with Event Sourcing pattern in order to persist application state as an ordered of sequence events, making it possible to restore data to any point in time.

### Solution
CQRS separates reads and writes into different models, using commands to update data, and queries to read data.

Commands should be task-based, rather than data centric. ("Book hotel room", not "set ReservationStatus to Reserved").
Commands may be placed on a queue for asynchronous processing, rather than being processed synchronously.
Queries never modify the database. A query returns a DTO that does not encapsulate any domain knowledge.