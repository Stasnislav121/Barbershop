var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var form= popup.querySelector("form");
var close = document.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");
var openMap = document.querySelector(".js-open-map");
var popupMap = document.querySelector(".modal-content-map");
var closeMap = popupMap.querySelector(".modal-content-close");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-content-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else{
      login.focus();
   }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-content-show")
});

form.addEventListener("submit", function(event) {
  if (!login.value || !password.value){
  event.preventDefault();
  console.log("Нужно ввести логин и пароль");
  } else {
    localStorage.setItem("login", login.value);
  }
})

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-content-show")
    }
  }
})
openMap.addEventListener("click", function(event){
  event.preventDefault();
  popupMap.classList.add("modal-content-show");
  overlay.classList.add("modal-content-show");
})
closeMap.addEventListener("click", function(event){
  event.preventDefault;
  popupMap.classList.remove("modal-content-show");
  overlay.classList.remove("modal-content-show")
})
window.addEventListener("keydown", function(event){
  if (event.keyCode === 27){
    if (popupMap.classList.contains("modal-content-show")) {
      popupMap.classList.remove("modal-content-show");
      overlay.classList.remove("modal-content-show")
    }
  }
})
