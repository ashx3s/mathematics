import nChooseK from "./nChooseK";

function binomialTheorem(a: number, b: number, n: number): number {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("the exponent n must be an integer greater than 0");
  }

  const sum = Array.from({ length: n + 1 }, (_, k) => k)
    .map(k => nChooseK(n, k) * Math.pow(a, n - k) * Math.pow(b, k))
    .reduce((acc, term) => acc + term, 0);
  return sum;
}

export default binomialTheorem;
