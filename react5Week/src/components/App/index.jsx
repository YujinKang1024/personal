import React, { useState } from "react";
import Popular from "../Popular";
import Battle from "../Battle";
import NavButton from "../NavButton";
import "./styles.css";

export default function App() {
  const [showBattle, setShowBattle] = useState(false);
  const [battleInputValue, setBattleInputValue] = useState([null, null]);
  const [battleResult, setBattleResult] = useState(null);

  function toggleView(showBattle) {
    setShowBattle(showBattle);
  }

  return (
    <div className="container">
      <div className="flex space-between">
        <NavButton
          isActive={!showBattle}
          text="인기 저장소"
          onClick={() => toggleView(false)}
        />
        <NavButton
          isActive={showBattle}
          text="Github 대결"
          onClick={() => toggleView(true)}
        />
      </div>
      {!showBattle && <Popular />}
      {showBattle && <Battle battleResult={battleResult} setBattleResult={setBattleResult} setBattleInputValue={setBattleInputValue} battleInputValue={battleInputValue} />}
    </div>
  );
}
