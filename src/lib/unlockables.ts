import { Characters, GraffitiSize, MoveStyle, UnlockableType } from "./types";

export type UnlockableEmail = {
  type: UnlockableType.Email;
  uid: string;
  subject: string;
  sender: number;
  messages: string[];
};

export type UnlockableGraffiti = {
  type: UnlockableType.Graffiti;
  uid: string;
  artist: string;
  title: string;
  size: GraffitiSize;
  texture: string;
};

export type UnlockableMoveStyleSkin = {
  type: UnlockableType.MoveStyleSkin;
  uid: string;
  moveStyle: MoveStyle;
  skinIndex: number;
  skinTexture: string;
  title: string;
};

export type UnlockableMusicTrack = {
  type: UnlockableType.MusicTrack;
  uid: string;
  artist: string;
  title: string;
  audioClip: string;
};

export type UnlockableOutfit = {
  type: UnlockableType.Outfit;
  uid: string;
  character: Characters;
  outfitIndex: number;
  outfitName: string;
};

export type Unlockable =
  | UnlockableEmail
  | UnlockableGraffiti
  | UnlockableMoveStyleSkin
  | UnlockableMusicTrack
  | UnlockableOutfit;

export const unlockables: Unlockable[] = [
  {
    type: UnlockableType.Email,
    uid: "ec1b2021-d5d8-4430-8bb5-d4f1bc140850",
    subject: "EMAIL_CH4_BEL_02_SUBJECT",
    sender: 5,
    messages: [
      "EMAIL_CH4_BEL_02_P1_MSG",
      "EMAIL_CH4_BEL_02_P2_MSG",
      "EMAIL_CH4_BEL_02_P3_MSG",
      "EMAIL_CH4_BEL_02_P4_MSG",
      "EMAIL_CH4_BEL_02_P5_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "fb55cb80-a3b1-4d27-8814-acf9b846d8f5",
    subject: "EMAIL_CH2_COIL_01_SUBJECT",
    sender: 28,
    messages: [
      "EMAIL_CH2_COIL_01_P1_MSG",
      "EMAIL_CH2_COIL_01_P2_MSG",
      "EMAIL_CH2_COIL_01_P3_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "b8cf268d-fd28-4e2e-8883-302074fd7054",
    subject: "EMAIL_CH3_SHINE_05_SUBJECT",
    sender: 27,
    messages: [
      "EMAIL_CH3_SHINE_05_P1_MSG",
      "EMAIL_CH3_SHINE_05_P2_MSG",
      "EMAIL_CH3_SHINE_05_P3_MSG",
      "EMAIL_CH3_SHINE_05_P4_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "81a28345-0be4-4d20-811f-e8c1db6960c9",
    subject: "EMAIL_CH3_SHINE_03_SUBJECT",
    sender: 27,
    messages: [
      "EMAIL_CH3_SHINE_03_P1_MSG",
      "EMAIL_CH3_SHINE_03_P2_MSG",
      "EMAIL_CH3_SHINE_03_P3_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "f07e4ffd-3da6-4943-9462-78bf311a4772",
    subject: "EMAIL_CH5_BEL_01_SUBJECT",
    sender: 5,
    messages: [
      "EMAIL_CH5_BEL_01_P1_MSG",
      "EMAIL_CH5_BEL_01_P2_MSG",
      "EMAIL_CH5_BEL_01_P3_MSG",
      "EMAIL_CH5_BEL_01_P4_MSG",
      "EMAIL_CH5_BEL_01_P5_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "fc230b97-7c91-4a96-93d0-de4cdfd9480a",
    subject: "EMAIL_CH1_BEL_01_SUBJECT",
    sender: 5,
    messages: ["EMAIL_CH1_BEL_01_P1_MSG", "EMAIL_CH1_BEL_01_P2_MSG"]
  },
  {
    type: UnlockableType.Email,
    uid: "aeadb3f3-b2a7-41f4-b024-a6d811a88310",
    subject: "EMAIL_CH1_TRYCE_01_SUBJECT",
    sender: 3,
    messages: [
      "EMAIL_CH1_TRYCE_01_P1_MSG",
      "EMAIL_CH1_TRYCE_01_P2_MSG",
      "EMAIL_CH1_TRYCE_01_P3_MSG",
      "EMAIL_CH1_TRYCE_01_P4_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "aee15780-cbfd-4aa5-a28b-1d6c88b3d22c",
    subject: "EMAIL_CH4_VINYL_02_SUBJECT",
    sender: 6,
    messages: [
      "EMAIL_CH4_VINYL_02_P1_MSG",
      "EMAIL_CH4_VINYL_02_P2_MSG",
      "EMAIL_CH4_VINYL_02_P3_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "e6e5efea-7c32-4332-bbf0-4a0b217f3a71",
    subject: "EMAIL_CH5_COIL_02_SUBJECT",
    sender: 24,
    messages: [
      "EMAIL_CH5_COIL_02_P1_MSG",
      "EMAIL_CH5_COIL_02_P2_MSG",
      "EMAIL_CH5_COIL_02_P3_MSG",
      "EMAIL_CH5_COIL_02_P4_MSG",
      "EMAIL_CH5_COIL_02_P5_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "1f68604c-0fb4-48af-ac70-fd4998cefa45",
    subject: "message explain",
    sender: 0,
    messages: [
      "this is a very long message and hopefully clips the me",
      "ssage panel very very much. It already clwalks outside"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "6fb59bf4-51a4-4a5d-b8e8-4d94cbb29380",
    subject: "EMAIL_CH4_TRYCE_03_SUBJECT",
    sender: 3,
    messages: [
      "EMAIL_CH4_TRYCE_03_P1_MSG",
      "EMAIL_CH4_TRYCE_03_P2_MSG",
      "EMAIL_CH4_TRYCE_03_P3_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "ffa4cffd-201e-474d-84b1-0e2e85c17332",
    subject: "EMAIL_CH3_BEL_03_SUBJECT",
    sender: 5,
    messages: [
      "EMAIL_CH3_BEL_03_P1_MSG",
      "EMAIL_CH3_BEL_03_P2_MSG",
      "EMAIL_CH3_BEL_03_P3_MSG",
      "EMAIL_CH3_BEL_03_P4_MSG",
      "EMAIL_CH3_BEL_03_P5_MSG",
      "EMAIL_CH3_BEL_03_P6_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "9496c4fb-f72c-4d5a-a094-748b60edc19b",
    subject: "EMAIL_CH3_BEL_02_SUBJECT",
    sender: 5,
    messages: [
      "EMAIL_CH3_BEL_02_P1_MSG",
      "EMAIL_CH3_BEL_02_P2_MSG",
      "EMAIL_CH3_BEL_02_P3_MSG",
      "EMAIL_CH3_BEL_02_P4_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "3ffdb374-e9f6-4f61-a51f-3e048d569510",
    subject: "EMAIL_CH5_SOLACE_01_SUBJECT",
    sender: 15,
    messages: [
      "EMAIL_CH5__SOLACE_01_P1_MSG",
      "EMAIL_CH5__SOLACE_01_P2_MSG",
      "EMAIL_CH5__SOLACE_01_P3_MSG",
      "EMAIL_CH5__SOLACE_01_P4_MSG",
      "EMAIL_CH5__SOLACE_01_P5_MSG",
      "EMAIL_CH5__SOLACE_01_P6_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "8ea8a693-ad3b-407c-a073-ab388f91eec0",
    subject: "EMAIL_CH3_TRYCE_01_SUBJECT",
    sender: 3,
    messages: [
      "EMAIL_CH3_TRYCE_01_P1_MSG",
      "EMAIL_CH3_TRYCE_01_P2_MSG",
      "EMAIL_CH3_TRYCE_01_P3_MSG",
      "EMAIL_CH3_TRYCE_01_P4_MSG",
      "EMAIL_CH3_TRYCE_01_P5_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "9bba7b2a-875e-4007-b754-de8b6772f122",
    subject: "EMAIL_CH4_VINYL_01_SUBJECT",
    sender: 6,
    messages: ["EMAIL_CH4_VINYL_01_P1_MSG", "EMAIL_CH4_VINYL_01_P2_MSG"]
  },
  {
    type: UnlockableType.Email,
    uid: "150b4e64-0475-4baa-86d3-d4c88f160ab5",
    subject: "EMAIL_CH2_BEL_02_SUBJECT",
    sender: 5,
    messages: [
      "EMAIL_CH2_BEL_02_P1_MSG",
      "EMAIL_CH2_BEL_02_P2_MSG",
      "EMAIL_CH2_BEL_02_P3_MSG",
      "EMAIL_CH2_BEL_02_P4_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "d4ba83d8-79db-4569-84f6-578d72646a4f",
    subject: "boost",
    sender: 5,
    messages: ["first message"]
  },
  {
    type: UnlockableType.Email,
    uid: "7b1af579-7080-4b0c-b0a5-18786bfdbc4c",
    subject: "test",
    sender: 3,
    messages: ["third message"]
  },
  {
    type: UnlockableType.Email,
    uid: "183a274f-447c-4da1-a1c1-5228871bd1d5",
    subject: "EMAIL_CH2_SOLACE_01_SUBJECT",
    sender: 15,
    messages: [
      "EMAIL_CH2_SOLACE_01_P1_MSG",
      "EMAIL_CH2_SOLACE_01_P2_MSG",
      "EMAIL_CH2_SOLACE_01_P3_MSG",
      "EMAIL_CH2_SOLACE_01_P4_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "d94497a7-12bc-46c4-8bc0-1cbab3005dfb",
    subject: "blue test",
    sender: 0,
    messages: ["test"]
  },
  {
    type: UnlockableType.Email,
    uid: "c99016fb-5e1a-473f-84be-2633028b3fd6",
    subject: "EMAIL_CH3_SHINE_01_SUBJECT",
    sender: 27,
    messages: [
      "EMAIL_CH3_SHINE_01_P1_MSG",
      "EMAIL_CH3_SHINE_01_P2_MSG",
      "EMAIL_CH3_SHINE_01_P3_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "dbf7c807-9902-4ac8-a3b9-8bbafbf7d50e",
    subject: "EMAIL_CH2_TRYCE_01_SUBJECT",
    sender: 3,
    messages: [
      "EMAIL_CH2_TRYCE_01_P1_MSG",
      "EMAIL_CH2_TRYCE_01_P2_MSG",
      "EMAIL_CH2_TRYCE_01_P3_MSG",
      "EMAIL_CH2_TRYCE_01_P4_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "8fbac942-298a-409b-b154-3afcaae86ebe",
    subject: "EMAIL_CH4_TRYCE_01_SUBJECT",
    sender: 3,
    messages: [
      "EMAIL_CH4_TRYCE_01_P1_MSG",
      "EMAIL_CH4_TRYCE_01_P2_MSG",
      "EMAIL_CH4_TRYCE_01_P3_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "bcc0fc3f-159c-4331-8c95-8a057af8c428",
    subject: "EMAIL_CH4_TRYCE_04_SUBJECT",
    sender: 3,
    messages: [
      "EMAIL_CH4_TRYCE_04_P1_MSG",
      "EMAIL_CH4_TRYCE_04_P2_MSG",
      "EMAIL_CH4_TRYCE_04_P3_MSG",
      "EMAIL_CH4_TRYCE_04_P4_MSG",
      "EMAIL_CH4_TRYCE_04_P5_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "62601279-09eb-451e-ac03-20918a492238",
    subject: "EMAIL_CH3_TRYCE_04_SUBJECT",
    sender: 3,
    messages: [
      "EMAIL_CH3_TRYCE_04_P1_MSG",
      "EMAIL_CH3_TRYCE_04_P2_MSG",
      "EMAIL_CH3_TRYCE_04_P3_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "1c7cbd56-a205-45e8-adbf-6fa58eaf2210",
    subject: "EMAIL_CH3_TRYCE_03_SUBJECT",
    sender: 3,
    messages: [
      "EMAIL_CH3_TRYCE_03_P1_MSG",
      "EMAIL_CH3_TRYCE_03_P2_MSG",
      "EMAIL_CH3_TRYCE_03_P3_MSG",
      "EMAIL_CH3_TRYCE_03_P4_MSG",
      "EMAIL_CH3_TRYCE_03_P5_MSG",
      "EMAIL_CH3_TRYCE_03_P6_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "69e53681-5b0d-4486-ab94-5d0385b1cf0b",
    subject: "EMAIL_CH3_BEL_01_SUBJECT",
    sender: 5,
    messages: [
      "EMAIL_CH3_BEL_01_P1_MSG",
      "EMAIL_CH3_BEL_01_P2_MSG",
      "EMAIL_CH3_BEL_01_P3_MSG",
      "EMAIL_CH3_BEL_01_P4_MSG",
      "EMAIL_CH3_BEL_01_P5_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "c006676e-db6d-4d5f-b909-ebed4aa09b6b",
    subject: "EMAIL_CH3_BEL_04_SUBJECT",
    sender: 5,
    messages: [
      "EMAIL_CH3_BEL_04_P1_MSG",
      "EMAIL_CH3_BEL_04_P2_MSG",
      "EMAIL_CH3_BEL_04_P3_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "ef7f397e-2749-4d68-ab45-29a49d83efd9",
    subject: "EMAIL_CH1_TRYCE_02_SUBJECT",
    sender: 3,
    messages: [
      "EMAIL_CH1_TRYCE_02_P1_MSG",
      "EMAIL_CH1_TRYCE_02_P2_MSG",
      "EMAIL_CH1_TRYCE_02_P3_MSG",
      "EMAIL_CH1_TRYCE_02_P4_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "2181a98a-468d-4b3a-a337-6697d19a4ce6",
    subject: "EMAIL_CH4_RISE_01_SUBJECT",
    sender: 25,
    messages: [
      "EMAIL_CH4_RISE_01_P1_MSG",
      "EMAIL_CH4_RISE_01_P2_MSG",
      "EMAIL_CH4_RISE_01_P3_MSG",
      "EMAIL_CH4_RISE_01_P4_MSG",
      "EMAIL_CH4_RISE_01_P5_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "3a9e4f45-b2a4-4117-965f-a38700215896",
    subject: "EMAIL_CH5_MESH_03_SUBJECT",
    sender: 28,
    messages: [
      "EMAIL_CH5_MESH_03_P1_MSG",
      "EMAIL_CH5_MESH_03_P2_MSG",
      "EMAIL_CH5_MESH_03_P3_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "f8c8ef17-0b27-4c1e-841f-d547df6e8436",
    subject: "slide",
    sender: 5,
    messages: ["second message"]
  },
  {
    type: UnlockableType.Email,
    uid: "72a671a4-e35f-4aaf-996b-8f7811a2dd35",
    subject: "EMAIL_CH3_TRYCE_02_SUBJECT",
    sender: 3,
    messages: [
      "EMAIL_CH3_TRYCE_02_P1_MSG",
      "EMAIL_CH3_TRYCE_02_P2_MSG",
      "EMAIL_CH3_TRYCE_02_P3_MSG",
      "EMAIL_CH3_TRYCE_02_P4_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "850e37e1-6e97-4ceb-bb58-e0528faf95bd",
    subject: "EMAIL_CH3_SHINE_04_SUBJECT",
    sender: 27,
    messages: [
      "EMAIL_CH3_SHINE_04_P1_MSG",
      "EMAIL_CH3_SHINE_04_P2_MSG",
      "EMAIL_CH3_SHINE_04_P3_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "70efc8e5-daf2-4095-a9b7-98956f09555c",
    subject: "EMAIL_CH2_BEL_01_SUBJECT",
    sender: 5,
    messages: [
      "EMAIL_CH2_BEL_01_P1_MSG",
      "EMAIL_CH2_BEL_01_P2_MSG",
      "EMAIL_CH2_BEL_01_P3_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "011cf09c-cf76-4298-9225-136bcb070844",
    subject: "EMAIL_CH3_SHINE_02_SUBJECT",
    sender: 27,
    messages: [
      "EMAIL_CH3_SHINE_02_P1_MSG",
      "EMAIL_CH3_SHINE_02_P2_MSG",
      "EMAIL_CH3_SHINE_02_P3_MSG",
      "EMAIL_CH3_SHINE_02_P4_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "331dfb8e-413e-4712-8781-5fd07b829bdf",
    subject: "EMAIL_CH5_MESH_02_SUBJECT",
    sender: 28,
    messages: [
      "EMAIL_CH5_MESH_02_P1_MSG",
      "EMAIL_CH5_MESH_02_P2_MSG",
      "EMAIL_CH5_MESH_02_P3_MSG",
      "EMAIL_CH5_MESH_02_P4_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "61a53cbb-5928-482a-8ad7-62a2077e68e5",
    subject: "EMAIL_CH5_VINYL_01_SUBJECT",
    sender: 6,
    messages: [
      "EMAIL_CH5_VINYL_01_P1_MSG",
      "EMAIL_CH5_VINYL_01_P2_MSG",
      "EMAIL_CH5_VINYL_01_P3_MSG",
      "EMAIL_CH5_VINYL_01_P4_MSG",
      "EMAIL_CH5_VINYL_01_P5_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "5f2b898f-43bb-4eb6-bb56-846ea1c6f628",
    subject: "EMAIL_CH5_MESH_04_SUBJECT",
    sender: 28,
    messages: ["EMAIL_CH5_MESH_04_P1_MSG", "EMAIL_CH5_MESH_04_P2_MSG"]
  },
  {
    type: UnlockableType.Email,
    uid: "c54d0aaf-87d5-49ba-a72b-ea3669d53565",
    subject: "EMAIL_CH4_TRYCE_02_SUBJECT",
    sender: 3,
    messages: ["EMAIL_CH4_TRYCE_02_P1_MSG", "EMAIL_CH4_TRYCE_02_P2_MSG"]
  },
  {
    type: UnlockableType.Email,
    uid: "33533c92-74b0-4532-b0e3-0e22259e7fe1",
    subject: "EMAIL_CH5_COIL_01_SUBJECT",
    sender: 24,
    messages: [
      "EMAIL_CH5_COIL_01_P1_MSG",
      "EMAIL_CH5_COIL_01_P2_MSG",
      "EMAIL_CH5_COIL_01_P3_MSG",
      "EMAIL_CH5_COIL_01_P4_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "dc140d61-7cc8-4cad-88a6-578df85ee1d3",
    subject: "EMAIL_CH1_BEL_02_SUBJECT",
    sender: 5,
    messages: [
      "EMAIL_CH1_BEL_02_P1_MSG",
      "EMAIL_CH1_BEL_02_P2_MSG",
      "EMAIL_CH1_BEL_02_P3_MSG"
    ]
  },
  {
    type: UnlockableType.Email,
    uid: "74681c46-d078-46d2-803a-804e706b70c0",
    subject: "EMAIL_CH4_BEL_01_SUBJECT",
    sender: 5,
    messages: [
      "EMAIL_CH4_BEL_01_P1_MSG",
      "EMAIL_CH4_BEL_01_P2_MSG",
      "EMAIL_CH4_BEL_01_P3_MSG"
    ]
  },
  {
    type: UnlockableType.Graffiti,
    uid: "3389f807-68a4-43b7-a52a-981114f2fb25",
    artist: "Smoke1",
    title: "wild rush",
    size: GraffitiSize.L,
    texture: "grafTex_L18"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "1ddc568c-7604-47bd-aa8f-a904e6fb1c9c",
    artist: "Andreas „SMOE“ Plautz",
    title: "QUICK BING",
    size: GraffitiSize.M,
    texture: "grafTex_M0"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "c45bf4ee-04f1-4ba8-b4cf-8becc9364455",
    artist: "JAWGEM",
    title: "Bomb Croc",
    size: GraffitiSize.XL,
    texture: "grafTex_XL16"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "08400469-6850-4d2c-ba01-130c994b3e66",
    artist: "IMP",
    title: "Moai Marathon",
    size: GraffitiSize.L,
    texture: "grafTex_L10"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "7914dae3-1d42-40cd-9290-ef8cca8a0710",
    artist: "Yapico",
    title: "headphones on Helmet on",
    size: GraffitiSize.XL,
    texture: "grafTex_XL4"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "0137cf6a-65e5-453f-9e27-a8a7fb069b48",
    artist: "BAKERONER",
    title: "Dynamo",
    size: GraffitiSize.L,
    texture: "FUTURISMGrafTex_L"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "4971ff36-ae57-4b52-8821-003e592f6b99",
    artist: "Andrew Huerta",
    title: "VIBRATIONS",
    size: GraffitiSize.XL,
    texture: "grafTex_XL1"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "766c5dd3-3288-4399-bccb-889c9e9b2b5d",
    artist: "Koen Roetman",
    title: "All Screws Loose",
    size: GraffitiSize.M,
    texture: "franksGrafTex_M"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "fb941d09-b9e4-4e99-aaec-9db9fb8c63f9",
    artist: "Yapico",
    title: "buttercup",
    size: GraffitiSize.L,
    texture: "grafTex_L4"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "707b05e7-2eac-449d-a419-8526a758a106",
    artist: "Andrew Huerta",
    title: "INFINITY",
    size: GraffitiSize.L,
    texture: "grafTex_L1"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "1fc9d820-be7e-4f84-89c7-806faac9f327",
    artist: "evilsk8r",
    title: "SECOND SIGHT",
    size: GraffitiSize.XL,
    texture: "grafTex_XL8"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "24575299-ff7d-4d37-9d92-c8306a87f87d",
    artist: "Koen Roetman",
    title: "Don’t Screw Around",
    size: GraffitiSize.XL,
    texture: "franksGrafTex_XL"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "1fe9a854-2a55-41e5-8035-b8c5cd353db8",
    artist: "NRG1",
    title: "Solstice Script",
    size: GraffitiSize.L,
    texture: "EclipseGrafTex_L"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "fe265340-3456-4684-9627-8ca44adf1ff5",
    artist: "Denzel Sterling",
    title: "Fang It Up!",
    size: GraffitiSize.L,
    texture: "grafTex_L7"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "94e41118-d0b6-4639-8642-e7d8457a43d1",
    artist: "evilsk8r",
    title: "FREAKS",
    size: GraffitiSize.L,
    texture: "grafTex_L8"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "a1489497-2c3e-45df-843a-be510b27d605",
    artist: "KAZOO",
    title: "KANI-BOZU",
    size: GraffitiSize.L,
    texture: "DEVILTHEORYGrafTex_L"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "3107ab63-6660-458e-bd2f-44d6a88109ba",
    artist: "Mathew Prada",
    title: "Thick Candy",
    size: GraffitiSize.M,
    texture: "grafTex_M15"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "62994f57-0a5d-4f1f-9520-f816a4374bfc",
    artist: "MegaSmer",
    title: "colorBOMB",
    size: GraffitiSize.M,
    texture: "grafTex_M6"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "f198df28-e102-4205-8365-1053b9f221a3",
    artist: "Zedz",
    title: "HIGH TECH WS",
    size: GraffitiSize.XL,
    texture: "DOTEXEGrafTex_XL"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "381aaed8-a480-42da-b1eb-213b8a0119e8",
    artist: "Ed Panopio",
    title: "BOMB BEATS",
    size: GraffitiSize.M,
    texture: "grafTex_M9"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "ce4b1061-aa6a-4a2f-a7f0-ae7c6f06e864",
    artist: "KAZOO",
    title: "EVIL DARUMA",
    size: GraffitiSize.M,
    texture: "DEVILTHEORYGrafTex_M"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "e5a6865b-f6dc-4afe-a1b6-cbb3db37979e",
    artist: "CHENT SANCHEZ",
    title: "VoodooBoy",
    size: GraffitiSize.L,
    texture: "grafTex_L17"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "3939a469-f47b-44ad-a609-89401c6e264b",
    artist: "HestFTV",
    title: "Lauder",
    size: GraffitiSize.L,
    texture: "grafTex_L13"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "2ef87226-b9fd-4456-883c-318cd04345c5",
    artist: "Will Dayer",
    title: "Devil 68",
    size: GraffitiSize.M,
    texture: "grafTex_M17"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "ee2830c5-217d-412f-a72f-d0f394559dc2",
    artist: "Greunouylle",
    title: "Graffo Le Fou",
    size: GraffitiSize.L,
    texture: "grafTex_L11"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "de78058a-c9f5-4bdd-a52a-e4fe8c6a5cf7",
    artist: "MegaSmer",
    title: "MegaHood",
    size: GraffitiSize.XL,
    texture: "grafTex_XL6"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "22548ede-47ee-46d3-93ae-45a29739e48f",
    artist: "MegaSmer",
    title: "skate or di3",
    size: GraffitiSize.L,
    texture: "grafTex_L6"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "fb119e17-d5cd-4201-940b-8285f48528a4",
    artist: "Zedz",
    title: "DIGITAL BLOCKBUSTER",
    size: GraffitiSize.L,
    texture: "DOTEXEGrafTex_L"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "611bec25-1152-4a10-b908-7bfbd5e3e8bb",
    artist: "Will Dayer",
    title: "Raver Funk",
    size: GraffitiSize.XL,
    texture: "grafTex_XL15"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "de1c93af-152f-4108-9587-e1cb46498659",
    artist: "Andreas „SMOE“ Plautz",
    title: "WHOLE SIXER",
    size: GraffitiSize.L,
    texture: "grafTex_L0"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "a9cf1449-6a80-4c99-ae2a-a86b66338487",
    artist: "PirateGhostDJ ",
    title: "Pirate's Life 4 Me",
    size: GraffitiSize.XL,
    texture: "grafTex_XL12"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "0fbe614a-ea81-4283-b6ca-ea064ef74548",
    artist: "ICKYPATCHI",
    title: "SpawningSeason",
    size: GraffitiSize.L,
    texture: "grafTex_L9"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "4dbb9c24-6346-400a-9cc4-8a4ec1b9f6fa",
    artist: "Leo Bruno",
    title: "Deep Dive",
    size: GraffitiSize.XL,
    texture: "grafTex_XL11"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "71e96bef-fcfb-4731-a1ba-7e32b54f1874",
    artist: "Yapico",
    title: "pico pow",
    size: GraffitiSize.M,
    texture: "grafTex_M4"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "1f8d400e-6ca6-4d42-be97-82b46622696e",
    artist: "JOEYREX",
    title: "Web Spitter",
    size: GraffitiSize.XL,
    texture: "grafTex_XL10"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "fa9e0ca8-99bf-42ba-be72-543f97516851",
    artist: "Snars",
    title: "Bomb Universe",
    size: GraffitiSize.XL,
    texture: "grafTex_XL18"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "10cacfd9-adf0-4592-8d8c-593b6a571bb1",
    artist: "NRG1",
    title: "Bomb Burner",
    size: GraffitiSize.XL,
    texture: "grafTex_XL2"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "8e44413a-16e8-4ef3-a610-1d2c9ce75894",
    artist: "Jade stripes",
    title: "Tius",
    size: GraffitiSize.L,
    texture: "grafTex_L15"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "1284f67d-4bce-417c-9db6-005024452f45",
    artist: "Riff",
    title: "Boom",
    size: GraffitiSize.L,
    texture: "grafTex_L16"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "7f807c9c-f90e-43a8-b84a-5bd76007eb3e",
    artist: "3DROD",
    title: "OVERWHELMME",
    size: GraffitiSize.M,
    texture: "grafTex_M7"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "d8169ded-f84d-4953-b4ac-20b7b61896be",
    artist: "NRG1",
    title: "Astrological Augury",
    size: GraffitiSize.XL,
    texture: "EclipseGrafTex_XL"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "c915ce9d-98aa-42a4-9780-f2dee9879460",
    artist: "NRG1",
    title: "Messenger Mural",
    size: GraffitiSize.L,
    texture: "grafTex_L2"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "a9ee1fc9-6aa5-41e5-930d-6a1b9fd3f421",
    artist: "NRG1",
    title: "Constellation Circle",
    size: GraffitiSize.M,
    texture: "EclipseGrafTex_M"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "51549edf-b270-4533-ac23-60f33aa0c8bb",
    artist: "Koen Roetman",
    title: "Dinner On The Court",
    size: GraffitiSize.L,
    texture: "franksGrafTex_L"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "d141b7f3-ccdc-4c0b-a864-ecc8baa7e2d0",
    artist: "Jehcee",
    title: "FATE",
    size: GraffitiSize.XL,
    texture: "grafTex_XL9"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "1dc9c906-5d18-4354-972b-e252cabc3399",
    artist: "2NES",
    title: "Gold Rush",
    size: GraffitiSize.XL,
    texture: "grafTex_XL7"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "46c0876f-399d-4d71-be1c-706f22c52cc7",
    artist: "KAZOO",
    title: "CYBER TENGU",
    size: GraffitiSize.XL,
    texture: "DEVILTHEORYGrafTex_XL"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "55a1c5ad-1620-47f8-a7a9-769dcc3aaa79",
    artist: "Zedz",
    title: "8 MINUTES OF LEAN MEAN",
    size: GraffitiSize.M,
    texture: "DOTEXEGrafTex_M"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "71e7f8a2-efdd-46a3-b780-f1a00b760c72",
    artist: "KAZOO",
    title: "NOISY NINJA",
    size: GraffitiSize.L,
    texture: "grafTex_L5"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "9aa5d7e0-642c-4e73-a8ec-037ff1ec4b97",
    artist: "Kelli VDB",
    title: "TeleBinge",
    size: GraffitiSize.M,
    texture: "grafTex_M11"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "f68213a9-c3b8-4a4d-a7fe-044e65d5f066",
    artist: "KAZOO",
    title: "SHOGUN",
    size: GraffitiSize.M,
    texture: "grafTex_M5"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "2c38ef65-587b-4c91-b161-65d2e57df4ca",
    artist: "TheGreyNinja",
    title: "B-boy Love",
    size: GraffitiSize.M,
    texture: "grafTex_M12"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "1001fba5-324d-4491-b168-77e1f6e7f833",
    artist: "Mathew Prada",
    title: "Street classic",
    size: GraffitiSize.M,
    texture: "grafTex_M14"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "d46d24a3-932a-4409-ac0d-b176648f97c5",
    artist: "Chobaka",
    title: "Pora",
    size: GraffitiSize.M,
    texture: "grafTex_M8"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "0db78ef7-093f-48a7-9056-96a6fb8d824a",
    artist: "Mes3",
    title: "Zona Leste",
    size: GraffitiSize.M,
    texture: "grafTex_M3"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "461fe313-fe96-467b-aecd-74db52306792",
    artist: "BAKERONER",
    title: "Bevel",
    size: GraffitiSize.XL,
    texture: "FUTURISMGrafTex_XL"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "704f9ded-a974-4b32-a156-72d635f1235f",
    artist: "MIKE SUNDAY",
    title: "BiGSHiNYBoMB",
    size: GraffitiSize.XL,
    texture: "grafTex_XL13"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "85ff9c4b-f14d-41d2-afa5-75bf20c01fd4",
    artist: "NRG1",
    title: "Stacked Symbols",
    size: GraffitiSize.M,
    texture: "grafTex_M1"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "e3a8245d-47eb-4490-9e14-109211d3d337",
    artist: "Joey Flores",
    title: "SPRAYTANICPANIC!",
    size: GraffitiSize.M,
    texture: "grafTex_M10"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "c1858a2e-9e2b-4820-a12a-acdc973e1c9e",
    artist: "Andrew Huerta",
    title: "BLOCKY",
    size: GraffitiSize.M,
    texture: "grafTex_M2"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "2afb5d76-7c30-4235-89b1-d1acfb031bc5",
    artist: "Andreas „SMOE“ Plautz",
    title: "WILD STRUXXA",
    size: GraffitiSize.XL,
    texture: "grafTex_XL0"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "f49dec31-3c97-47fa-b5b2-d50389213d52",
    artist: "Leo Bruno",
    title: "Campaign Trail",
    size: GraffitiSize.L,
    texture: "grafTex_L12"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "fb446bcb-1eb1-4800-8bfe-43d190ac0217",
    artist: "Leo Bruno",
    title: "Vom'B",
    size: GraffitiSize.M,
    texture: "grafTex_M13"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "4f29c8d8-ed75-4e04-8f12-bbb39b370276",
    artist: "Mes3",
    title: "Gamex UPA ABL",
    size: GraffitiSize.XL,
    texture: "grafTex_XL3"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "18f8aecf-868e-487f-b316-99c0a4d26e02",
    artist: "Lariato Corp",
    title: "0m33",
    size: GraffitiSize.M,
    texture: "grafTex_M16"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "d6a4887c-5f83-43a0-8b95-3d4abb4f77a1",
    artist: "KAZOO",
    title: "MOTORCYCLE GANG",
    size: GraffitiSize.XL,
    texture: "grafTex_XL5"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "6c06b846-261d-48f0-aa28-8f70bdb7fc89",
    artist: "BAKERONER",
    title: "Flow",
    size: GraffitiSize.M,
    texture: "FUTURISMGrafTex_M"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "ccf80f28-7610-46cb-8619-188a0335aefb",
    artist: "REP.SHADE",
    title: "Bombing by FireMan",
    size: GraffitiSize.XL,
    texture: "grafTex_XL14"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "f8311ef8-8e5b-41cc-bcd8-d6112aa2c189",
    artist: "Patrick 'Tek-man' Gordon",
    title: "RECORD.HEAD",
    size: GraffitiSize.L,
    texture: "grafTex_L14"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "dc432c9a-1df1-4d27-9be9-426067f34beb",
    artist: "Smoke1",
    title: "end 2 end",
    size: GraffitiSize.XL,
    texture: "grafTex_XL17"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "593a507b-a5fd-4de5-9d4c-9ae199ec6018",
    artist: "Dion Koster",
    title: "Teddy 4",
    size: GraffitiSize.M,
    texture: "grafTex_M18"
  },
  {
    type: UnlockableType.Graffiti,
    uid: "d836e3be-da8b-4ca1-9f62-3c9850370945",
    artist: "Mes3",
    title: "Jd Vila Formosa",
    size: GraffitiSize.L,
    texture: "grafTex_L3"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "7c7ac367-7dd7-4da2-86b3-eaf313e3f1e0",
    moveStyle: MoveStyle.INLINE,
    skinIndex: 0,
    skinTexture: "inlineTex0",
    title: "U_MOVESTYLE_SKATES1"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "1129cb96-a283-442a-9f52-0a0100889877",
    moveStyle: MoveStyle.BMX,
    skinIndex: 0,
    skinTexture: "bmxTex0",
    title: "U_MOVESTYLE_BIKE1"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "207472bb-6ccf-451d-a0aa-005c8a04f984",
    moveStyle: MoveStyle.SKATEBOARD,
    skinIndex: 7,
    skinTexture: "skateboardTex7",
    title: "U_MOVESTYLE_DECK8"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "60f5a8b0-b7d0-4a56-b4dc-a46bb2463ace",
    moveStyle: MoveStyle.BMX,
    skinIndex: 8,
    skinTexture: "bmxTex8",
    title: "U_MOVESTYLE_BIKE9"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "b80e5d6d-9635-4959-876f-1eba23085964",
    moveStyle: MoveStyle.SKATEBOARD,
    skinIndex: 1,
    skinTexture: "skateboardTex1",
    title: "U_MOVESTYLE_DECK2"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "3b81d096-e787-4808-be0b-2532d4fa89c5",
    moveStyle: MoveStyle.SKATEBOARD,
    skinIndex: 0,
    skinTexture: "skateboardTex0",
    title: "U_MOVESTYLE_DECK1"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "46267e8c-a495-4cad-afb9-208bc00960a0",
    moveStyle: MoveStyle.SKATEBOARD,
    skinIndex: 9,
    skinTexture: "skateboardTex9",
    title: "U_MOVESTYLE_DECK10"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "cc53f564-a387-49bd-94dd-e28061f3ccb7",
    moveStyle: MoveStyle.INLINE,
    skinIndex: 2,
    skinTexture: "inlineTex2",
    title: "U_MOVESTYLE_SKATES3"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "37d7b475-f398-4707-80ee-2592c31e1a93",
    moveStyle: MoveStyle.INLINE,
    skinIndex: 8,
    skinTexture: "inlineTex8",
    title: "U_MOVESTYLE_SKATES9"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "1318a594-93c0-441e-a8fc-ee2df5377e25",
    moveStyle: MoveStyle.SKATEBOARD,
    skinIndex: 2,
    skinTexture: "skateboardTex2",
    title: "U_MOVESTYLE_DECK3"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "9b36dad6-9cf5-4453-8ef4-ea9618fe198c",
    moveStyle: MoveStyle.INLINE,
    skinIndex: 3,
    skinTexture: "inlineTex3",
    title: "U_MOVESTYLE_SKATES4"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "d9d00cb4-cfb7-4436-a1c0-1ce548b44ba2",
    moveStyle: MoveStyle.SKATEBOARD,
    skinIndex: 8,
    skinTexture: "skateboardTex8",
    title: "U_MOVESTYLE_DECK9"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "ebe86fda-09e5-4ac1-97a4-800ada52d534",
    moveStyle: MoveStyle.SKATEBOARD,
    skinIndex: 4,
    skinTexture: "skateboardTex4",
    title: "U_MOVESTYLE_DECK5"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "a807b6bd-d011-4fa6-b9a0-bbe80f866d5f",
    moveStyle: MoveStyle.INLINE,
    skinIndex: 6,
    skinTexture: "inlineTex6",
    title: "U_MOVESTYLE_SKATES7"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "59f83085-bd11-47f7-8a8a-8ebf44d8db1d",
    moveStyle: MoveStyle.SKATEBOARD,
    skinIndex: 6,
    skinTexture: "skateboardTex6",
    title: "U_MOVESTYLE_DECK7"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "61e22783-7578-4614-8178-1fc59329eea0",
    moveStyle: MoveStyle.INLINE,
    skinIndex: 7,
    skinTexture: "inlineTex7",
    title: "U_MOVESTYLE_SKATES8"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "4b3d1065-c6e3-4c83-ad06-dbd6df70e8c8",
    moveStyle: MoveStyle.BMX,
    skinIndex: 2,
    skinTexture: "bmxTex2",
    title: "U_MOVESTYLE_BIKE3"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "6ad5f4eb-ddf8-4a08-a9c6-279886e0d763",
    moveStyle: MoveStyle.BMX,
    skinIndex: 4,
    skinTexture: "bmxTex4",
    title: "U_MOVESTYLE_BIKE5"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "85229913-306f-4938-8547-fdab301ef433",
    moveStyle: MoveStyle.BMX,
    skinIndex: 5,
    skinTexture: "bmxTex5",
    title: "U_MOVESTYLE_BIKE6"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "f44a482d-c6f5-4b2f-981c-26057fe9019a",
    moveStyle: MoveStyle.INLINE,
    skinIndex: 9,
    skinTexture: "inlineTex9",
    title: "U_MOVESTYLE_SKATES10"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "c232da0d-c418-4505-9e31-6ad43bc5dd35",
    moveStyle: MoveStyle.INLINE,
    skinIndex: 1,
    skinTexture: "inlineTex1",
    title: "U_MOVESTYLE_SKATES2"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "096c3921-dc10-4084-8fef-663ed97de1f5",
    moveStyle: MoveStyle.SKATEBOARD,
    skinIndex: 5,
    skinTexture: "skateboardTex5",
    title: "U_MOVESTYLE_DECK6"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "919f8286-04e7-4065-942a-7a651f8e36a9",
    moveStyle: MoveStyle.BMX,
    skinIndex: 1,
    skinTexture: "bmxTex1",
    title: "U_MOVESTYLE_BIKE2"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "1bed9513-0baa-4133-a193-876dd3098b63",
    moveStyle: MoveStyle.BMX,
    skinIndex: 9,
    skinTexture: "bmxTex9",
    title: "U_MOVESTYLE_BIKE10"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "8aeee513-2aa7-4f93-8791-a4c11602a7ba",
    moveStyle: MoveStyle.BMX,
    skinIndex: 7,
    skinTexture: "bmxTex7",
    title: "U_MOVESTYLE_BIKE8"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "c394c2b2-9003-4c1f-81af-a05b8162ec2f",
    moveStyle: MoveStyle.BMX,
    skinIndex: 3,
    skinTexture: "bmxTex3",
    title: "U_MOVESTYLE_BIKE4"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "5d4cfba1-2430-4904-9d41-79cce3804c0b",
    moveStyle: MoveStyle.SKATEBOARD,
    skinIndex: 3,
    skinTexture: "skateboardTex3",
    title: "U_MOVESTYLE_DECK4"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "359525d4-3b07-4369-96a7-1654dc8e1ccb",
    moveStyle: MoveStyle.INLINE,
    skinIndex: 5,
    skinTexture: "inlineTex5",
    title: "U_MOVESTYLE_SKATES6"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "89eb5e18-3d9e-4dc8-ba17-fbb1a31a78c5",
    moveStyle: MoveStyle.INLINE,
    skinIndex: 4,
    skinTexture: "inlineTex4",
    title: "U_MOVESTYLE_SKATES5"
  },
  {
    type: UnlockableType.MoveStyleSkin,
    uid: "55890f40-7739-4a67-a440-dacbf20f706a",
    moveStyle: MoveStyle.BMX,
    skinIndex: 6,
    skinTexture: "bmxTex6",
    title: "U_MOVESTYLE_BIKE7"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "fc96ff13-da6f-4bfb-9d40-835fd68f5d89",
    artist: "Charodey Jeddy",
    title: "State of Mind",
    audioClip: "Charodey Jeddy - State of Mind"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "eed89972-71db-4df9-a8aa-1e22c540c18f",
    artist: "Klaus Veen",
    title: "Anime Break",
    audioClip: "Klaus Veen - Missing Break"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "15ba22b1-32ee-41e7-a821-56de318c9a27",
    artist: "Tryce",
    title: "Beats For The Hideout",
    audioClip: "Hideout Mixtape"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "55aa6fcd-33b8-41d5-9c46-00c29c5f2998",
    artist: "GRRL",
    title: "Trinitron",
    audioClip: "GRRL - Trinitron"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "aa7d991d-827f-4172-9d33-abe10bf75c55",
    artist: "KiloWatts",
    title: "Two Days Off",
    audioClip: "KiloWatts - Two Days Off"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "fe48c3b8-8cae-413b-8173-4032066d6e62",
    artist: "Legove",
    title: "Plume",
    audioClip: "Legove - Plume"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "2197fabb-650d-4dcd-83bb-120c7e9386d4",
    artist: "GRRL",
    title: "Operator",
    audioClip: "GRRL - Operator"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "1588d54d-de7f-4a8d-b237-c157d9afa63d",
    artist: "DJ Cyber",
    title: "Sunshine Popping Mixtape",
    audioClip: "Chapter 1 Mixtape"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "e367c7f4-d07d-469c-a4a2-b061635a6af2",
    artist: "DJ Cyber",
    title: "House Cats Mixtape",
    audioClip: "Chapter 2 Mixtape"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "f982134a-ad16-4332-aeef-66a381fbd421",
    artist: "",
    title: "",
    audioClip: "silence_ForCutscenes"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "0b91fad0-f420-4cb0-aee3-68ee5530940c",
    artist: "DJ Cyber",
    title: "Locking Up The Funk Mixtape",
    audioClip: "Chapter 5 Mixtape"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "6b251200-6c0b-410f-91c3-dc7fdc383479",
    artist: "Ethan Goldhammer",
    title: "In The Pocket",
    audioClip: "Ethan Goldhammer - In The Pocket"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "a9e55ca1-cb3e-490f-b820-23ff331f5f61",
    artist: "DJ Cyber",
    title: "Breaking Machine Mixtape",
    audioClip: "Chapter 3 Mixtape"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "3492bc38-bfae-4d63-b5d1-69e5e18a9748",
    artist: "DJ Cyber",
    title: "Beastmode Hip Hop Mixtape",
    audioClip: "Chapter 4 Mixtape"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "ded8fe94-474f-4d35-82f2-da6b2ab54463",
    artist: "wev",
    title: "watchyaback!",
    audioClip: "wev - watchyaback!"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "997b3dfe-8490-42f9-9981-bd1a20bbc1a7",
    artist: "Swami Sound",
    title: "Refuse",
    audioClip: "Swami Sound - Refuse"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "0c90906a-5bd1-4ae4-a754-dbfef235a53a",
    artist: "Olli",
    title: "Precious Thing",
    audioClip: "Olli - Precious Thing"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "2b4bd5a8-25fc-43b0-ad23-120a4d17ebb5",
    artist: "Hideki Naganuma",
    title: "DA PEOPLE",
    audioClip: "Hideki Naganuma - DA PEOPLE"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "dbc4bdb2-8596-4911-a073-a9e774cc4b76",
    artist: "Doctor Lazer",
    title: "Chromebies",
    audioClip: "Doctor Lazer - Chromebies"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "2ff234a7-2c17-4961-800f-e6d772c550f8",
    artist: "2 Mello",
    title: "I Wanna Kno",
    audioClip: "2 Mello - I Wanna Kno"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "71fad23b-62fe-4ea4-8d89-87e20b9384d5",
    artist: "Reso",
    title: "Iridium",
    audioClip: "Reso - Iridium"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "e26ac5fe-af18-4d43-901e-d75ab55a9d80",
    artist: "SkyBlew",
    title: "Light Switch (Prod. Navo The Maestro)",
    audioClip: "SkyBlew - Light Switch (Prod. Navo The Maestro)"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "a90e93e7-6d4d-4440-a93a-f930481af681",
    artist: "Leopard Davinci & Louis 707",
    title: "Next To Me",
    audioClip: "Leopard Davinci & Louis 707 - Next To Me"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "cdf9a967-5065-4c09-9645-13e5999e7d4c",
    artist: "Proux",
    title: "Funk Express (Extended Version)",
    audioClip: "Proux - Funk Express (Extended Version)"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "5860bab1-e993-4bea-a7e1-7be21830cf23",
    artist: "kidkanevil ft OV",
    title: "Big City Life",
    audioClip: "kidkanevil - Big City Life ft OV"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "65dacb82-29ce-41e0-8df9-094b988a2a47",
    artist: "Hideki Naganuma",
    title: "GET ENUF",
    audioClip: "GET ENUF"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "50725f12-cbf3-425c-a1a0-952f6b6f82f9",
    artist: "Reso",
    title: "Chuckin Up",
    audioClip: "Reso_Chuckin_Up"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "24545241-d6dd-485f-964f-f00b947d8665",
    artist: "cyber milk",
    title: "Condensed milk",
    audioClip: "cyber milk - Condensed milk"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "ede09bc2-2f1b-4ead-a62e-103581240339",
    artist: "Knxwledge",
    title: "hwbouths",
    audioClip: "Knxwledge - hwbouths"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "97339a9b-a7e5-4213-8c47-784b7a7227dd",
    artist: "SKALP",
    title: "Bounce Upon A Time",
    audioClip: "SKALP - Bounce Upon A Time"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "35d1f889-9ac1-4f77-9bf1-75a5fa75ed26",
    artist: "Color Plus",
    title: "Hair Dun Nails Dun",
    audioClip: "Color Plus - Hair Dun Nails Dun"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "226b0cd5-6345-4cfb-81be-7066aa2b66d4",
    artist: "Reso",
    title: "Spectres",
    audioClip: "Reso_Spectres"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "3db55ea2-2171-4650-be97-e193cc863aac",
    artist: "Bx'Treme",
    title: "AGUA",
    audioClip: "BXTREME - AGUA"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "41ab25be-7c78-46a2-b74a-dd886c130bd9",
    artist: "Soia",
    title: "You Can Say Hi (prod. by mez)",
    audioClip: "soia - you can say hi (prod. by mez)"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "5dca4b4c-2df3-49eb-89c4-5b0488c90bd7",
    artist: "Hideki Naganuma",
    title: "JACK DA FUNK",
    audioClip: "JACK DA FUNK_mastered_3"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "85a3aea9-1fdc-4830-a902-114813c2e9c6",
    artist: "Dom Mclennon",
    title: "Morning Glow (Ft. Nicholas Mangiafico)",
    audioClip: "Dom Mclennon - Morning Glow (Ft. Nicholas Mangiafico)"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "9e1c4ab3-e4ca-4492-8516-bf92c685eb62",
    artist: "Sebastian Knight",
    title: "Feel The Funk (Computer Love)",
    audioClip: "Sebastian Knight - Feel The Funk (Computer Love)"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "023c6794-97ce-4482-88ce-b8ad45e43edb",
    artist: "KiloWatts",
    title: "Last Hoorah",
    audioClip: "KiloWatts - Last Hoorah"
  },
  {
    type: UnlockableType.MusicTrack,
    uid: "07ba2a51-5b5f-4589-b37f-1e6266d62a05",
    artist: "KiloWatts",
    title: "Scraped On The Way Out",
    audioClip: "KiloWatts - Scraped On The Way Out"
  },
  {
    type: UnlockableType.Outfit,
    uid: "cdbdc029-4fec-4d37-9b42-f9c2a2202512",
    character: Characters.pufferGirl,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "079032ef-beac-4982-be4d-1df9938b33d0",
    character: Characters.prince,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "d6c8faec-7fa0-40f3-acc6-cae3f427e406",
    character: Characters.girl1,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "6fa07be4-1501-4976-9363-2031105f0858",
    character: Characters.jetpackBossPlayer,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "56293c15-0da3-483d-a6ca-39a91092fb04",
    character: Characters.jetpackBossPlayer,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "ec32e8f1-b8ee-4f22-bdbe-9fbd7cee170c",
    character: Characters.dummy,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "65c9bb8c-4206-41f1-9ec5-68c467a16e6c",
    character: Characters.futureGirl,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "d0b93706-03f2-4e32-935a-54e8fe09e913",
    character: Characters.oldheadPlayer,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "6dcf9ab9-28bd-40b5-8f39-1d22e4ed640c",
    character: Characters.angel,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "c0798aaa-880d-4e40-8de6-7c6415fd106c",
    character: Characters.dummy,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "2b6aaffa-7652-4891-861c-e86c8e5d84ef",
    character: Characters.blockGuy,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "6225442d-4324-4f7a-ba5e-460d5668656f",
    character: Characters.wideKid,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "e0994901-08dd-483f-8740-80ad1ba2cbb0",
    character: Characters.ringdude,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "3b614042-2c32-4be4-adf8-46c24f9c92ff",
    character: Characters.bunGirl,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "936eabba-1729-44d6-9d2a-a745853bce71",
    character: Characters.skate,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "737719d2-6d60-485c-911f-5862401664ef",
    character: Characters.metalHead,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "627d8cc0-12cc-4ea5-aac8-181710eacb89",
    character: Characters.spaceGirl,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "db6046c1-3fb0-4888-a1c8-93bf0016ddb3",
    character: Characters.skate,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "1a1e59ce-2c4c-4d87-99a1-9cf4b404310c",
    character: Characters.boarder,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "35ad89fe-7c2a-42a8-8adf-d76315dc9d04",
    character: Characters.spaceGirl,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "c579be64-a37e-4300-9d8f-6cf5b2a4f1eb",
    character: Characters.oldheadPlayer,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "5694cbbf-d08e-437a-9f85-ca65a434823e",
    character: Characters.legendMetalHead,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "39640cc5-5418-49d3-be29-42b49caa2da6",
    character: Characters.eightBallBoss,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "0a93d238-5760-491f-909d-aa09ea7d4b78",
    character: Characters.eightBall,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "6a48f2e3-4e96-4174-b4ac-730a8436642d",
    character: Characters.frank,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "a0b05ffb-6a96-4754-b4fc-b31c2b97e081",
    character: Characters.medusa,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "4746654a-f95a-47d9-a1fd-7e7a32bfaf1b",
    character: Characters.wideKid,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "dc449181-a772-4770-8132-8cf0f50d7339",
    character: Characters.boarder,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "3c7bf7bc-de89-40f3-932f-79da61153120",
    character: Characters.blockGuy,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "4bbbdc5a-8b03-4795-8bf2-b9f20d606c4d",
    character: Characters.ringdude,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "b28b12ed-db56-4085-b243-960c8b14f2b3",
    character: Characters.futureGirl,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "538e7eab-8047-409b-b2ed-ae11092ea683",
    character: Characters.legendMetalHead,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "82003fb4-ee89-46a3-9aef-13078e83dc4a",
    character: Characters.legendFace,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "ad339520-68ce-46c5-8bbc-2365cc3d6301",
    character: Characters.spaceGirl,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "e000028e-87a6-4ac3-b511-31ccff9fea18",
    character: Characters.futureGirl,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "54a74b38-3ebe-4602-ba02-bc88cbdbaafd",
    character: Characters.jetpackBossPlayer,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "cc58b027-fa09-46a8-b446-aec513b0d927",
    character: Characters.legendMetalHead,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "9734ed46-3ea8-4ede-a904-a4d8b1758a7d",
    character: Characters.legendFace,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "566315c1-43a5-4af5-ac6e-1bb6e4df7b0c",
    character: Characters.girl1,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "d5835041-2e2c-40f4-a843-01bcfada9c73",
    character: Characters.eightBall,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "01fd52fc-a94f-409f-a152-c6e7d89241c9",
    character: Characters.legendFace,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "dbe5af1d-2e70-4329-9035-d572e173b583",
    character: Characters.metalHead,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "ecdd4ca4-66e6-45e7-9999-8b9fd2cd42fc",
    character: Characters.futureGirl,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "e8e244dc-7d06-40fb-86d3-ed280ec5bc5e",
    character: Characters.medusa,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "0442ee83-aa22-44ee-a2fe-ef9b678774ec",
    character: Characters.eightBall,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "1f978edb-424d-4400-8d10-1e02dd4f7b93",
    character: Characters.dj,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "8a8424fd-92ca-40ee-bda3-f1037fa699f0",
    character: Characters.robot,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "de29b601-8883-4712-bd64-4a2a382f86b3",
    character: Characters.angel,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "0d4c534a-5c54-4125-8982-6fcf31b67087",
    character: Characters.legendFace,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "0f46b803-8aae-43a6-82b6-1db39623c59c",
    character: Characters.robot,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "89b1f5ba-a467-4b96-9827-f100315a2f3f",
    character: Characters.dj,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "ff01275d-d9b6-49fd-afca-f84187727ee3",
    character: Characters.boarder,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "b4640897-d824-4d79-8cf0-de55e45cf8b5",
    character: Characters.medusa,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "2c7e35c4-0a5c-4d8a-8f9c-60780a4e24d6",
    character: Characters.eightBallBoss,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "cbb01e4c-22a0-4bab-8a5c-087fc38cc84f",
    character: Characters.medusa,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "7ad2afc9-33c2-4c64-aae9-e6ac55e9116d",
    character: Characters.girl1,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "45c1cf52-f707-4ba4-b940-8855324fdea9",
    character: Characters.boarder,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "62aa30df-cb58-4ba2-968f-af22de36e058",
    character: Characters.eightBallBoss,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "05ec27ac-d76b-4b62-a8bc-ea25f94c2a3a",
    character: Characters.ringdude,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "c563e83b-05f1-456c-89ad-280af510ffa3",
    character: Characters.prince,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "ac2b41a1-0292-4e3e-acf1-55934eba6436",
    character: Characters.metalHead,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "0860ed73-8895-4567-89fb-368f89bad2ea",
    character: Characters.angel,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "e75c6cef-3a85-4092-8b69-06ac571d4349",
    character: Characters.blockGuy,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "e203080e-e117-4cb9-9392-3b49432922ab",
    character: Characters.dummy,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "99512563-baab-48f0-b652-6b5f122828db",
    character: Characters.skate,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "b0c5b123-82f5-4cc8-a969-f78139012831",
    character: Characters.dummy,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "51feb589-50f4-4510-9739-369ed3a60d8c",
    character: Characters.dj,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "b1b6d299-6ee3-467c-a647-ea111e15f610",
    character: Characters.robot,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "b29696ce-c900-409e-889f-6e53489f2848",
    character: Characters.wideKid,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "e6526450-e38c-4da1-8269-2647f3c7e5d3",
    character: Characters.skate,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "78d3b4e9-2410-4630-80b8-c76ce2e83729",
    character: Characters.robot,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "6bbe5060-438d-4d6b-b484-09b360660182",
    character: Characters.ringdude,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "0b6b00ff-cd16-405a-85b4-4611bd31c0f2",
    character: Characters.pufferGirl,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "a663d632-ff28-465f-82de-6cb7ff8dfd4a",
    character: Characters.eightBall,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "202caf82-513c-4264-84c0-3caa70dcd13c",
    character: Characters.prince,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "451ef00c-74ba-4e7d-bad3-faf6fb4622da",
    character: Characters.legendMetalHead,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "54b83b53-ec3f-49b9-94ef-a49e374d3241",
    character: Characters.blockGuy,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "e430b0cc-a5a5-42b4-8a3b-d56f47add04e",
    character: Characters.bunGirl,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "40f842a1-7f88-4258-9fac-2e9dfbfc45f4",
    character: Characters.prince,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "76d21086-2b19-4b6b-910a-1307652d706a",
    character: Characters.eightBallBoss,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "4acda8ed-648a-4eba-9b32-047bae97c02e",
    character: Characters.frank,
    outfitIndex: 2,
    outfitName: "U_SKIN_SUMMER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "cd5833b4-e18f-48f9-84c9-728a99828e04",
    character: Characters.dj,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "d68a1879-9a51-4876-abb0-18814b152d10",
    character: Characters.girl1,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "fe3e2e66-dcea-4247-849a-4469de5b0ba9",
    character: Characters.wideKid,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "a9d65c4e-e634-403c-ae0d-597839a72d0e",
    character: Characters.metalHead,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "34ad1952-f158-4275-9665-aff254a0dec2",
    character: Characters.pufferGirl,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "cee8ef2b-7ba8-4980-9f4d-e3b20282234f",
    character: Characters.spaceGirl,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "1a8faec6-3912-4eb7-a55f-24fb1cb2859e",
    character: Characters.bunGirl,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "8402a8c3-027a-47c4-8bb9-a72c09a5ee01",
    character: Characters.jetpackBossPlayer,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "cbe0f36e-a5ac-4ae9-9ae0-23ee8d520ddb",
    character: Characters.oldheadPlayer,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "54bfefb0-f3ce-455b-aa94-2770bc777779",
    character: Characters.frank,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "4f04fb77-e7f1-4930-a14e-b4bf63a6ec21",
    character: Characters.frank,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  },
  {
    type: UnlockableType.Outfit,
    uid: "9553b910-61c5-4e21-8a4e-070c250c9b48",
    character: Characters.bunGirl,
    outfitIndex: 1,
    outfitName: "U_SKIN_SPRING"
  },
  {
    type: UnlockableType.Outfit,
    uid: "f5e3f9d2-0995-42f6-a330-41f57edf52d0",
    character: Characters.oldheadPlayer,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "4dcc3bc1-a708-4b29-9ff1-03dba5c89c7c",
    character: Characters.angel,
    outfitIndex: 4,
    outfitName: "U_SKIN_WINTER"
  },
  {
    type: UnlockableType.Outfit,
    uid: "2ace2a78-8fbf-4526-a849-8178206bf092",
    character: Characters.pufferGirl,
    outfitIndex: 3,
    outfitName: "U_SKIN_AUTUMN"
  }
];

export const unlockablesEmails: UnlockableEmail[] = unlockables.filter(
  (x): x is UnlockableEmail => x.type === UnlockableType.Email
);

export const unlockablesGraffiti: UnlockableGraffiti[] = unlockables.filter(
  (x): x is UnlockableGraffiti => x.type === UnlockableType.Graffiti
);

export const unlockablesMoveStyleSkin: UnlockableMoveStyleSkin[] =
  unlockables.filter(
    (x): x is UnlockableMoveStyleSkin => x.type === UnlockableType.MoveStyleSkin
  );

export const unlockablesMusicTrack: UnlockableMusicTrack[] = unlockables.filter(
  (x): x is UnlockableMusicTrack => x.type === UnlockableType.MusicTrack
);

export const unlockablesOutfit: UnlockableOutfit[] = unlockables.filter(
  (x): x is UnlockableOutfit => x.type === UnlockableType.Outfit
);
