import React from "react";
import { BinaryReader, BinaryWriter } from "./lib/binary";
import {
  BindingBooleanInput,
  BindingEnumInput,
  BindingNumberInput
} from "./lib/components";
import {
  getCharacterName,
  getEmailSubject,
  getMoveStyleSkinName,
  getStageName,
  getStoryObjectiveName
} from "./lib/lang";
import { useArrayBinding, useBinding } from "./lib/misc";
import SaveFile, { CharacterProgress, UnlockableSaveData } from "./lib/save";
import {
  Characters,
  MoveStyle,
  ObjectiveID,
  Stage,
  UnlockableType
} from "./lib/types";
import {
  Unlockable,
  unlockables,
  unlockablesEmails,
  unlockablesGraffiti,
  unlockablesMoveStyleSkin,
  unlockablesMusicTrack,
  unlockablesOutfit
} from "./lib/unlockables";

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

function CharacterEditor({
  save,
  character
}: {
  save: SaveFile;
  character: Characters;
}) {
  const [idx, setIdx] = React.useState(-1);
  React.useEffect(() => {
    setIdx(
      save.totalCharacterProgress.findIndex((x) => x.character === character)
    );
  }, [character, save.totalCharacterProgress]);

  const unlocked = useArrayBinding(
    idx,
    () => save.totalCharacterProgress[idx]?.unlocked ?? false,
    (v) => (save.totalCharacterProgress[idx].unlocked = v)
  );
  const outfit = useArrayBinding(
    idx,
    () => save.totalCharacterProgress[idx]?.outfit ?? 0,
    (v) => (save.totalCharacterProgress[idx].outfit = v)
  );
  const moveStyle = useArrayBinding(
    idx,
    () => save.totalCharacterProgress[idx]?.moveStyle ?? MoveStyle.ON_FOOT,
    (v) => (save.totalCharacterProgress[idx].moveStyle = v)
  );
  const moveStyleSkin = useArrayBinding(
    idx,
    () => save.totalCharacterProgress[idx]?.moveStyleSkin ?? 0,
    (v) => (save.totalCharacterProgress[idx].moveStyleSkin = v)
  );

  if (idx === -1) {
    return (
      <div>
        <p>No character data found.</p>
        <button
          onClick={() => {
            // This is awkward to do
            const bw = new BinaryWriter();
            save.totalCharacterProgress[0].write(bw);
            const br = new BinaryReader(bw.toBytes());
            const newChar = new CharacterProgress(br);

            newChar.character = character;
            newChar.unlocked = false;
            newChar.outfit = 0;
            newChar.moveStyle = MoveStyle.ON_FOOT;
            newChar.moveStyleSkin = 0;

            save.totalCharacterProgress.push(newChar);
            setIdx(save.totalCharacterProgress.length - 1);
          }}
        >
          Create entry
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <BindingBooleanInput id={`unlocked-${character}`} binding={unlocked} />
        <label htmlFor={`unlocked-${character}`}>Unlocked</label>

        <br />

        <BindingNumberInput id={`outfit-${character}`} binding={outfit} />
        <label htmlFor={`outfit-${character}`}>Outfit</label>

        <br />

        <BindingEnumInput
          id={`moveStyle-${character}`}
          binding={moveStyle}
          enumType={MoveStyle}
        />
        <label htmlFor={`moveStyle-${character}`}>Move style</label>

        <br />

        <BindingNumberInput
          id={`moveStyleSkin-${character}`}
          binding={moveStyleSkin}
        />
        <label htmlFor={`moveStyleSkin-${character}`}>Move style skin</label>
      </div>
    );
  }
}

function DanceEditor({ save, dance }: { save: SaveFile; dance: number }) {
  return (
    <BindingBooleanInput
      id={`dancesUnlocked-${dance}`}
      key={dance}
      binding={useBinding(
        () => save.dancesUnlocked[dance],
        (v) => (save.dancesUnlocked[dance] = v)
      )}
    />
  );
}

function unlock(save: SaveFile, uid: string, unlocked: boolean): number {
  const idx = save.unlockables.findIndex((x) => x.uid === uid);
  if (idx === -1) {
    // Also sucks
    const bw = new BinaryWriter();
    bw.writeString(uid);
    bw.writeBoolean(unlocked);
    bw.writeBoolean(unlocked);

    const br = new BinaryReader(bw.toBytes());
    const newUnlockable = new UnlockableSaveData(br);
    save.unlockables.push(newUnlockable);
    return save.unlockables.length - 1;
  } else {
    save.unlockables[idx].hasSeen = unlocked;
    save.unlockables[idx].isUnlocked = unlocked;
    return idx;
  }
}

