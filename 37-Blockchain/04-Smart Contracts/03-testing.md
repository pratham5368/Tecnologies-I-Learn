## Testing
Testing smart contracts is one of the most important measures for improving smart contract security. Unlike traditional software, smart contracts cannot typically be updated after launching, making it imperative to test rigorously before deploying contracts onto mainnet.

### There are two general types of software test: unit tests and integration tests.
- Unit tests focus on each function in isolation.
- Integration tests focus on ensuring multiple parts of the code work together as expected.

![](https://archive.is/jnwEu/c9400a66222c1b4c4d86af16538cb8311561ed83.webp)

## Solidity tests
Writing tests in Solidity gives us the ability to run Blockchain layer tests. They allow tests to call contracts and functions as if they were on the Blockchain themselves. To test the internal behaviour of smart contracts we can:
- Write unit tests to check function return values and state variable values.
- Write integration tests that test the interactions between contracts. These ensure that mechanisms such as inheritance and dependency injection are functioning as expected.

[testing practice](https://docs.openzeppelin.com/learn/writing-automated-tests)

