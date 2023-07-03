let hemoglobineNumber = document.querySelector(".number");
let male = document.getElementById("male");
let female = document.getElementById("female");
let title = document.querySelector(".outcome");
let spaces = document.querySelectorAll(".space");

const showSpace = (link) => {
  spaces.forEach((space) => space.classList.remove("active"));
  let selector = link.getAttribute("href");
  let space = document.querySelector(selector);
  if (space) {
    space.classList.add("active");
  }
};

document.querySelector(".respmen .menu").addEventListener("click", (e) => {
  if (e.target.tagName == "A") {
    showSpace(e.target);
  }
});

const calculate = () => {
  if (male.checked) {
    if (hemoglobineNumber.value < 13.8) {
      return (title.innerHTML = "Low level");
    } else if (hemoglobineNumber.value > 17.2) {
      return (title.innerHTML = "High level");
    } else {
      return (title.innerHTML = "Normal level");
    }
  } else if (female.checked) {
    if (hemoglobineNumber.value < 12.1) {
      return (title.innerHTML = "Low level");
    } else if (hemoglobineNumber.value > 15.1) {
      return (title.innerHTML = "High level");
    } else {
      return (title.innerHTML = "Normal level");
    }
  }
};
