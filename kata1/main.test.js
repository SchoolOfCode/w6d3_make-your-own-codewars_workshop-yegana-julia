//👉 Write your tests below here:
import { diffEvenAndOdds } from "./main.js";

describe("Random tests", function () {
  test(`Random tests`, () => {
    const actual = diffEvenAndOdds([1, 2, 3, 4, 5]);
    const expected = 3;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = diffEvenAndOdds([5, 10, 15, 20, 25]);
    const expected = 15;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = diffEvenAndOdds([1, 5, 10, 11, 2]);
    const expected = 5;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = diffEvenAndOdds([10, -11, 3, 100, 54]);
    const expected = 172;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = diffEvenAndOdds([15, 34, 3, 22, 154, 43]);
    const expected = 149;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = diffEvenAndOdds([100, 100000, 20000, -200000, -4000]);
    const expected = 83900;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = diffEvenAndOdds([215, 334, 43, 2, 14, 4301]);
    const expected = 4209;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = diffEvenAndOdds([100, 4, 20000, -200, -40]);
    const expected = 19864;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = diffEvenAndOdds([1, 1, 20000, 20000, 40]);
    const expected = 40038;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = diffEvenAndOdds([-1, 1, 200, 1243, -432]);
    const expected = 1475;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = diffEvenAndOdds([50, 4, 4, -200, -40]);
    const expected = 182;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = diffEvenAndOdds([-123, 1, 201, 1247, -432]);
    const expected = 1758;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = diffEvenAndOdds([3, 1, 100, 1000, 10000, 100000]);
    const expected = 111096;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = diffEvenAndOdds([3, 1, 100, 1000, 150003, 1000]);
    const expected = 147907;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = diffEvenAndOdds([
      2000000000002, 3, 40000000000, 5000000000000,
    ]);
    const expected = 7039999999999;
    expect(actual).toBe(expected);
  });
});
