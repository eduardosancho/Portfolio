const menu = document.querySelector('.menu');
const open = document.querySelector('.open');
const close = document.querySelector('li.close');
const sectionLinks = document.querySelectorAll('.menu-link');

function showNav() {
  menu.style.top = '0';
}

function hideNav() {
  menu.style.top = '-100%';
}

open.addEventListener('click', showNav);
close.addEventListener('click', hideNav);
sectionLinks.forEach((item) => {
  item.addEventListener('click', hideNav);
});
