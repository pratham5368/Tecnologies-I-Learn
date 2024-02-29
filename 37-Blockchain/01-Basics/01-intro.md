## Blockchain
A blockchain is a decentralized, distributed, and oftentimes public, digital ledger consisting of records called blocks that is used to record transactions across many computers so that any involved block cannot be altered retroactively, without the alteration of all subsequent blocks.

![](https://markpetherbridge.co.uk/img/an-elementary-and-slightly-distilled-introduction-to-blockchain/blockchain-blocks-single.png)

## Transaction Process
Transactions follow a specific process, depending on the blockchain they are taking place on. For example, on Bitcoin's blockchain, if you initiate a transaction using your cryptocurrency wallet—the application that provides an interface for the blockchain—it starts a sequence of events.

In Bitcoin, your transaction is sent to a memory pool, where it is stored and queued until a miner or validator picks it up. Once it is entered into a block and the block fills up with transactions, it is closed and encrypted using an encryption algorithm. Then, the mining begins.

![](https://www.investopedia.com/thmb/dERboL3dYS7NCsTY5NgB6b8thIQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_Blockchain_Sep_2020-01-60f31a638c4944abbcfde92e1a408a30.jpg)

## Blockchain Decentralization
A blockchain allows the data in a database to be spread out among several network nodes—computers or devices running software for the blockchain—at various locations. This not only creates redundancy but maintains the fidelity of the data. For example, if someone tries to alter a record at one instance of the database, the other nodes would prevent it from happening. This way, no single node within the network can alter information held within it.

Because of this distribution—and the encrypted proof that work was done—the information and history (like the transactions in cryptocurrency) are irreversible. Such a record could be a list of transactions (such as with a cryptocurrency), but it also is possible for a blockchain to hold a variety of other information like legal contracts, state identifications, or a company’s inventory.


### The Block Data
The data in a blockchain all depends on what type of blockchain there is (yes there are different types of blockchain, and not to send you down a rabbit hole but there is also something called the Tangle which is a form of DAG Technology 
![](https://markpetherbridge.co.uk/img/an-elementary-and-slightly-distilled-introduction-to-blockchain/blockchain-block-data.png)

On a side note about the Tangle. IOTA - the cryptocurrency that utilises the Tangle is one that I am very 'Bullish' on as I think it is a revolutionary and forward thinking approach to M2M (Machine to Machine) transactions and the entire future of the M2M economy. I wrote a quick and easy to follow How to buy IOTA guide if you are interested.

Before we get too sidetracked let's get back to Blockchain data. So, let's assume we have the Bitcoin Blockchain. The data that is stored in there will be The Sender, The Receiver and The Amount

### Blockchain Single Bitcoin Block

### The Block Hash
The block will also contain a Hash. The Bitcoin blockchain uses the SHA-256 Hash Algorithm [7]. When the block is created, the data is taken and the hash is calculated from that Data. This process is called cryptography. Because the hash will be unique to the block and the data inside, it can be treated as and is often referred to as a "digital fingerprint".
Bitcoin Blockchain Hash Example
### Previous Block Hash
The block also contains the hash of the previous block and it is this which creates the chain. It is also this which is integral to the security of the blockchain.
Bitcoin Blockchain Previous Hash Example
Genesis Block
Some of you might have just figured out that the previous hash cannot infinitely go backwards as there must be a starting point and you're right. Block 0 or sometimes called block 1 is known as the Genesis Block.

![](https://markpetherbridge.co.uk/img/an-elementary-and-slightly-distilled-introduction-to-blockchain/blockchain-send-and-receive.png)

![](https://d32myzxfxyl12w.cloudfront.net/assets/images/article_images/ab30283ad3a97d3fafe6f3fd7dd65735042900eb.webp?1702474530)

The structure of blockchain technology is represented by a list of blocks with transactions in a particular order. These lists can be stored as a flat file (txt. format) or in the form of a simple database. Two vital data structures used in blockchain include:

- Pointers - variables that keep information about the location of another variable. Specifically, this is pointing to the position of another variable.

- Linked lists - a sequence of blocks where each block has specific data and links to the following block with the help of a pointer.


![](https://d32myzxfxyl12w.cloudfront.net/assets/images/article_images/b91425ba87b8dd2defbefed0dde61e57cf4afa6f.webp?1702474502)

These are the core blockchain architecture components:

- Node - user or computer within the blockchain architecture (each has an independent copy of the whole blockchain ledger)
- Transaction - smallest building block of a blockchain system (records, information, etc.) that serves as the purpose of blockchain
- Block - a data structure used for keeping a set of transactions which is distributed to all nodes in the network
- Chain - a sequence of blocks in a specific order
- Miners - specific nodes which perform the block verification process before adding anything to the blockchain structure
- Consensus (consensus protocol) - a set of rules and arrangements to carry out blockchain operations

- Previous block hash: This value implements the “chains” in blockchain. More on it in a later section
- Timestamp: This indicates roughly when a block was created. It is used by smart contracts that depend on timestamps and to determine how well the current average rate of block creation matches the target value
- Transaction root: This value summarizes the contents of the block’s body. It helps to ensure that the transactions that the block contains benefit from the same integrity protections as the block header
- Nonce: This is a random value controlled by the block creator. It is used in the Proof of Work consensus algorithm to change the hash of the block header. In Proof of Work, only a block with a header value less than a certain threshold is considered valid


Blockchain architecture possesses a lot of benefits for businesses. Here are several embedded characteristics:

- Cryptography - blockchain transactions are validated and trustworthy due to the complex computations and cryptographic proof among involved parties

- Immutability - any records made in a blockchain cannot be changed or deleted

- Provenance - refers to the fact that it is possible to track the origin of every transaction inside the blockchain ledger

- Decentralization - each member of the blockchain structure has access to the whole distributed database. As opposed to the central-based system, consensus algorithm allows for control of the network

- Anonymity- each blockchain network participant has a generated address, not user identity. This keeps users' anonymity, especially in a public blockchain structure

- Transparency - the blockchain system cannot be corrupted. This is very unlikely to happen, as it requires huge computing power to overwrite the blockchain network completely

[more information](https://markpetherbridge.co.uk/blog/an-elementary-and-slightly-distilled-introduction-to-blockchain/)

[how blockchain works](https://www.youtube.com/watch?v=bBC-nXj3Ng4)