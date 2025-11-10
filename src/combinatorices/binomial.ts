import { factorial } from "./core";
function nChooseK(n: number, k: number): number {
  if (k > n) {
    throw new Error("k cannot be creater than n, cannot choose more items than n");
  }
  const nFactorial = factorial(n);
  const nk = n - k;
  const denominator = factorial(nk) * factorial(k);
  return nFactorial / denominator;
}

function binomialExpansion(a: number, b: number, n: number): number {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("the exponent n must be an integer greater than 0");
  }

  return Array.from({ length: n + 1 }, (_, k) => k)
    .map(k => nChooseK(n, k) * Math.pow(a, n - k) * Math.pow(b, k))
    .reduce((acc, term) => acc + term, 0);
}

export { binomialExpansion, nChooseK };
