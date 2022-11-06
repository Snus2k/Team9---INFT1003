//initialize array of squares (with the html square class)
const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let hitPosition;
let result = 0;
let currentTime = 10;
let timerID = null;
<<<<<<< HEAD
let moleType;
let upperCaseLetter;

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
  //  console.log(moletypeNummer);
=======

let moletypeNumber = 0;

//======================= 1. RANDOM SQUARE FUNCTION: fjern alle moles og legg til mole i random square ======================
function randomSquare() {
  moletypeNumber = Math.floor(Math.random() * 4 + 1);
  //lag randomSquare
  let randomSquare = squares[Math.floor(Math.random() * 29)];

  switch (moletypeNumber) {
    case 1:
      randomSquare.classList.add("greenMole");
      break;
    case 2:
      randomSquare.classList.add("yellowMole");
      break;
    case 3:
      randomSquare.classList.add("redMole");
      break;
    case 4:
      randomSquare.classList.add("purpleMole");
      break;
  }
  console.log(moletypeNumber);

  //for each square in squares array
  squares.forEach((square) => {
    //fjern mole-class fra alle square-elementer i squares-array
    square.classList.remove(moleType);
  });
>>>>>>> main

  //sett hitPosition som randomSquare sin id

  // hitPosition = randomSquare.id;
}

function moleAssign(moletypeNummer, randomSquare) {
  switch (moletypeNummer) {
    case 1:
      randomSquare.classList.add("grønnMole");
      moleType = "grønnMole";
      break;
    case 2:
      randomSquare.classList.add("gulMole");
      moleType = "gulMole";
      break;
    case 3:
      randomSquare.classList.add("rødMole");
      moleType = "rødMole";
      break;
    case 4:
      randomSquare.classList.add("lillaMole");
      moleType = "lillaMole";
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
    case "grønnMole":
      grønnMole();
      break;
    case "gulMole":
      gulMole();
      break;
    case "rødMole":
      rødMole();
      break;
    case "lillaMole":
      lillaMole();
      break;
  }
}

function grønnMole() {
  console.log("GRØNN MOLE");

  if (hitPosition == upperCaseLetter) {
    result++;
    //oppdater textContent av score-element
    score.textContent = result;

    //reset hitPosition
    hitPosition = null; //gjør denne noe? kommenterte den ut, og det skjedde ikke noe
  }
}

function gulMole() {
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

function rødMole() {
  console.log("RØD MOLE");

  if (hitPosition == upperCaseLetter) {
    result++;
    //oppdater textContent av score-element
    score.textContent = result;

    //reset hitPosition
    hitPosition = null; //gjør denne noe? kommenterte den ut, og det skjedde ikke noe
  } else {
    result--;
    //oppdater textContent av score-element
    score.textContent = result;

    //reset hitPosition
    hitPosition = null; //gjør denne noe? kommenterte den ut, og det skjedde ikke noe
  }
}

function lillaMole() {
  console.log("LILLA MOLE");
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
    //Vis sluttbrukers oppnådde skåre

    if (result >= 1) {
      alert("Denne skal byttes ut med skjema for highscore");
    } else alert("Du er så dårlig at du ikke får komme inn på listen");
  }
}

//deklarer countDownTimerId, som kjører countDown()-funksjon på spesifikk intervall (i dette tilfellet hvert 1000 ms)
let countDownTimerId = setInterval(countDown, 1000);
