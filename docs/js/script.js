// Бургер меню (для всіх сторінок)
const burger = document.getElementById('burger-menu');
const burger_menu_links = document.getElementById('burger-menu-links');

burger.addEventListener('click', () => {
  burger_menu_links.classList.toggle('active');
});
// ======================

// index.html
function goToShopping() {
  window.location.href = "pages/shopping.html";
}
// ======================

// login.html
function goToRegistration() {
  window.location.href = "registration.html";
}
// ======================

