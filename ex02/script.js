const title = document.getElementById("main-title");
title.textContent = "Welcome to DOM!";

const description = document.querySelector(".description");
description.textContent="The text has been changed!";

title.style.color ="blue";

const statusElement = document.getElementById("status");
statusElement.textContent = "Status: active";
statusElement.classList.add("active");