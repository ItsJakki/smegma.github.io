function checkAnswer() {
  var userAnswer = document.getElementById("answer").value;
  var responseMessage = document.getElementById("responseMessage");

  // Check if the answer is correct
  if (userAnswer === "smegma") {
    responseMessage.textContent = "Pravilno! pridobil boš kozarec smegme danes ob 4 popoldne";
    responseMessage.style.color = "green";
  } else {
    responseMessage.textContent = "kys! dumbahh nigga";
    responseMessage.style.color = "red";
  }
}
