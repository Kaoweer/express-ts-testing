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

it("ได้คะแนนเท่ากับ 8 เมื่อส่ง dices เป็น [5,2,4,4,5] และ target เป็น 4", () => {
  const dices: DiceArrayType = [5, 2, 4, 4, 5];
  const target = 4;
  const expected = 8;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [6,1,3,6,5] และ target เป็น 4", () => {
  const dices: DiceArrayType = [6, 1, 3, 6, 5];
  const target = 4;
  const expected = 0;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 5 เมื่อส่ง dices เป็น [1,2,3,4,5] และ target เป็น 5", () => {
  const dices: DiceArrayType = [1, 2, 3, 4, 5];
  const target = 5;
  const expected = 5;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 15 เมื่อส่ง dices เป็น [5,2,3,5,5] และ target เป็น 5", () => {
  const dices: DiceArrayType = [5, 2, 3, 5, 5];
  const target = 5;
  const expected = 15;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [1,2,3,4,4] และ target เป็น 5", () => {
  const dices: DiceArrayType = [1, 2, 3, 4, 4];
  const target = 5;
  const expected = 0;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 6 เมื่อส่ง dices เป็น [4,3,6,1,2] และ target เป็น 6", () => {
  const dices: DiceArrayType = [4, 3, 6, 1, 2];
  const target = 6;
  const expected = 6;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 30 เมื่อส่ง dices เป็น [6,6,6,6,6] และ target เป็น 6", () => {
  const dices: DiceArrayType = [6, 6, 6, 6, 6];
  const target = 6;
  const expected = 30;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [4,4,5,5,3] และ target เป็น 6", () => {
  const dices: DiceArrayType = [4, 4, 5, 5, 3];
  const target = 6;
  const expected = 0;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByTarget(dices, target);

  expect(result).toBe(expected);
});

it("แจ้ง Error 'Invalid target' เมื่อส่ง dices เป็น [1,1,1,1,1] และ target เป็น 0", () => {
  const dices: DiceArrayType = [1, 1, 1, 1, 1];
  const target = 0;
  const expected = "Invalid target";

  const yahtzee = new Yahtzee();

  expect(() => yahtzee.calculateDicesByTarget(dices, target)).toThrow(expected);
});

it("แจ้ง Error 'Invalid target' เมื่อส่ง dices เป็น [1,1,1,1,1] และ target เป็น -1", () => {
  const dices: DiceArrayType = [1, 1, 1, 1, 1];
  const target = -1;
  const expected = "Invalid target";

  const yahtzee = new Yahtzee();

  expect(() => yahtzee.calculateDicesByTarget(dices, target)).toThrow(expected);
});

it("แจ้ง Error 'Invalid target' เมื่อส่ง dices เป็น [2,2,2,2,2] และ target เป็น 7", () => {
  const dices: DiceArrayType = [2, 2, 2, 2, 2];
  const target = 7;
  const expected = "Invalid target";

  const yahtzee = new Yahtzee();

  expect(() => yahtzee.calculateDicesByTarget(dices, target)).toThrow(expected);
});

