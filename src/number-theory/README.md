# Number Theory

Mathematics concerned with properties and relationships of integers, primes, divisibility, and modular arithmetic.

---

## Current Implementations

### `primes.ts`
- `isPrime(n)` - Primality test using 6k±1 optimization

### `core.ts`
- `gcd(a, b)` - Greatest Common Divisor (planned)
- `lcm(a, b)` - Least Common Multiple (planned)

---

## Roadmap

### Divisibility
- [ ] **Greatest Common Divisor**: `gcd(a, b)` - Euclid's algorithm
- [ ] **Least Common Multiple**: `lcm(a, b)` - lcm(a,b) = |ab|/gcd(a,b)
- [ ] **Extended GCD**: `extendedGcd(a, b)` → {gcd, x, y} where ax + by = gcd
- [ ] **Divisors**: `getDivisors(n)` - all divisors of n
- [ ] **Number of divisors**: `tau(n)` - count of divisors
- [ ] **Sum of divisors**: `sigma(n)` - sum of all divisors
- [ ] **Perfect numbers**: check if n = σ(n) - n

### Prime Numbers
- [x] **Primality test**: `isPrime(n)` - 6k±1 optimization
- [ ] **Prime factorization**: `primeFactorization(n)` → [(p₁, e₁), (p₂, e₂), ...]
- [ ] **Sieve of Eratosthenes**: `sieveOfEratosthenes(n)` → primes up to n
- [ ] **nth prime**: `nthPrime(n)` - find the nth prime number
- [ ] **Prime counting**: `pi(n)` - count primes ≤ n
- [ ] **Next prime**: `nextPrime(n)` - smallest prime > n
- [ ] **Twin primes**: check if (p, p+2) are both prime
- [ ] **Mersenne primes**: primes of form 2^p - 1
- [ ] **Fermat primality test**: probabilistic test
- [ ] **Miller-Rabin**: stronger probabilistic test

### Modular Arithmetic
- [ ] **Modular exponentiation**: `modPow(base, exp, mod)` - fast (base^exp) mod m
- [ ] **Modular inverse**: `modInverse(a, m)` - find x where ax ≡ 1 (mod m)
- [ ] **Chinese Remainder Theorem**: solve system of congruences
- [ ] **Euler's totient**: `phi(n)` - count integers ≤ n coprime to n
- [ ] **Carmichael function**: `lambda(n)` - Carmichael's totient
- [ ] **Primitive roots**: find generators of (Z/nZ)*
- [ ] **Discrete logarithm**: solve a^x ≡ b (mod m)
- [ ] **Quadratic residues**: check if x² ≡ a (mod p) has solution
- [ ] **Legendre symbol**: (a/p) for odd prime p
- [ ] **Jacobi symbol**: generalization of Legendre

### Diophantine Equations
- [ ] **Linear Diophantine**: solve ax + by = c
- [ ] **Pell's equation**: solve x² - Dy² = 1
- [ ] **Pythagorean triples**: find (a,b,c) where a² + b² = c²
- [ ] **Sum of two squares**: represent n = a² + b²

### Multiplicative Functions
- [ ] **Möbius function**: `mu(n)` - μ(n) = (-1)^k if square-free
- [ ] **Euler's totient**: `phi(n)` - multiplicative function
- [ ] **Divisor function**: `sigma_k(n)` - sum of k-th powers of divisors
- [ ] **Liouville function**: `lambda(n)` - (-1)^Ω(n)

### Continued Fractions
- [ ] **Finite continued fractions**: represent rational as [a₀; a₁, a₂, ...]
- [ ] **Convergents**: compute successive approximations
- [ ] **Best rational approximations**: optimal p/q for given denominator limit

### Special Sequences
- [ ] **Collatz sequence**: 3n+1 problem iterations
- [ ] **Aliquot sequence**: iterate sum of proper divisors
- [ ] **Fibonacci mod n**: Fibonacci with modular arithmetic
- [ ] **Lucas numbers**: L(n) = F(n-1) + F(n+1)

---

## Quick Reference

### Adding New Functions
```typescript
// 1. Implement in appropriate module (e.g., core.ts)
export const gcd = (a: number, b: number): number => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("GCD is only defined for integers");
  }
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

// 2. Write tests in tests/core.test.ts
// 3. Update this roadmap
// 4. (Optional) Add proof in ../proofs/
```

### Integration with Other Modules
- `../tests/` - Applied validation (specific cases)
- `../proofs/` - Formal verification (theorems, lemmas)
- `../combinatorics/` - Factorial, binomial coefficients

---

## Definitions

### Core Concepts

1. **Divisibility** - a|b means a divides b (b = ka for some integer k)
   - Example: 3|12 because 12 = 3×4

2. **Prime Numbers** - integers > 1 with exactly two divisors (1 and itself)
   - Example: 2, 3, 5, 7, 11, 13, ...

3. **Modular Arithmetic** - arithmetic of remainders
   - Example: 17 ≡ 2 (mod 5) means 17 and 2 have same remainder when divided by 5

4. **Coprime** - gcd(a,b) = 1 (relatively prime)
   - Example: gcd(8,15) = 1, so 8 and 15 are coprime

### Fundamental Theorems

