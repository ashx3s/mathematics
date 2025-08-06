import nChooseK from "./nChooseK";

function binomialTheorem(a: number, b: number, n: number): number {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("the exponent n must be an integer greater than 0");
  }

  const terms: number[] = [];
  for (let k = 0; k <= n; k++) {
    const coefficient = nChooseK(n, k);
    const aExponent = n - k;
    const aValue = Math.pow(a, aExponent);
    const bValue = Math.pow(b, k);
    const term = coefficient * aValue * bValue;
    terms.push(term);
  }
  return terms.reduce((acc, curr) => acc + curr);
}

export default binomialTheorem;
