import scoreModel, { IScoreData, IscoreSchema } from "./model/score.model";

class YahtzeeRepository {
  async createScore(score: IScoreData): Promise<IscoreSchema> {
    return await scoreModel.create(score);
  }

  async getScoreByGame(gameId: string): Promise<IscoreSchema | null> {
    return await scoreModel.findOne({ _id: gameId });
  }
}

export default YahtzeeRepository;
