export function add(numbers: string): number {
  if (!numbers.trim()) return 0;

  let delimiters: string[] = [',', '\n'];
  let numbersString = numbers;

  // Check for custom delimiter(s)
  if (numbers.startsWith('//')) {
    const delimiterEndIndex = numbers.indexOf('\n');
    const delimiterSection = numbers.substring(2, delimiterEndIndex);

    // If delimiters are in [ ] format, handle multiple/long delimiters
    const delimiterMatches = delimiterSection.match(/\[(.*?)\]/g);
    if (delimiterMatches) {
      delimiters = delimiterMatches.map(d => d.slice(1, -1));
    } else {
      delimiters = [delimiterSection];
    }

    // Always allow newline as delimiter in addition to custom ones
    delimiters.push('\n');

    numbersString = numbers.substring(delimiterEndIndex + 1);
  }

  const delimiterRegex = new RegExp(delimiters.map(d => escapeRegExp(d)).join('|'), 'g');

  const numberArray = numbersString
    .split(delimiterRegex)
    .map(num => {
      const parsed = parseInt(num.trim(), 10);
      return isNaN(parsed) ? 0 : parsed;
    })
    .filter(num => num <= 1000);

  const negatives = numberArray.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
  }

  return numberArray.reduce((sum, num) => sum + num, 0);
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
