# Combinatorics

Mathematics concerned with counting, existence, construction, and optimization of finite structures.

---

## Current Implementations

### `core.ts`
- `factorial(n)` - Computes n!

### `binomial.ts`
- `nChooseK(n, k)` - Binomial coefficient C(n,k) = n!/(k!(n-k)!)
- `binomialExpansion(a, b, n)` - Computes (a+b)^n

---

## Roadmap

### Enumeration (Counting)
- [ ] **Permutations**: `permute(n, k)` - P(n,k) = n!/(n-k)!
- [ ] **Permutations with repetition**: n^k
- [ ] **Derangements**: permutations with no fixed points, D(n)
- [ ] **Partitions**: ways to write n as sum of positive integers, p(n)
- [ ] **Catalan numbers**: C_n = (2n)!/(n+1)!n!
- [ ] **Stirling numbers (1st kind)**: unsigned, cycle decompositions
- [ ] **Stirling numbers (2nd kind)**: S(n,k), set partitions
- [ ] **Bell numbers**: B(n) = Σ S(n,k), total partitions of set
- [ ] **Fibonacci sequence**: F(n) = F(n-1) + F(n-2)

### Existence
- [ ] **Pigeonhole principle**: prove existence without construction
- [ ] **Inclusion-Exclusion**: |A∪B∪C| = |A| + |B| + |C| - |A∩B| - ...
- [ ] **Ramsey numbers**: R(r,s), guaranteed monochromatic subgraph size

### Construction
- [ ] **Generate all combinations**: `getAllCombinations(n, k)` → k-subsets
- [ ] **Generate all permutations**: `getAllPermutations(arr)` → all orderings
- [ ] **Generate partitions**: `getAllPartitions(n)` → integer partitions
- [ ] **Generate subsets**: `powerSet(set)` → all 2^n subsets
- [ ] **Gray code**: generate subsets with 1-bit changes
- [ ] **Latin squares**: n×n grids with no repeats

### Optimization
- [ ] **Greedy selection**: locally optimal choices
- [ ] **Dynamic programming**: optimal substructure solutions
- [ ] **Maximum matching**: optimal pairings in graphs
- [ ] **Minimum spanning tree**: optimal connectivity

### Graph Combinatorics
- [ ] **Chromatic number**: minimum colors for graph coloring
- [ ] **Eulerian paths**: visit all edges exactly once
- [ ] **Hamiltonian paths**: visit all vertices exactly once

---

## Quick Reference

### Adding New Functions
```typescript
// 1. Implement in appropriate module (e.g., permutations.ts)
export function permutations(n: number, k: number): number {
  if (k > n) throw new Error("k cannot exceed n");
  return factorial(n) / factorial(n - k);
}

// 2. Write tests in tests/permutations.test.ts
// 3. Update this roadmap
// 4. (Optional) Add proof in ../proofs/
```

### Integration with Other Modules
- `../tests/` - Applied validation (finite cases)
- `../proofs/` - Formal verification (induction, etc.)

---

## Definitions

### Four Pillars of Combinatorics

1. **Enumeration** - Count structures (How many?)
   - Example: C(5,2) = 10 ways to choose 2 from 5

2. **Existence** - Prove structures exist (Does it exist?)
   - Example: Pigeonhole - 6 pigeons in 5 holes → at least 2 share

3. **Construction** - Build structures explicitly (Generate all)
   - Example: Generate all 10 combinations of C(5,2)

4. **Optimization** - Find best structure (What's optimal?)
   - Example: Shortest path, minimum cost

### Key Formulas

```
Factorial:           n! = n × (n-1)!,  0! = 1
Binomial:            C(n,k) = n! / (k!(n-k)!)
Permutations:        P(n,k) = n! / (n-k)!
Binomial theorem:    (a+b)^n = Σ C(n,k) a^(n-k) b^k
```

### Key Properties (Testable/Provable)

```
Symmetry:            C(n,k) = C(n,n-k)
Pascal's identity:   C(n,k) = C(n-1,k-1) + C(n-1,k)
Sum of row:          Σ C(n,k) = 2^n
```

---

## Examples

### Basic Usage
```typescript
import { factorial } from './combinatorices/core';
import { nChooseK, binomialExpansion } from './combinatorices/binomial';

factorial(5);              // 120
nChooseK(5, 2);           // 10
binomialExpansion(2, 3, 4); // 625 = (2+3)^4
```

### Applied Problem
```typescript
// Poker: How many hands have exactly 2 aces?
const twoAces = nChooseK(4, 2);      // Choose 2 from 4 aces
const threeOthers = nChooseK(48, 3); // Choose 3 from 48 non-aces
const result = twoAces * threeOthers; // 103,776
```

### Coefficient Extraction
```typescript
// Find coefficient of x^3 in (x + 1)^5
const coeff = nChooseK(5, 3);  // 10
// Because (x+1)^5 = Σ C(5,k) x^k
```

---

## Design Principles

- **Pure functions**: No side effects, deterministic
- **Immutability**: No data mutation
- **Composition**: Build complex from simple
- **Type safety**: Explicit signatures, runtime validation

---

## References

- [Wikipedia: Combinatorics](https://en.wikipedia.org/wiki/Combinatorics)
- [OEIS: Integer Sequences](https://oeis.org/)
- H.J. Ryser, *Combinatorial Mathematics* (1963)
- Graham, Knuth, Patashnik, *Concrete Mathematics*
- [Wikipedia: Curry-Howard Correspondence](https://en.wikipedia.org/wiki/Curry%E2%80%93Howard_correspondence)
