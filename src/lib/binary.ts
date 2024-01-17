import { Enum } from "./types";

// Behold, BinaryReader/BinaryWriter like classes in a language that doesn't understand unsigned integers
export interface BinaryInterface {
  data: Uint8Array;
  view: DataView;
  length: number;
  position: number;
}

export interface Saveable {
  write(bw: BinaryWriter): void;
}

export class BinaryReader implements BinaryInterface {
  data: Uint8Array;
  view: DataView;
  length: number;
  position: number;

  constructor(data: Uint8Array) {
    this.data = data;
    this.view = new DataView(data.buffer);

    this.length = data.length;
    this.position = 0;
  }

  readByte() {
    return this._read(this.view.getInt8, 1);
  }

  readBoolean() {
    return this.readByte() != 0;
  }

  readInt32() {
    return this._read(this.view.getInt32, 4);
  }

  readSingle() {
    return this._read(this.view.getFloat32, 4);
  }

  readInt64() {
    return this._read(this.view.getBigInt64, 8);
  }

  readString() {
    const length = this.readVarInt();
    const result = this.read(length);
    return new TextDecoder().decode(result);
  }

  readVarInt() {
    let result = 0;
    let shift = 0;
    let byte = 0;

    do {
      byte = this.readByte();
      result |= (byte & 0x7f) << shift;
      shift += 7;
    } while ((byte & 0x80) != 0);

    return result;
  }

  readEnumString<T extends Enum>(enumType: T) {
    const key = this.readString();
    return enumType[key] as T[keyof T];
  }

  readEnumInt32<T extends Enum>(enumType: T) {
    const value = this.readInt32();
    const key = Object.keys(enumType).find(
      (key) => enumType[key] === value
    ) as keyof T;
    return enumType[key];
  }

  read(length: number) {
    const data = this.data.subarray(this.position, this.position + length);
    this.position += length;
    return data;
  }

  private _read<T>(
    func: (position: number, littleEndian?: boolean) => T,
    length: number
  ): T {
    const result = func.call(this.view, this.position, true);
    this.position += length;
    return result;
  }
}

export class BinaryWriter implements BinaryInterface {
  data: Uint8Array;
  view: DataView;
  length: number;
  position: number;

  constructor() {
    this.data = new Uint8Array(1024 * 1024);
    this.view = new DataView(this.data.buffer);

    this.length = 0;
    this.position = 0;
  }

  toBytes() {
    return this.data.subarray(0, this.position);
  }

  writeByte(value: number) {
    this._write(this.view.setInt8, value, 1);
  }

  writeBoolean(value: boolean) {
    this.writeByte(value ? 1 : 0);
  }

  writeInt32(value: number) {
    this._write(this.view.setInt32, value, 4);
  }

  writeSingle(value: number) {
    this._write(this.view.setFloat32, value, 4);
  }

  writeInt64(value: bigint) {
    this._write(this.view.setBigInt64, value, 8);
  }

  writeString(value: string) {
    const encoded = new TextEncoder().encode(value);
    this.writeVarInt(encoded.length);
    this.write(encoded);
  }

  writeVarInt(value: number) {
    do {
      let byte = value & 0x7f;
      value >>= 7;
      if (value != 0) {
        byte |= 0x80;
      }
      this.writeByte(byte);
    } while (value != 0);
  }

  writeEnumString<T extends Enum>(enumType: T, value: T[keyof T]) {
    const key = Object.keys(enumType).find((key) => enumType[key] === value)!;
    this.writeString(key);
  }

  write(data: Uint8Array) {
    this.grow(data.length);
    this.data.set(data, this.position);
    this.position += data.length;
  }

  private _write<T>(
    func: (position: number, value: T, littleEndian?: boolean) => void,
    value: T,
    length: number
  ) {
    this.grow(length);
    func.call(this.view, this.position, value, true);
    this.position += length;
  }

  private grow(length: number) {
    const required = this.length - (this.position + length);
    if (required <= 0) return;
    console.log("Growing binary writer by", required, "bytes");

    const newData = new Uint8Array(this.length + required);
    newData.set(this.data);
    this.data = newData;
    this.view = new DataView(this.data.buffer);
  }
}

export async function asyncFileReader(file: File): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result instanceof ArrayBuffer) {
        resolve(new Uint8Array(reader.result));
      } else {
        reject(new Error("FileReader result is not an ArrayBuffer"));
      }
    };

    reader.readAsArrayBuffer(file);
  });
}
