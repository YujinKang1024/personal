const gameBoardContainer = document.querySelector(".board-container");
const gameinfoContainer = document.querySelector(".info-container");
const titleImageBox = document.querySelector(".title-image-box");
const gameStartButton = document.querySelector("button");
const remainingImage = document.querySelector(".info-remain-image");
const remainingTime = document.querySelector(".info-remain-time");

const cellCount = 16;
let isOnGame = false;
let clickedBeforeImage = null;
let RemainingImagePairs = cellCount / 2;
let gameTimer = 30;
let playingTimer = null;

function clickStartButton() {
  const registeredImageType = [];
  isOnGame = true;
  gameTimer = 30;

  gameStartButton.textContent = "재시작";
  remainingTime.textContent = `${gameTimer}초`;
  remainingImage.textContent = `${RemainingImagePairs}명`;
  titleImageBox.style.visibility = "hidden";
  gameinfoContainer.style.visibility = "visible";

  // 게임 보드 칸 생성
  for (let i = 1; i <= cellCount; i++) {
    const newGameCell = document.createElement("div");
    const cellImgBox = document.createElement("div");
    let imgTypeValue = Math.floor(Math.random() * 16 + 1);

    newGameCell.classList.add("game-cell");
    cellImgBox.dataset.isactive = false;
    gameBoardContainer.appendChild(newGameCell);
    newGameCell.appendChild(cellImgBox);

    // 각 칸에 랜덤값 부여
    if (registeredImageType.length === 0) {
      newGameCell.dataset.imgtype = imgTypeValue;
      registeredImageType.push(imgTypeValue);
      cellImgBox.classList.add("img-box",`img-${imgTypeValue}`);
    } else {
      while (registeredImageType.indexOf(imgTypeValue) !== -1) {
          imgTypeValue = Math.floor(Math.random() * 16 + 1);
      }
      newGameCell.dataset.imgtype = imgTypeValue;
      cellImgBox.classList.add("img-box",`img-${imgTypeValue}`);
      registeredImageType.push(imgTypeValue);
    }
  }
}

function setTimer() {
  playingTimer = setInterval(() => {
    if (gameTimer > 0) {
      gameTimer = gameTimer - 1;
      remainingTime.textContent = `${gameTimer}초`;
    }
    if (gameTimer === 0) {
      const loseImageBox = document.createElement("div");
      loseImageBox.classList.add("image-box", "lose-image-box");
      loseImageBox.style.backgroundImage = "url('bgs/lose-bg1.jpg')";
      gameBoardContainer.appendChild(loseImageBox);

      clearInterval(playingTimer);
      playingTimer = null;
    }
  }, 1000);
}

function resetGame() {
  const gameCellsAll = document.querySelectorAll(".game-cell");
  isOnGame = false;

  titleImageBox.style.visibility = "visible";
  gameinfoContainer.style.visibility = "hidden";
  gameStartButton.textContent = "시작";

  if (playingTimer) {
      clearInterval(playingTimer);
      playingTimer = null;
  } else {
    const imageBoxLose = document.querySelector(".lose-image-box");
    imageBoxLose.remove();
  }

  for (let i = 0; i < gameCellsAll.length; i++) {
      gameCellsAll[i].remove();
  }

  if (RemainingImagePairs === 0) {
      const imageBoxWin = document.querySelector(".win-image-box");
      imageBoxWin.remove();
  }
  RemainingImagePairs = cellCount / 2;
}

function controlImageVisibility(event) {
  const clickedTarget2 = event.target;
  const clickedTargetData = clickedTarget2.dataset.imgtype;

  for (let i = 1; i <= cellCount; i++) {
    if (clickedTargetData === `${i}`) {
      const targetImage = document.querySelector(`.img-${i}`);
      targetImage.style.visibility = "visible";
      targetImage.dataset.isactive = "true";

      if (clickedBeforeImage !== null) {
          const lastImage = document.querySelector(`.img-${clickedBeforeImage}`);

          if (i === clickedBeforeImage - 8 || i === clickedBeforeImage + 8) {
            clickedBeforeImage = null;
            RemainingImagePairs--;
            remainingImage.textContent = `${RemainingImagePairs}명`;
          } else {
            clickedBeforeImage = null;
            setTimeout(() => {
            lastImage.style.visibility = "hidden";
            lastImage.dataset.isactive = "false";
            targetImage.style.visibility = "hidden";
            targetImage.dataset.isactive = "false";
          }, 400);
        }
      } else {
        clickedBeforeImage = i;
      }
    }
  }
  if (RemainingImagePairs === 0) showResult();
}

function showResult() {
  const winImageNum = Math.floor(Math.random() * 2 + 1);
  const winImageBox = document.createElement("div");
  winImageBox.classList.add("image-box", "win-image-box");
  gameBoardContainer.appendChild(winImageBox);
  gameinfoContainer.style.visibility = "hidden";

  if (winImageNum === 1) {
      winImageBox.style.backgroundImage = "url('bgs/win-bg1.jpg')";
  } else if (winImageNum === 2) {
      winImageBox.style.backgroundImage = "url('bgs/win-bg2.jpg')";
  }

  if (gameTimer) {
    clearInterval(gameTimer);
    gameTimer = null;
  }
}

function handleClickButton(event) {
  if (isOnGame === false) {
      clickStartButton();
      setTimer();
  } else {
      resetGame();
  }
}

function handleClickGameCells(event) {
  const clickedTarget = event.target;
  const clickedTargetData = clickedTarget.dataset.imgtype;

  if (clickedTargetData === undefined) return;

  controlImageVisibility(event);
}

gameBoardContainer.addEventListener("click", handleClickGameCells);
gameStartButton.addEventListener("click", handleClickButton);
