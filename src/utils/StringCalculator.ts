export function add(numbers: string): number {
  if (!numbers.trim()) return 0;

  let delimiter = ',';
  let numbersString = numbers;

  // Check for custom delimiter
  if (numbers.startsWith('//')) {
    const delimiterEndIndex = numbers.indexOf('\n');
    delimiter = numbers.substring(2, delimiterEndIndex);
    numbersString = numbers.substring(delimiterEndIndex + 1);
  }

  // Replace newlines with delimiter
  numbersString = numbersString.replace(/\n/g, delimiter);

  const numberArray = numbersString.split(delimiter).map(num => {
    const parsed = parseInt(num.trim(), 10);
    return isNaN(parsed) ? 0 : parsed;
  });

  // Check for negative numbers
  const negatives = numberArray.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
  }

  return numberArray.reduce((sum, num) => sum + num, 0);
}