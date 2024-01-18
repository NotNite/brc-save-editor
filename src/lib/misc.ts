import React from "react";
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

export type Binding<T> = {
  get: () => T;
  set: (value: T) => void;
};

export function useBinding<T>(
  read: () => T,
  write: (value: T) => void
): Binding<T> {
  const [value, setValue] = React.useState(read());

  return {
    get: () => value,
    set: (newValue: T) => {
      setValue(newValue);
      write(newValue);
    }
  };
}

export function useArrayBinding<T>(
  idx: number,
  read: () => T,
  write: (value: T) => void
): Binding<T> {
  const [value, setValue] = React.useState(read());

  React.useEffect(() => {
    setValue(read());
  }, [idx, read]);

  return {
    get: () => value,
    set: (newValue: T) => {
      setValue(newValue);
      write(newValue);
    }
  };
}
