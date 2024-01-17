import { BinaryReader, BinaryWriter, Saveable } from "./binary";
import { Vector3 } from "./misc";
import { ObjectProgress, Progressable } from "./progressables";
import { Characters, MoveStyle, ObjectiveID, Stage } from "./types";
import { FormatType } from "./types";
import pako from "pako";

export default class SaveFile implements Saveable {
  private static currentVersion = 3;
  private static dancesUnlockedLen = 6;

  saveSlotId: number = 0;
  lastStage: Stage = Stage.NONE;
  currentStage: Stage = Stage.NONE;
  character: Characters = Characters.NONE;
  currentStoryObjective: ObjectiveID = ObjectiveID.NONE;

  // Various locks
  characterSelectLocked: boolean = false;
  boostAbilityLocked: boolean = false;
  boostpackLocked: boolean = false;
  phoneLocked: boolean = false;
  spraycanLocked: boolean = false;
  fortuneAppLocked: boolean = false;
  cameraAppLocked: boolean = false;
  switchToEquippedMovestyleLocked: boolean = false;
  taxiLocked: boolean = false;

  // Fortune feature was scrapped but still in the save file
  lastFortuneWasRare: boolean = false;
  fortuneLastCrack: bigint = BigInt(0);
  lastFortune: number = 0;

  emailIndexTable: Record<string, number> = {};
  totalStageProgress: Array<StageProgress> = [];
  unlockables: Array<UnlockableSaveData> = [];
  totalCharacterProgress: Array<CharacterProgress> = [];

  maxWantedStars: number = 3;
  lastTimePlayed: bigint = BigInt(0);
  crimeCount: number = 0;

  dancesUnlocked: Array<boolean> = [];

  bombEaterHighscore: number = 0;

  constructor(data: Uint8Array) {
    const raw = this.readRaw(data);
    const br = new BinaryReader(raw);

    const version = br.readInt32();
    this.saveSlotId = br.readInt32();
    this.lastStage = br.readEnumString(Stage);
    this.currentStage = br.readEnumString(Stage);
    this.character = br.readEnumString(Characters);
    this.currentStoryObjective = br.readEnumString(ObjectiveID);

    this.characterSelectLocked = br.readBoolean();
    this.boostAbilityLocked = br.readBoolean();
    this.boostpackLocked = br.readBoolean();
    this.phoneLocked = br.readBoolean();
    this.spraycanLocked = br.readBoolean();
    this.fortuneAppLocked = br.readBoolean();
    this.cameraAppLocked = br.readBoolean();
    this.switchToEquippedMovestyleLocked = br.readBoolean();
    this.taxiLocked = br.readBoolean();

    this.lastFortuneWasRare = br.readBoolean();
    this.fortuneLastCrack = br.readInt64();
    this.lastFortune = br.readInt32();

    const emailIndexTableLen = br.readInt32();
    for (let i = 0; i < emailIndexTableLen; i++) {
      const key = br.readString();
      const value = br.readInt32();
      this.emailIndexTable[key] = value;
    }

    const stageProgressLen = br.readInt32();
    for (let i = 0; i < stageProgressLen; i++) {
      const stageProgress = new StageProgress(br);
      this.totalStageProgress.push(stageProgress);
    }

    const unlockablesLen = br.readInt32();
    for (let i = 0; i < unlockablesLen; i++) {
      const unlockableSaveData = new UnlockableSaveData(br);
      this.unlockables.push(unlockableSaveData);
    }

    const totalCharacterProgressLen = br.readInt32();
    for (let i = 0; i < totalCharacterProgressLen; i++) {
      const characterProgress = new CharacterProgress(br);
      this.totalCharacterProgress.push(characterProgress);
    }

    this.maxWantedStars = br.readSingle();
    this.lastTimePlayed = br.readInt64();
    this.crimeCount = br.readInt32();

    for (let i = 0; i < SaveFile.dancesUnlockedLen; i++) {
      this.dancesUnlocked.push(br.readBoolean());
    }

    if (version >= 1) {
      for (let i = 0; i < stageProgressLen; i++) {
        const stage = br.readEnumString(Stage);
        const stageProgress = this.totalStageProgress.find(
          (stageProgress) => stageProgress.stageID == stage
        );

        if (stageProgress != null) {
          stageProgress.readVersionTwo(br);
        } else {
          br.readBoolean();
        }
      }
    }

    if (version >= 2) {
      this.bombEaterHighscore = br.readInt32();
    }

    if (version >= 3) {
      for (let i = 0; i < stageProgressLen; i++) {
        const stage = br.readEnumString(Stage);
        const stageProgress = this.totalStageProgress.find(
          (stageProgress) => stageProgress.stageID == stage
        );

        if (stageProgress != null) {
          stageProgress.readVersionThree(br);
        } else {
          br.readBoolean();
        }
      }
    }
  }

