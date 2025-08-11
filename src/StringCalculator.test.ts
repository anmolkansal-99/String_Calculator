import '@testing-library/jest-dom';
import { add } from './utils/StringCalculator';

describe('add function', () => {
  test('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });

  test('returns number for single input', () => {
    expect(add('1')).toBe(1);
  });

  test('returns sum for comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
  });

  test('handles newlines as delimiters', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  test('supports custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  test('throws error for negative numbers', () => {
    expect(() => add('-1')).toThrow('negative numbers not allowed -1');
    expect(() => add('1,-2,3,-4')).toThrow('negative numbers not allowed -2,-4');
  });

  test('handles non-numeric values as 0', () => {
    expect(add('1,abc,3')).toBe(4);
  });
});