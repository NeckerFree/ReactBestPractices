import { useState } from "react";
import CharacterInfo from "./CharacterInfo";
import CrashEvent from "./CrashEvent";
import CrashComponent from "./CrashComponent";

export default function MainComponent() {

  const [loadCrash, setLoadCrash] = useState(false);
  return (
    <div className={"main"}>
      <CharacterInfo />
      <CrashEvent />
      {loadCrash ?
        <CrashComponent />
        : <button className="button-app" onClick={() => setLoadCrash(true)} >Load Crash Component</button>
      }
    </div>
  );
}
