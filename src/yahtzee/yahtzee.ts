export type DiceType = 1 | 2 | 3 | 4 | 5 | 6;
export type TargetType =
  | DiceType
  | "Chance"
  | "Yahtzee"
  | "Full House"
  | "small"
  | "large";
export type DiceArrayType = [DiceType, DiceType, DiceType, DiceType, DiceType];

class Yahtzee {
  calculateDicesByTarget(dices: DiceArrayType, target: number): number {
    let score: number = 0;
    if (target < 1 || target > 6) {
      throw new Error("Invalid target");
    }
    for (let i = 0; i < dices.length; i++) {
      if (dices[i] === target) {
        score += target;
      }
    }
    return score;
  }

  calculateByNumberOfkind(dices: DiceArrayType, target: TargetType): number {
    if (this.isValidPartition(dices, target)) {
      return dices.reduce((prv, cur) => prv + cur, 0);
    }
    return 0;
  }

  calculateDicesByChance(dices: DiceArrayType, target: TargetType): number {
    return dices.reduce((prv, cur) => prv + cur, 0);
  }

  calculateDicesByFullHouse(dices: DiceArrayType, target: TargetType): number {
    if (this.isValidPartition(dices, target)) return 25;
    return 0;
  }

  yahtzee(dices: DiceArrayType, target: TargetType): number {
    if (this.isValidPartition(dices, target)) return 50;
    return 0;
  }

  calculateByStraight(dices: DiceArrayType, target: TargetType): number {
    dices.sort((a, b) => a - b);
    let maxStreak = 0;
    let streak = 0;

    for (let i = 1; i < dices.length; i++) {
      if (dices[i] - 1 === dices[i - 1]) {
        streak += 1;
      } else {
        streak = 0;
      }
      maxStreak = Math.max(maxStreak, streak);
    }

    if (target === "small") return maxStreak >= 3 ? 30 : 0;
    if (target === "large") return maxStreak >= 4 ? 40 : 0;
    return 0;
  }

  isValidPartition(dices: DiceArrayType, target: TargetType): boolean {
    const diceCount = Array(6).fill(0);
    for (let dice of dices) diceCount[dice - 1] += 1;

    if (target === "Full House") {
      return diceCount.includes(3) && diceCount.includes(2);
    }
    if (target === "Yahtzee") {
      return diceCount.includes(5);
    }
    if (target === 3) {
      return diceCount.some((count) => count >= 3);
    }
    if (target === 4) {
      return diceCount.some((count) => count >= 4);
    }

    return false;
  }
}

export default Yahtzee;
