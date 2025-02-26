import scoreModel, { IScoreData } from "../model/score.model";
import YahtzeeRepository from "../yahtzee.repository";

jest.mock("../model/score.model");

describe("YahtzeeRepository Unit Test", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  beforeEach(() => {});

  it("Should be create via mock", async () => {
    const score: IScoreData = {
      game: "game1",
      player: "player1",
      ones: 1,
      twos: 0,
      threes: 0,
      fours: 0,
      fives: 0,
      sixes: 0,
      threeOfKind: 0,
      fourOfKind: 0,
      fullHouse: 0,
      smallStraight: 0,
      largeStraight: 0,
      yahtzee: 0,
      chance: 0,
      grandTotal: 0,
    };

    const scoreSpy = jest.spyOn(scoreModel, "create").mockResolvedValue({
      _id: "123456789",
      ...score,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

    const yahtzeeRepository = new YahtzeeRepository();
    const result = await yahtzeeRepository.createScore(score);

    expect(scoreSpy).toHaveBeenCalledWith(score);
    expect(result).toEqual({
      _id: "123456789",
      ...score,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });

  it("Should get score via mock", async () => {
    const gameId = "game1";
    const score: IScoreData = {
      game: "game1",
      player: "player1",
      ones: 1,
      twos: 0,
      threes: 0,
      fours: 0,
      fives: 0,
      sixes: 0,
      threeOfKind: 0,
      fourOfKind: 0,
      fullHouse: 0,
      smallStraight: 0,
      largeStraight: 0,
      yahtzee: 0,
      chance: 0,
      grandTotal: 0,
    };
    const scoreSpy = jest.spyOn(scoreModel, "findOne").mockResolvedValue({
      _id: "123456789",
      ...score,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

    const yahtzeeRepository = new YahtzeeRepository();
    const result = await yahtzeeRepository.getScoreByGame(gameId);

    expect(scoreSpy).toHaveBeenCalledWith({ game: gameId });
    expect(result).toEqual({
      _id: "123456789",
      ...score,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });
});
