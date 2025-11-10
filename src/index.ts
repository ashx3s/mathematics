/**
 * Mathematics TypeScript Project
 * Entry point for mathematical functions, classes, and explorations
 */

import { binomialExpansion } from "./combinatorices/binomial";
import { factorial } from "./combinatorices/core";

function main(): void {
  console.log("Mathematics TypeScript Project");
  console.log("==============================");

  // Example mathematical calculations

  console.log("Binomial Function Terms Array");
  console.log(binomialExpansion(5, 2, 3));
  console.log("\nProject is working correctly!");
  console.log("GetFactorial Function");
  console.log(factorial(5));
}

// Run main function if this file is executed directly
if (require.main === module) {
  main();
}

export { main };
