import { factorial } from "./core";
import { range, sum } from "../utils/arrays";
export const nChooseK = (n: number, k: number): number => {
  if (k > n) {
    throw new Error("k cannot be greater than n, cannot choose more items than n");
  }
  const nFactorial = factorial(n);
  const nk = n - k;
  const denominator = factorial(nk) * factorial(k);
  return nFactorial / denominator;
};

export const binomialExpansion = (a: number, b: number, n: number): number => {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("the exponent n must be an integer greater than or equal to 0");
  }
  const terms = range(0, n).map(k => nChooseK(n, k) * (Math.pow(a, n - k) * Math.pow(b, k)));
  return sum(terms);
};
