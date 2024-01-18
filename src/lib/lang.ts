import lang from "../assets/English.fods?raw";
import * as XLSX from "xlsx";
import { ObjectiveID, Stage } from "./types";

const workbook = XLSX.read(lang, { type: "string" });

const stageNames: Partial<Record<Stage, string>> = {
  [Stage.downhill]: "Versum Hill",
  [Stage.hideout]: "Hideout",
  [Stage.Mall]: "Millennium Mall",
  [Stage.osaka]: "Mataan",
  [Stage.Prelude]: "Police Station",
  [Stage.pyramid]: "Pyramid Island",
  [Stage.square]: "Millennium Square",
  [Stage.tower]: "Brink Terminal"
};

export function getStageName(index: Stage) {
  return stageNames[index] ?? `Unknown (${Stage[index]})`;
}

export function getStoryObjectiveName(index: ObjectiveID) {
  const sheet = workbook.Sheets["ObjectiveText"];
  const str = `O${(index + 1).toString().padStart(2, "0")}`;

  const cell = Object.keys(sheet)
    .filter((key) => key.startsWith("A"))
    .find((key) => sheet[key].v === str);
  if (!cell) return `Unknown (${ObjectiveID[index]})`;

  const name = sheet[cell.replace("A", "B")].v;
  return name;
}

export function getCharacterName(index: number) {
  const sheet = workbook.Sheets["CharacterNames"];
  const str = `CHARACTER${index.toString().padStart(3, "0")}`;

  const cell = Object.keys(sheet)
    .filter((key) => key.startsWith("A"))
    .find((key) => sheet[key].v === str);
  if (!cell) return `Unknown (${index})`;

  const name = sheet[cell.replace("A", "B")].v;
  return name;
}

export function getEmailSubject(str: string) {
  const sheet = workbook.Sheets["EmailMessages"];
  const cell = Object.keys(sheet)
    .filter((key) => key.startsWith("A"))
    .find((key) => sheet[key].v === str);

  if (!cell) return "Unknown";

  const subject = sheet[cell.replace("A", "B")].v;
  return subject;
}

export function getMoveStyleSkinName(str: string) {
  const sheet = workbook.Sheets["SkinText"];
  const cell = Object.keys(sheet)
    .filter((key) => key.startsWith("A"))
    .find((key) => sheet[key].v === str);

  if (!cell) return `Unknown (${str})`;

  const name = sheet[cell.replace("A", "B")].v;
  return name;
}
