type DiceType = 1 | 2 | 3 | 4 | 5 | 6;
export type DiceArrayType = [DiceType, DiceType, DiceType, DiceType, DiceType];

class Yahtzee {
  calculateDicesByTarget(dices: DiceArrayType, target: DiceType): number {
    let score: number = 0;
    //   if (target == 1) {
    //     for (let i = 0; i < dices.length; i++) {
    //       if (dices[i] == 1) {
    //         score += 1;
    //       }
    //     }
    //   }
    //   if (target == 2) {
    //     for (let i = 0; i < dices.length; i++) {
    //       if (dices[i] == 2) {
    //         score += 2;
    //       }
    //     }
    //   }
    //   if (target == 3) {
    //     for (let i = 0; i < dices.length; i++) {
    //       if (dices[i] == 3) {
    //         score += 3;
    //       }
    //     }
    //   }
    //   if (target == 4) {
    //     return 4;
    //   }
    //   return score;

    for (let i = 0; i < dices.length; i++) {
      if (dices[i] === target) {
        score += target;
      }
    }
    return score;
  }
}

export default Yahtzee;
