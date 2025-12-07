const burger = document.getElementById('burger-menu');
const burger_menu_links = document.getElementById('burger-menu-links');

burger.addEventListener('click', () => {
  burger_menu_links.classList.toggle('active');
});
