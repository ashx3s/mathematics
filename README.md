# Elucidations

A TypeScript project for exploring mathematics, logic, and programming through rigorous implementations of combinatorics, number theory, and mathematical proofs.

## Project Overview

This project aims to:
- Implement mathematical functions with precision and efficiency
- Provide comprehensive test coverage for mathematical correctness
- Document mathematical concepts, theorems, and algorithms
- Bridge the gap between mathematical theory and practical implementation

## Setup

1. Install dependencies:
```bash
pnpm install
```

## Development

### Available Scripts

**Build & Run:**
- `pnpm dev` - Start TypeScript compiler in watch mode
- `pnpm build` - Build the project to the `dist` directory
- `pnpm clean` - Remove `dist` and `coverage` directories
- `pnpm start` - Run the compiled application
- `pnpm start:dev` - Build and run the application (build + start)

**Testing:**
- `pnpm test` - Run Jest tests
- `pnpm test:watch` - Run Jest tests in watch mode
- `pnpm test:coverage` - Run Jest tests with coverage report
- `pnpm test:ci` - Run tests in CI mode with coverage

**Code Quality:**
- `pnpm lint` - Run ESLint on TypeScript files
- `pnpm lint:fix` - Run ESLint and automatically fix issues
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting without making changes
- `pnpm typecheck` - Run TypeScript type checking without emitting files
- `pnpm validate` - Run all checks: typecheck, lint, format:check, and test

**Workflow:**
- `pnpm prepare` - Automatically runs build (used by package managers)

### Project Structure

```
src/
  ├── combinatorics/     # Combinatorics functions (factorial, binomial, etc.)
  │   ├── core.ts        # Core functions (factorial)
  │   ├── binomial.ts    # Binomial coefficients and expansion
  │   └── README.md      # Combinatorics documentation
  ├── number-theory/     # Number theory functions (primes, gcd, lcm, etc.)
  │   ├── core.ts        # Core functions (gcd, lcm)
  │   ├── primes.ts      # Prime-related functions
  │   └── README.md      # Number theory documentation
  ├── utils/             # Utility functions
  │   └── arrays.ts      # Array operations (sum, product, range)
  ├── tests/             # Test files (*.test.ts)
  ├── proofs/            # Mathematical proofs and formal verification
  └── index.ts           # Entry point

dist/                    # Compiled JavaScript output (generated)
coverage/                # Jest coverage reports (generated)
```

### Getting Started

1. **Write Functions**: Implement mathematical functions in the appropriate module:
   - Combinatorics → `src/combinatorics/`
   - Number Theory → `src/number-theory/`
   - Shared utilities → `src/utils/`

2. **Write Tests**: Create comprehensive tests in `src/tests/` (e.g., `core.test.ts`)
   - Test edge cases and base cases
   - Test mathematical properties (commutativity, associativity, etc.)
   - Test error handling for invalid inputs

3. **Document**: Update module READMEs with new functions and examples

4. **Develop**:
   ```bash
   pnpm dev              # Watch mode for compilation
   pnpm test:watch       # Watch mode for tests
   ```

5. **Validate**: Before committing, ensure code quality:
   ```bash
   pnpm validate         # Runs typecheck, lint, format:check, and test
   ```

### Code Style

- **Pure functions**: No side effects, deterministic outputs
- **Immutability**: No data mutation
- **Type safety**: Explicit type signatures, runtime validation
- **Arrow functions**: Consistent use of arrow function syntax
- **Error handling**: Throw descriptive errors for invalid inputs
- **Formatting**: Prettier with 2-space indentation, double quotes

## Current Implementations

### Combinatorics (`src/combinatorics/`)
- ✅ `factorial(n)` - Computes n!
- ✅ `nChooseK(n, k)` - Binomial coefficient C(n,k)
- ✅ `binomialExpansion(a, b, n)` - Computes (a+b)^n

### Number Theory (`src/number-theory/`)
- ✅ `isPrime(n)` - Primality test using 6k±1 optimization
- 🔄 `gcd(a, b)` - Greatest Common Divisor (planned)
- 🔄 `lcm(a, b)` - Least Common Multiple (planned)
- 🔄 `primeFactorization(n)` - Prime factorization (stub)

