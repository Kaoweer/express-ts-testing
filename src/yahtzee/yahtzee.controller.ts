import { Request, Response } from "express";
import YahtzeeService from "./yahtzee.service";

class YahtzeeController {
  constructor(private yahtzeeService: YahtzeeService) {}
  async createScore(req: Request, res: Response) {
    try {
      const result = await this.yahtzeeService.createScore(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  // getScoreByGame(req: Request, res: Response) {
  //   try {
  //     const result = this.yahtzeeService.getScoreByGame(req.params);
  //     res.status(200).json(result);
  //   } catch (error) {
  //     res.status(500).json({ message: "Internal server error" });
  //   }
  // }
}

export default YahtzeeController;
