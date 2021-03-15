const rolls = ["Tushar", "a Developer", "a Gamer", "an Artist"];
const allSkills = document.querySelectorAll(".skill");
let counter;
var skillSet = 0;
var writtenText;
var letter = document.createElement("span");
var currentLetter = 0;
var current = 0;
var time = 150;

function typeWords(words) {
  word = rolls[current];
  if (currentLetter >= word.length) {
    setTimeout(removeWords, 2000);
    current = current >= rolls.length - 1 ? 0 : current + 1;
  } else {
    letter = document.createElement("span");
    letter.classList = "letter";
    letter.textContent = rolls[current][currentLetter++];
    document
      .getElementById("role")
      .insertAdjacentElement("beforeend", letter);
    setTimeout(typeWords, time);
  }
}
function removeWords(words) {
  writtenText = document.querySelectorAll("#introTypewriter  span.letter");
  writtenText[writtenText.length - 1].remove();
  currentLetter--;
  if (currentLetter > 0) {
    setTimeout(removeWords, time / 2);
  } else setTimeout(typeWords, time);
}
typeWords(rolls);

function showSkills() {
  var maxlimit =
    skillSet * 4 + 3 < skills.length ? 4 : skills.length - skillSet * 4;
  for (let i = 0; i < maxlimit; i++) {
    id = `#skill${i + 1}`;
    document.querySelector(`#skill${i + 1} .skillName`).innerHTML =
      skills[4 * skillSet + i].name;
    document
      .querySelector(`#skill${i + 1} .skillName`)
      .classList.replace("opacity-0", "opacity-100");
    document.querySelector(`#skill${i + 1} .skillImage`).setAttribute("src", skills[4 * skillSet + i].image);
    document.querySelector(`#skill${i + 1} .skillImage`).setAttribute("alt", skills[4 * skillSet + i].name);
    document.querySelector(`#skill${i + 1} .progressBarValue`).innerHTML = `${skills[4 * skillSet + i].rating}%`;
    document.querySelector(`#skill${i + 1} .skillImage`).classList.replace("opacity-0", "opacity-100");
    existingClass = document.querySelector(`#skill${i + 1} .progressBarBackground`).className.match(/bg.*200/g)[0];
    document.querySelector(`#skill${i + 1} .progressBarBackground`).classList.replace(existingClass, skills[4*skillSet + i].backgroundColor);
    document.querySelector(`#skill${i + 1} .progressBarBackground`).classList.replace("opacity-0", "opacity-10");
    document.querySelector(`#skill${i + 1} .progressBar`).style.width = `${skills[4 * skillSet + i].rating}%`;
    existingClass = document.querySelector(`#skill${i + 1} .progressBar`).className.match(/bg.*500/g)[0];
    document.querySelector(`#skill${i + 1} .progressBar`).classList.replace(existingClass, skills[4*skillSet + i].color);
    document.querySelector(`#skill${i + 1} .progressBarValue`).classList.replace("opacity-0", "opacity-80");



  }
  setTimeout(hideSkills, 4000);
}
function hideSkills() {

  for (let i = 0; i < 4; i++) {
    id = `skill${i + 1}`;
    document
      .querySelector(`#${id} .skillName`)
      .classList.replace("opacity-100", "opacity-0");
    document
      .querySelector(`#${id} .skillImage`)
      .classList.replace("opacity-100", "opacity-0");
    document
      .querySelector(`#${id} .progressBarBackground`)
      .classList.replace("opacity-10", "opacity-0");
    document.querySelector(`#${id} .progressBar`).style.width = `0%`;
    document
      .querySelector(`#${id} .progressBarValue`)
      .classList.replace("opacity-80", "opacity-0");

    }


  skillSet = skillSet < skills.length / 4 - 1 ? skillSet + 1 : 0;
  var maxlimit =
  skillSet * 4 + 3 < skills.length ? 4 : skills.length - skillSet * 4;

setTimeout(()=>{for(i=0;i<maxlimit;i++){
  document.querySelector(`#skill${i + 1} .skillImage`).setAttribute("src",skills[skillSet*4 + i].image);
}
},1000 )


  setTimeout(showSkills, 1500);
}

hideSkills();



document.querySelectorAll(".showProjectDetails").forEach(function(project) {
  project.addEventListener("click", function(){
    project.nextElementSibling.classList.toggle("h-0");
    if(project.nextElementSibling.classList.contains("h-0")){
      project.textContent = "Show Details";
    }
    else project.textContent = "Hide Details";
  });
  console.log(project.nextElementSibling)
})