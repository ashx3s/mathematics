import getFactorial from "./getFactorial";

function nChooseK(n: number, k: number): number {
  if (k > n) {
    throw new Error("k cannot be creater than n, cannot choose more items than n");
  }
  const nFactorial = getFactorial(n);
  const nk = n - k;
  const denominator = getFactorial(nk) * getFactorial(k);
  return nFactorial / denominator;
}

export default nChooseK;
