window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Tabs
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
    let deadline = '2018-12-12';

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

    // Модальное окно
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descr = document.querySelectorAll('.description-btn');

   
    for (let i = 0; i < descr.length; i++) {
        descr[i].addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
        close.addEventListener('click', function () {
            overlay.style.display = 'none';
            descr[i].classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    }

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });


    // Form 
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...',
        errorPhone: 'Введите номер в правильном формате!'
    };

    let form = document.querySelector('.main-form'),
        input = document.getElementsByTagName('input'),
        formContact = document.querySelector('#form'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    console.log(input);
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('input', function () {
            // let valid = /[^0-9+]/;
            // let res = valid.test(this);
            // if (res == false) {
            //     statusMessage.innerHTML = message.errorPhone;   
            // }
            // return res;
            if (this.type == 'tel') {
                this.value = this.value.replace(/[^0-9+]/, '');
                statusMessage.innerHTML = message.errorPhone;
                console.log('Вводите правильные символы');
            }
        });
    }

    function formSend(elem) {
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let formData = new FormData(elem);
            request.send(formData);

            // Отправка формы на JSON
            // let request = new XMLHttpRequest();
            // request.open('POST', 'server.php');
            // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            // let formData = new FormData(formContact);

            // let obj = {};
            // formData.forEach(function (value, key) {
            //     obj[key] = value;
            // });
            // let json = JSON.stringify(obj);
            // request.send(json);

            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        });
    }
    formSend(form);
    formSend(formContact);

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