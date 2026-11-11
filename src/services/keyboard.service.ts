import { KEYBOARD_LAYOUT } from "../constants/keyboardLayout";
import { type KeyDefinition } from "../types/keyboard.types";

// Pre-compute a map: character -> KeyDefinition for O(1) lookups
const charToKeyMap = new Map<string, KeyDefinition>();

KEYBOARD_LAYOUT.flat().forEach((keyDef) => {
  keyDef.values.forEach((char) => {
    charToKeyMap.set(char, keyDef);
  });
});

export function getKeyForChar(
  char: string | undefined,
): KeyDefinition | undefined {
  if (!char) return undefined;
  return charToKeyMap.get(char);
}
