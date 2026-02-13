export function isLeap(year: number): boolean {
  if ((year % 100 === 0) && (year % 400 === 0)) {
    return true;
  } else if ((year % 4 === 0) && (year > 4)) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeap(2))