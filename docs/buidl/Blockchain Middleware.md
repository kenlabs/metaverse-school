---
title: Blockchain Middleware
description: Blockchain Middleware
---

# Blockchain Middleware 

TODO: https://metisdao.medium.com/blockchain-middleware-ccb41ded0fab



*Thanks to Protocol Labs researcher Alfonso de la Rocha for guest-writing this article. Check out his Medium channel at* [*https://adlrocha.medium.com/*](https://adlrocha.medium.com/)

Blockchain technology and decentralized finance (DeFi) have been all over the media in the past year. DeFi is completely changing the way we do finance, and there are more and more companies, big and small, exploring what DeFi can do for them.

Still, one of the big challenges that new DeFi or blockchain companies face is **the lack of engineering capacity with the wide range of expertise required to tackle a broad range of projects.**

Developing a decentralized application involves a number of steps: writing the smart contract that handles the decentralized logic of the application; deploying all the infrastructure required by end users to interact with the blockchain and the smart contract; building fancy UI to make the interaction with your application easy and appealing for users; and optionally, building tooling to allow others to build upon all your hard work. In short, **a long list of things to worry about and that requires several different engineering backgrounds.** This means that if you come up with a great idea for a decentralized application, you’d typically need to raise a ton of money to hire the wide range of developers required to build it?

Fortunately, this type of problem is becoming less common, thanks to a new innovation in the blockchain space: **blockchain middleware.**

## Introducing blockchain middleware

If you come from the IT world, you probably know all about middleware software. For those who are new to the concept, we find variations of the following definition: *“Middleware is software that provides common services and capabilities to applications outside of what’s offered by the operating system. Data management, application services, messaging, authentication, and API management are all commonly handled by middleware. Middleware helps developers build applications more efficiently. It acts like the connective tissue between applications, data, and users.”*

If we think of blockchain as the operating system of DeFi and the decentralized web, then the definition of blockchain middleware is quite straightforward: **it’s all that software that binds everything together (including software for communication, execution, and smart contract deployments)** to help developers build applications and interfaces faster, while leveraging blockchain in a flexible, safe, and effective manner.

If we depict the network stack of a decentralized application, blockchain middleware software sits between the applications’ interfaces, and the Layer 1 and/or Layer 2 of a blockchain network.

![img](https://miro.medium.com/max/60/0*jYKh-x7EpfSKFBXN)

![img](https://miro.medium.com/max/500/0*8DH9WUUGz6UTJkTx.png)

A good way to start grasping **the role middleware protocols can have for the blockchain ecosystem is to think about what HTTP did for the Internet.** HTTP can be thought of as a middleware protocol, as it abstracts from the low-level complexity of the underlying transport protocols (mainly TCP and IP), while offering an expressive and standard API to build any Internet application interface on top of it; this helped HTTP-enabled companies like Google, Amazon, and Facebook thrive.

Of course, these companies would probably have been able to succeed without HTTP, and they could have built their services directly on top of IP or TCP. But imagine if Jeff Bezos had been forced to invest a huge chunk of his resources into building expressive protocols over HTTP to build his online bookstore, instead of focusing on building his core business model. Amazon may have ran out of gas before becoming the juggernaut that it is today. Without middleware protocols, an API change may have required far more than the 30 minutes or so that it takes with them.

This is why **I think blockchain middleware can be huge for the ecosystem**. It can lower the barrier to entry of new players into the market, speeding up exploration cycles and accelerating innovation. The same way you can easily build a website without knowing anything about IP or TCP, blockchain middleware can enable developers to build new decentralized applications **without knowing \*anything\* about how to create a new blockchain transaction.**

## Different levels of middleware

Blockchain middleware sits between the low-level blockchain protocols (either L1 or L2), and the application interfaces. But among middleware software, we also see different types according to the level of abstraction they offer. We can divide blockchain middleware into:

- **Upper Middleware:** It abstracts end-users and developers from all the low-level details of the blockchain. This category comprises (i) smart contract development tools like [Truffle](https://www.trufflesuite.com/) or [Hardhat](https://hardhat.org/), which offer a smoother smart contract development process so you don’t have to worry about manually compiling or deploying smart contracts; (ii) interaction APIs that offer easy-to-use web APIs to deploy ERC20 tokens, send transactions to the blockchain, or interact with smart contracts without having to manually tailor transactions just by interacting with an HTTP API such as [TrustOS](https://trustos.readthedocs.io/en/latest/); or (iii) DeFi wallets such as Metamask.
- **Lower Middleware:** This type of middleware handles all infrastructure issues, so you don’t have to worry about deploying blockchain nodes, keeping them in sync, and enforcing their security. In this category of middleware, we find services like [Infura](https://infura.io/), which deploys a pool of Ethereum nodes and offers a simple web API to interact with them. Infura is responsible for the maintenance and SLA of your blockchain nodes, and enables you to easily interact with the blockchain (in the case of Infura, the Ethereum mainnet) by sending calls to a web API.
- **Protocol Middleware:** This is the next level of blockchain middleware. This category comprises different decentralized protocols built on top of L1 and L2 **to enhance the core functionalities of the blockchain** (my personal favorite). A good example of protocol middleware is [The Graph Network](https://thegraph.com/). The Graph Network is an open network that is continuously indexing data stored in different decentralized networks (like Ethereum and IPFS) to make it queryable by external applications. It offers an interface to query data stored on-chain in these networks. This is a great example of the kinds of benefits middleware provides for developers: if a decentralized application needs to query data on-chain, using The Graph means that a development team won’t have to worry about building a system to query and index on-chain data. It can instead directly leverage The Graph, and thus focus on solving core problems instead.

If you look at the basic architecture of The Graph below, you see that it sits on top of L1 networks, and offers an API for consumers and applications (i.e. between the network layer and the application interface). This is pure middleware!

![img](https://miro.medium.com/max/60/0*C2ingjrUwINh3w_B)

![img](https://miro.medium.com/max/700/0*mOyroG89QG4_F7NE.png)

## Deep dive into a middleware platform

Now we know what blockchain middleware is, and we’ve reviewed some examples of middleware services according to the abstractions and problems they solve. In this section, I want to dive deeper into a recently released middleware platform called [Metis Polis](https://docs.metis.io/polis) to wrap up my illustration of how blockchain middleware could be huge for the future of this technology.

[**Metis Polis**](https://polis.metis.io/) **is a middleware platform to manage your deployed smart contracts.** The reason why I call Polis a middleware platform is because it aggregates several of the middleware services that every developer has been using to build smart contracts. It offers everything you need to ease the management, maintenance, and interaction of smart contracts. No more worrying about tailoring low-level transactions to your smart contracts, and having to host your own node to interact with the network.

Polis middleware can be divided into these different services:

## Smart Contract Domain Service

The address of a smart contract deployed over the Ethereum network is a long string of numbers and letters that looks something like this: *0xd76b5c2a23ef78368d8e34288b5b65d616b746ae.* You need to remember this address to interact with the contract’s logic. Even more, if your decentralized application leverages several smart contracts for its operation, this means remembering more than one of these intelligible strings. In the Web 2.0 world, this means having to remember by heart the IP of the servers an application interacts with. **Polis’s domain service solves this problem, by building a “DNS for smart contracts”.** It allows developers to create a domain to associate with a smart contract address, so that anyone who wants to interact with the smart contract can do so without having to know its address. With this feature, companies like Twitter could deploy their own smart contract and make it available to the general public through, say, *twitter.metis* instead of *0xd76b5c2a23ef78368d8e34288b5b65d616b746ae.*

Polis’s smart contract domain service is a protocol middleware that can be seen as **an alternative to the** [**Ethereum Naming Service**](https://docs.ens.domains/) **(ENS).** It supports domain updates so that the domain owner can point to a different url. Domains are managed by a smart contract to enable domains to point to different urls, and for smart contracts to be able to call methods based on the domain as well. It also enables a domain marketplace where people can trade domains. *(So go get your own Metis domain name before someone else takes it… actually I should do this myself, right now!)*

## Application Management

O**ne of the big barriers for the adoption of decentralized applications is identity management.** Wallets are improving their UX, and DApps are becoming increasingly easier to use. Still, the fact that users are responsible for their keys and transactions need to be signed using these keys is a burden for many users — particularly people who are new to blockchain.

Polis’s solution to this issue is **an upper-level middleware application manager that offers an authentication service to help app developers manage user access** without worrying about wallet integration. Web 2.0 users and Web 3.0 newbies are typically not comfortable using a pair of cryptographic keys, and are more used to using passwords and authentication tokens. With Polis middleware, developers are able to generate new users for their applications, authenticated with traditional schemes, so they don’t have to worry about managing a cryptographic key pair.

## Smart Contract API Service

If you recall from my description of upper-level middleware, one of the common forms of middleware from this category is abstraction APIs that enable the interaction and sending of transactions to the blockchain without having to manually tailor low-level transactions or having to learn the low-level Web3 API magic to send transactions to the blockchain. Polis’s smart contract API service solves this exact problem. **It provides a web API to seamlessly authenticate and send transactions to any smart contract using HTTP**, without having to worry about using a blockchain client to send these transactions. Web 2.0 developers are used to using REST APIs, so in order to bring more Web 2.0 innovators to the blockchain space, we need to speak their language. This will also enable companies to kick off their blockchain projects without having blockchain experts in their teams — saving weeks of recruitment time and hundreds of thousands of dollars (or more!) in hiring budgets.

![img](https://miro.medium.com/max/60/0*J6yEE_7oJidu8ia3)

![img](https://miro.medium.com/max/700/0*Ny7QZ2BDYBIqJcW6.png)

## Transaction Management and Monitoring

Polis provides a built-in explorer for your smart contracts. No need to use any of the public explorers. Instead, the Polis dashboard enables you to **track all of the token transfers and transactions handled by your smart contracts.** This is a great example of how projects are trying to aggregate all the tools needed by users and developers in the same place, making the commodities easier to use. Right now, the only tools developers have to track the activity of their smart contracts are public explorers. If they want to track the activity of all the smart contracts within their application, they need to build their own tool, or make dedicated queries for each smart contract. With Polis’s transaction manager, **all the transactions for an application can be checked in the same place, even if it comprises several smart contracts.**

But Polis not only displays the information about transactions shown by classic explorers. It also includes a monitoring and alerting middleware that allows developers to track additional information about the activity of their smart contracts, such as:

- Total number of transactions
- Number of transactions per application
- Transaction trend
- Geographical area where the user triggered the transaction
- Total Tokens that were transferred
- Total tokens transferred per application

Collectively, this adds up to everything needed to gather metrics from the use of the application at a smart contract level. Measuring decentralized application is not easy, because there is no central infrastructure orchestrating the whole operation of the system — and we can’t improve what we can’t measure. Polis makes it significantly easier to gather metrics about our decentralized applications, so that we can improve them.

![img](https://miro.medium.com/max/60/0*dT6HbObiBp2GoOUO)

![img](https://miro.medium.com/max/700/0*U3jmpBNSbn7sakta.png)

I chose Polis to illustrate the power of blockchain middleware because it aggregates services from the different categories described above: **from upper-level middleware like the smart contract API service to low-level middleware like the Application Manager, and protocol middleware such as the smart contract domain service.** If you want to try all of these services yourself, check out this[ tutorial](https://middlewaredocs.metis.io/), which walks you through the use of different Polis services over testnet (no need for real Ether to perform transactions).

## Lowering the barriers for innovation and adoption

To summarize, **I believe that blockchain middleware will lower the barriers for innovation and adoption in the blockchain world.** By abstracting from the low-level complexities of blockchain technology, DApps will become more user-friendly, while engineers with different backgrounds and from other fields will be able to build decentralized services themselves, with little to no blockchain expertise. **And all this while we invest on making the Internet more decentralized and open for everyone.**

I can’t wait to see the great ideas that people from other fields and without blockchain expertise come up with once they start building their services by leveraging middleware software. Is the next Google or Amazon coming from the blockchain space? We’ll see. What is clear is that the future looks bright!
