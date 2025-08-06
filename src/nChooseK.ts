import getFactorial from "./getFactorial";

export default function (n: number, k: number): number {
  if (!n || !k) {
    throw new Error("Both parameters must be non-zero");
  }

  const nFactorial = getFactorial(n);
  const nk = n - k;
  const denominator = getFactorial(nk) * getFactorial(k);
  return nFactorial / denominator;
}
