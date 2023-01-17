import { isEven } from '@artifi2/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);
}