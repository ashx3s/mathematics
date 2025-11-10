/**
 * Unit tests for core combinatorics functions
 */

import { factorial } from "../combinatorices/core";

describe("factorial", () => {
  describe("basic functionality", () => {
    test("should return 1 for factorial(0)", () => {
      expect(factorial(0)).toBe(1);
    });

    test("should return 1 for factorial(1)", () => {
      expect(factorial(1)).toBe(1);
    });

    test("should calculate factorial(2) correctly", () => {
      expect(factorial(2)).toBe(2);
    });

    test("should calculate factorial(3) correctly", () => {
      expect(factorial(3)).toBe(6);
    });

    test("should calculate factorial(4) correctly", () => {
      expect(factorial(4)).toBe(24);
    });

    test("should calculate factorial(5) correctly", () => {
      expect(factorial(5)).toBe(120);
    });
  });

  describe("larger values", () => {
    test("should calculate factorial(6) correctly", () => {
      expect(factorial(6)).toBe(720);
    });

    test("should calculate factorial(7) correctly", () => {
      expect(factorial(7)).toBe(5040);
    });

    test("should calculate factorial(10) correctly", () => {
      expect(factorial(10)).toBe(3628800);
    });
  });

  describe("error handling", () => {
    test("should throw error for negative numbers", () => {
      expect(() => factorial(-1)).toThrow("Factorial is only defined for non-negative integers");
    });

    test("should throw error for negative numbers (-5)", () => {
      expect(() => factorial(-5)).toThrow("Factorial is only defined for non-negative integers");
    });

    test("should throw error for non-integer values", () => {
      expect(() => factorial(3.5)).toThrow("Factorial is only defined for non-negative integers");
    });

    test("should throw error for non-integer values (0.5)", () => {
      expect(() => factorial(0.5)).toThrow("Factorial is only defined for non-negative integers");
    });
  });

  describe("edge cases", () => {
    test("should handle factorial(0) as base case", () => {
      expect(factorial(0)).toBe(1);
    });

    test("should handle factorial(1) as base case", () => {
      expect(factorial(1)).toBe(1);
    });
  });
});
