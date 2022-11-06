//initialize array of squares (with the html square class)
const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let hitPosition;
let result = 0;
let currentTime = 10;
let timerID = null;
let moleType;
let upperCaseLetter;

let highscoreArray = [];
let sortedHighscoreArray;

//======================= 1. RANDOM SQUARE FUNCTION: fjern alle moles og legg til mole i random square ======================
function randomSquare() {
  console.log(moleType);

  //for each square in squares array
  squares.forEach((square) => {
    //fjern moleType-class fra alle square-elementer i squares-array
    square.classList.remove(moleType);
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
  //konverter Unicode til bokstaver
  let letter = String.fromCharCode(event.keyCode);
  //konverter til uppercase
  upperCaseLetter = letter.toUpperCase();

  console.log("KEY PRESSED:" + upperCaseLetter);
  console.log("hitposition: " + hitPosition);

  switch (moleType) {
    case "greenMole":
      greenMole();
      break;
    case "yellowMole":
      yellowMole();
      break;
    case "redMole":
      redMole();
      break;
    case "purpleMole":
      purpleMole();
      break;
  }
}

function greenMole() {
  console.log("GRØNN MOLE");

  if (hitPosition == upperCaseLetter) {
    result++;
    //oppdater textContent av score-element
    score.textContent = result;

    //reset hitPosition
    hitPosition = null; //gjør denne noe? kommenterte den ut, og det skjedde ikke noe
  }
}

function yellowMole() {
  console.log("GUL MOLE");

  if (hitPosition == upperCaseLetter) {
    result++;
    //oppdater textContent av score-element
    score.textContent = result;

    currentTime += 5;
    //oppdater textContent av timeLeft-elementet
    timeLeft.textContent = currentTime;

    //reset hitPosition
    hitPosition = null; //gjør denne noe? kommenterte den ut, og det skjedde ikke noe
  } else {
    currentTime -= 1;
    //oppdater textContent av timeLeft-elementet
    timeLeft.textContent = currentTime;
    hitPosition = null;
  }
}

function redMole() {
  console.log("RØD MOLE");

  if (hitPosition == upperCaseLetter) {
    result--;
    //oppdater textContent av score-element
    score.textContent = result;

    //reset hitPosition
    hitPosition = null; //gjør denne noe? kommenterte den ut, og det skjedde ikke noe
  }
}

function purpleMole() {
  console.log("LILLA MOLE");
  if (hitPosition == upperCaseLetter) {
    result++;
    //oppdater textContent av score-element
    score.textContent = result;

    //reset hitPosition
    hitPosition = null; //gjør denne noe? kommenterte den ut, og det skjedde ikke noe
  }
}

//======================  Timer Functions  ================================================================================

//deklarer moveMole()-funksjon som kjører randomSquare()-funksjon på specifikk tidsinterval (i dette tilfellet hvert 500 ms)
function moveMole() {
  timerID = setInterval(randomSquare, 1000);
}

//kall moveMole()-funksjon
moveMole();

//deklarer countDown-funksjon
function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    //Kanseller alle tidsfunksjonene som kjører på intervaller
    clearInterval(countDownTimerId);
    clearInterval(timerID);

    checkHighscore();
  }
}
//deklarer countDownTimerId, som kjører countDown()-funksjon på spesifikk intervall (i dette tilfellet hvert 1000 ms)
let countDownTimerId = setInterval(countDown, 1000);

function compareNumbers(a, b) {
  return a - b;
}

function checkHighscore() {
  //======== HVIS SCORE UNDER ELLER LIK 0
  if (result <= 0) {
    //Betingelse 2: For lav skåre for å legge i tom array
    alert("Godt forsøk! Øvelse gjør mester. ");
  } else {
    //====== HVIS TOM ARRAY
    if (highscoreArray.length >= 0) {
      //Betingelse 1: Legge skåre i tom array
      if (result > 0) {
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
