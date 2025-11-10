const isPrime = (n: number): boolean => {
  if (n <= 1) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  const checkDivisor = (divisor: number): boolean => {
    if (divisor * divisor > n) return true;
    if (n % divisor === 0 || n % (divisor + 2) === 0) return false;
    return checkDivisor(divisor + 6);
  };
  return checkDivisor(5);
};

export { isPrime };
