window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);
    // почему мы пишет тут единицу, если первый элемент - это нулевой элемент должен быть.. как бы первый элемент массива

    function showabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target =  event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showabContent(i);
                    break;
                }
            }
        }
    });
});

// Таймер
// let timerId = setTimeout(sayHello, 10000);
// clearTimeout(timerId);
// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);
// function sayHello() {
//     console.log('Hello World');
// }

// Рекусивный вызов
// let timerId = setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log, 2000);
// });

// Анимация
// let btn = document.querySelector('.btn'),
//     elem = document.querySelector('.box');

// function myAnimation() {
//     let pos = 0;

//     let id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }
// btn.addEventListener('click', myAnimation);

// Делегирование
// let btnBlock = document.querySelector('.btn-clock'),
//     btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('clivk', function(event) {
//     if (event.target && event.target.tagName == 'BUTTON') {
//         console.log('Hello!');
//     }
// });
// btnBlock.addEventListener('clivk', function (event) {
//     if (event.target && event.target.classList.contains('first')) {
//         console.log('Hello!');
//     }
// });
// btnBlock.addEventListener('clivk', function (event) {
//     if (event.target && event.target.matches('button.first')) {
//         console.log('Hello!');
//     }
// });