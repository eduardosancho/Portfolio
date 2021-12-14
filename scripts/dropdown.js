const menu = document.querySelector('.menu');
const open = document.querySelector('.open');
const close = document.querySelector('li.close');


open.addEventListener('click', show);
close.addEventListener('click', hide)

function show() {
    menu.style.top = "0";
    console.log("show allllllll");
}

function hide() {
    menu.style.top = "-100%";
    console.log("hideeeeeeeeeee");
}
