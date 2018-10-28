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

    // Timer

    let deadline = '2018-11-01';

    function getTimeRemaiming(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        // hours = Math.floor((t / 1000 / 60 / 60) % 24),
        // days = Math.floor((t / (1000 * 60 * 60 * 24));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaiming(endtime);

            // Почему не сработал метод перебора??
            // for (let key in t) {
            //     if (key < 10) {
            //         key = '0' + key;
            //         console.log(key);
            //     }
            // }

            hours.textContent = t.hours < 10 ? '0' + t.hours : t.hours;
            minutes.textContent = t.minutes < 10 ? '0' + t.minutes : t.minutes;
            seconds.textContent = t.seconds < 10 ? '0' + t.seconds : t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock('timer', deadline);
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

// Параметры документа, окна и работа с ними
// let box = document.querySelector('.box'),
//     btn = document.querySelector('button');

// let width = box.clitentWidth,
//     height = box. clientHeight;

// console.log(width);
// console.log(height);
// console.log(box.getBoundingClientRect().left);

// btn.addEventListener('click', function() {
//     box.style.height = box.scrollHeight + 'px';
//     box.scrollHeight = 5000; // не работает
//     console.log(box.scrollTop);
//     box.scrollTop = 0;
// });

// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.clientHeight);
// console.log(document.documentElement.scrollTop);

// scrollBy(x, y);
// scrollBy(0, 200); // будет "мотать" страницу вниз
// scrollTo(0, 200); // прокручивает именно в определённое место