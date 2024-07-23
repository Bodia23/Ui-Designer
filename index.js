const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
const burger = document.querySelector(".burger");
const body = document.querySelector("body");

const burgerOpenButton = () => {
  navigation.classList.toggle("active");
  menuButton.classList.toggle("active");
  burger.classList.toggle("active");
  body.style.overflow = "hidden";
};

const burgerCloseButton = () => {
  navigation.classList.toggle("active");
  menuButton.classList.toggle("active");
  burger.classList.toggle("active");
  body.style.overflow = "unset";
};
