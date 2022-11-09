//initialize array of squares (with the html square class)
const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const newGameButton = document.getElementById("newGameButton");

let hitPosition;
let result = 0;
let currentTime = 10;
let timerID = null;
let countDownTimerId = null;
let moleType;
let upperCaseLetter;
let intervalRunning = false;

let highscoreArray = [];

let lowOnTime = new Audio("./Lyder/8SekIgjen.mp3");
let madeTheList = new Audio("./Lyder/KomInnPåLista.mp3");
let noScore = new Audio("./Lyder/KomIkkeInnPåLista.mp3");
let losePoint = new Audio("./Lyder/MisterEtPoeng.mp3");
let hitGreen = new Audio("./Lyder/TraffGrønn.mp3");

//======================= 1. RANDOM SQUARE FUNCTION: fjern alle moles og legg til mole i random square ======================
function randomSquare() {
  console.log(moleType);
  if (currentTime === 9) lowOnTime.play();
  if (currentTime >= 9) lowOnTime.pause();
  //for each square in squares array
  squares.forEach((square) => {
    //fjern moleType-class fra alle square-elementer i squares-array
    square.classList.remove(moleType);
    square.style.backgroundColor = "#9b94ba";
    square.style.border = "solid black 1px";
  });

  let moletypeNummer = Math.floor(Math.random() * 4 + 1);
  //lag randomSquare
  let randomSquare = squares[Math.floor(Math.random() * 29)];

  moleAssign(moletypeNummer, randomSquare);

  //sett hitPosition som randomSquare sin id

  hitPosition = randomSquare.id;
}

function moleAssign(moletypeNummer, randomSquare) {
  switch (moletypeNummer) {
    case 1:
      randomSquare.classList.add("greenMole");
      moleType = "greenMole";
      break;
    case 2:
      randomSquare.classList.add("yellowMole");
      moleType = "yellowMole";
      break;
    case 3:
      randomSquare.classList.add("redMole");
      moleType = "redMole";
      break;
    case 4:
      randomSquare.classList.add("purpleMole");
      moleType = "purpleMole";
      break;
  }
}

//======================= 2. KEYBOARD FUNCTIONS ======================

window.addEventListener("keydown", onKeyDown, true);

function onKeyDown(event) {
  if (intervalRunning) {
    //konverter Unicode til bokstaver
    let letter = String.fromCharCode(event.keyCode);

    upperCaseLetter = letter.toUpperCase();

    console.log("KEY PRESSED:" + upperCaseLetter);
    console.log("hitposition: " + hitPosition);

    const squarePressed = document.getElementById(upperCaseLetter);
    squarePressed.style.backgroundColor = "#d95959";
    squarePressed.style.border = "solid white 1px";

    if (hitPosition == upperCaseLetter) {
      switch (moleType) {
        case "greenMole":
          squarePressed.style.backgroundColor = "#43c383";
          hitGreen.play();
          result++;
          score.textContent = result;
          hitPosition = null;
          break;
        case "yellowMole":
          squarePressed.style.backgroundColor = "#43c383";
          result++;
          score.textContent = result;
          currentTime += 5;
          timeLeft.textContent = currentTime;
          hitPosition = null;
          break;
        case "redMole":
          squarePressed.style.backgroundColor = "#d95959";
          result--;
          score.textContent = result;
          hitPosition = null;
          break;
        case "purpleMole":
          squarePressed.style.backgroundColor = "#43c383";
          result++;
          score.textContent = result;
          hitPosition = null;
          break;
      }
    } else {
      result--;
      score.textContent = result;
      // losePoint.play();
      hitPosition = null;
    }
  }
}

//======================  Timer Functions  ================================================================================

//deklarer countDown-funksjon
function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    intervalRunning = false;
    intervalManager();
    checkHighscore();
  }
}
//deklarer countDownTimerId, som kjører countDown()-funksjon på spesifikk intervall (i dette tilfellet hvert 1000 ms)
//let countDownTimerId = setInterval(countDown, 1000);

//======================== HIGH SCORE FUNCTIONS
function compareNumbers(a, b) {
  return a - b;
}

function checkHighscore() {
  //======== HVIS SCORE UNDER ELLER LIK 0
  if (result <= 0) {
    //Betingelse 2: For lav skåre for å legge i tom array
    noScore.play();
    alert("Godt forsøk! Øvelse gjør mester. ");
  } else {
    //====== HVIS TOM ARRAY
    if (highscoreArray.length >= 0) {
      //Betingelse 1: Legge skåre i tom array
      if (result > 0) {
        madeTheList.play();
        console.log("Legge skåre i tom array");

        let username = prompt(
          "Bra jobba! Du har oppnådd en high score som er verdig å legge til i topp ti!",
          "Skriv inn ditt navn her"
        );

        highscoreArray.push({ navn: username, highscore: result });
      }
    } else {
      //======= HVIS IKKE TOM ARRAY

      //Betingelse 1: Legge til skåre i array som allerede har 10 elementer
      if (highscoreArray.length >= 10) {
        highscoreArray.forEach((highscoreObject) => {
          if (result > highscoreObject[highscore]) {
            let username = prompt(
              "Bra jobba! Du har oppnådd en high score som er verdig å legge til i topp ti!",
              "Skriv inn ditt navn her"
            );

            const index = highscoreArray.findIndex((object) => {
              return object.highscore === highscoreObject[highscore];
            });

            highscoreArray.splice(index, 1);

            highscoreArray.push({ navn: username, highscore: result });
          } else {
            alert("Godt forsøk! Øvelse gjør mester. ");
          }
        });
      } else if (highscoreArray.length < 10) {
        //Betingelse 2: Legge til skåre i array som ikke har 10 elementer ennå
        let username = prompt(
          "Bra jobba! Du har oppnådd en high score som er verdig å legge til i topp ti!",
          "Skriv inn ditt navn her"
        );

        highscoreArray.push({ navn: username, highscore: result });
      }
    }
  }
  console.log(highscoreArray);
}

//======================== ANDRE FUNKSJONER

newGameButton.addEventListener("click", newGame);

function newGame() {
  result = 0;
  score.textContent = result;
  currentTime = 10;
  timeLeft.textContent = currentTime;
  intervalRunning = true;
  intervalManager();
}

function intervalManager(interval, time) {
  //Kansellerer alle tidsfunksjonene som kjører på intervaller
  clearInterval(countDownTimerId);
  clearInterval(timerID);

  //Hvis intervalRunning = true (når spiller trykker på newGameButton), vil intervallene kjøres
  if (intervalRunning) {
    //kjører randomSquare()-funksjon på specifikk tidsintervall
    timerID = setInterval(randomSquare, 1000);
    //kjører countDown()-funksjon på spesifikk tidsintervall
    countDownTimerId = setInterval(countDown, 1000);
  }
}
