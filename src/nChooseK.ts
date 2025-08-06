import getFactorial from "./getFactorial";

function nChooseK(n: number, k: number): number {
  if (!n || !k) {
    throw new Error("Both parameters must be non-zero");
  }

  const nFactorial = getFactorial(n);
  const nk = n - k;
  const denominator = getFactorial(nk) * getFactorial(k);
  return nFactorial / denominator;
}

export default nChooseK;
