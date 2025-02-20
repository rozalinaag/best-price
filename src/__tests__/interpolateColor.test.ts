import { interpolateColor } from "../components/Bar/interpolateColor";

describe("interpolateColor", () => {
  test("returns startColor at 0%", () => {
    expect(interpolateColor("#ff0000", "#00ff00", 0)).toBe("#ff0000");
  });

  test("returns endColor at 100%", () => {
    expect(interpolateColor("#ff0000", "#00ff00", 100)).toBe("#00ff00");
  });

  test("interpolates halfway at 50%", () => {
    expect(interpolateColor("#ff0000", "#00ff00", 50)).toBe("#808000"); 
  });

  test("handles shorthand hex codes", () => {
    expect(interpolateColor("#f00", "#0f0", 50)).toBe("#808000");
  });

  test("interpolates between blue and red", () => {
    expect(interpolateColor("#0000ff", "#ff0000", 50)).toBe("#800080");
  });

  test("interpolates at 25%", () => {
    expect(interpolateColor("#000000", "#ffffff", 25)).toBe("#404040");
  });

  test("interpolates at 75%", () => {
    expect(interpolateColor("#000000", "#ffffff", 75)).toBe("#bfbfbf");
  });
});
