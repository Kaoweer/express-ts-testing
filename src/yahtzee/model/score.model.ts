import mongoose, { Document, Schema } from "mongoose";

export interface IScoreData {
  game: string;
  player: string;
  ones: number;
  twos: number;
  threes: number;
  fours: number;
  fives: number;
  sixes: number;
  threeOfKind: number;
  fourOfKind: number;
  fullHouse: number;
  smallStraight: number;
  largeStraight: number;
  yahtzee: number;
  chance: number;
  grandTotal: number;
}

export interface IscoreSchema extends IScoreData, Document {
  createdAt: Date;
  updatedAt: Date;
}

const ScoreSchema = new Schema<IscoreSchema>(
  {
    game: { type: String, required: true },
    player: { type: String, required: true },
    ones: { type: Number, default: 0 },
    twos: { type: Number, default: 0 },
    threes: { type: Number, default: 0 },
    fours: { type: Number, default: 0 },
    fives: { type: Number, default: 0 },
    sixes: { type: Number, default: 0 },
    threeOfKind: { type: Number, default: 0 },
    fourOfKind: { type: Number, default: 0 },
    fullHouse: { type: Number, default: 0 },
    smallStraight: { type: Number, default: 0 },
    largeStraight: { type: Number, default: 0 },
    yahtzee: { type: Number, default: 0 },
    chance: { type: Number, default: 0 },
    grandTotal: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IscoreSchema>("Score", ScoreSchema);