**Fundamental Theorem of Arithmetic**
```
Every integer n > 1 has unique prime factorization:
n = p₁^e₁ × p₂^e₂ × ... × pₖ^eₖ
```

**Division Algorithm**
```
For integers a, b with b > 0:
a = bq + r  where 0 ≤ r < b
```

**Bézout's Identity**
```
For any integers a, b:
∃ x, y such that ax + by = gcd(a,b)
```

**Euler's Theorem**
```
If gcd(a,n) = 1, then:
a^φ(n) ≡ 1 (mod n)
```

**Fermat's Little Theorem**
```
If p is prime and gcd(a,p) = 1:
a^(p-1) ≡ 1 (mod p)
```

### Key Formulas

```
GCD property:          gcd(a,b) × lcm(a,b) = |a × b|
Euler's totient:       φ(p^k) = p^k - p^(k-1) for prime p
                       φ(mn) = φ(m)φ(n) if gcd(m,n) = 1
Divisor count:         τ(p₁^e₁...pₖ^eₖ) = (e₁+1)...(eₖ+1)
Divisor sum:           σ(p^k) = (p^(k+1) - 1)/(p - 1)
Möbius function:       μ(n) = 0 if n has squared factor
                            = 1 if n is product of even # of primes
                            = -1 if n is product of odd # of primes
```

### Key Properties (Testable/Provable)

```
GCD properties:
  gcd(a,b) = gcd(b,a)           (commutative)
  gcd(a,b) = gcd(b, a mod b)    (Euclidean)
  gcd(a,0) = |a|                (base case)
  
Prime properties:
  Infinite primes exist          (Euclid's proof)
  Every n > 1 has prime divisor  (well-ordering)
  
Modular properties:
  (a + b) mod m = ((a mod m) + (b mod m)) mod m
  (a × b) mod m = ((a mod m) × (b mod m)) mod m
  a^(p-1) ≡ 1 (mod p) if p prime, gcd(a,p)=1
```

---

## Examples

### Basic Usage
```typescript
import { gcd, lcm } from './number-theory/core';
import { isPrime } from './number-theory/primes';

gcd(48, 18);              // 6
lcm(12, 18);              // 36
isPrime(17);              // true
isPrime(91);              // false (91 = 7×13)
```

### Applied Problem: Reduce Fraction
```typescript
// Reduce 48/18 to lowest terms
const numerator = 48;
const denominator = 18;
const divisor = gcd(numerator, denominator);  // 6
const reduced = [numerator/divisor, denominator/divisor];  // [8, 3]
```

### Applied Problem: Repeating Events
```typescript
// Two events repeat every 12 and 18 days. When do they coincide?
const event1Period = 12;
const event2Period = 18;
const coincidence = lcm(event1Period, event2Period);  // 36 days
```

### Cryptography Example
```typescript
// RSA: Find modular inverse of e mod φ(n)
const e = 17;
const phi = 3120;
const d = modInverse(e, phi);  // Private exponent
// Now ed ≡ 1 (mod φ(n))
```

### Prime Factorization Application
```typescript
// Find τ(n) using prime factorization
const n = 360;  // 360 = 2³ × 3² × 5¹
const factors = primeFactorization(n);  // [[2,3], [3,2], [5,1]]
const tau = factors.reduce((acc, [p, e]) => acc * (e + 1), 1);
// τ(360) = (3+1)(2+1)(1+1) = 24 divisors
```

---

## Design Principles

- **Pure functions**: No side effects, deterministic
- **Immutability**: No data mutation
- **Type safety**: Explicit signatures, runtime validation
- **Efficiency**: Use optimal algorithms (Euclidean, sieve, fast exponentiation)
- **Mathematical correctness**: Follow definitions and theorems precisely

---

## Algorithm Notes

### GCD Algorithms
1. **Euclidean Algorithm** - O(log min(a,b)) - iterative division
2. **Binary GCD (Stein's)** - O(log min(a,b)) - uses bit operations
3. **Extended Euclidean** - also finds Bézout coefficients

### Primality Testing
1. **Trial Division** - O(√n) - check divisors up to √n
2. **6k±1 Optimization** - O(√n/3) - only test 6k±1 divisors (current)
3. **Fermat Test** - O(k log n) - probabilistic
4. **Miller-Rabin** - O(k log³n) - probabilistic, stronger
5. **AKS** - O(log⁶n) - deterministic polynomial time

### Prime Generation
1. **Sieve of Eratosthenes** - O(n log log n) - all primes up to n
2. **Segmented Sieve** - memory-efficient for large ranges
3. **Sieve of Atkin** - O(n/log log n) - faster asymptotically

---

## References

- [Wikipedia: Number Theory](https://en.wikipedia.org/wiki/Number_theory)
- [Wikipedia: List of Number Theory Topics](https://en.wikipedia.org/wiki/List_of_number_theory_topics)
- Hardy & Wright, *An Introduction to the Theory of Numbers*
- Niven, Zuckerman & Montgomery, *An Introduction to the Theory of Numbers*
- [OEIS: Integer Sequences](https://oeis.org/)
- Knuth, *The Art of Computer Programming, Vol. 2: Seminumerical Algorithms*
- [GeeksforGeeks: GCD Algorithms](https://www.geeksforgeeks.org/maths/how-to-find-the-gcd-greatest-common-divisor/)
