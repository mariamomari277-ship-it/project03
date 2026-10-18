const title = document.getElementById("main-title");
const description = document.querySelector(".description");
const card = document.getElementById("card");
const button = document.getElementById("change-button");

title.textContent = "JavaScript Changed This Title!";
description.textContent = "The original text has changed.";

card.style.color = "darkblue";
card.classList.add("active");

button.textContent = "Page Changed!";
