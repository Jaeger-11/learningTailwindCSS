const close = document.getElementById('close-icon');
const open = document.getElementById('hamburger');
const menu = document.getElementById('menu');

open.addEventListener('click', () => {
    menu.classList.add("flex");
    menu.classList.remove("hidden");
})

close.addEventListener('click', () => {
    menu.classList.remove("flex");
    menu.classList.add('hidden');
})