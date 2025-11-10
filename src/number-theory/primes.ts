/**
 * Checks if a number is prime using the 6k±1 optimization.
 *
 * Efficiently tests primality by checking divisibility by 2 and 3,
 * then testing only numbers of the form 6k±1 up to √n.
 *
 * @param n - The number to test (should be a non-negative integer)
 * @returns True if n is prime, false otherwise
 *
 * @example
 * isPrime(17);  // true
 * isPrime(91);  // false (91 = 7×13)
 * isPrime(2);   // true
 *
 * @remarks
 * Time complexity: O(√n)
 * Numbers ≤ 1 are not considered prime.
 */

export const isPrime = (n: number): boolean => {
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

export const primeFactorization = (n: number): [number, number][] => {
  return [[n, n]];
};
