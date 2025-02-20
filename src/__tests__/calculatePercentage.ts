import { calculatePercentage } from "../components/Slide/calculatePercentage";

describe("calculatePercentage", () => {
  test("returns 0% when x is equal to min", () => {
    expect(calculatePercentage(10, 10, 50)).toBe(0);
  });

  test("returns 100% when x is greater than max", () => {
    expect(calculatePercentage(60, 10, 50)).toBe(100);
  });

  test("returns 50% when x is exactly halfway", () => {
    expect(calculatePercentage(30, 10, 50)).toBe(50);
  });

  test("returns 25% when x is a quarter way", () => {
    expect(calculatePercentage(20, 10, 50)).toBe(25);
  });

  test("returns 75% when x is three-quarters of the way", () => {
    expect(calculatePercentage(40, 10, 50)).toBe(75);
  });

  test("returns 0% when x is less than min", () => {
    expect(calculatePercentage(5, 10, 50)).toBe(0);
  });

  test("returns 100% when x is exactly max", () => {
    expect(calculatePercentage(50, 10, 50)).toBe(100);
  });

  test("handles negative numbers correctly", () => {
    expect(calculatePercentage(-5, -10, 10)).toBe(25);
  });

  test("handles decimal values correctly", () => {
    expect(calculatePercentage(15, 10, 50)).toBe(12.5);
  });

  test("handles min and max being the same", () => {
    expect(calculatePercentage(10, 10, 10)).toBe(0);
  });
});
