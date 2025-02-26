import { Request, Response } from "express";
import YahtzeeService from "../yahtzee.service";
import YahtzeeController from "../yahtzee.controller"; // Assuming this is your controller

describe("YahtzeeController - createScore", () => {
  let yahtzeeController: YahtzeeController;
  let mockYahtzeeService: any;
  let req: Partial<Request>;
  let res: Partial<Response>;
  let score: any;

  beforeEach(() => {
    // Sample Score Data
    score = {
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

    // Mock the service
    mockYahtzeeService = {
      createScore: jest.fn(),
    };

    // Create a real controller instance with a mocked service
    yahtzeeController = new YahtzeeController(mockYahtzeeService);

    // Mock Express req and res
    req = { body: score } as Partial<Request>;
    res = {
      status: jest.fn().mockReturnThis(), // Allows method chaining
      json: jest.fn(),
    } as Partial<Response>;
  });

  afterEach(() => {
    jest.clearAllMocks(); // Reset mocks to prevent cross-test pollution
  });

  it("should return 201 and the created score", async () => {
    // Mock service to return a successful response
    mockYahtzeeService.createScore.mockResolvedValue({
      _id: "123456789",
      createdAt: new Date(),
      updatedAt: new Date(),
      ...score,
    });

    // Call controller method
    await yahtzeeController.createScore(req as Request, res as Response);

    // Validate response
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      _id: expect.any(String),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
      ...score,
    });

    // Ensure the service was called correctly
    expect(mockYahtzeeService.createScore).toHaveBeenCalledWith(score);
  });

  it("should return 500 if service throws an error", async () => {
    // Mock service to throw an error
    mockYahtzeeService.createScore.mockRejectedValue(
      new Error("Internal server error")
    );

    // Call controller method
    await yahtzeeController.createScore(req as Request, res as Response);

    // Validate response
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Internal server error" });

    // Ensure the service was still called
    expect(mockYahtzeeService.createScore).toHaveBeenCalledWith(score);
  });
});
