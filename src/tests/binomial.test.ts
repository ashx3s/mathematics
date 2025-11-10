/**
 * Unit tests for binomial combinatorics functions
 */

import { nChooseK, binomialExpansion } from "../combinatorices/binomial";

describe("nChooseK", () => {
  describe("basic combinations", () => {
    test("should return 1 for nChooseK(0, 0)", () => {
      expect(nChooseK(0, 0)).toBe(1);
    });

    test("should return 1 for nChooseK(n, 0)", () => {
      expect(nChooseK(5, 0)).toBe(1);
      expect(nChooseK(10, 0)).toBe(1);
    });

    test("should return n for nChooseK(n, 1)", () => {
      expect(nChooseK(5, 1)).toBe(5);
      expect(nChooseK(10, 1)).toBe(10);
      expect(nChooseK(7, 1)).toBe(7);
    });

    test("should return 1 for nChooseK(n, n)", () => {
      expect(nChooseK(5, 5)).toBe(1);
      expect(nChooseK(10, 10)).toBe(1);
    });
  });

  describe("standard combinations", () => {
    test("should calculate nChooseK(5, 2) correctly", () => {
      expect(nChooseK(5, 2)).toBe(10);
    });

    test("should calculate nChooseK(5, 3) correctly", () => {
      expect(nChooseK(5, 3)).toBe(10);
    });

    test("should calculate nChooseK(6, 2) correctly", () => {
      expect(nChooseK(6, 2)).toBe(15);
    });

    test("should calculate nChooseK(6, 3) correctly", () => {
      expect(nChooseK(6, 3)).toBe(20);
    });

    test("should calculate nChooseK(10, 3) correctly", () => {
      expect(nChooseK(10, 3)).toBe(120);
    });

    test("should calculate nChooseK(10, 5) correctly", () => {
      expect(nChooseK(10, 5)).toBe(252);
    });
  });

  describe("symmetry property", () => {
    test("should satisfy nChooseK(n, k) = nChooseK(n, n-k)", () => {
      expect(nChooseK(5, 2)).toBe(nChooseK(5, 3));
      expect(nChooseK(6, 2)).toBe(nChooseK(6, 4));
      expect(nChooseK(10, 3)).toBe(nChooseK(10, 7));
    });
  });

  describe("error handling", () => {
    test("should throw error when k > n", () => {
      expect(() => nChooseK(5, 6)).toThrow("k cannot be creater than n");
    });

    test("should throw error when k >> n", () => {
      expect(() => nChooseK(3, 10)).toThrow("k cannot be creater than n");
    });
  });

  describe("edge cases", () => {
    test("should handle small values correctly", () => {
      expect(nChooseK(1, 0)).toBe(1);
      expect(nChooseK(1, 1)).toBe(1);
      expect(nChooseK(2, 1)).toBe(2);
    });

    test("should handle larger values correctly", () => {
      expect(nChooseK(20, 2)).toBe(190);
      expect(nChooseK(15, 3)).toBe(455);
    });
  });
});

describe("binomialExpansion", () => {
  describe("basic expansions", () => {
    test("should calculate (a + b)^0 = 1", () => {
      expect(binomialExpansion(2, 3, 0)).toBe(1);
      expect(binomialExpansion(5, 7, 0)).toBe(1);
    });

    test("should calculate (a + b)^1 = a + b", () => {
      expect(binomialExpansion(2, 3, 1)).toBe(5);
      expect(binomialExpansion(5, 7, 1)).toBe(12);
    });

    test("should calculate (a + b)^2 = a^2 + 2ab + b^2", () => {
      // (2 + 3)^2 = 4 + 12 + 9 = 25
      expect(binomialExpansion(2, 3, 2)).toBe(25);
      // (1 + 1)^2 = 1 + 2 + 1 = 4
      expect(binomialExpansion(1, 1, 2)).toBe(4);
    });

    test("should calculate (a + b)^3 correctly", () => {
      // (2 + 3)^3 = 125
      expect(binomialExpansion(2, 3, 3)).toBe(125);
      // (1 + 1)^3 = 8
      expect(binomialExpansion(1, 1, 3)).toBe(8);
    });
  });

  describe("verification with direct calculation", () => {
    test("should match (a + b)^n for various values", () => {
      expect(binomialExpansion(2, 3, 4)).toBe(Math.pow(5, 4));
      expect(binomialExpansion(1, 2, 5)).toBe(Math.pow(3, 5));
      expect(binomialExpansion(3, 4, 2)).toBe(Math.pow(7, 2));
    });
  });

  describe("special cases", () => {
    test("should handle zero values", () => {
      // (0 + b)^n = b^n
      expect(binomialExpansion(0, 5, 3)).toBe(125);
      // (a + 0)^n = a^n
      expect(binomialExpansion(5, 0, 3)).toBe(125);
    });

    test("should handle negative values", () => {
      // (-1 + 1)^n = 0
      expect(binomialExpansion(-1, 1, 5)).toBe(0);
      // (2 + (-1))^2 = 1
      expect(binomialExpansion(2, -1, 2)).toBe(1);
    });

    test("should handle identical values", () => {
      // (a + a)^n = (2a)^n
      expect(binomialExpansion(2, 2, 3)).toBe(Math.pow(4, 3));
      expect(binomialExpansion(3, 3, 2)).toBe(Math.pow(6, 2));
    });
  });

  describe("larger exponents", () => {
    test("should calculate larger expansions correctly", () => {
      expect(binomialExpansion(1, 1, 10)).toBe(1024);
      expect(binomialExpansion(2, 1, 5)).toBe(243);
    });
  });

  describe("error handling", () => {
    test("should throw error for negative exponent", () => {
      expect(() => binomialExpansion(2, 3, -1)).toThrow("the exponent n must be an integer greater than 0");
    });

    test("should throw error for non-integer exponent", () => {
      expect(() => binomialExpansion(2, 3, 2.5)).toThrow("the exponent n must be an integer greater than 0");
    });

    test("should throw error for non-integer exponent (0.5)", () => {
      expect(() => binomialExpansion(2, 3, 0.5)).toThrow("the exponent n must be an integer greater than 0");
    });
  });

  describe("mathematical properties", () => {
    test("should satisfy commutativity: (a + b)^n = (b + a)^n", () => {
      expect(binomialExpansion(2, 3, 4)).toBe(binomialExpansion(3, 2, 4));
      expect(binomialExpansion(5, 7, 3)).toBe(binomialExpansion(7, 5, 3));
    });

    test("should satisfy (1 + 1)^n = 2^n", () => {
      expect(binomialExpansion(1, 1, 5)).toBe(32);
      expect(binomialExpansion(1, 1, 6)).toBe(64);
      expect(binomialExpansion(1, 1, 8)).toBe(256);
    });
  });
});
