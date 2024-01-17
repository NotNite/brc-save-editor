import { Saveable, BinaryReader, BinaryWriter } from "./binary";
import { Crew, ProgressableType } from "./types";

export abstract class Progressable implements Saveable {
  abstract uid: string;
  abstract progressableType: ProgressableType;

  static read(br: BinaryReader): Progressable {
    const type = br.readEnumInt32(ProgressableType);

    switch (type) {
      case ProgressableType.GRAFFITI_SPOT_PROGRESS:
        return new GraffitiSpotProgress(br);

      case ProgressableType.ENCOUNTER_PROGRESS:
        return new EncounterProgress(br);

      case ProgressableType.NPC_PROGRESS:
        return new NPCProgress(br);

      case ProgressableType.OBJECT_PROGRESS:
        return new ObjectProgress(br);

      case ProgressableType.STAGE_TRANSITION_PROGRESS:
        return new StageTransitionProgress(br);

      case ProgressableType.COLLECTABLE_PROGRESS:
        return new CollectableProgress(br);

      case ProgressableType.PHOTO_PROGRESS:
        return new PhotoObjectProgress(br);
    }

    throw new Error(`Unknown progressable type: ${type}`);
  }

  write(bw: BinaryWriter) {
    bw.writeInt32(this.progressableType);
  }
}

export class GraffitiSpotProgress extends Progressable {
  private static currentVersion: 0;

  uid: string = "";
  progressableType: ProgressableType = ProgressableType.GRAFFITI_SPOT_PROGRESS;

  isOpen: boolean = true;
  topGraffitiArt: string = "";
  bottomGraffitiArt: string = "";
  topCrew: Crew = Crew.NONE;
  bottomCrew: Crew = Crew.NONE;
  firstTime: boolean = true;

  constructor(br: BinaryReader) {
    super();
    const version = br.readInt32();
    if (version >= 0) {
      this.uid = br.readString();
      this.isOpen = br.readBoolean();
      this.topGraffitiArt = br.readString();
      this.bottomGraffitiArt = br.readString();
      this.topCrew = br.readEnumInt32(Crew);
      this.bottomCrew = br.readEnumInt32(Crew);
      this.firstTime = br.readBoolean();
    }
  }

  write(bw: BinaryWriter) {
    super.write(bw);
    bw.writeInt32(GraffitiSpotProgress.currentVersion);
    bw.writeString(this.uid);
    bw.writeBoolean(this.isOpen);
    bw.writeString(this.topGraffitiArt);
    bw.writeString(this.bottomGraffitiArt);
    bw.writeInt32(this.topCrew);
    bw.writeInt32(this.bottomCrew);
    bw.writeBoolean(this.firstTime);
  }
}

export class EncounterProgress extends Progressable {
  private static currentVersion: number = 0;

  uid: string = "";
  progressableType: ProgressableType = ProgressableType.ENCOUNTER_PROGRESS;

  canOpen: boolean = false;
  currentlyActive: boolean = false;
  completed: boolean = false;
  currentCheckpoint: number = 0;

  constructor(br: BinaryReader) {
    super();
    const version = br.readInt32();
    if (version >= 0) {
      this.uid = br.readString();
      this.canOpen = br.readBoolean();
      this.currentlyActive = br.readBoolean();
      this.completed = br.readBoolean();
      this.currentCheckpoint = br.readInt32();
    }
  }

  write(bw: BinaryWriter) {
    super.write(bw);
    bw.writeInt32(EncounterProgress.currentVersion);
    bw.writeString(this.uid);
    bw.writeBoolean(this.canOpen);
    bw.writeBoolean(this.currentlyActive);
    bw.writeBoolean(this.completed);
    bw.writeInt32(this.currentCheckpoint);
  }
}

export class NPCProgress extends Progressable {
  private static currentVersion: number = 0;

  uid: string = "";
  progressableType: ProgressableType = ProgressableType.NPC_PROGRESS;

