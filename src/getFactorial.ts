function getFactorial(num: number) {
  if (!num) {
    throw new Error("Input must be a non-zero number");
  }
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

export default getFactorial;
