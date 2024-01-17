import { BinaryReader, BinaryWriter, Saveable } from "./binary";

export class Vector3 implements Saveable {
  x: number;
  y: number;
  z: number;

  // I wish TypeScript had multiple ctors :pensive:
  static zero: Vector3 = (() => {
    const array = new Uint8Array(12);
    const br = new BinaryReader(array);
    return new Vector3(br);
  })();

  constructor(br: BinaryReader) {
    this.x = br.readSingle();
    this.y = br.readSingle();
    this.z = br.readSingle();
  }

  write(bw: BinaryWriter) {
    bw.writeSingle(this.x);
    bw.writeSingle(this.y);
    bw.writeSingle(this.z);
  }
}
