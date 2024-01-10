document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const menus = document.querySelector('.menus');

  hamburgerMenu.addEventListener('click', function () {
    menus.classList.toggle('show');
  });
});
