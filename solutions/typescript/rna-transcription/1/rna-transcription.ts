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
      return 'invalid';
    }
  });

  if (val.find(element => element === 'invalid')) {
    return 'Invalid input DNA.';
  }

  return val.join('');
}

console.log(toRna('G'))

