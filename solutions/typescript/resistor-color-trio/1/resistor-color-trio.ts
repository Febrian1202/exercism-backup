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
  // const iterate = COLORS.indexOf(colors[2])
  // let zero = 1;

  // for (let i = 1; i <= iterate; i++) {
  //   zero = zero * 10;
  // }

  // const final = twoDig * zero;

  if (value > 1_000_000) {
    return `${value / 1_000_000} megaohms`
  } else if (value > 1_000) {
    return `${value / 1_000} kiloohms`
  } else {
    return `${value} ohms`;
  }
}

console.log(decodedResistorValue(['orange', 'orange', 'black']))
