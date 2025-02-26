import YahtzeeRepository from "../yahtzee.repository";
import scoreModel, { IScoreData } from "../model/score.model";
import mongoose from "mongoose";
// No need to import mongoose here as the connection is handled by integrationSetup.ts

describe("YahtzeeRepository Integration Test", () => {
  let yahtZeeRepository: YahtzeeRepository;
  let testScoreId: string;

  const testScore: IScoreData = {
    game: "test-game-id",
    player: "test-player",
    ones: 1,
    twos: 2,
    threes: 3,
    fours: 4,
    fives: 5,
    sixes: 6,
    threeOfKind: 10,
    fourOfKind: 12,
    fullHouse: 25,
    smallStraight: 30,
    largeStraight: 40,
    yahtzee: 50,
    chance: 15,
    grandTotal: 203,
  };

  beforeAll(() => {
    yahtZeeRepository = new YahtzeeRepository();
  });

  afterAll(async () => {
    await scoreModel.deleteMany({ game: "test-game-id" });
  });

  it("should be connected to the database", () => {
    expect(mongoose.connection.readyState).toEqual(1);
  });
  it("Should create a new score in the database", async () => {
    const result = await yahtZeeRepository.createScore(testScore);

    expect(result).toEqual(
      expect.objectContaining({
        ...testScore,
      })
    );
    expect(result._id).toBeDefined();
    expect(result.createdAt).toBeInstanceOf(Date);
    expect(result.updatedAt).toBeInstanceOf(Date);
  });
  it("Should get a score on database from gameId", async () => {
    await yahtZeeRepository.createScore(testScore);

    const result = await yahtZeeRepository.getScoreByGame("test-game-id");
    expect(result).toEqual(
      expect.objectContaining({
        ...testScore,
      })
    );
    expect(result?._id).toBeDefined();
    expect(result?.createdAt).toBeInstanceOf(Date);
    expect(result?.updatedAt).toBeInstanceOf(Date);
  });
});
