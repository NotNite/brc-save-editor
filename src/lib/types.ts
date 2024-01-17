export type Enum = Record<string, string | number>;

export enum UnlockableType {
  Email,
  Graffiti,
  MoveStyleSkin,
  MusicTrack,
  Outfit
}

export enum Characters {
  NONE = -1, // 0xFFFFFFFF
  girl1 = 0,
  frank = 1,
  ringdude = 2,
  metalHead = 3,
  blockGuy = 4,
  spaceGirl = 5,
  angel = 6,
  eightBall = 7,
  dummy = 8,
  dj = 9,
  medusa = 10, // 0x0000000A
  boarder = 11, // 0x0000000B
  headMan = 12, // 0x0000000C
  prince = 13, // 0x0000000D
  jetpackBossPlayer = 14, // 0x0000000E
  legendFace = 15, // 0x0000000F
  oldheadPlayer = 16, // 0x00000010
  robot = 17, // 0x00000011
  skate = 18, // 0x00000012
  wideKid = 19, // 0x00000013
  futureGirl = 20, // 0x00000014
  pufferGirl = 21, // 0x00000015
  bunGirl = 22, // 0x00000016
  headManNoJetpack = 23, // 0x00000017
  eightBallBoss = 24, // 0x00000018
  legendMetalHead = 25, // 0x00000019
  MAX = 26 // 0x0000001A
}

export enum Stage {
  NONE = -1, // 0xFFFFFFFF
  city = 0,
  city_ArtTest = 1,
  city_graphics = 2,
  DEMO_hideout = 3,
  downhill = 4,
  hideout = 5,
  Mall = 6,
  osaka = 7,
  Prelude = 8,
  pyramid = 9,
  Sandbox = 10, // 0x0000000A
  square = 11, // 0x0000000B
  tower = 12, // 0x0000000C
  Swirlbox = 13, // 0x0000000D
  MAX = 14 // 0x0000000E
}

export enum GraffitiSize {
  S,
  M,
  L,
  XL
}

export enum MoveStyle {
  ON_FOOT,
  BMX,
  SKATEBOARD,
  INLINE,
  SPECIAL_SKATEBOARD,
  MAX
}

export enum ObjectiveID {
  NONE = -1, // 0xFFFFFFFF
  EscapePoliceStation = 0,
  JoinTheCrew = 1,
  BeatFranks = 2,
  DJChallenge1 = 3,
  GoToSquare = 4,
  BeatEclipse = 5,
  DJChallenge2 = 6,
  BeatDotExe = 7,
  DJChallenge3 = 8,
  BeatSamurai = 9,
  DJChallenge4 = 10, // 0x0000000A
  BeatOsaka = 11, // 0x0000000B
  DJChallenge5 = 12, // 0x0000000C
  FinalBoss = 13, // 0x0000000D
  HangOut = 14, // 0x0000000E
  SearchForPrince = 15, // 0x0000000F
  SearchForPrince2 = 16, // 0x00000010
  SearchForPrince3 = 17, // 0x00000011
  SearchForPrince4 = 18, // 0x00000012
  MAX = 19 // 0x00000013
}

export enum FormatType {
  NONE,
  RAW_DATA,
  COMPRESSED_GAME_DATA
}

export enum ProgressableType {
  NONE,
  GRAFFITI_SPOT_PROGRESS,
  ENCOUNTER_PROGRESS,
  NPC_PROGRESS,
  OBJECT_PROGRESS,
  STAGE_TRANSITION_PROGRESS,
  COLLECTABLE_PROGRESS,
  PHOTO_PROGRESS
}

export enum Crew {
  NONE,
  PLAYERS,
  FRANKS,
  ROBOTS,
  MEDUSAS,
  SAMURAIS,
  FUTURES,
  ROGUE
}