it("ได้คะแนนเท่ากับ 16 เมื่อส่ง dices เป็น [1,2,3,4,6] และ target เป็น 'Chance'", () => {
  const dices: DiceArrayType = [1, 2, 3, 4, 6];
  const target = "Chance";
  const expected = 16;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByChance(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 19 เมื่อส่ง dices เป็น [4,6,5,1,3] และ target เป็น 'Chance'", () => {
  const dices: DiceArrayType = [4, 6, 5, 1, 3];
  const target = "Chance";
  const expected = 19;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByChance(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 50 เมื่อส่ง dices เป็น [1,1,1,1,1] และ target เป็น 'Yahtzee'", () => {
  const dices: DiceArrayType = [1, 1, 1, 1, 1];
  const target = "Yahtzee";
  const expected = 50;

  const yahtzee = new Yahtzee();
  const result = yahtzee.yahtzee(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [2,4,4,4,4] และ target เป็น 'Yahtzee'", () => {
  const dices: DiceArrayType = [2, 4, 4, 4, 4];
  const target = "Yahtzee";
  const expected = 0;

  const yahtzee = new Yahtzee();
  const result = yahtzee.yahtzee(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 25 เมื่อส่ง dices เป็น [2,2,2,5,5] และ target เป็น 'Full House'", () => {
  const dices: DiceArrayType = [2, 2, 2, 5, 5];
  const target = "Full House";
  const expected = 25;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByFullHouse(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 25 เมื่อส่ง dices เป็น [5,5,2,2,2] และ target เป็น 'Full House'", () => {
  const dices: DiceArrayType = [5, 5, 2, 2, 2];
  const target = "Full House";
  const expected = 25;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByFullHouse(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 25 เมื่อส่ง dices เป็น [1,5,1,1,5] และ target เป็น 'Full House'", () => {
  const dices: DiceArrayType = [1, 5, 1, 1, 5];
  const target = "Full House";
  const expected = 25;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByFullHouse(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 25 เมื่อส่ง dices เป็น [1,1,1,1,5] และ target เป็น 'Full House'", () => {
  const dices: DiceArrayType = [1, 1, 1, 1, 5];
  const target = "Full House";
  const expected = 0;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateDicesByFullHouse(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 5 เมื่อส่ง dices เป็น [1,1,1,1,1] และ target เป็น 3", () => {
  const dices: DiceArrayType = [1, 1, 1, 1, 1];
  const target = 3;
  const expected = 5;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByNumberOfkind(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 13 เมื่อส่ง dices เป็น [2,2,2,2,5] และ target เป็น 3", () => {
  const dices: DiceArrayType = [2, 2, 2, 2, 5];
  const target = 3;
  const expected = 13;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByNumberOfkind(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 8 เมื่อส่ง dices เป็น [1,1,1,2,3] และ target เป็น 3", () => {
  const dices: DiceArrayType = [1, 1, 1, 2, 3];
  const target = 3;
  const expected = 8;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByNumberOfkind(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 12 เมื่อส่ง dices เป็น [2,2,2,3,3] และ target เป็น 3", () => {
  const dices: DiceArrayType = [2, 2, 2, 3, 3];
  const target = 3;
  const expected = 12;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByNumberOfkind(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [1,3,5,5,6] และ target เป็น 3", () => {
  const dices: DiceArrayType = [1, 3, 5, 5, 6];
  const target = 3;
  const expected = 0;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByNumberOfkind(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [2,4,5,3,6] และ target เป็น 3", () => {
  const dices: DiceArrayType = [2, 4, 5, 3, 6];
  const target = 3;
  const expected = 0;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByNumberOfkind(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 30 เมื่อส่ง dices เป็น [6,6,6,6,6] และ target เป็น 4", () => {
  const dices: DiceArrayType = [6, 6, 6, 6, 6];
  const target = 4;
  const expected = 30;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByNumberOfkind(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 26 เมื่อส่ง dices เป็น [5,5,5,5,6] และ target เป็น 4", () => {
  const dices: DiceArrayType = [5, 5, 5, 5, 6];
  const target = 4;
  const expected = 26;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByNumberOfkind(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [1,1,1,4,6] และ target เป็น 4", () => {
  const dices: DiceArrayType = [1, 1, 1, 4, 6];
  const target = 4;
  const expected = 0;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByNumberOfkind(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [5,5,5,3,3] และ target เป็น 4", () => {
  const dices: DiceArrayType = [5, 5, 5, 3, 3];
  const target = 4;
  const expected = 0;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByNumberOfkind(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [1,1,5,4,3] และ target เป็น 4", () => {
  const dices: DiceArrayType = [1, 1, 5, 4, 3];
  const target = 4;
  const expected = 0;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByNumberOfkind(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [1,2,3,4,5] และ target เป็น 4", () => {
  const dices: DiceArrayType = [1, 2, 3, 4, 5];
  const target = 4;
  const expected = 0;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByNumberOfkind(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 30 เมื่อส่ง dices เป็น [1,2,3,4,6] และ target เป็น 'small'", () => {
  const dices: DiceArrayType = [1, 2, 3, 4, 6];
  const target = "small";
  const expected = 30;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByStraight(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 30 เมื่อส่ง dices เป็น [4,6,5,1,3] และ target เป็น 'small'", () => {
  const dices: DiceArrayType = [4, 6, 5, 1, 3];
  const target = "small";
  const expected = 30;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByStraight(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 30 เมื่อส่ง dices เป็น [1,2,3,4,5]และ target เป็น 'small'", () => {
  const dices: DiceArrayType = [1, 2, 3, 4, 5];
  const target = "small";
  const expected = 30;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByStraight(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [1,2,3,5,6] และ target เป็น 'small'", () => {
  const dices: DiceArrayType = [1, 2, 3, 5, 6];
  const target = "small";
  const expected = 0;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByStraight(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 40 เมื่อส่ง dices เป็น [2,3,4,5,6] และ target เป็น 'large'", () => {
  const dices: DiceArrayType = [2, 3, 4, 5, 6];
  const target = "large";
  const expected = 40;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByStraight(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 40 เมื่อส่ง dices เป็น [2,4,5,1,3] และ target เป็น 'large'", () => {
  const dices: DiceArrayType = [2, 4, 5, 1, 3];
  const target = "large";
  const expected = 40;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByStraight(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [1,3,4,5,6] และ target เป็น 'large'", () => {
  const dices: DiceArrayType = [1, 3, 4, 5, 6];
  const target = "large";
  const expected = 0;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByStraight(dices, target);

  expect(result).toBe(expected);
});

it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [2,2,3,4,5] และ target เป็น 'large'", () => {
  const dices: DiceArrayType = [2, 2, 3, 4, 5];
  const target = "large";
  const expected = 0;

  const yahtzee = new Yahtzee();
  const result = yahtzee.calculateByStraight(dices, target);

  expect(result).toBe(expected);
});
