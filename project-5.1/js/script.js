let list = document.getElementsByTagName('ul'),
   items = document.getElementsByClassName('menu-item'),
   item = document.createElement('li'),
   title = document.getElementById('title'),
   col = document.querySelectorAll('.column'),
   dash = document.querySelectorAll('.column div'),
   ans = prompt('Ваше отношение к технике apple', ''),
   ansPlace = document.getElementById('prompt');

list[0].appendChild(items[1]);
list[0].appendChild(items[2]);

// let list = document.querySelector('.menu'),
//    items = document.querySelectorAll('.menu .menu-item');
// list.insertBefore(items[2], items[1]);

item.classList.add('menu-item');
item.innerHTML = 'Пятый пункт';
list[0].appendChild(item);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

title.innerHTML = 'Мы продаем только <b>подлинную</b> технику Apple';

// console.log(col);
console.log(dash);
col[1].removeChild(dash[1]);

ansPlace.textContent = ans;



// let div = document.createElement('div'),
//    text = document.createTextNode('I am here');

// document.body.innerHTML += text;
// console.log(text);


