'use strict';

document.querySelectorAll('.select__dropdown_item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.select__btn_text').textContent = item.textContent;
    })
});


const menuBtn = document.querySelector('.header_buttons_burger');
const menu = document.querySelector('.burger__menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('close');
    menu.classList.toggle('open');
})