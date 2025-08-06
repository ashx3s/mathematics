import nChooseK from "./nChooseK";

function binomialTheorem(a: number, b: number, n: number): number {
  if (!a || !b || !n) {
    throw new Error("All parameters must be non-zero");
  }

  const terms: number[] = [];
  for (let k = 0; k <= n; k++) {
    const coeffecient = nChooseK(n, k);
    const aExponent = n - k;
    const aValue = Math.pow(a, aExponent);
    const bValue = Math.pow(b, k);
    const term = coeffecient * aValue * bValue;
    terms.push(term);
  }
  return terms.reduce((acc, curr) => acc + curr);
}

export default binomialTheorem;
