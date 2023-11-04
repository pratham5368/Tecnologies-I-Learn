/*Most operators that can be used with the Number data type will also work with BigInt values (e.g. arithmetic, comparison, etc.). However, the unsigned right shift >>> operator is an exception and is not supported. Similarly, some operators may have slight differences in behaviour (for example, division with BigInt will round towards zero). */
// BigInt addition
const a = 1n + 2n; // 3n
// Division with BigInts round towards zero
const b = 1n / 2n; // 0n
// Bitwise operations with BigInts do not truncate either side
const c = 40000000000000000n >> 2n; // 10000000000000000n
