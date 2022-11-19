//initialize array of squares (with the html square class)
const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const newGameButton = document.getElementById("newGameButton");
const toggleSoundButton = document.getElementById("toggleSoundButton");
const infoLabel = document.getElementById("infoLabel");
const multiplierLabel = document.getElementById("multiplier");
const grid = document.querySelector(".grid");

let hitPosition;
let result = 0;
let currentTime;
let timerID = null;
let countDownTimerId = null;
let moleType;
let upperCaseLetter;
let intervalRunning = false;
let multiplier = false;
let countdownNumber = 3;
let speedNumber = 1000;

let correctHits = 0;
let wrongHits = 0;

let highscoreArray = [];

let lowOnTime = new Audio("./Lyder/8SekIgjen.mp3");
let victory = new Audio("./Lyder/victory.mp3");
let niceTry = new Audio("./Lyder/niceTry.mp3");
let wrongHit = new Audio("./Lyder/wrongHit.mp3");
let hitCorrect = new Audio("./Lyder/hitGreen2.mp3");
let changeMultipliermode = new Audio("./Lyder/changeMultiplierMode.mp3");
let moveMoleSound = new Audio("./Lyder/MoveMole.wav");
let redMoleSound = new Audio("./Lyder/Redmole.wav");

const backgroundMusic = document.createElement("audio");
backgroundMusic.setAttribute("src", "./Lyder/BackgroundSong.mp3");
let toggleSound = true;

//Looping av bakgrunnsmusikk når spillet er igang
backgroundMusic.addEventListener(
  "ended",
  function () {
    if (intervalRunning && toggleSound) {
      this.currentTime = 0;
      this.play();
    }
  },
  false
);

//======================= 1. RANDOM SQUARE FUNCTION: fjern alle moles og legg til mole i random square ======================
function randomSquare() {
  console.log(moleType);
  if (currentTime == 9) lowOnTime.play();
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
      moveMoleSound.play();
      randomSquare.classList.add("greenMole");
      moleType = "greenMole";
      break;
    case 2:
      moveMoleSound.play();
      randomSquare.classList.add("yellowMole");
      moleType = "yellowMole";
      break;
    case 3:
      moveMoleSound.play();
      redMoleSound.play();
      randomSquare.classList.add("redMole");
      moleType = "redMole";
      break;
    case 4:
      moveMoleSound.play();
      randomSquare.classList.add("purpleMole");
      moleType = "purpleMole";
      break;
  }
}

//======================= 2. KEYBOARD FUNCTIONS ======================

window.addEventListener("keypress", onKeyDown, true);

function onKeyDown(event) {
  if (intervalRunning) {
    //konverter Unicode til bokstaver
    let letter = String.fromCharCode(event.which);

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
          hitCorrect.play();
          resultChanger("greenMole");
          score.textContent = result;
          correctHits++;
          hitPosition = null;
          break;
        case "yellowMole":
          squarePressed.style.backgroundColor = "#43c383";
          hitCorrect.play();
          resultChanger("yellowMole");
          score.textContent = result;
          currentTime += 5;
          timeLeft.textContent = currentTime;
          correctHits++;
          hitPosition = null;
          break;
        case "redMole":
          squarePressed.style.backgroundColor = "#d95959";
          resultChanger("redMole");
          score.textContent = result;
          wrongHits++;
          hitPosition = null;
          break;
        case "purpleMole":
          squarePressed.style.backgroundColor = "#43c383";
          resultChanger("purpleMole");
          score.textContent = result;
          multiplierFunction();
          correctHits++;
          hitPosition = null;
          break;
      }
    } else {
      if (result > 0) {
        result--;
        wrongHit.play();
      }
      wrongHits++;
      score.textContent = result;
      hitPosition = null;
    }
  }
}

//======================  Timer Functions  ================================================================================

