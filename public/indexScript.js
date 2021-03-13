const rolls = ["Tushar","a Programmer", "a Gamer", "an Artist"];
var writtenText;
var letter = document.createElement("span");
var currentLetter = 0;
var current = 0;
var time = 150;

function typeWords(words) {
  word = rolls[current];
  if (currentLetter >= word.length) {
    setTimeout(removeWords,2000);
    current = current >= rolls.length -1 ? 0 : current+1;
  } else {
    letter = document.createElement("span");
    letter.classList = "letter";
    letter.textContent = rolls[current][currentLetter++];
    document.getElementById("cursor").insertAdjacentElement("beforebegin",letter);
    setTimeout(typeWords, time);
  }

}
function removeWords(words) {
    writtenText = document.querySelectorAll("#introTypewriter > span.letter");
    writtenText[writtenText.length-1].remove();
    currentLetter--;
    if (currentLetter > 0) {
        setTimeout(removeWords, time/2);
    }
    else setTimeout(typeWords, time);

}
typeWords(rolls);
