function getFactorial(num: number) {
  // expand number into it's factorial form
  const factorialValues: number[] = [];
  for (let i = 1; i <= num; i++) {
    factorialValues.push(i);
  }
  // calculate factorial
  const factorialProduct = factorialValues.reduce((acc, curr) => {
    return acc * curr;
  }, 1);

  return factorialProduct;
}
function nChooseK(n: number, k: number): number {
  const nFactorial = getFactorial(n);
  const nk = n - k;
  const denominator = getFactorial(nk) * getFactorial(k);
  return nFactorial / denominator;
}

function binomialTheorem(a: number, b: number, n: number): number {
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
