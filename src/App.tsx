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
        <input
          type="file"
          name="file"
          accept=".brp"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (file != null) {
              const data = await asyncFileReader(file);
              const save = new SaveFile(data);
              console.log(save);
              setSave(save);
            }
          }}
        />
      )}
    </main>
  );
}

export default App;
