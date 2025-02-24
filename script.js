const menu_btn = document.getElementById("menu_btn");
const menu_icon = document.getElementById("menu_icon");
const mobile_menu = document.getElementById("mobile_menu");

let isMenuClicked = false;

menu_btn.addEventListener("click", (e) => {
  if (isMenuClicked) {
    menu_icon.setAttribute("src", "./assets/shared/mobile/menu.svg");
    mobile_menu.style.display = "none";
    isMenuClicked = !isMenuClicked;
  } else {
    menu_icon.setAttribute("src", "./assets/shared/mobile/close.svg");
    mobile_menu.style.display = "flex";
    isMenuClicked = !isMenuClicked;
  }
});

window.addEventListener("resize", () => {
  menu_icon.setAttribute("src", "./assets/shared/mobile/menu.svg");
  mobile_menu.style.display = "none";
});
