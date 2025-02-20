export function calculatePercentage(x: number, min: number, max: number) {
  if (x <= min) {
    return 0;
  }

  if (x > max) {
    return 100;
  }

  return ((x - min) / (max - min)) * 100;
}
