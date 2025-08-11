export const testCases = [
  { id: 1, input: '""', output: '0' },
  { id: 2, input: '"1"', output: '1' },
  { id: 3, input: '"1,5"', output: '6' },
  { id: 4, input: '"1\\n2,3"', output: '6' },
  { id: 5, input: '"//;\\n1;2"', output: '3' }
];
