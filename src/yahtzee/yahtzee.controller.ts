import { Request, Response } from "express";
import YahtzeeService from "./yahtzee.service";

class yahtzeeController {
  constructor(private yahtzeeService: YahtzeeService) {}
  createScore(req: Request, res: Response) {
    try {
      const result = this.yahtzeeService.createScore(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  getScoreByGame(req: Request, res: Response) {
    try {
      const result = this.yahtzeeService.getScoreByGame(req.params);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default yahtzeeController;
