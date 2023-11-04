## MD5
MD5 (Message-Digest Algorithm 5) is a hash function that is currently advised not to be used due to its extensive vulnerabilities. It is still used as a checksum to verify data integrity.

### Why is MD5 not secure?
1. Brute force attacks on MD5 hashes are fast
- A brute force attack is a way to find a password by trying many possibilities.
- Either by guessing what the user could have used (birthdate, the child’s names, pet names, …), or by trying everything (from a,b,c to 10 characters passwords with special characters).
2. MD5 dictionary tables are big
- As for the brute force method, the only way to be safe is to use a long random password with special characters.
- There are too many possibilities to have it in this kind of database.
- Database like this are taking a lot of disk space. Even if it’s cheaper and cheaper over the years, it’s still an obstacle.

3. MD5 has collisions
- The MD5 algorithm has also proven issues within its cryptographic method.
- A collision is when two words have the same hash generated.
- Safe algorithms have a good collision resistance.

## SHA family
SHA (Secure Hash Algorithms) is a family of cryptographic hash functions created by the NIST (National Institute of Standards and Technology). The family includes:

- SHA-0: Published in 1993, this is the first algorithm in the family. Shortly after its release, it was discontinued for an undisclosed significant flaw.
- SHA-1: Created to replace SHA-0 and which resembles MD5, this algorithm has been considered insecure since 2010.
- SHA-2: This isn’t an algorithm, but a set of them, with SHA-256 and SHA-512 being the most popular. SHA-2 is still secure and widely used.
-SHA-3: Born in a competition, this is the newest member of the family. SHA-3 is very secure and doesn’t carry the same design flaws as its brethren.

## Scrypt
Scrypt (pronounced “ess crypt”) is a password hashing function (like bcrypt). It is designed to use a lot of hardware, which makes brute-force attacks more difficult. Scrypt is mainly used as a proof-of-work algorithm for cryptocurrencies.

## Bcrypt
bcrypt is a password hashing function, that has been proven reliable and secure since it’s release in 1999. It has been implemented into most commonly-used programming languages.
