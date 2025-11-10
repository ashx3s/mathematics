export default function factorial(n: number) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("Factorial is only defined for non-negative integers");
  }
  if (n === 0) return 1;
  return Array.from({ length: n }, (_, k) => k + 2).reduce((acc, curr) => acc * curr, 1);
}
