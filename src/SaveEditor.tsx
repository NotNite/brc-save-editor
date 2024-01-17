import { BinaryWriter } from "./lib/binary";
import SaveFile from "./lib/save";

function write(save: SaveFile) {
  const bw = new BinaryWriter();
  save.write(bw);

  const blob = new Blob([bw.toBytes()], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "save.brp";
  a.click();

  URL.revokeObjectURL(url);
}

export default function SaveEditor({ save }: { save: SaveFile }) {
  return (
    <div>
      <button onClick={() => write(save)}>Save</button>
    </div>
  );
}
