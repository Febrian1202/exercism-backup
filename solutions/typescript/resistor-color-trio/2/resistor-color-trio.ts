const COLORS: string[] = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]

export function decodedResistorValue(colors: string[]): string | number {
  const value = (COLORS.indexOf(colors[0]) * 10 + COLORS.indexOf(colors[1])) * (10 ** COLORS.indexOf(colors[2]));

  if (value > 1_000_000) {
    return `${value / 1_000_000} megaohms`
  } else if (value > 1_000) {
    return `${value / 1_000} kiloohms`
  } else {
    return `${value} ohms`;
  }
}

console.log(decodedResistorValue(['orange', 'orange', 'black']))
