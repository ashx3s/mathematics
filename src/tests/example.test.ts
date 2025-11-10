/**
 * Example test file demonstrating Jest usage for mathematical functions
 */

describe("Mathematical Functions Examples", () => {
  describe("Basic Arithmetic", () => {
    test("should add two numbers correctly", () => {
      const add = (a: number, b: number): number => a + b;

      expect(add(2, 3)).toBe(5);
      expect(add(-1, 1)).toBe(0);
      expect(add(0, 0)).toBe(0);
    });

    test("should multiply two numbers correctly", () => {
      const multiply = (a: number, b: number): number => a * b;

      expect(multiply(3, 4)).toBe(12);
      expect(multiply(-2, 5)).toBe(-10);
      expect(multiply(0, 100)).toBe(0);
    });
  });

  describe("Mathematical Properties", () => {
    test("should demonstrate floating-point precision testing", () => {
      const divide = (a: number, b: number): number => a / b;

      // Use toBeCloseTo for floating-point comparisons
      expect(divide(1, 3)).toBeCloseTo(0.333333, 5);
      expect(divide(22, 7)).toBeCloseTo(3.142857, 5);
    });

    test("should test mathematical properties like commutativity", () => {
      const add = (a: number, b: number): number => a + b;

      // Commutative property: a + b = b + a
      expect(add(5, 7)).toBe(add(7, 5));
      expect(add(-3, 8)).toBe(add(8, -3));
    });

    test("should handle edge cases and errors", () => {
      const safeDivide = (a: number, b: number): number => {
        if (b === 0) {
          throw new Error("Division by zero");
        }
        return a / b;
      };

      expect(() => safeDivide(10, 0)).toThrow("Division by zero");
      expect(safeDivide(10, 2)).toBe(5);
    });
  });

  describe("Array and Sequence Operations", () => {
    test("should calculate sum of array", () => {
      const sum = (numbers: number[]): number =>
        numbers.reduce((acc, num) => acc + num, 0);

      expect(sum([1, 2, 3, 4, 5])).toBe(15);
      expect(sum([])).toBe(0);
      expect(sum([-1, -2, -3])).toBe(-6);
    });

    test("should calculate factorial", () => {
      const factorial = (n: number): number => {
        if (n < 0) throw new Error("Factorial not defined for negative numbers");
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
      };

      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(5)).toBe(120);
      expect(() => factorial(-1)).toThrow("Factorial not defined for negative numbers");
    });
  });
});
