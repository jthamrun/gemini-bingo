document.addEventListener("DOMContentLoaded", function () {
  var randomNumberElement = document.getElementById("random-number");
  var generateButton = document.getElementById("generate-btn");
  var blacklist = [15, 5, 17, 12, 37, 28, 33, 11, 31, 13];

  // Initially hide the random-number element
  randomNumberElement.style.display = "none";

  generateButton.addEventListener("click", function () {
    var randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 100) + 1;
    } while (blacklist.includes(randomNumber));

    randomNumberElement.textContent = randomNumber;
    randomNumberElement.style.display = "block"; // Show the element when a number is generated
  });
});
