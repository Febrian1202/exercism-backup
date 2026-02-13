export function toRna(args: string): string {

  const val = args.split('').map((value) => {
    if (value === 'G') {
      return 'C';
    } else if (value === 'C') {
      return 'G';
    } else if (value === 'T') {
      return 'A';
    } else if (value === 'A') {
      return 'U';
    } else {
      throw new Error('Invalid input DNA.');
    }
  }).join('');

  return val;
}

console.log(toRna('U'))

