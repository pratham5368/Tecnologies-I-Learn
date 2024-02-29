## Consensus protocols
Consensus for blockchain is a procedure in which the peers of a Blockchain network reach agreement about the present state of the data in the network. Through this, consensus algorithms establish reliability and trust in the Blockchain network.

Consensus is the process by which a group of peers — known as ‘nodes’ — on a network determine which blockchain transactions are valid and which are not. Consensus mechanisms are the methodologies used to achieve this agreement. It’s these sets of rules that help to protect networks from malicious behaviour and hacking attacks. 

[](https://contenthub-static.crypto.com/cdn-cgi/image/width=800,quality=75/wp_media/2023/03/Consensus-Mechanisms-in-Blockchain_Infographic_Mar14.jpeg)


## Proof of Work (PoW)
Used by Bitcoin and many other public blockchains, Proof of Work (PoW) was the very first consensus mechanism created. It is generally regarded as the most reliable and secure of all the consensus mechanisms, though concerns over scalability are rife. While the term ‘proof of work’ was first coined in the early 1990s, it was Bitcoin founder Satoshi Nakamoto who first applied the technology in the context of digital currencies. 

In PoW, ‘miners’ essentially compete against one another to solve extremely complex computational puzzles using high-powered computers. The first to come up with the 64-digit hexadecimal number (‘hash’) earns the right to form the new block and confirm the transactions. The successful miner is also rewarded ​​with a predetermined amount of crypto, known as a ‘block reward’. 

As it requires large amounts of computational resources and energy in order to generate new blocks, the operating costs behind PoW are notoriously high. This acts as a barrier of entry for new miners, leading to concerns about centralisation and scalability limitations.

But it’s not just the costs that are high. The most common criticism of PoW is the impact the electrical consumption has on the environment. This has led many to seek more sustainable, energy-efficient consensus protocols, such as Proof of Stake (PoS).

## Proof of Stake (PoS)
As the name suggests, this popular method of consensus revolves around a process known as ‘staking‘. In a Proof of Stake (PoS) system, ‘validators’ pledge a stake of digital currency for a chance to be randomly chosen to validate a block, which earns them a reward. The process is not unlike a lottery, whereby the more coins staked, the better the odds. 

Unlike in PoW, where miners are incentivised by block rewards (newly generated coins), those who contribute to the PoS system simply earn a transaction fee. 

PoS is seen as a more sustainable and environmentally friendly alternative to PoW, and one that’s more secure against 51% attacks. However, as the system favours entities with a higher number of tokens, PoS has drawn criticism for its potential to lead to centralisation. Prominent PoS platforms include Ethereum — which transitioned from PoW to PoS in 2022 — Cardano (ADA), Solana (SOL), and Tezos (XTZ).

## Delegated Proof of Stake (DPoS)
A modification of the PoS consensus mechanism, Delegated Proof of Stake (DPoS) relies upon a reputation-based voting system to achieve consensus. Users of the network ‘vote’ to select ‘witnesses’ (also known as ‘block producers’) to secure the network on their behalf. Only the top tier of witnesses (those with the most votes) earn the right to validate blockchain transactions. 

To vote, users add their tokens to a staking pool. Votes are then weighted according to the size of each voter’s stake — the more skin in the game, the more voting power. Elected witnesses who successfully verify transactions in a block receive a reward, which is usually shared with those who voted for them. 

Witnesses in the top tier are always at risk of being replaced by those deemed more trustworthy, who get more votes. They can even be voted out if they fail to fulfil their responsibilities or try to validate fraudulent transactions. This helps to incentivise witnesses to remain honest at all times, ensuring the integrity of the blockchain.

Though less prevalent than PoS, DPoS is regarded by many as being more efficient, democratic, and financially inclusive than its predecessor. It is used by Lisk (LSK), EOS.IO (EOS), Steem (STEEM), BitShares (BTS), and Ark (ARK). 

## Proof of Activity (PoA)
Proof of Activity (PoA) is a hybrid of the PoW and PoS consensus mechanisms. It is used by the Decred (DCR) and Espers (ESP) blockchain projects.

In PoA systems, the mining process begins like PoW, with miners competing to solve an elaborate mathematical problem using immense computing power. Once the block is mined, however, the system switches to resemble PoS, with the successfully generated block header broadcast to the PoA network. A group of validators are then randomly selected to sign off on the hash, thus validating the new block. Like with PoS, the more crypto a validator holds, the higher their chances of being selected. Once every chosen validator has signed the block, it is added to the blockchain network and ready to record transactions. The block rewards are then shared amongst the successful miner and chosen validators.

Though the PoA system was designed with the intention of combining the very best features of PoW and PoS (while avoiding their shortcomings), it has drawn criticism for its energy-intensive mining phase and inherent partiality towards validators holding a greater number of coins.

## Proof of Authority (PoA)
Not to be confused with Proof of Activity (also ‘PoA’), Proof of Authority (PoA) works by selecting its validators based on reputation. A modified version of PoS, it was proposed by Ethereum co-founder and former CTO Gavin Wood in 2017. 

In Proof of Authority, validators don’t stake coins. Instead, they must put their reputations on the line for the right to validate blocks. This permissioned blockchain, which requires participants to identify themselves, is very different from the majority of blockchain protocols, which usually do not require a user to reveal their identity to take part.

As this mechanism requires almost no computing power, it is far less resource-intensive than some of its predecessors, in particular PoW. It is also one of the less costly options and heavily favoured for private networks, such as JPMorgan (JPMCoin). Other PoA-based projects include VeChain (VET) and Ethereum Kovan testnet.

Though highly scalable, it is compromised in the decentralisation area, as only a select few can participate in the network. Additionally, the requirement for validators to be identifiable also increases the risk of corruption and third-party manipulation.

## Proof of Burn (PoB)
Another more sustainable alternative to Bitcoin’s PoW algorithm is Proof of Burn (PoB), where miners gain the power to mine a block by ‘burning’ (destroying) a predetermined amount of tokens in a verifiable manner — namely, sending them to an ‘eater address’ where they cannot be recovered or spent. The more coins a miner burns, the greater their chances of being randomly selected.

Unlike in PoS, where miners are able to retrieve or sell their locked coins should they ever leave the network, burned coins are irretrievable. This method of requiring miners to sacrifice short-term wealth in order to gain the lifetime privilege of creating new blocks helps to encourage long-term commitment from miners. The act of burning coins also leads to coin scarcity, limiting inflation and driving up demand. 

Cryptocurrencies that use the PoB protocol include Slimcoin (SLM), Counterparty (XCP), and Factom (FCT).

## Proof of Capacity/Proof of Space (PoC/PoSpace)
Unlike the majority of its predecessors, which grant mining rights based on computational power or coins staked, Proof of Capacity (PoC) — also known as Proof of Space (PoSpace) — bases its mining algorithm on the amount of space available on a miner’s hard drive. 

In PoC, miners generate a list of all the possible hashes beforehand in a process called ‘plotting’. These plots are then stored on a hard drive. The more storage capacity a miner has, the more possible solutions; and the more solutions, the higher the chances of possessing the correct combination of hashes and winning the reward.

As it doesn’t require expensive or specialised equipment, PoC opens up opportunities for the average person to participate in the network. As such, it is a less energy-intensive and more decentralised alternative to some of the prevalent consensus mechanisms covered above. However, as of yet, not many developers have chosen to adopt the system, and there are concerns about its susceptibility to malware attacks. The mechanism is currently used by Signum (SIGNA) — formerly Burstcoin (BURST) — Storj (STORJ), and Chia (XCH).

## Proof of Elapsed Time (PoET)
Proof of Elapsed Time (PoET), generally used on permissioned blockchain networks, leverages trusted computing to enforce random waiting times for block construction. It was developed by Intel in early 2016, and is based on a special set of CPU instructions called Intel Software Guard Extensions (SGXs). 

A time-lottery-based consensus algorithm, PoET works by randomly assigning different wait times to every node in the network. During the waiting period, each of these nodes goes to ‘sleep’ for that specified duration. The first to wake up (that is, the one with the shortest waiting time) is awarded the mining rights. This randomisation guarantees that every participant is equally as likely to be the winner, ensuring fairness within the network.

The PoET consensus mechanism is highly efficient, less resource-intensive, and scalable. It has been implemented in Hyperledger’s Sawtooth.

## Proof of History (PoH)
As the name suggests, Proof of History (PoH) provides proof of historical events. Developed by Solana, PoH allows for ‘timestamps’ to be built into the blockchain itself, verifying the passage of time between transactions without having to rely on other nodes.

This timestamping method is enabled by what’s known as SHA-256, sequential-hashing Verifiable Delay Function (VDF). It works by taking the output of a transaction and using it as input for the next hash, which enables anyone to clearly see which event took place in a particular sequence. As the VDFs can only be solved by a single CPU score, PoH severely reduces the processing weight of the blockchain, making it faster and more energy-efficient than many of its contemporaries.

As PoH is only employed by Solana, it has yet to be tested on a large scale.

## Proof of Importance (PoI)
First introduced by NEM Network (XEM), Proof of Importance (PoI) selects its miners based on certain criteria in a process called ‘harvesting’. Common factors include the number and size of transactions in the previous 30 days, amount of vested currency, and network activity. Based on these factors, an importance score is attributed to nodes. The higher the score, the higher the probability of a node being chosen to harvest a block and receive the accompanying transaction fee.

Though similar to PoS, PoI’s use of additional metrics does away with the former’s tendency to inherently reward the rich by taking into account participants’ overall support of the network. As such, simply staking high in PoI does not necessarily guarantee a chance of winning the block.