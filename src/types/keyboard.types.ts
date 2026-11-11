export type Finger =
  | "left-pinky"
  | "left-ring"
  | "left-middle"
  | "left-index"
  | "thumb"
  | "right-index"
  | "right-middle"
  | "right-ring"
  | "right-pinky";

export interface KeyDefinition {
  /** W3C KeyboardEvent.code matching the physical key */
  code: string;
  label: string;
  values: string[];
  finger?: Finger;
  /** Optional custom CSS classes (e.g. key width) */
  styleClassName?: string;
}
