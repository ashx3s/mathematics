function getFactorial(n: number) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("Factorial is only defined for non-negative integers");
  }
  if (n === 0) return 1;
  // create an array from the number and add the values to it
  return Array.from({ length: n }, (_, k) => k + 1).reduce((acc, curr) => acc * curr, 1);
}

export default getFactorial;