  write(bw: BinaryWriter) {
    const bw2 = new BinaryWriter();
    this.writeRaw(bw2);

    const gzipped = pako.gzip(bw2.data);
    bw.writeByte(FormatType.COMPRESSED_GAME_DATA);
    bw.write(gzipped);
  }

  private readRaw(data: Uint8Array) {
    const br = new BinaryReader(data);

    const type = br.readByte() as FormatType;
    if (type != FormatType.COMPRESSED_GAME_DATA) {
      throw new Error("FormatType is not COMPRESSED_GAME_DATA");
    }

    const gzipped = br.read(br.length - br.position);
    const raw = pako.inflate(gzipped);
    return raw;
  }

  private writeRaw(bw: BinaryWriter) {
    bw.writeInt32(SaveFile.currentVersion);
    bw.writeInt32(this.saveSlotId);
    bw.writeEnumString(Stage, this.lastStage);
    bw.writeEnumString(Stage, this.currentStage);
    bw.writeEnumString(Characters, this.character);
    bw.writeEnumString(ObjectiveID, this.currentStoryObjective);

    bw.writeBoolean(this.characterSelectLocked);
    bw.writeBoolean(this.boostAbilityLocked);
    bw.writeBoolean(this.boostpackLocked);
    bw.writeBoolean(this.phoneLocked);
    bw.writeBoolean(this.spraycanLocked);
    bw.writeBoolean(this.fortuneAppLocked);
    bw.writeBoolean(this.cameraAppLocked);
    bw.writeBoolean(this.switchToEquippedMovestyleLocked);
    bw.writeBoolean(this.taxiLocked);

    bw.writeBoolean(this.lastFortuneWasRare);
    bw.writeInt64(this.fortuneLastCrack);
    bw.writeInt32(this.lastFortune);

    bw.writeInt32(Object.keys(this.emailIndexTable).length);
    for (const [key, value] of Object.entries(this.emailIndexTable)) {
      bw.writeString(key);
      bw.writeInt32(value);
    }

    bw.writeInt32(this.totalStageProgress.length);
    for (const stageProgress of this.totalStageProgress) {
      stageProgress.write(bw);
    }

    bw.writeInt32(this.unlockables.length);
    for (const unlockable of this.unlockables) {
      unlockable.write(bw);
    }

    bw.writeInt32(this.totalCharacterProgress.length);
    for (const characterProgress of this.totalCharacterProgress) {
      characterProgress.write(bw);
    }

    bw.writeSingle(this.maxWantedStars);
    bw.writeInt64(this.lastTimePlayed);
    bw.writeInt32(this.crimeCount);

    for (const danceUnlocked of this.dancesUnlocked) {
      bw.writeBoolean(danceUnlocked);
    }

    for (const stageProgress of this.totalStageProgress) {
      bw.writeEnumString(Stage, stageProgress.stageID);
      stageProgress.writeVersionTwo(bw);
    }

    bw.writeInt32(this.bombEaterHighscore);

    for (const stageProgress of this.totalStageProgress) {
      bw.writeEnumString(Stage, stageProgress.stageID);
      stageProgress.writeVersionThree(bw);
    }
  }
}

export class StageProgress implements Saveable {
  private static currentVersion: 1;

  stageID: Stage = Stage.NONE;
  reputation: number = 0;
  alreadyVisited: boolean = false;

