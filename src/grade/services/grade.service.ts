export const getGrade = (score: number): string => {
  if (score % 1 !== 0) {
    return "invalid type";
  }
  if (score > 100 || score < 0) {
    return "invalid input";
  }
  if (score >= 80) {
    return "A";
  }
  if (score >= 75) {
    return "B+";
  }
  if (score >= 70) {
    return "B";
  }
  if (score >= 65) {
    return "C+";
  }
  if (score >= 60) {
    return "C";
  }
  if (score >= 55) {
    return "D+";
  }
  if (score >= 50) {
    return "D";
  }
  return "F";
};
