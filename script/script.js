let menu_sandwich = document.querySelector('#menu_sandwich')
let menu = document.querySelector('.menu')
let shadow = document.querySelector('#shadow')
let close = document.querySelector('.menu_fechar')

menu_sandwich.addEventListener('click', function () {
    menu.classList.toggle('move_menu')
    shadow.classList.toggle('shadow')
    shadow.classList.toggle('move_shadow')
    menu_sandwich.classList.toggle('menu_abrir')
    menu_sandwich.classList.toggle('menu_fechar')
})