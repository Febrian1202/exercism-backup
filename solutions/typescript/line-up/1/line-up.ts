export function format(name: string, number: number): string {
  const s: string[] = ['th', 'st', 'nd', 'rd'];
  const m = number % 100;

  const format = number + (s[(m - 20) % 10] || s[m] || s[0]);

  return `${name}, you are the ${format} customer we serve today. Thank you!`
}

console.log(format('Rian', 2))