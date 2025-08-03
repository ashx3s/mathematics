# Mathematics TypeScript Project

A TypeScript project for exploring mathematical concepts, functions, classes, and theorems.

## Setup

1. Install dependencies:
```bash
npm install
```

## Development

### Available Scripts

- `npm run dev` - Start TypeScript compiler in watch mode
- `npm run build` - Build the project to the `dist` directory
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run Jest tests in watch mode
- `npm run test:coverage` - Run Jest tests with coverage report
- `npm run lint` - Run ESLint on TypeScript files
- `npm run lint:fix` - Run ESLint and automatically fix issues
- `npm run format` - Format code with Prettier

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
4. Run `npm run dev` to compile in watch mode as you develop
5. Run `npm run test` to verify your implementations
6. Run `npm run build` to create a production build

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