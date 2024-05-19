import PROFILE from "./profile.json";
import PERSONAL_REPOS from "./personalRepositories.json";
import POPULAR_REPOS from "./popularRepositories.json";

/*

  TODO: Enter your own Github client id and secret id below

  1. Visit Github.com
  2. Visit User Settings (https://github.com/settings/profile)
  3. Select "Developer Settings"
  4. Select "Oauth Apps"
  5. Select "New Oauth App"
  6. Enter "http://localhost:5173" for homepage & callback URL
  7. Enter your Client ID and Secret ID below

 */
const GITHUB_CLIENT_ID = "";
const GITHUB_SECRET_ID = "";

const defaultParams = `?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_SECRET_ID}`;

function getErrorMsg(message, username) {
  if (message === "Not Found") {
    return `"${username}"는 존재하지 않는 사용자입니다`;
  }

  return message;
}

async function requestUserData(url, username, fetchOption) {
  const response = await fetch(url, fetchOption);
  const res = await response.json();

  if (res.message) {
    throw new Error(getErrorMsg(res.message, username));
  }

  return res;
}

function getStarCount(repos) {
  return repos.reduce(
    (count, { stargazers_count }) => count + stargazers_count,
    0
  );
}

function calculateScore(followers, repos) {
  return followers * 3 + getStarCount(repos);
}

async function getUserData(player) {
  const profile = await requestUserData(
    `https://api.github.com/users/${player}${defaultParams}`,
    player,
    {
      caches:"default"
    });
  const repos = await requestUserData(
    `https://api.github.com/users/${player}/repos${defaultParams}&per_page=100`,
    player,
    {
      caches:"default"
    });

  return {
    profile,
    score: calculateScore(profile.followers, repos),
  };
}

function sortPlayers(players) {
  return players.sort((a, b) => b.score - a.score);
}

export async function battle([player1, player2]) {
  const playerOne = await getUserData(player1);
  const playerTwo = await getUserData(player2);

  return sortPlayers([playerOne, playerTwo]);
}

export async function getPopularRepos(language) {
  const endpoint = window.encodeURI(
    `https://api.github.com/search/repositories${defaultParams}&q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  const response = await fetch(endpoint, {cache: "default"});
  const { items } = await response.json();

  return items;
}
