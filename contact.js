let navnInput = document.querySelector("#navnInput");
let emailInput = document.querySelector("#emailInput");
let textArea = document.querySelector("#textArea");

let sendButton = document.querySelector(".btn");
let sendErrorText = document.querySelector("#sendErrorText");

textArea.addEventListener("click", () => {
  textArea.innerHTML = "";
});

sendButton.addEventListener("click", () => {
  if (navnInput.value != "" && emailInput.value != "" && textArea.value != "") {
    sendErrorText.style.visibility = "hidden";
    alert(
      "Thank you for your submission. However, it will not be responded to since that is outside the scope of what this student project will cover."
    );
  } else {
    sendErrorText.style.visibility = "visible";
  }
});
