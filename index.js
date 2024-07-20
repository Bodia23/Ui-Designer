const menuButton = document.querySelector(".menu-button");
const navList = document.querySelector(".nav-list");

menuButton.addEventListener("click", () => {
  // Переключаем класс `active` для списка и кнопки
  navList.classList.toggle("active");
  menuButton.classList.toggle("active");
});
