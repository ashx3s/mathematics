# Mathematics TypeScript Project

A TypeScript project for exploring mathematical concepts, functions, classes, and theorems.

## Setup

1. Install dependencies:
```bash
pnpm install
```

## Development

### Available Scripts

- `pnpm dev` - Start TypeScript compiler in watch mode
- `pnpm build` - Build the project to the `dist` directory
- `pnpm start` - Run the compiled application
- `pnpm start:dev` - Build and run the application (build + start)
- `pnpm test` - Run Jest tests
- `pnpm test:watch` - Run Jest tests in watch mode
- `pnpm test:coverage` - Run Jest tests with coverage report
- `pnpm lint` - Run ESLint on TypeScript files
- `pnpm lint:fix` - Run ESLint and automatically fix issues
- `pnpm format` - Format code with Prettier

### Project Structure

```
src/          # Source TypeScript files
  __tests__/  # Test files (*.test.ts or *.spec.ts)
dist/         # Compiled JavaScript output
coverage/     # Jest coverage reports (generated)
```

### Getting Started

1. Write your mathematical functions and classes in the `src` directory
2. Create corresponding test files in `src/__tests__/` (e.g., `myFunction.test.ts`)
3. Import and use functions in `src/index.ts` or create new files
4. Run `pnpm dev` to compile in watch mode as you develop
5. Run `pnpm test` to verify your implementations
6. Run `pnpm start:dev` to build and run your code
7. Run `pnpm build` to create a production build

### Code Style

- Uses double quotes
- 2-space indentation
- Modern ES2022 syntax
- Strict TypeScript configuration for better type safety

## Testing

The project uses Jest for unit testing with TypeScript support. Test files should be placed in `src/__tests__/` and follow the naming convention `*.test.ts` or `*.spec.ts`.

### Testing Mathematical Functions

- Use `expect(result).toBe(expected)` for exact equality
- Use `expect(result).toBeCloseTo(expected, precision)` for floating-point comparisons
- Use `expect(() => func()).toThrow()` for testing error conditions
- Test mathematical properties like commutativity, associativity, etc.

See `src/__tests__/example.test.ts` for examples of testing mathematical functions.

## Examples

Create mathematical functions, explore algorithms, implement theorems, and experiment with different mathematical concepts using TypeScript's strong typing system. Write comprehensive tests to verify your mathematical implementations.