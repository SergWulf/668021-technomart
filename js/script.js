// Реализация формы для связи
var link = document.querySelector(".write-us");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = document.querySelector("[name=form-feedback]");

var login = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var user_text = popup.querySelector("[name=feedback-text]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !user_text.value) {
        evt.preventDefault();
        alert("Нужно заполнить все поля!");
    }
});

//Реализация формы для покупки товара
var buyLink = document.querySelector(".card-product-buy");

var buyPopup = document.querySelector(".modal-add-product-in-basket");
var buyClose = buyPopup.querySelector(".modal-close");

buyLink.addEventListener("click", function (evt) {
   evt.preventDefault();
   buyPopup.classList.add("modal-show");
});

buyClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.remove("modal-show");
});


//Реализация показа интерактивной карты
var mapLink = document.querySelector(".contacts-company-map-address");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".map-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});