function UnlockableEditor({
  save,
  uid,
  forceRefresh
}: {
  save: SaveFile;
  uid: string;
  forceRefresh: number;
}) {
  const [idx, setIdx] = React.useState(-1);
  React.useEffect(() => {
    setIdx(save.unlockables.findIndex((x) => x.uid === uid));
  }, [uid, save.unlockables, forceRefresh]);

  const isUnlocked = useArrayBinding(
    idx,
    () => save.unlockables[idx]?.isUnlocked ?? false,
    (v) => {
      setIdx(unlock(save, uid, v));
    }
  );

  let name = "Unknown";
  const unlockable = unlockables.find((x) => x.uid === uid);
  switch (unlockable?.type) {
    // TODO: translate these
    case UnlockableType.Email:
      name =
        getEmailSubject(unlockable.subject) +
        " (" +
        getCharacterName(unlockable.sender) +
        ")";
      break;

    case UnlockableType.Graffiti:
      name = `${unlockable.artist} - ${unlockable.title}`;
      break;

    case UnlockableType.MoveStyleSkin:
      name =
        getMoveStyleSkinName(unlockable.title) +
        ` (${MoveStyle[unlockable.moveStyle]})`;
      break;

    case UnlockableType.MusicTrack:
      name = `${unlockable.artist} - ${unlockable.title}`;
      if (unlockable.title === "") {
        name = "(silence for cutscenes)";
      }
      break;

    case UnlockableType.Outfit:
      name = `${Characters[unlockable.character]} - ${getMoveStyleSkinName(
        unlockable.outfitName
      )}`;
      break;
  }

  return (
    <>
      <BindingBooleanInput
        id={`unlockable-${uid}`}
        binding={isUnlocked}
        key={uid}
      />
      <label htmlFor={`unlockable-${uid}`}>{name}</label>
    </>
  );
}

function UnlockableSection({
  save,
  entries,
  title
}: {
  save: SaveFile;
  entries: Unlockable[];
  title: string;
}) {
  const [forceRefresh, setForceRefresh] = React.useState(0);

  return (
    <div>
      <h2>{title}</h2>
      <button
        onClick={() => {
          for (const entry of entries) {
            unlock(save, entry.uid, true);
          }
          setForceRefresh(forceRefresh + 1);
        }}
      >
        Unlock all
      </button>
      <br />
      {entries.map((x) => (
        <>
          <UnlockableEditor
            key={x.uid}
            save={save}
            uid={x.uid}
            forceRefresh={forceRefresh}
          />
          <br />
        </>
      ))}
    </div>
  );
}

