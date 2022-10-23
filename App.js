//initialize array of squares (with the html square class)
const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let hitPosition;
let result = 0;
let currentTime = 60;
let timerID = null;

//======================= 1. RANDOM SQUARE FUNCTION: fjern alle moles og legg til mole i random square ======================
function randomSquare() {
  //for each square in squares array
  squares.forEach((square) => {
    //fjern mole-class fra alle square-elementer i squares-array
    square.classList.remove("mole");
  });

  //lag randomSquare
  let randomSquare = squares[Math.floor(Math.random() * 29)];

  randomSquare.classList.add("mole");

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
  }
}

//======================  Timer Functions  ================================================================================

//deklarer moveMole()-funksjon som kjører randomSquare()-funksjon på specifikk tidsinterval (i dette tilfellet hvert 500 ms)
function moveMole() {
  timerID = setInterval(randomSquare(), 1000);
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
      alert("Denne skal byttes ut med skjema får highscore");
    } else alert("Du er så dårlig at du ikke for komme inn på listen");
  }
}

//deklarer countDownTimerId, som kjører countDown()-funksjon på spesifikk intervall (i dette tilfellet hvert 1000 ms)
let countDownTimerId = setInterval(countDown, 1000);
