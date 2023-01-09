---
title: The Web3 Developer Stack
description: The Web3 Developer Stack
---

# The Web3 Developer Stack

https://www.coinbase.com/blog/a-simple-guide-to-the-web3-developer-stack

https://twitter.com/jonathankingvc/status/1565344771501019136

https://www.coinbase.com/blog/a-simple-guide-to-the-web3-stack

In this edition of Around The Block, we’ll explore the growing web3 developer stack.

### The Web3 Developer Stack

![The Web3 Developer Stack](https://images.ctfassets.net/c5bd0wqjc7v0/2vS2fgIKZ0coCQqqAbaJhV/358828cf2260f335c2d1c2badca3bc79/1_6WODdXVLk5c3ZRRyF8S98g.png)

### Building in Web2 vs Web3

Software development is the process of building computer programs. There are three main components to a given program:

1. The front-end (what users interact with)
2. The back-end (what users don’t see)
3. Database (where critical data is stored)

The front-end that a typical user interacts with through a mobile or desktop browser is basically the same in web2 and web3. A web3 app like Uniswap looks similar to a typical web2 app because both front-ends are mostly created using React — a popular developer framework for web and mobile apps.

![Uniswap app](https://images.ctfassets.net/c5bd0wqjc7v0/3L3GfpD8ucFYUO0sEhw0Qw/32fcd69bbee52e8cec3d7daa686293d0/1_lMnDLgwcEguhzYST1QSwJQ.png)

It’s under the hood where web2 and web3 differ. The backend frameworks and *types* of databases that make web3’s defining characteristic — user-defined **ownership —** possible are new and unique.

Where web2 applications largely rely on centralized databases, web3 applications are built on decentralized databases (blockchains). This requires entirely new backends and new primitives like wallets.

The tools that aid in the creation, deployment, and maintenance of web2 applications are incredibly developer-friendly, thanks to decades of cumulative development. Out of the box solutions, mature infrastructure, shared code libraries, and easy to use frameworks largely make building in web2 a breeze.

Web3 on the other hand still requires specialized expertise to interface with complex infrastructure and commonly involves many redundant processes given that the stack is less developed, leaving teams to have to reinvent the wheel. That said, the tooling that will help onboard the next 1M+ web3 developers is rapidly improving.

Let’s take a (non-exhaustive) look at the evolving Web3 developer stack layer by layer (* denotes Coinbase Ventures portfolio company).

## Protocol layer

![Protocol layer](https://images.ctfassets.net/c5bd0wqjc7v0/5xCETj39oBbESp0qYK6fBJ/781334af329ddeadd2515152426b4cdf/1_ngqel2kCbfpPAy9lQBPdPQ.png)

The first decision a web3 developer has to make is *which* blockchain protocol to build on. Building on Bitcoin is entirely different from building on Ethereum, and Solana differs from Ethereum, etc.

For faster and lower-cost applications, developers might want to build on a layer2 protocol — [Optimism](https://www.optimism.io/)*, [Arbitrum](https://bridge.arbitrum.io/)*, etc. For applications that need to port value from one chain to another, developers will want to leverage cross-chain bridges like [Hop*](https://hop.exchange/) or [Synapse](https://synapse.network/)*.

Once these decisions are made, developers can start to incorporate building blocks that make user applications possible.

## Infrastructure primitives

![Infrastructure primitives](https://images.ctfassets.net/c5bd0wqjc7v0/2wqsbTN32sztXK3gTf7Gl7/7c948239eaa414cc6b02f674c8a3a03c/1_qkIwrAktcnbgrcG_kUtMdw.png)

The next thing a developer needs to figure out is *how* their application will ultimately interact with the underlying blockchains. This is where infrastructure primitives come into play.

***Node infrastructure —\*** Nodes are where an app’s interaction with a blockchain “happens.” They’re computers that read the state of the blockchain and write updates to it once a user interacts with an application. Node infrastructure providers like [Coinbase Cloud](https://www.coinbase.com/cloud), [Infura](https://infura.io/)*, and [Alchemy](https://www.alchemy.com/)* let developers easily set-up, manage, or access blockchain nodes, saving developers considerable time and resources.

***Wallet & Key Management —\*** Blockchain wallets, like [Coinbase Wallet](https://www.coinbase.com/wallet), allow users to manage the private keys needed to perform transactions within web3 applications. Wallet and key management providers like [Web3Auth](https://web3auth.io/)* or [Pine Street Labs](https://www.pinestreetlabs.com/)*, enable developers to build secure connectivity between blockchain wallets and user-facing applications.

**Identity** — protocols like [ENS](https://ens.domains/)* serve as a user’s identity across applications. [Spruce](https://www.spruceid.com/)* provides frameworks and toolkits that developers can use to verify user credentials to authenticate actions on Ethereum. For example, developers can use the Spruce ID toolkit to empower users to sign into apps with their ENS accounts. Additionally, companies like [Lit Protocol](https://litprotocol.com/) provide developer tooling for granting access to content, software, and other data utilizing their tokens or NFTs.

***Decentralized compute —\*** Compute resources provide processing power that applications rely on to carry out computational tasks. Currently, most of the web’s compute is provided by centrally owned providers like AWS. Decentralized compute is a shift towards community-owned networks, in which compute resources are distributed in a permissionless manner at low-cost. Companies like [Akash Network](https://akash.network/) and [Aleph.im](https://aleph.im/#/) have emerged to provide peer-to-peer compute resources that are highly-performant and optimized for smart contracts and blockchain applications.

***Decentralized storage —\*** Storing every piece of data associated with a given web3 app directly on blockchain nodes is costly. Rather than storing data on a centralized database, web3 developers can use peer-to-peer data storage protocols like [IPFS](https://ipfs.io/), [Arweave](https://www.arweave.org/)*, and [Ceramic Network](https://ceramic.network/)* for certain data. For example, web3 blogging site Mirror is built on Ethereum, but stores actual blog content on Arweave.

***Oracles —\*** For a typical Ethereum application, the blockchain stores transaction history and “state” (balances, smart contracts, and other variables). It can’t, however, natively store and interact with data from external sources — i.e. transaction history from other blockchains or “real world” data like the weather in San Francisco. That’s where oracles like [Chainlink](https://chain.link/) or [Flux](https://www.fluxprotocol.org/)*come in, connecting blockchains to on-chain and off-chain data sources.

**Interoperability** — many different blockchains exist but few have the ability to exchange value and make use of information cross-chain. Interoperability protocols like [LayerZero](https://layerzero.network/)*, [Axelar Network*](https://axelar.network/), and [Astar Network](https://astar.network/)* provide SDKs and APis for developers to build apps that are portable and can communicate with different blockchains.

## Developer tools

![Developer tools](https://images.ctfassets.net/c5bd0wqjc7v0/4l4jJJ2hnnOtyRPd6ZewmS/2704bfc6e5ff245f0d0569ab5251cf9a/1_alX6EeTuQRi12RKbKx1Icg.png)

Atop the infrastructure primitives that allow applications to interact with blockchain networks are tools that allow developers to more seamlessly interact with the above-named primitives.

***Frameworks & IDEs —\*** Developer frameworks consist of libraries of code that other developers have created that make development easier. Web3 frameworks like [Truffle](https://trufflesuite.com/), [Moralis](https://moralis.io/)*, [Tatum](https://tatum.io/), and [ThirdWeb](https://thirdweb.com/)*, let developers leverage existing code for smart contract applications so they don’t have to build everything from scratch. They also let developers test and deploy applications. Integrated development environments (IDEs) like [Foundry](https://github.com/foundry-rs/foundry) and [HardHat](https://hardhat.org/) combine common source code editors, and build automation and debugging tools into a single, easily accessible interface.

***Low-code / No-code\*** **—** These platforms enable user-facing applications to be quickly designed/deployed entirely via drag-and-drop interfaces. Companies like [Settlemint](https://www.settlemint.com/?hsLang=en) provide developers with smart contract templates for NFTs to prevent web3 developers from having to reinvent the wheel.

***Index & query\*** **—** Data indexers help people locate and access specific data within an underlying database. In Web2, Google search is the most popular data indexing service that allows users to query data stored in online databases with sub-second response times. In Web3, decentralized indexing services are emerging to help app developers fetch, process, and query blockchain data. [The Graph Protocol](https://thegraph.com/en/)*, [Covalent](https://www.covalenthq.com/)*, and [Coherent](https://coherent.sh/)* all provide APIs for extracting and making use of data from decentralized data storage providers and EVM-compatible blockchains.

***Test, simulate, & monitor —\*** It’s important to test and simulate web3 applications before they’re released into the wild. Companies like [Tenderly](https://tenderly.co/)* and [Kurtosis](https://www.kurtosis.com/)* offer a variety of tools for simulating how smart contracts and transactions will behave once live, as well as tools for debugging any issues. [Blocknative](https://www.blocknative.com/)* provides dashboards and tools for monitoring transactions before they are submitted on-chain.

***Security & audit\*** **—** Given the potential for smart contract exploits, these platforms let developers apply security and audit best practices to their applications. [OpenZeppelin](https://www.openzeppelin.com/), [Forta](https://forta.org/)*, [Certik](https://www.certik.com/)*, and [Certora](https://www.certora.com/)* all provide a variety of services, frameworks, and monitoring tools for developers to mitigate potential security risks and vulnerabilities.

***Messaging\*** **—** Web3 apps often involve sending various communications to end users. For example, a crypto wallet may want to push a user alerts regarding transaction confirmations. Companies like [XMTP Labs](https://xmtp.com/)* and [EPNS](https://epns.io/) are building secure messaging protocols and decentralized communication networks that drive user engagement and power these notifications within Web3 applications.

***Analytics —\*** There’s a host of platforms and services that let developers explore, analyze, extract, and visual blockchain data. [Dune](https://dune.com/browse/dashboards)*, [Nansen](https://www.nansen.ai/)*, and [Messari](https://messari.io/)* each offer a variety of APIs and reporting capabilities to build data visualization features within web3 apps. [Flipside Crypto](https://flipsidecrypto.xyz/)* offers SDKs (software development kits) and APIs to create and share data insights on various crypto projects.

## App Enablement Layer

![App Enablement Layer](https://images.ctfassets.net/c5bd0wqjc7v0/3yUxJ3keyqxgDs8JlMoiQV/b0bda01554a983b8d84ba22a8ce33f3c/1_J38n6Qajo9nx0mcCWd2bYA.png)

App Enablement LayerThe application enablement layer ties all of the above layers into specific web3 uses. NFTs, DAOs, DeFi, and gaming each have their own bespoke developer solutions.

NFT focused tools offer infrastructure for creating and managing NFT assets. DAO tools offer solutions for DAO creation ([Syndicate](https://syndicate.io/)*, [Samudai](https://samudai.xyz/)*), governance ([Snapshot](https://snapshot.org/#/)*), and treasury management ([Utopia Labs](https://www.utopialabs.com/)*). DeFi focused tools offer APIs that let developers access various DeFi primitives. Gaming focused tools ( [Venly](https://www.venly.io/)*, [Joyride](https://www.onjoyride.com/)*, [Horizon Blockchain Games](https://horizon.io/)*) provide solutions for creating virtual worlds and blockchain based games.

### The ever-evolving dev stack

The protocols, infrastructure, and developer tools mentioned above make up the nascent, yet evolving web3 developer stack. The modular and interoperable nature of web3 means that the stack can be combined in endless ways to create new and interesting applications.

While the framework and layers we highlighted will likely remain unchanged, we continue to see new developer tooling primitives emerge and expect the entire stack to evolve dramatically in the coming years.

Coinbase Ventures will continue to invest in the next generation of platform and developer tooling that will ultimately onboard millions of developers into web3. If you’re as dedicated to building out the web3 dev stack as we are, we would love to hear from you — [JK’s DMs are open!](https://twitter.com/jonathankingvc)
