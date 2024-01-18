import React from "react";
import SaveFile from "./lib/save";
import { asyncFileReader } from "./lib/binary";
import SaveEditor from "./SaveEditor";

function App() {
  const [save, setSave] = React.useState<SaveFile | null>(null);

  return (
    <main>
      {save != null ? (
        <SaveEditor save={save} />
      ) : (
        <>
          <p>
            Select the .brp file from your game save data folder.
            <br />
            Steam:{" "}
            <code>
              C:\Program Files (x86)\Steam\userdata\(user id)\1353230\remote
            </code>
            <br />
            GOG:{" "}
            <code>
              C:\Users\(username)\AppData\LocalLow\Team Reptile\Bomb Rush
              Cyberfunk\SaveData
            </code>
          </p>

          <p>
            Report issues on{" "}
            <a href="https://github.com/NotNite/brc-save-editor">GitHub</a>.
          </p>

          <input
            type="file"
            name="file"
            accept=".brp"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (file != null) {
                const data = await asyncFileReader(file);
                const save = new SaveFile(data);
                setSave(save);
              }
            }}
          />
        </>
      )}
    </main>
  );
}

export default App;
