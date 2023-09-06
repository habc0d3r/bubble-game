let timer = 60;
let score = 0;
let hitrn = 0;
const timerDisplay = document.querySelector("#timerval");
const scoreDisplay = document.querySelector("#scoreval");

function makeBubble() {
  let clutter = "";

  for (let i = 0; i <= 160; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNum}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  let timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      timerDisplay.innerText = timer;
    } else {
      clearInterval(timerInt);
      replayGame();
    }
  }, 1000);
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").innerText = hitrn;
}

function increaseScore() {
  score += 10;
  scoreDisplay.innerText = score;
}

function replayGame() {
  document.querySelector("#pbtm").innerHTML = `<div id="replay-box">
      <h1 id="game-over">Game Over!</h1>
      <button id="replay-btn">Replay</button>
      </div>`;
  setTimeout(function () {
    document
      .querySelector("#replay-btn")
      .addEventListener("click", function () {
        makeBubble();
        getNewHit();
        runTimer();
        timer = 60;
        timerDisplay.innerText = timer;
        score = 0;
        scoreDisplay.innerText = score;
      });
  }, 0);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  let num = Number(dets.target.textContent);
  if (num === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

makeBubble();
getNewHit();
runTimer();
