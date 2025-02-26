import { IScoreData } from "./model/score.model";
import YahtzeeRepository from "./yahtzee.repository";
import Yahtzee from "./yahtzee";
class YahtzeeService {
  constructor(
    private yahtzeeRespository: YahtzeeRepository,
    private yahtzee: Yahtzee
  ) {}

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
  // async updateScoreByGame(gameId: string, requestData: any) {
  //   try {
  //     this.yahtzee.calculateScoreGateway();
  //     return await this.yahtzeeRespository.updateScoreByGame(
  //       gameId,
  //       fieldScore
  //     );
  //   } catch (error) {}
  // }
}

export default YahtzeeService;
