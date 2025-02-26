import { IScoreData, IscoreSchema } from "../model/score.model";
import Yahtzee from "../yahtzee";
import YahtzeeRepository from "../yahtzee.repository";
import YahtzeeService from "../yahtzee.service";

jest.mock("../yahtzee.repository");
jest.mock("../yahtzee");

describe("YahtzeeService", () => {
  let yahtzeeService: YahtzeeService;
  let mockYahtzeeRepository: jest.Mocked<YahtzeeRepository>;
  let mockYahtzee: jest.Mocked<Yahtzee>;

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

  beforeEach(() => {
    mockYahtzeeRepository = {
      createScore: jest.fn(),
      getScoreByGame: jest.fn(),
    } as unknown as jest.Mocked<YahtzeeRepository>;

    mockYahtzee = new Yahtzee() as jest.Mocked<Yahtzee>;

    yahtzeeService = new YahtzeeService(mockYahtzeeRepository, mockYahtzee);
  });

  describe("createScore", () => {
    it("ควรสร้าง Score ใน Database", async () => {
      const expectedResult = {
        __v: 0,
        _id: "123456789",
        createdAt: new Date(),
        updatedAt: new Date(),
        ...score,
      } as unknown as IscoreSchema;

      mockYahtzeeRepository.createScore.mockResolvedValue(expectedResult);

      const result = await yahtzeeService.createScore(score);

      expect(mockYahtzeeRepository.createScore).toHaveBeenCalledWith(score);
      expect(mockYahtzeeRepository.createScore).toHaveBeenCalledTimes(1);
      expect(result).toEqual({
        ...score,
        __v: expect.any(Number),
        _id: expect.any(String),
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      });
    });

    it("Should throw error if database creation fails", async () => {
      mockYahtzeeRepository.createScore.mockRejectedValue(
        new Error("Create fail")
      );

      await expect(yahtzeeService.createScore(score)).rejects.toThrow(
        "Create fail"
      );
      expect(mockYahtzeeRepository.createScore).toHaveBeenCalledWith(score);
      expect(mockYahtzeeRepository.createScore).toHaveBeenCalledTimes(1);
    });
  });
});
