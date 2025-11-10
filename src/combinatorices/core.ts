function factorial(n: number): number {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("Factorial is only defined for non-negative integers");
  }
  if (n === 0) return 1;
  return Array.from({ length: n }, (_: number, k: number): number => k + 1).reduce(
    (acc: number, curr: number): number => acc * curr,
    1
  );
}

export { factorial };
