import Yahtzee, { DiceArrayType } from "./yahtzee";

it("ได้คะแนนเท่ากับ 1 เมื่อส่ง dices เป็น [1,2,3,4,6] และ target เป็น 1", () => {
  const dices: DiceArrayType = [1, 2, 3, 4, 6];
  const target = 1;
  const expected = 1;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 3 เมื่อส่ง dices เป็น [2,1,4,1,1] และ target เป็น 1", () => {
  const dices: DiceArrayType = [2, 1, 4, 1, 1];
  const target = 1;
  const expected = 3;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [2,5,2,3,4] และ target เป็น 1", () => {
  const dices: DiceArrayType = [2, 5, 2, 3, 4];
  const target = 1;
  const expected = 0;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 2 เมื่อส่ง dices เป็น [3,4,6,2,1] และ target เป็น 2", () => {
  const dices: DiceArrayType = [3, 4, 6, 2, 1];
  const target = 2;
  const expected = 2;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 6 เมื่อส่ง dices เป็น [2,5,2,6,2] และ target เป็น 2", () => {
  const dices: DiceArrayType = [2, 5, 2, 6, 2];
  const target = 2;
  const expected = 6;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [3,5,6,1,1] และ target เป็น 2", () => {
  const dices: DiceArrayType = [3, 5, 6, 1, 1];
  const target = 2;
  const expected = 0;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 3 เมื่อส่ง dices เป็น [1,2,3,4,5] และ target เป็น 3", () => {
  const dices: DiceArrayType = [1, 2, 3, 4, 5];
  const target = 3;
  const expected = 3;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 12 เมื่อส่ง dices เป็น [3,3,4,3,3] และ target เป็น 3", () => {
  const dices: DiceArrayType = [3, 3, 4, 3, 3];
  const target = 3;
  const expected = 12;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [1,4,5,6,2] และ target เป็น 3", () => {
  const dices: DiceArrayType = [1, 4, 5, 6, 2];
  const target = 3;
  const expected = 0;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 4 เมื่อส่ง dices เป็น [1,2,3,4,5] และ target เป็น 4", () => {
  const dices: DiceArrayType = [1, 2, 3, 4, 5];
  const target = 4;
  const expected = 4;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});
