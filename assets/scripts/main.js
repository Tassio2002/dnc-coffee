const cards = document.querySelectorAll(".info-card");
const buyButton = document.querySelectorAll(".buy-btn");
const card = document.querySelector(".t")
const serviceLink = document.querySelector("#service-link")
const blurModal = document.querySelector("#blur-container")
const contactModal = document.querySelector("#modal-contact")
const closeBtn = document.querySelector("#close")

let idx = 0;

function showBuyButton(index) {
  buyButton[index].style.display = "block";
}

function hideBuyButton(index) {
  buyButton[index].style.display = "none";
}

function showContactModal() {
  blurModal.style.display = "flex"
  contactModal.style.display = "flex"
}

function hideContactModal() {
  contactModal.style.display = "none"
  blurModal.style.display = "none"
}

serviceLink.addEventListener('click', showContactModal)
closeBtn.addEventListener('click', hideContactModal)