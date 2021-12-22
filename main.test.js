//👉 Write your tests below here:
import { sumMinMaxArr } from "./main.js";
describe("Test for arrays", function () {
  test(`Examples`, () => {
    const actual = sumMinMaxArr([]);
    const expected = 0;
    expect(actual).toBe(expected);
  });
  test(`Examples`, () => {
    const actual = sumMinMaxArr([1]);
    const expected = 0;
    expect(actual).toBe(expected);
  });
  test(`Examples`, () => {
    const actual = sumMinMaxArr(["", ""]);
    const expected = "Use numbers";
    expect(actual).toBe(expected);
  });
  test(`Examples`, () => {
    const actual = sumMinMaxArr([2, 1]);
    const expected = 0;
    expect(actual).toBe(expected);
  });
});

describe("Test for arrays of strings, boolean", function () {
  test(`Examples for strings`, () => {
    const actual = sumMinMaxArr(["bye", "hello"]);
    const expected = "Use numbers";
    expect(actual).toBe(expected);
  });
  test(`Examples for strings`, () => {
    const actual = sumMinMaxArr([true, false]);
    const expected = "Use numbers";
    expect(actual).toBe(expected);
  });
  test(`Examples for strings`, () => {
    const actual = sumMinMaxArr([true]);
    const expected = "Use numbers";
    expect(actual).toBe(expected);
  });
  test(`Examples for strings`, () => {
    const actual = sumMinMaxArr(["", "hello"]);
    const expected = "Use numbers";
    expect(actual).toBe(expected);
  });
  test(`Examples for strings`, () => {
    const actual = sumMinMaxArr(["", "hello", "o", "hi"]);
    const expected = "Use numbers";
    expect(actual).toBe(expected);
  });
});

describe("Random tests", function () {
  test(`Random tests`, () => {
    const actual = sumMinMaxArr([1, 5, 10, 11, 2]);
    const expected = true;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = sumMinMaxArr([10, -11, 3, 100, 54]);
    const expected = false;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = sumMinMaxArr([15, 34, 3, 22, 154, 43]);
    const expected = false;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = sumMinMaxArr([100, 100000, 20000, -200000, -4000]);
    const expected = true;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = sumMinMaxArr([215, 334, 43, 2, 14, 4301]);
    const expected = false;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = sumMinMaxArr([100, 4, 20000, -200, -40]);
    const expected = true;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = sumMinMaxArr([1, 1, 20000, 20000, 40]);
    const expected = false;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = sumMinMaxArr([-1, 1, 200, 1243, -432]);
    const expected = false;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = sumMinMaxArr([50, 4, 4, -200, -40]);
    const expected = true;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = sumMinMaxArr([-123, 1, 201, 1247, -432]);
    const expected = false;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = sumMinMaxArr([3, 1, 100, 1000, 10000, 100000]);
    const expected = false;
    expect(actual).toBe(expected);
  });
  test(`Random tests`, () => {
    const actual = sumMinMaxArr([3, 1, 100, 1000, 150003, 1000]);
    const expected = true;
    expect(actual).toBe(expected);
  });
});
