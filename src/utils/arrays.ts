export const sum = (numbers: number[]): number => {
  return numbers.reduce((acc, n) => acc + n, 0);
};
export const product = (numbers: number[]): number => {
  return numbers.reduce((acc, n) => acc * n, 1);
};
export const range = (start: number, end: number): number[] => {
  return Array.from({ length: end - start + 1 }, (_: number, i: number) => start + i);
};
export const rangeExclusive = (start: number, end: number): number[] => {
  return Array.from({ length: end - start }, (_: number, i: number) => start + i);
};
