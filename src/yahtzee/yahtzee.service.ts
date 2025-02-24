import { IScoreData } from "./model/score.model";
import YahtzeeRepository from "./yahtzee.repository";
class YahtzeeService {
  constructor(private yahtzeeRespository: YahtzeeRepository) {}

  async createScore(score: IScoreData): Promise<IScoreData> {
    try {
      return await this.yahtzeeRespository.createScore(score);
    } catch (error) {
      throw error;
    }
  }
  async getScoreByGame(gameId: string): Promise<IScoreData | null> {
    try {
      return await this.yahtzeeRespository.getScoreByGame(gameId);
    } catch (error) {
      throw error;
    }
  }
}

export default YahtzeeService;
