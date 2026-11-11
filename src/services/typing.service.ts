import { logger } from "../lib/logger";

const modifierKeys = [
  "ShiftLeft",
  "ShiftRight",
  "ControlLeft",
  "ControlRight",
  "AltLeft",
  "AltRight",
  "MetaLeft",
  "MetaRight",
  "Backspace",
  "Escape",
];

function registerKey(e: KeyboardEvent, currentKeyStrokes: KeyboardEvent[]) {
  logger.debug(`Key Stroke code ${e.code}`, {
    feature: "Lesson area",
    action: "registering key",
  });

  if (e.repeat) {
    return currentKeyStrokes;
  }

  if (e.code === "Backspace") {
    return currentKeyStrokes.slice(0, -1);
  }

  const isLetter = !modifierKeys.includes(e.code);
  if (isLetter) {
    return [...currentKeyStrokes, e];
  }

  return currentKeyStrokes;
}

function updateClassName(
  targetChar: string,
  targetCharIndex: number,
  currentKeyStrokes: KeyboardEvent[],
): string {
  try {
    const classNames: string[] = ["letter"];
    const isCorrect = targetChar === currentKeyStrokes[targetCharIndex].key;
    const beenTyped = targetCharIndex < currentKeyStrokes.length;

    if (beenTyped && isCorrect) {
      classNames.push("correct");
    } else if (beenTyped && !isCorrect) {
      classNames.push("incorrect");
    }

    return classNames.join(" ");
  } catch (error) {
    return "letter";
  }
}

export { registerKey, updateClassName };