  dialogueLVL: number = -1;
  canOpen: boolean = false;

  constructor(br: BinaryReader) {
    super();
    const version = br.readInt32();
    if (version >= 0) {
      this.uid = br.readString();
      this.dialogueLVL = br.readInt32();
      this.canOpen = br.readBoolean();
    }
  }

  write(bw: BinaryWriter) {
    super.write(bw);
    bw.writeInt32(NPCProgress.currentVersion);
    bw.writeString(this.uid);
    bw.writeInt32(this.dialogueLVL);
    bw.writeBoolean(this.canOpen);
  }
}

export class ObjectProgress extends Progressable {
  private static currentVersion: number = 0;

  uid: string = "";
  progressableType: ProgressableType = ProgressableType.OBJECT_PROGRESS;

  isActive: boolean = false;
  isTriggered: boolean = false;
  isDiscovered: boolean = false;

  constructor(br: BinaryReader) {
    super();
    const version = br.readInt32();
    if (version >= 0) {
      this.uid = br.readString();
      this.isActive = br.readBoolean();
      this.isTriggered = br.readBoolean();
    }
  }

  write(bw: BinaryWriter) {
    super.write(bw);
    bw.writeInt32(ObjectProgress.currentVersion);
    bw.writeString(this.uid);
    bw.writeBoolean(this.isActive);
    bw.writeBoolean(this.isTriggered);
  }

  readVersionOne(br: BinaryReader) {
    this.isDiscovered = br.readBoolean();
  }

  writeVersionOne(bw: BinaryWriter) {
    bw.writeBoolean(this.isDiscovered);
  }
}

export class StageTransitionProgress extends Progressable {
  private static currentVersion: number = 0;

  uid: string = "";
  progressableType: ProgressableType =
    ProgressableType.STAGE_TRANSITION_PROGRESS;

  isActive: boolean = false;
  allowEntry: boolean = false;

  constructor(br: BinaryReader) {
    super();
    const version = br.readInt32();
    if (version >= 0) {
      this.uid = br.readString();
      this.isActive = br.readBoolean();
      this.allowEntry = br.readBoolean();
    }
  }

  write(bw: BinaryWriter) {
    super.write(bw);
    bw.writeInt32(StageTransitionProgress.currentVersion);
    bw.writeString(this.uid);
    bw.writeBoolean(this.isActive);
    bw.writeBoolean(this.allowEntry);
  }
}

export class CollectableProgress extends Progressable {
  private static currentVersion: number = 0;

  uid: string = "";
  progressableType: ProgressableType = ProgressableType.COLLECTABLE_PROGRESS;

  pickedUp: boolean = false;
  canOpen: boolean = false;

  constructor(br: BinaryReader) {
    super();
    const version = br.readInt32();
    if (version >= 0) {
      this.uid = br.readString();
      this.pickedUp = br.readBoolean();
      this.canOpen = br.readBoolean();
    }
  }

  write(bw: BinaryWriter) {
    super.write(bw);
    bw.writeInt32(CollectableProgress.currentVersion);
    bw.writeString(this.uid);
    bw.writeBoolean(this.pickedUp);
    bw.writeBoolean(this.canOpen);
  }
}

export class PhotoObjectProgress extends Progressable {
  private static currentVersion: number = 0;

  uid: string = "";
  progressableType: ProgressableType = ProgressableType.PHOTO_PROGRESS;

  hasPhotographedObject: boolean = false;

  constructor(br: BinaryReader) {
    super();
    const version = br.readInt32();
    if (version >= 0) {
      this.uid = br.readString();
      this.hasPhotographedObject = br.readBoolean();
    }
  }

  write(bw: BinaryWriter) {
    super.write(bw);
    bw.writeInt32(PhotoObjectProgress.currentVersion);
    bw.writeString(this.uid);
    bw.writeBoolean(this.hasPhotographedObject);
  }
}
