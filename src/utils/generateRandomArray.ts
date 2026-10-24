export default function generateRandomArray(
  wordCount: number,
  wordLength: number,
  min: number,
  max: number,
): number[][] {
  return Array.from({ length: wordCount }, () =>
    Array.from(
      { length: wordLength },
      () => Math.floor(Math.random() * (max - min + 1)) + min,
    ),
  );
}
