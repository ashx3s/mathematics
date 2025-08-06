import { factorial, main } from "../index";

describe("Index Module", () => {
  describe("factorial function", () => {
    test("should calculate factorial correctly for positive integers", () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(2)).toBe(2);
      expect(factorial(3)).toBe(6);
      expect(factorial(4)).toBe(24);
      expect(factorial(5)).toBe(120);
    });

    test("should handle edge cases", () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
    });

    test("should throw error for negative numbers", () => {
      expect(() => factorial(-1)).toThrow("Factorial not defined for negative numbers");
      expect(() => factorial(-5)).toThrow("Factorial not defined for negative numbers");
    });

    test("should calculate larger factorials", () => {
      expect(factorial(6)).toBe(720);
      expect(factorial(7)).toBe(5040);
    });
  });

  describe("main function", () => {
    test("should run without errors", () => {
      // Capture console output
      const consoleSpy = jest.spyOn(console, "log").mockImplementation();

      expect(() => main()).not.toThrow();

      // Verify that console.log was called
      expect(consoleSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith("Mathematics TypeScript Project");

      // Restore console.log
      consoleSpy.mockRestore();
    });

    test("should output expected factorial calculations", () => {
      const consoleSpy = jest.spyOn(console, "log").mockImplementation();

      main();

      // Check that factorial calculations are logged
      expect(consoleSpy).toHaveBeenCalledWith("5! =", 120);
      expect(consoleSpy).toHaveBeenCalledWith("0! =", 1);
      expect(consoleSpy).toHaveBeenCalledWith("3! =", 6);

      consoleSpy.mockRestore();
    });
  });
});
