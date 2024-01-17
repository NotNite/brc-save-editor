const fs = require("fs");
const dump = fs.readFileSync("./unlockable_dump.txt", "utf8");

const unlockables = dump.split("=====").map((x) => x.trim().split("\n"));

const characters = {
  NONE: -1, // 0xFFFFFFFF
  girl1: 0,
  frank: 1,
  ringdude: 2,
  metalHead: 3,
  blockGuy: 4,
  spaceGirl: 5,
  angel: 6,
  eightBall: 7,
  dummy: 8,
  dj: 9,
  medusa: 10, // 0x0000000A
  boarder: 11, // 0x0000000B
  headMan: 12, // 0x0000000C
  prince: 13, // 0x0000000D
  jetpackBossPlayer: 14, // 0x0000000E
  legendFace: 15, // 0x0000000F
  oldheadPlayer: 16, // 0x00000010
  robot: 17, // 0x00000011
  skate: 18, // 0x00000012
  wideKid: 19, // 0x00000013
  futureGirl: 20, // 0x00000014
  pufferGirl: 21, // 0x00000015
  bunGirl: 22, // 0x00000016
  headManNoJetpack: 23, // 0x00000017
  eightBallBoss: 24, // 0x00000018
  legendMetalHead: 25, // 0x00000019
  MAX: 26 // 0x0000001A
};

console.log("export const progressables: Unlockable[] = [");
for (const segment of unlockables) {
  if (segment.every((x) => x.trim().length === 0) || segment.length === 0)
    continue;

  console.log("{");

  const type = segment[0];

  function fetchLine(key) {
    const line = segment.find((x) => x.startsWith(key));
    return line.substring(key.length + 1);
  }

  switch (type) {
    case "e": {
      const messages = fetchLine("messages").split(" - ");

      console.log(`type: UnlockableType.Email,`);
      console.log(`uid: "${fetchLine("uid")}",`);
      console.log(`subject: "${fetchLine("subject")}",`);
      console.log(`sender: ${fetchLine("sender")},`);
      console.log(`messages: [`);
      for (const message of messages) {
        console.log(`"${message}",`);
      }
      console.log(`],`);
      break;
    }

    case "g": {
      console.log(`type: UnlockableType.Graffiti,`);
      console.log(`uid: "${fetchLine("uid")}",`);
      console.log(`artist: "${fetchLine("artist")}",`);
      console.log(`title: "${fetchLine("title")}",`);
      console.log(`size: GraffitiSize.${fetchLine("size")},`);
      console.log(`texture: "${fetchLine("texture")}",`);
      break;
    }

    case "ms": {
      console.log(`type: UnlockableType.MoveStyleSkin,`);
      console.log(`uid: "${fetchLine("uid")}",`);
      console.log(`moveStyle: MoveStyle.${fetchLine("moveStyle")},`);
      console.log(`skinIndex: ${fetchLine("skinIndex")},`);
      console.log(`skinTexture: "${fetchLine("skinTexture")}",`);
      console.log(`title: "${fetchLine("title")}",`);
      break;
    }

    case "mt": {
      console.log(`type: UnlockableType.MusicTrack,`);
      console.log(`uid: "${fetchLine("uid")}",`);
      console.log(`artist: "${fetchLine("artist")}",`);
      console.log(`title: "${fetchLine("title")}",`);
      console.log(`audioClip: "${fetchLine("audioClip")}",`);
      break;
    }

    case "ou": {
      console.log(`type: UnlockableType.Outfit,`);
      console.log(`uid: "${fetchLine("uid")}",`);
      console.log(`character: Characters.${fetchLine("character")},`);
      console.log(`outfitIndex: ${fetchLine("outfitIndex")},`);
      console.log(`outfitName: "${fetchLine("outfitName")}",`);
      break;
    }
  }

  console.log("},");
}
console.log("];");
