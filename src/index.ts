/**
 * Mathematics TypeScript Project
 * Entry point for mathematical functions, classes, and explorations
 */

import binomialTheorem from "./binomialTheorem";

/**
 * Simple factorial function for demonstration
 */
function factorial(n: number): number {
  if (n < 0) throw new Error("Factorial not defined for negative numbers");
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

/**
 * Main function to demonstrate mathematical concepts
 */
function main(): void {
  console.log("Mathematics TypeScript Project");
  console.log("==============================");

  // Example mathematical calculations

  console.log("Binomial Function Terms Array");
  console.log(binomialTheorem(5, 2, 3));
  console.log("\nProject is working correctly!");
}

// Run main function if this file is executed directly
if (require.main === module) {
  main();
}

export { main, factorial };