//deklarer countDown-funksjon
function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  //regulering av game speed basert på spillerens skåre
  if (result == 50 || result == 51) {
    speedNumber = 900;
    intervalManager(speedNumber);
    console.log("speednumber: " + speedNumber);
    infoLabel.textContent = "110% Speed";
    grid.style.backgroundColor = "#240140";
  } else if (result == 100 || result == 101) {
    speedNumber = 800;
    intervalManager(speedNumber);
    console.log("speednumber: " + speedNumber);
    infoLabel.textContent = "120% Speed";
    grid.style.backgroundColor = "#411445";
  } else if (result == 150 || result == 151) {
    speedNumber = 700;
    intervalManager(speedNumber);
    console.log("speednumber: " + speedNumber);
    infoLabel.textContent = "130% Speed";
    grid.style.backgroundColor = "#6c1853";
  } else if (result == 200 || result == 201) {
    speedNumber = 600;
    intervalManager(speedNumber);
    console.log("speednumber: " + speedNumber);
    infoLabel.textContent = "140% Speed";
    grid.style.backgroundColor = "#780b18";
  } else if (result == 250 || result == 251) {
    speedNumber = 500;
    intervalManager(speedNumber);
    console.log("speednumber: " + speedNumber);
    grid.style.backgroundColor = "#7d0a8f";
    infoLabel.textContent = "150% Speed (BASE MAX)";
  }
  //Hvis tid er over
  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    intervalRunning = false;
    squares.forEach((square) => {
      //fjern moleType-class fra alle square-elementer i squares-array
      square.classList.remove(moleType);
    });
    multiplierLabel.style.visibility = "hidden";
    intervalManager(speedNumber);
    console.log("speednumber: " + speedNumber);
    checkHighscore();
    backgroundMusic.currentTime = 0;
    backgroundMusic.pause();
  }
}

function intervalManager(speedNumber) {
  //Kansellerer tidsfunksjon som kjører på intervall
  clearInterval(timerID);
  //Aktiverer randomSquare-intervall på nytt
  if (intervalRunning) {
    //kjører randomSquare()-funksjon på specifikk tidsintervall
    timerID = setInterval(randomSquare, speedNumber);
  }
}

//======================== HIGH SCORE FUNCTIONS
function compareNumbers(a, b) {
  return a - b;
}

function checkHighscore() {
  //======== 1.  HVIS SCORE UNDER ELLER LIK 0, gi trøste-beskjed
  if (result <= 0) {
    niceTry.play();
    console.log("Score <= 0, Gi trøstebeskjed");
    alert(
      "--- RESULTS: Total score = " +
        result +
        " Correct Hits = " +
        correctHits +
        " Wrong Hits = " +
        wrongHits +
        " ---" +
        " Nice try! There's room for improvement."
    );
  } else {
    //========= 2. HVIS SCORE ER OVER 0:
    victory.play();
    //2.1 HVIS TOM ARRAY
    if (highscoreArray.length == 0) {
      //Legge skåre i tom array

      console.log("Legge skåre i tom array");

      let username = prompt(
        "--- RESULTS: Total score = " +
          result +
          " Correct Hits = " +
          correctHits +
          " Wrong Hits = " +
          wrongHits +
          " ---" +
          " GOOD JOB! Your results can be added to TOP TEN HIGH SCORES!",
        "Please insert your name"
      );

      highscoreArray.push({ navn: username, highscore: result });
    } else {
      //2.2 HVIS IKKE TOM ARRAY

      //2.2.1: Hvis highscoreArray for TOPP TI allerede har 10 highscore-elementer
      if (highscoreArray.length >= 10) {
        //lag midlertidig alternativ tempHighScoreArray for å utføre beregninger
        const tempHighScoreArray = [];

        highscoreArray.forEach((highscoreObject) => {
          tempHighScoreArray.push(highscoreObject["highscore"]);
        });

        //finn laveste highscore i tempHighscoreArray
        const lowestHighscore = Math.min(...tempHighScoreArray);
        //fin index til laveste highscore
        const index = tempHighScoreArray.findIndex((highscore) => {
          return highscore === lowestHighscore;
        });
        console.log(highscoreArray);
        console.log(tempHighScoreArray);
        console.log(lowestHighscore);

        //2.2.1.1 Sjekk om high score er bedre enn laveste highscore i highscoreArray, i så fall fjern gammel laveste skåre og legg til ny
        if (result > lowestHighscore) {
          console.log(" Legge til skåre i array som allerede har 10 elementer");
          let username = prompt(
            "--- RESULTS: Total score = " +
              result +
              " Correct Hits = " +
              correctHits +
              " Wrong Hits = " +
              wrongHits +
              " ---" +
              " GOOD JOB! Your results can be added to TOP TEN HIGH SCORES!",
            "Please insert your name"
          );

          highscoreArray.splice(index, 1);

          highscoreArray.push({ navn: username, highscore: result });
        } else {
          //2.2.1.2 Hvis high score ikke er bedre enn laveste highscore  i highscoreArray -> Ingen ny skåre legges til i array
          console.log(
            "High score er ikke bedre enn noen av de 10 highscore-elementene i highscoreArray, ingen skåre legges til i array"
          );
          alert(
            "--- RESULTS: Total score = " +
              result +
              " Correct Hits = " +
              correctHits +
              " Wrong Hits = " +
              wrongHits +
              " ---" +
              " GOOD JOB!"
          );
        }
      }

      //2.2.2: Hvis highscoreArray ennå ikke har 10 elementer, og skåre er over 0 -> Legg til skåre i array
      else if (highscoreArray.length < 10) {
        console.log("HighscoreArray har ikke 10 elementer, og skåre er over 0");
        let username = prompt(
          "--- RESULTS: Total score = " +
            result +
            " Correct Hits = " +
            correctHits +
            " Wrong Hits = " +
            wrongHits +
            " ---" +
            " GOOD JOB! Your results can be added to TOP TEN HIGH SCORES!",
          "Please insert your name"
        );

        highscoreArray.push({ navn: username, highscore: result });
      }
    }
  }
  console.log(highscoreArray);
}

