import React, { useEffect, useState } from "react";
import LANGUAGES from "../../constants/languages";
import { getPopularRepos } from "../../utils/api";
import Card from "../Card";
import Loading from "../Loading";
import SelectBox from '../SelectBox';

export default function Popular() {
  const languages = JSON.parse(JSON.stringify(LANGUAGES));
  const [language, setLanguage] = useState(languages[0].en);
  const [popularReposValue, setPopularReposValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getPopularReposValue(language) {
      setIsLoading(true);
      const result = await getPopularRepos(language);
      setPopularReposValue(result);
      setIsLoading(false);
    }
    getPopularReposValue(language);
  }, [language]);

  const options = languages.map((language, index) => {
    return (
      <option value={language.en} key={index}>
        {language.en}
      </option>
    );
  });

  function handleChange(e) {
    setIsLoading(true);
    setLanguage(e.target.value);
  }

  let popularRepoItems = [];

  if (popularReposValue) {
      popularRepoItems = popularReposValue.map((item) => {
      return (
        <Card
          key={item.id}
          header={item.owner.login}
          href={item.html_url}
          name={item.name}
          avatar={item.owner.avatar_url}
        >
          Fork: {item.forks_count} <br/>
          Star: {item.stargazers_count}
        </Card>
      );
    });
  }

  return (
    <>
      <h1 className="center-text">This is Popular!</h1>
      <SelectBox onSelectChange={handleChange}>
        {options}
      </SelectBox>
      {
        isLoading ? <Loading /> :
        <div className="flex-wrap">
          {popularRepoItems}
        </div>
      }
    </>
  );
}
