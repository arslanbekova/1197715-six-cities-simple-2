export const generateRandomValue = (min:number, max: number, numAfterDigit = 0) =>
  +((Math.random() * (max - min)) + min).toFixed(numAfterDigit);

export const getRandomItems = <T>(items: T[]):T[] => {
  const startPosition = generateRandomValue(0, items.length - 1);
  const endPosition = startPosition + generateRandomValue(startPosition, items.length);
  return items.slice(startPosition, endPosition);
};

export const getRandomItem = <T>(items: T[]):T =>
  items[generateRandomValue(0, items.length - 1)];

export const getRandomString = (startIdx = 2, finishIdx = 7, base = 36): string => Math.random().toString(base).slice(startIdx, finishIdx);