  progressables: Array<Progressable> = [];

  highestCombo: number = 0;
  policeAllowed: boolean = false;
  mapFound: boolean = false;
  taxiFound: boolean = false;
  crewCounter: number = 0;
  respawnPos: Vector3 = Vector3.zero;
  respawnRot: Vector3 = Vector3.zero;

  graffitiBombedAchievementUnlocked: boolean = false;

  constructor(br: BinaryReader) {
    const version = br.readInt32();
    if (version >= 0) {
      this.stageID = br.readEnumString(Stage);
      this.reputation = br.readInt32();
      this.alreadyVisited = br.readBoolean();

      const progressablesLen = br.readInt32();
      for (let i = 0; i < progressablesLen; i++) {
        const progressable = Progressable.read(br);
        this.progressables.push(progressable);
      }
    }

    if (version >= 1) {
      this.highestCombo = br.readSingle();
      this.policeAllowed = br.readBoolean();
      this.mapFound = br.readBoolean();
      this.taxiFound = br.readBoolean();
      this.crewCounter = br.readInt32();
      this.respawnPos = new Vector3(br);
      this.respawnRot = new Vector3(br);
    }
  }

  write(bw: BinaryWriter) {
    bw.writeInt32(StageProgress.currentVersion);
    bw.writeEnumString(Stage, this.stageID);
    bw.writeInt32(this.reputation);
    bw.writeBoolean(this.alreadyVisited);

    bw.writeInt32(this.progressables.length);
    for (const progressable of this.progressables) {
      progressable.write(bw);
    }

    bw.writeSingle(this.highestCombo);
    bw.writeBoolean(this.policeAllowed);
    bw.writeBoolean(this.mapFound);
    bw.writeBoolean(this.taxiFound);
    bw.writeInt32(this.crewCounter);
    this.respawnPos.write(bw);
    this.respawnRot.write(bw);
  }

  readVersionTwo(br: BinaryReader) {
    this.graffitiBombedAchievementUnlocked = br.readBoolean();
  }

  writeVersionTwo(bw: BinaryWriter) {
    bw.writeBoolean(this.graffitiBombedAchievementUnlocked);
  }

  writeVersionThree(bw: BinaryWriter) {
    for (const progressable of this.progressables) {
      if (progressable instanceof ObjectProgress) {
        progressable.writeVersionOne(bw);
      }
    }
  }

  readVersionThree(br: BinaryReader) {
    for (const progressable of this.progressables) {
      if (progressable instanceof ObjectProgress) {
        progressable.readVersionOne(br);
      }
    }
  }
}

export class UnlockableSaveData implements Saveable {
  uid: string = "";
  hasSeen: boolean = false;
  isUnlocked: boolean = false;

  constructor(br: BinaryReader) {
    this.uid = br.readString();
    this.hasSeen = br.readBoolean();
    this.isUnlocked = br.readBoolean();
  }

  write(bw: BinaryWriter) {
    bw.writeString(this.uid);
    bw.writeBoolean(this.hasSeen);
    bw.writeBoolean(this.isUnlocked);
  }
}

export class CharacterProgress implements Saveable {
  private static currentVersion: 0;

  character: Characters = Characters.NONE;
  unlocked: boolean = false;
  outfit: number = 0;
  moveStyle: MoveStyle = MoveStyle.ON_FOOT;
  moveStyleSkin: number = 0;

  constructor(br: BinaryReader) {
    const version = br.readInt32();
    if (version >= 0) {
      this.character = br.readEnumString(Characters);
      this.unlocked = br.readBoolean();
      this.outfit = br.readInt32();
      this.moveStyle = br.readEnumInt32(MoveStyle);
      this.moveStyleSkin = br.readInt32();
    }
  }

  write(bw: BinaryWriter) {
    bw.writeInt32(CharacterProgress.currentVersion);
    bw.writeEnumString(Characters, this.character);
    bw.writeBoolean(this.unlocked);
    bw.writeInt32(this.outfit);
    bw.writeInt32(this.moveStyle);
    bw.writeInt32(this.moveStyleSkin);
  }
}