### Utilities (`src/utils/`)
- ✅ `sum(numbers)` - Sum array of numbers
- ✅ `product(numbers)` - Product of array of numbers
- ✅ `range(start, end)` - Inclusive range [start, end]
- ✅ `rangeExclusive(start, end)` - Exclusive range [start, end)

See individual module READMEs for detailed documentation:
- [Combinatorics README](src/combinatorics/README.md)
- [Number Theory README](src/number-theory/README.md)

## Testing

The project uses Jest for unit testing with TypeScript support via `ts-jest`. Test files are located in `src/tests/` and follow the naming convention `*.test.ts`.

### Testing Mathematical Functions

**Equality Assertions:**
```typescript
expect(factorial(5)).toBe(120);           // Exact equality
expect(result).toBeCloseTo(expected, 5);  // Floating-point (5 decimals)
```

**Error Testing:**
```typescript
expect(() => factorial(-1)).toThrow("Factorial is only defined for non-negative integers");
```

**Property Testing:**
```typescript
// Test mathematical properties
test("should satisfy commutativity", () => {
  expect(gcd(12, 18)).toBe(gcd(18, 12));
});

test("should satisfy symmetry: C(n,k) = C(n,n-k)", () => {
  expect(nChooseK(5, 2)).toBe(nChooseK(5, 3));
});
```

### Coverage

Run `pnpm test:coverage` to generate coverage reports in the `coverage/` directory. Open `coverage/lcov-report/index.html` in a browser to view detailed coverage.

## Examples

### Combinatorics
```typescript
import { factorial } from './combinatorics/core';
import { nChooseK, binomialExpansion } from './combinatorics/binomial';

factorial(5);                 // 120
nChooseK(5, 2);               // 10 (5 choose 2)
binomialExpansion(2, 3, 4);   // 625 = (2+3)^4

// Poker: How many 5-card hands have exactly 2 aces?
const twoAces = nChooseK(4, 2);       // Choose 2 from 4 aces
const threeOthers = nChooseK(48, 3);  // Choose 3 from 48 non-aces
const hands = twoAces * threeOthers;  // 103,776
```

### Number Theory
```typescript
import { isPrime } from './number-theory/primes';
import { gcd, lcm } from './number-theory/core';

isPrime(17);      // true
isPrime(91);      // false (91 = 7×13)

// Reduce fraction to lowest terms
const numerator = 48;
const denominator = 18;
const divisor = gcd(numerator, denominator);  // 6
const reduced = [numerator/divisor, denominator/divisor];  // [8, 3]

// When do events repeating every 12 and 18 days coincide?
lcm(12, 18);      // 36 days
```

## Design Philosophy

1. **Mathematical Correctness** - Implementations must be mathematically sound and well-tested
2. **Performance** - Use efficient algorithms (e.g., Euclidean algorithm, 6k±1 primality)
3. **Type Safety** - Leverage TypeScript's type system for compile-time guarantees
4. **Testability** - Pure functions enable comprehensive unit testing
5. **Documentation** - Clear explanations of algorithms, complexity, and mathematical concepts
6. **Composability** - Build complex functions from simple, reusable primitives

## Technology Stack

- **Language**: TypeScript 5.9.3 (ES2022 target)
- **Package Manager**: pnpm 10.21.0
- **Testing**: Jest 30.2.0 with ts-jest 29.4.5
- **Linting**: ESLint 9.39.1 with TypeScript plugin
- **Formatting**: Prettier 3.6.2
- **Build**: TypeScript Compiler (tsc)

## Contributing

1. Choose a function from the roadmap in module READMEs
2. Implement the function with proper error handling and type safety
3. Write comprehensive tests covering edge cases and mathematical properties
4. Run `pnpm validate` to ensure code quality
5. Update the module README to mark the function as complete
6. (Optional) Add formal proofs in `src/proofs/`

## License

MIT

## Author

ashx3s
