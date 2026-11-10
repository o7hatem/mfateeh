import "../styles/Heatmap.css";

const upperRow: [string, string][] = [
  ["Tab", "tab-key"],
  ["Q", ""],
  ["W", ""],
  ["E", ""],
  ["R", ""],
  ["T", ""],
  ["Y", ""],
  ["U", ""],
  ["I", ""],
  ["O", ""],
  ["P", ""],
  ["[", ""],
  ["]", ""],
];

const homeRow: [string, string][] = [
  ["Caps Lock", "caps-lock"],
  ["A", ""],
  ["S", ""],
  ["D", ""],
  ["F", ""],
  ["G", ""],
  ["H", ""],
  ["J", ""],
  ["K", ""],
  ["L", ""],
  [";", ""],
  ["'", ""],
];

const lowerRow: [string, string][] = [
  ["Shift", "shift"],
  ["Z", ""],
  ["X", ""],
  ["C", ""],
  ["V", ""],
  ["B", ""],
  ["N", ""],
  ["M", ""],
  [",", ""],
  [".", ""],
  ["/", ""],
];

const modifiersRow: [string, string][] = [
  ["Ctrl", ""],
  ["Fn", ""],
  ["Win", ""],
  ["Alt", ""],
  ["Space", "space"],
  ["Alt", ""],
  ["Ctrl", ""],
  ["", "empty-key"],
];

const heatmapRows: [string, string][][] = [
  upperRow,
  homeRow,
  lowerRow,
  modifiersRow,
];

export default function Heatmap({
  expectedLetter,
}: {
  expectedLetter: string;
}) {
  return (
    <div className="heatmap-wrapper">
      {heatmapRows.map((row: [string, string][]) => {
        return (
          <div className="heatmap-row">
            {row.map(([keyLetter, stylingClassNames]) => {
              const classNames = ["heatmap-key"];
              classNames.push(stylingClassNames);
              if (keyLetter.toLowerCase() === expectedLetter) {
                classNames.push("expected-letter");
              }

              return <div className={classNames.join(" ")}>{keyLetter}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
}