//======================== ANDRE FUNKSJONER
newGameButton.addEventListener("click", newGameCountdown);

toggleSoundButton.addEventListener("click", () => {
  if (toggleSound) {
    toggleSoundButton.src = "images/soundOFF.png";
    backgroundMusic.pause();
    toggleSound = false;
  } else {
    toggleSound = true;
    toggleSoundButton.src = "images/soundON.png";
    if (intervalRunning) {
      backgroundMusic.play();
    }
  }
});

function newGameCountdown() {
  intervalRunning = false;
  clearInterval(countDownTimerId);
  speedNumber = 1000;

  intervalManager(speedNumber);
  multiplierLabel.style.visibility = "hidden";
  if (countdownNumber != -1) {
    setTimeout(() => {
      infoLabel.textContent = "NEW MISSION STARTING IN ... " + countdownNumber;
      countdownNumber--;
      newGameCountdown();
    }, 1000);
  } else {
    infoLabel.textContent = "100% Speed";
    console.log("speednumber: " + speedNumber);
    newGameStart();
    //kjører countDown()-funksjon på spesifikk tidsintervall
    countDownTimerId = setInterval(countDown, 1000);
    countdownNumber = 3;
  }
}

//resette spillet og alle tellervariabler
function newGameStart() {
  result = 0;
  score.textContent = result;
  currentTime = 20;
  timeLeft.textContent = currentTime;
  multiplier = false;
  correctHits = 0;
  wrongHits = 0;
  backgroundMusic.currentTime = 0;
  backgroundMusic.pause();
  multiplierLabel.style.visibility = "visible";
  multiplierLabel.textContent = "";
  multiplierLabel.classList.remove("riskMode");
  multiplierLabel.classList.add("standardMode");
  grid.style.backgroundColor = "#0f0432";

  //reset background music
  if (toggleSound) {
    backgroundMusic.play();
  }
  intervalRunning = true;
  intervalManager(speedNumber);
}

//endrer result basert på moletype og multiplier
function resultChanger(moleType) {
  if (moleType == "redMole") {
    wrongHit.play();
    //Sikre at skåre aldri går under 0, selv med eller uten multiplier
    if (multiplier && result >= 2) {
      result -= 2;
      //Sikre at skåre ikke går under null når en har result = 1, med multiplier aktivert
    } else if (multiplier && result == 1) {
      result--;
    } else if (result > 0) {
      result--;
    }
  } else {
    if (multiplier) {
      result += 2;
    } else {
      result++;
    }
  }
}

//regulerer multiplier-variabel
function multiplierFunction() {
  changeMultipliermode.play();

  if (multiplier) {
    multiplier = false;
    multiplierLabel.textContent = "STANDARD MODE";
    multiplierLabel.classList.remove("riskMode");
    multiplierLabel.classList.add("standardMode");
    intervalManager(speedNumber);
    console.log("speednumber: " + speedNumber);
    console.log("Multiplier = " + multiplier);
  } else {
    multiplier = true;
    multiplierLabel.textContent = "RISK MODE x2 points";
    multiplierLabel.classList.remove("standardMode");
    multiplierLabel.classList.add("riskMode");
    intervalManager(speedNumber * 0.8);
    console.log("speednumber: " + speedNumber + " x 20% risk mode speed");
    console.log("Multiplier = " + multiplier);
  }
}
