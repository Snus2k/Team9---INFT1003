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

//======================= 1. RANDOM SQUARE FUNCTION: fjern alle moles og legg til mole i random square ======================
function randomSquare() {
  let moletypeNummer = Math.floor(Math.random() * 4 + 1);
  //lag randomSquare
  let randomSquare = squares[Math.floor(Math.random() * 29)];

  function moleAssign(a) {
    switch (a) {
      case 1:
        randomSquare.classList.add("grønnMole");
        break;
      case 2:
        randomSquare.classList.add("gulMole");
        break;
      case 3:
        randomSquare.classList.add("rødMole");
        break;
      case 4:
        randomSquare.classList.add("lillaMole");
        break;
    }
  }

  moleAssign(moletypeNummer);
  console.log(moletypeNummer);

  //for each square in squares array
  squares.forEach((square) => {
    //fjern mole-class fra alle square-elementer i squares-array
    square.classList.remove(moleType);
  });

  //sett hitPosition som randomSquare sin id

  hitPosition = randomSquare.id;
}

//======================= 2. KEYBOARD FUNCTIONS ======================

/*squares.forEach((square) => {
  //for hver square i squares array, legg til event listener/hendelse (mousedown)
  square.addEventListener("mousedown", () => {
    //sjekk om square id som er valgt, har samme id som randomSquare sin id
    if (square.id == hitPosition) {
      result++;
      //oppdater textContent av score-element
      score.textContent = result;

      //reset hitPosition
      hitPosition = null;
    }
  });
});*/

window.addEventListener("keydown", onKeyDown, true);

function onKeyDown(event) {
  //konverter Unicode til bokstaver
  let letter = String.fromCharCode(event.keyCode);
  //konverter til uppercase
  let upperCaseLetter = letter.toUpperCase();

  console.log("KEY PRESSED:" + upperCaseLetter);
  console.log("hitposition: " + hitPosition);

  if (hitPosition == upperCaseLetter) {
    result++;
    //oppdater textContent av score-element
    score.textContent = result;

    //reset hitPosition
    hitPosition = null; //gjør denne noe? kommenterte den ut, og det skjedde ikke noe
  } else {
    result--;
    score.textContent = result;
    hitPosition = null;
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
    //Vis sluttbrukers oppnådde skåre

    if (result >= 1) {
      alert("Denne skal byttes ut med skjema for highscore");
    } else alert("Du er så dårlig at du ikke får komme inn på listen");
  }
}

//deklarer countDownTimerId, som kjører countDown()-funksjon på spesifikk intervall (i dette tilfellet hvert 1000 ms)
let countDownTimerId = setInterval(countDown, 1000);
