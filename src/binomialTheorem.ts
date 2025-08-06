import nChooseK from "./nChooseK";

function binomialTheorem(a: number, b: number, n: number): number {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("the exponent n must be an integer greater than 0");
  }

  let sum = 0;
  for (let k = 0; k <= n; k++) {
    const coefficient = nChooseK(n, k);
    const aExponent = n - k;
    const aValue = Math.pow(a, aExponent);
    const bValue = Math.pow(b, k);
    sum += coefficient * aValue * bValue;
  }
  return sum;
}

export default binomialTheorem;
