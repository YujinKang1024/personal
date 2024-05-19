import React, { useState } from "react";
import Card from '../Card';
import Loading from '../Loading';
import TextField from '../TextField';
import Button from "../Button";
import { battle } from "../../utils/api";

export default function Battle({
  battleResult,
  setBattleResult,
  battleInputValue,
  setBattleInputValue
}) {
  const [isLoading, setIsLoading] = useState(false);

  function handleInputChange(e) {
    const copyInputValue = [...battleInputValue];
    const index = e.target.id === "username1" ? 0 : 1;
    copyInputValue[index] = e.target.value;

    setBattleInputValue(copyInputValue);
  }

  function handleClick() {
    if (!battleInputValue[0] || !battleInputValue[1]) {
      alert("사용자이름을 입력해 주세요.");
      return;
    }
    setIsLoading(true);
    getBattleResult(battleInputValue);
  }

  async function getBattleResult(value) {
    try {
      const result = await battle(value);
      setBattleResult(result);
    } catch(err) {
      alert(err);
      return;
    } finally {
      setIsLoading(false);
    }
  }

  let cards = [];

  if (battleResult) {
    cards = battleResult.map(({ profile, score }, index) => {
      return (
        <Card
          key={profile.id}
          header={index === 0 ? `Winner` : `Loser`}
          subheader={score + ""}
          avatar={profile.avatar_url}
          name={profile.login}
          href={profile.html_url}
        >
          {profile.name && `Name: ${profile.name}`} <br/>
          Following: {profile.following} <br/>
          Followers: {profile.followers} <br/>
          Repository: {profile.public_repos} <br/>
          {profile.location && `Location: ${profile.location}`}
        </Card>
      );
    });
  }

  return (
    <>
      <h1 className="center-text">This is Battle!</h1>
      <div className="search-wrap">
        <TextField
          id="username1"
          name="battleUser"
          placeholder="Username"
          onChange={handleInputChange}
        />
        <Button
          text="대결!"
          type="button"
          onClick={handleClick}
        />
        <TextField
          id="username2"
          name="battleUser"
          placeholder="Username"
          onChange={handleInputChange}
        />
      </div>
      {
        isLoading ? <Loading /> :
        <div className="flex-wrap">
          {cards}
        </div>
      }
    </>
  );
}
