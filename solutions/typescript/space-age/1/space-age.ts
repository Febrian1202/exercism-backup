const PLANETS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
} as const

export function age(planet: string, seconds: number): number {
  let value = 0;
  switch (planet) {
    case 'earth': value = seconds / (31_557_600 * PLANETS.earth);
      break;
    case 'mercury': value = seconds / (31_557_600 * PLANETS.mercury);
      break;
    case 'venus': value = seconds / (31_557_600 * PLANETS.venus);
      break;
    case 'mars': value = seconds / (31_557_600 * PLANETS.mars);
      break;
    case 'jupiter': value = seconds / (31_557_600 * PLANETS.jupiter);
      break;
    case 'saturn': value = seconds / (31_557_600 * PLANETS.saturn);
      break;
    case 'uranus': value = seconds / (31_557_600 * PLANETS.uranus);
      break;
    case 'neptune': value = seconds / (31_557_600 * PLANETS.neptune);
      break;
    default:
      throw new Error('Invalid planet');
  }
  return parseFloat(value.toFixed(2));
}
