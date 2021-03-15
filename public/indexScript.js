const rolls = ["Tushar", "a Programmer", "a Gamer", "an Artist"];
const allSkills = document.querySelectorAll(".skill");
let counter;
var skillPage = 0;
const skills = [
  {
    name: "Javascript",
    rating: "85",
    image: "https://img.icons8.com/color/48/000000/javascript.png",
    color: "bg-pink-500",
    backgroundColor: "bg-pink-200",
  },
  {
    name: "MongoDb",
    rating: "70",
    image: "https://img.icons8.com/color/48/000000/mongodb.png",
    color: "bg-pink-500",
    backgroundColor: "bg-pink-200",
  },
  {
    name: "Java",
    rating: "60",
    image: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
    color: "bg-pink-500",
    backgroundColor: "bg-pink-200",
  },
  {
    name: "HTML",
    rating: "90",
    image: "https://img.icons8.com/color/48/000000/html-5.png",
    color: "bg-pink-500",
    backgroundColor: "bg-pink-200",
  },
  {
    name: "CSS",
    rating: "90",
    image: "https://img.icons8.com/color/48/000000/css3.png",
    color: "bg-pink-500",
    backgroundColor: "bg-pink-200",
  },
  {
    name: "C++",
    rating: "90",
    image: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
    color: "bg-pink-500",
    backgroundColor: "bg-pink-200",
  },
  {
    name: "SQL",
    rating: "90",
    image: "https://img.icons8.com/color/48/000000/sql.png",
    color: "bg-pink-500",
    backgroundColor: "bg-pink-200",
  },
  {
    name: "React",
    rating: "10",
    image: "https://img.icons8.com/color/48/000000/react-native.png",
    color: "bg-pink-500",
    backgroundColor: "bg-pink-200",
  },
  {
    name: "Node-Js",
    rating: "70",
    image: "https://img.icons8.com/color/48/000000/nodejs.png",
    color: "bg-pink-500",
    backgroundColor: "bg-pink-200",
  },
  
];
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
      .getElementById("cursor")
      .insertAdjacentElement("beforebegin", letter);
    setTimeout(typeWords, time);
  }
}
function removeWords(words) {
  writtenText = document.querySelectorAll("#introTypewriter > span.letter");
  writtenText[writtenText.length - 1].remove();
  currentLetter--;
  if (currentLetter > 0) {
    setTimeout(removeWords, time / 2);
  } else setTimeout(typeWords, time);
}
typeWords(rolls);

// document.getElementById("skillImage1").style.opacity = 1;
// document.getElementById("skillName1").style.opacity = 1;

function showSkills() {
  for(let i=0;i<4;i++ ) {
    id = `skill${i+1}`;
    document
      .querySelector(`#${id} .skillName`).innerHTML = skills[4*skillPage+i].name;
      document
      .querySelector(`#${id} .skillImage`).setAttribute('src',skills[4*skillPage+i].image);
      document
      .querySelector(`#${id} .progressBarValue`).innerHTML = `${skills[4*skillPage+i].rating}%`
    document
      .querySelector(`#${id} .skillName`)
      .classList.replace("opacity-0", "opacity-100");
    document
      .querySelector(`#${id} .skillImage`)
      .classList.replace("opacity-0", "opacity-100");
    document
      .querySelector(`#${id} .progressBarBackground`)
      .classList.replace("opacity-0", "opacity-100");
      document
      .querySelector(`#${id} .progressBar`).style.width = `${skills[4*skillPage+i].rating}%`;
      document
      .querySelector(`#${id} .progressBarValue`).classList.replace("opacity-0", "opacity-100");
  };
  setTimeout(hideSkills,4000);
}
function hideSkills() {
  for(let i=0;i<4;i++ ) {
    id = `skill${i+1}`
    document
      .querySelector(`#${id} .skillName`)
      .classList.replace("opacity-100", "opacity-0");
    document
      .querySelector(`#${id} .skillImage`)
      .classList.replace("opacity-100", "opacity-0");
    document
      .querySelector(`#${id} .progressBarBackground`)
      .classList.replace("opacity-100", "opacity-0");
      document
      .querySelector(`#${id} .progressBar`).style.width = `0%`;
      document
      .querySelector(`#${id} .progressBarValue`).classList.replace("opacity-100", "opacity-0");
      
  };
  // skillPage = (skillPage<skills.length/4-1) ?skillPage + 1 : 0;
  skillPage = (skillPage<1) ?skillPage + 1 : 0;
  setTimeout(showSkills,1500);

}

showSkills();