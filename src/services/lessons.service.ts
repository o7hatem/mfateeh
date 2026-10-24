import generateRandomArray from "../utils/generateRandomArray";

function Type0Lesson(letter: string): string {
  return Array<string>(5).fill(letter).join("");
}

function Type1Lesson(letters: [string, string]): string {
  const pattern: number[] = [0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1];

  const lessonText = Array.from({ length: pattern.length }, (_, index) => {
    return letters[pattern[index]];
  });

  return lessonText.join("");
}

function Type2Lesson(letters: string[]): string {
  const pattern: number[][] = generateRandomArray(12, 4, 0, letters.length - 1);

  const letterIndeces: string[][] = pattern.map((wordPattern) =>
    wordPattern.map((letterIndex) => letters[letterIndex]),
  );

  const words: string[] = letterIndeces.map((item) => item.join(""));

  return words.join(" ");
}

export { Type0Lesson, Type1Lesson, Type2Lesson };
