export function interpolateColor(startColor: string, endColor: string, percent: number): string {
  // Function to convert HEX to RGB
  function hexToRgb(hex: string): number[] {
    hex = hex.replace(/^#/, ''); 
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    const bigint = parseInt(hex, 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  }

  // Function to convert RGB back to HEX
  function rgbToHex(r: number, g: number, b: number): string {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
  }

  // Convert colors to RGB
  const startRGB = hexToRgb(startColor);
  const endRGB = hexToRgb(endColor);

  // Interpolate each color component (R, G, B)
  const r = Math.round(startRGB[0] + (endRGB[0] - startRGB[0]) * (percent / 100));
  const g = Math.round(startRGB[1] + (endRGB[1] - startRGB[1]) * (percent / 100));
  const b = Math.round(startRGB[2] + (endRGB[2] - startRGB[2]) * (percent / 100));

  return rgbToHex(r, g, b);
}
