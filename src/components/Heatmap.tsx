import { KEYBOARD_LAYOUT } from "../constants/keyboardLayout";
import { getKeyForChar } from "../services/keyboard.service";
import "../styles/Heatmap.css";

interface HeatmapProps {
  expectedLetter: string | undefined;
}

export default function Heatmap({ expectedLetter }: HeatmapProps) {
  const targetKey = getKeyForChar(expectedLetter);

  return (
    <div className="heatmap-wrapper">
      {KEYBOARD_LAYOUT.map((row, rowIndex) => (
        <div key={rowIndex} className="heatmap-row">
          {row.map((keyDef) => {
            const isExpected = targetKey?.code === keyDef.code;

            const classNames = ["heatmap-key"];
            if (keyDef.styleClassName) classNames.push(keyDef.styleClassName);
            if (keyDef.finger) classNames.push(`finger-${keyDef.finger}`);
            if (isExpected) classNames.push("expected-letter");

            return (
              <div key={keyDef.code} className={classNames.join(" ")}>
                {keyDef.label}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
