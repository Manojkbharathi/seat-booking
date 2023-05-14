"use strict";

const movieBtn = document.querySelectorAll(".btn");

const cardOneWindow = document.querySelector(".card-one");
const closeBtn = document.querySelector(".close-button");
const rateEl = document.getElementById("rate");
const seatEl = document.querySelectorAll(".row .seats:not(.occupied)");

const seatCountEl = document.getElementById("seat-count");
const totalPriceEl = document.getElementById("total-price");

let seatCount = 0;
let moviePrice = rateEl.value;

const init = function () {
  seatCountEl.innerText = seatCount;
  totalPriceEl.innerText = seatCount * moviePrice;
};
rateEl.addEventListener("change", function () {
  moviePrice = rateEl.value;
  init();
});

// initial setting - is used to inintial projrct look like

for (let i = 0; i < movieBtn.length; i++) {
  movieBtn[i].addEventListener("click", function () {
    cardOneWindow.classList.remove("hidden");
  });
}
closeBtn.addEventListener("click", function () {
  cardOneWindow.classList.add("hidden");
});

for (let i = 0; i < seatEl.length; i++) {
  seatEl[i].addEventListener("click", function () {
    if (seatEl[i].classList.contains("selected")) {
      seatEl[i].classList.remove("selected");
    } else {
      seatEl[i].classList.add("selected");
    }

    let selectedSeats = document.querySelectorAll(".row .seats.selected");
    // to find how many seats are selected
    seatCount = selectedSeats.length;
    init();
  });
}
init();
