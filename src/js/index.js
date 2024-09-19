function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("height-auto");
  menu.classList.toggle("opacity-0");

  var menuList = document.querySelectorAll("#menu li");
  for (let li of menuList) {
    li.classList.toggle("hidden");
  }

  var navWrapper = document.getElementById("nav-wrapper");
  navWrapper.classList.toggle("drop-shadow");
}
