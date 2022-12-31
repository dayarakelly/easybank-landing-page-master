let menu_sandwich = document.querySelector('#menu_sandwich')
let menu = document.querySelector('.menu')
let shadow = document.querySelector('#shadow')
let close = document.querySelector('.menu_fechar')
let menu_items =[...document.querySelectorAll('.link_nav')]

menu_items[0].addEventListener('click', rolagem_menu_responsivo) 
menu_items[1].addEventListener('click', rolagem_menu_responsivo) 
menu_items[2].addEventListener('click', rolagem_menu_responsivo) 
menu_items[3].addEventListener('click', rolagem_menu_responsivo) 
menu_items[4].addEventListener('click', rolagem_menu_responsivo) 

function rolagem_menu_responsivo(){
    menu.classList.remove('move_menu')
    menu_sandwich.classList.remove('menu_fechar')
    menu_sandwich.classList.add('menu_abrir')
    shadow.classList.remove('shadow')
    shadow.classList.remove('move_shadow')
}

menu_sandwich.addEventListener('click', function () {
    menu.classList.toggle('move_menu')
    shadow.classList.toggle('shadow')
    shadow.classList.toggle('move_shadow')
    menu_sandwich.classList.toggle('menu_abrir')
    menu_sandwich.classList.toggle('menu_fechar')
})