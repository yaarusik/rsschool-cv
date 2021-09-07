//показываем меню бургер
const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    //чтобы заблочить скрол при всплывании меню
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
const menuBody = document.querySelector(".menu__body");
//убирать меню по клику по навигации
let menuLink = document.querySelectorAll(".menu__link");

menuLink.forEach((item) => {
  item.addEventListener("click", function () {
    document.body.classList.remove("_lock");
    menuBody.classList.remove("_active");
    iconMenu.classList.remove("_active");
  });
});