export default function SaveEditor({ save }: { save: SaveFile }) {
  const [character, setCharacter] = React.useState(save.character);

  return (
    <div className="saveEditor">
      <div>
        <button onClick={() => write(save)}>Save</button>
        <br />
        <BindingNumberInput
          id="saveSlotId"
          min="0"
          max="2"
          binding={useBinding(
            () => save.saveSlotId,
            (v) => (save.saveSlotId = v)
          )}
        />
        <label htmlFor="saveSlotId">Save slot ID</label>
      </div>

      <hr />

      <div>
        <BindingEnumInput
          id="stage"
          binding={useBinding(
            () => save.currentStage,
            (v) => (save.currentStage = v)
          )}
          enumType={Stage}
          display={(v) => getStageName(v)}
        />
        <label htmlFor="stage">Current stage</label>

        <br />

        <BindingEnumInput
          id="character"
          binding={useBinding(
            () => save.character,
            (v) => (save.character = v)
          )}
          enumType={Characters}
          display={(v) => Characters[v]}
        />
        <label htmlFor="character">Character</label>

        <br />

        <BindingEnumInput
          id="currentStoryObjective"
          binding={useBinding(
            () => save.currentStoryObjective,
            (v) => (save.currentStoryObjective = v)
          )}
          enumType={ObjectiveID}
          display={(v) => getStoryObjectiveName(v)}
        />
        <label htmlFor="currentStoryObjective">Current story objective</label>

        <br />

        <BindingNumberInput
          id="maxWantedStars"
          binding={useBinding(
            () => save.maxWantedStars,
            (v) => (save.maxWantedStars = v)
          )}
        />
        <label htmlFor="maxWantedStars">Max wanted stars</label>

        <br />

        <BindingNumberInput
          id="bombEaterHighscore"
          binding={useBinding(
            () => save.bombEaterHighscore,
            (v) => (save.bombEaterHighscore = v)
          )}
        />
        <label htmlFor="bombEaterHighscore">Bomb Eater highscore</label>
      </div>

      <div>
        <h2>Locked features</h2>

        <BindingBooleanInput
          id="characterSelectLocked"
          binding={useBinding(
            () => save.characterSelectLocked,
            (v) => (save.characterSelectLocked = v)
          )}
        />
        <label htmlFor="characterSelectLocked">Character select locked</label>

        <br />

        <BindingBooleanInput
          id="boostAbilityLocked"
          binding={useBinding(
            () => save.boostAbilityLocked,
            (v) => (save.boostAbilityLocked = v)
          )}
        />
        <label htmlFor="boostAbilityLocked">Boost ability locked</label>

        <br />

        <BindingBooleanInput
          id="boostpackLocked"
          binding={useBinding(
            () => save.boostpackLocked,
            (v) => (save.boostpackLocked = v)
          )}
        />
        <label htmlFor="boostpackLocked">Boostpack locked</label>

        <br />

        <BindingBooleanInput
          id="phoneLocked"
          binding={useBinding(
            () => save.phoneLocked,
            (v) => (save.phoneLocked = v)
          )}
        />
        <label htmlFor="phoneLocked">Phone locked</label>

        <br />

        <BindingBooleanInput
          id="spraycanLocked"
          binding={useBinding(
            () => save.spraycanLocked,
            (v) => (save.spraycanLocked = v)
          )}
        />
        <label htmlFor="spraycanLocked">Spraycan locked</label>

        <br />

        <BindingBooleanInput
          id="fortuneAppLocked"
          binding={useBinding(
            () => save.fortuneAppLocked,
            (v) => (save.fortuneAppLocked = v)
          )}
        />
        <label htmlFor="fortuneAppLocked">Fortune app locked</label>

        <br />

        <BindingBooleanInput
          id="cameraAppLocked"
          binding={useBinding(
            () => save.cameraAppLocked,
            (v) => (save.cameraAppLocked = v)
          )}
        />
        <label htmlFor="cameraAppLocked">Camera app locked</label>

        <br />

        <BindingBooleanInput
          id="switchToEquippedMovestyleLocked"
          binding={useBinding(
            () => save.switchToEquippedMovestyleLocked,
            (v) => (save.switchToEquippedMovestyleLocked = v)
          )}
        />
        <label htmlFor="switchToEquippedMovestyleLocked">
          Switch to equipped movestyle locked
        </label>

        <br />

        <BindingBooleanInput
          id="taxiLocked"
          binding={useBinding(
            () => save.taxiLocked,
            (v) => (save.taxiLocked = v)
          )}
        />
        <label htmlFor="taxiLocked">Taxi locked</label>

        <div>
          {save.dancesUnlocked.map((_, i) => (
            <DanceEditor key={i} save={save} dance={i} />
          ))}
          <label htmlFor="dancesUnlocked-0">Dances unlocked</label>
        </div>
      </div>

      <div>
        <h2>Characters</h2>
        <select
          id="characters"
          value={character}
          onChange={(e) => setCharacter(parseInt(e.target.value) as Characters)}
        >
          {Object.entries(Characters)
            .filter(([, value]) => typeof value === "number")
            .map(([, value]) => {
              return (
                <option key={value} value={value.toString()}>
                  {Characters[value as Characters]}
                </option>
              );
            })}
        </select>
        <label htmlFor="characters">Select character</label>

        <CharacterEditor save={save} character={character} />
      </div>

      <UnlockableSection
        save={save}
        entries={unlockablesEmails}
        title="Emails"
      />

      <UnlockableSection
        save={save}
        entries={unlockablesGraffiti}
        title="Graffiti"
      />

      <UnlockableSection
        save={save}
        entries={unlockablesMoveStyleSkin}
        title="Move style skins"
      />

      <UnlockableSection
        save={save}
        entries={unlockablesMusicTrack}
        title="Music tracks"
      />

      <UnlockableSection
        save={save}
        entries={unlockablesOutfit}
        title="Outfits"
      />
    </div>
  );
}
