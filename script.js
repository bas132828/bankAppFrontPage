"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// console.log(document.documentElement);

// const header = document.querySelector(".header");
// const allSelection = document.querySelectorAll(".section");
// // console.log(allSelection);

// document.getElementById("section--1");
// const allButtons = document.getElementsByTagName("button");
// // console.log(allButtons);

// document.getElementsByClassName("btn");

//creating and inserting html

// .insertAdjacentHTML

// const message = document.createElement("div");
// message.classList.add("cookie-message");
// // message.textContent = 'We use cookies for smth';
// message.innerHTML =
//   'We use cookies for smth <button class = "btn btn--close--cookie">Got it!</button>';

// header.append(message);
// header.append(message);
// header.append(message.cloneNode(true));
// // console.log(message);
// const moven = [1, 3, 5, 3, 2, 6, 23, 2, 6, 3, 4];

// const temp = moven.reduce((acc, cur) => {
//   if (acc > cur) return acc;
//   else return cur;
// }, moven[0]);

// console.log(temp);

// header.before(message);
// header.after(message.cloneNode(true));
// document
//   .querySelector(".btn--close--cookie")
//   .addEventListener("click", function () {
//     message.remove();
//   });

// message.style.backgroundColor = "#37383d";

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

// // attributes

// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.src);

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );
});
