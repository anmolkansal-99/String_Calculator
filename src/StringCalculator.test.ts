import '@testing-library/jest-dom';
import { add } from './utils/StringCalculator';

describe('add function', () => {
  test('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });
});