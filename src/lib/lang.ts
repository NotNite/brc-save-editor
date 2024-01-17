import lang from "../assets/English.fods?raw";
import * as XLSX from "xlsx";

const workbook = XLSX.read(lang, { type: "string" });

export function getCharacterName(index: number) {
  const sheet = workbook.Sheets["CharacterNames"];
  const str = `CHARACTER${index.toString().padStart(3, "0")}`;

  // Find the first row with `str` in the column A
  const cell = Object.keys(sheet)
    .filter((key) => key.startsWith("A"))
    .find((key) => sheet[key].v === str)!;

  const row = parseInt(cell.slice(1));
  const name = sheet[`B${row}`].v;

  return name;
}
