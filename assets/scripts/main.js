let cards = document.querySelectorAll(".info-card");
let buyButton = document.querySelectorAll(".buy-btn");
let card = document.querySelector(".t")
let idx = 0;

function showBuyButton(index) {
  buyButton[index].style.display = "block";
}

function hideBuyButton(index) {
  buyButton[index].style.display = "none";
}