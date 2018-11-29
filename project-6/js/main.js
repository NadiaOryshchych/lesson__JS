let mainBtn = document.getElementById('start'),

   itemsValue = document.querySelectorAll('.result-table div'),

   expensesItem = document.querySelectorAll('.expenses-item'),

   itemsBtn = document.querySelectorAll('.data > button'),

   optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

   chooseIncome = document.querySelector('#income'),
   savings = document.querySelector('#savings'),
   chooseSum = document.querySelector('#sum'),
   choosePercent = document.querySelector('#percent'),
   year = document.querySelector('.year-value'),
   month = document.querySelector('.month-value'),
   day = document.querySelector('.day-value');
let money, time;

// itemsBtn[0].classList.add('disable');
// itemsBtn[1].classList.add('disable');
// itemsBtn[2].classList.add('disable');

itemsBtn.forEach(function (item) {
   item.setAttribute('disabled', 'disabled');
});
// itemsBtn[0].setAttribute('disabled', 'disabled');
// itemsBtn[1].setAttribute('disabled', 'disabled');
// itemsBtn[2].setAttribute('disabled', 'disabled');

// document.querySelectorAll('.expenses-item').disable = true;

mainBtn.addEventListener('click', function() {
   time = prompt('Введите дату в формате YYYY-MM-DD', '2018-11-26');
   money = +prompt('Какой ваш бюджет на месяц?', '70000');
   while (isNaN(money) || money == ' ' || money == null) {
      money = +prompt('Какой ваш бюджет на месяц?', '50000');
   }
   appData.budget = money;
   appData.timeData = time;
   itemsValue[1].textContent = money.toFixed();
   year.value = new Date(Date.parse(time)).getFullYear();
   month.value = new Date(Date.parse(time)).getMonth() + 1;
   day.value = new Date(Date.parse(time)).getDate();
   console.log(day.value);

//    itemsBtn[0].classList.remove('disable');
//    itemsBtn[1].classList.remove('disable');
//    itemsBtn[2].classList.remove('disable');

   itemsBtn.forEach(function (item) {
      item.removeAttribute('disabled');
   });
   //  itemsBtn[0].removeAttribute('disabled');
   //  itemsBtn[1].removeAttribute('disabled');
   //  itemsBtn[2].removeAttribute('disabled');   
});

itemsBtn[0].addEventListener('click', function () {
   let sum = 0;
   for (let i = 0; i < expensesItem.length; i++) {
      let unit = expensesItem[i].value,
          cost = expensesItem[++i].value;

      if (typeof(unit) === 'string' && unit != null &&
         cost != null && unit != '' && cost != '' && unit.length < 50) {
         console.log('Done!');
         appData.expenses[unit] = cost;
         sum += +cost;
      } else {
         console.log('noup');
         i--;
         // break;
      }
   }
   itemsValue[7].textContent = sum;
});

itemsBtn[1].addEventListener('click', function () {
   itemsValue[9].textContent = '';
   for (let i = 0; i < optionalExpensesItem.length; i++) {
      let nonUnit = optionalExpensesItem[i].value;

      if (typeof (nonUnit) === 'string' && nonUnit != null &&
         nonUnit != '' && nonUnit.length < 50) {
         console.log('Done!');
         appData.optionalExpenses[i] = nonUnit;
      } else {
         console.log('noup');
         i--;
      }
      if (i < optionalExpensesItem.length-1) {
         itemsValue[9].textContent += appData.optionalExpenses[i] + ', ';
      } else {
         itemsValue[9].textContent += appData.optionalExpenses[i];
      }
   }
});

itemsBtn[2].addEventListener('click', function () {

   if (appData.budget != undefined) {
      appData.moneyPerDay = ((appData.budget - itemsValue[7].innerText) / 30).toFixed(2);
      itemsValue[3].textContent = appData.moneyPerDay;

      if (appData.moneyPerDay < 100) {
         itemsValue[5].textContent = 'Минимальный уровень достатка';
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
         itemsValue[5].textContent = 'Средний уровень достатка';
      } else if (appData.moneyPerDay > 2000) {
         itemsValue[5].textContent = 'Высокий уровень достатка';
      } else {
         itemsValue[5].textContent = 'Где-то ошибка!';
      }
   } else {
      itemsValue[3].textContent = 'Введите ваш доход';
   }
});


chooseIncome.addEventListener('input', function () {
   let items = chooseIncome.value;
   appData.income = items.split(', ');

   itemsValue[11].textContent = appData.income;
});

savings.addEventListener('click', function () {
   if (appData.savings == true) {
      appData.savings = false;
   } else {
      appData.savings = true;
   }
});

chooseSum.addEventListener('input', function () {
   if (appData.savings == true) {
      let sum = +chooseSum.value,
         percent = +choosePercent.value;

      appData.monthIncome = sum / 100 / 12 * percent;
      appData.yearIncome = sum / 100 * percent;

      itemsValue[13].textContent = appData.monthIncome.toFixed(1);
      itemsValue[15].textContent = appData.yearIncome.toFixed(1);
   }
});

choosePercent.addEventListener('input', function () {
   if (appData.savings == true) {
      let sum = +chooseSum.value,
         percent = +choosePercent.value;

      appData.monthIncome = sum / 100 / 12 * percent;
      appData.yearIncome = sum / 100 * percent;

      itemsValue[13].textContent = appData.monthIncome.toFixed(1);
      itemsValue[15].textContent = appData.yearIncome.toFixed(1);
   }
});


var appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false
};



// let btn = document.querySelectorAll('button'),
//    wrap = document.querySelector('.wrapper'),
//    link = document.querySelector('a');
/* 
btn[0].onclick = function() {
   alert('Вы нажали первую кнопку');
} */

// btn[0].addEventListener('click', function(event) {
//    // console.log(event);
//    // let target = event.target;
//    // target.style.display = 'none';
//    console.log('Произошло событие: ' + event.type + 
//    'на элементе' + event.target);
// });

// wrap.addEventListener('click', function() {
//    console.log('Произошло событие: ' + event.type +
//    'на элементе' + event.target);
// });

// link.addEventListener('click', function(event) {
//    event.preventDefault();
//    console.log('Произошло событие: ' + event.type +
//       'на элементе' + event.target);
// });

// btn.forEach(function(item) {
//    item.addEventListener('mouseleave', function() {
//       console.log('Done!');
//    }   )
// });

// btn[0].addEventListener('click', function () {
//    alert('Вы опять нажали первую кнопку');
// });

// btn[0].addEventListener('mouseenter', function() {
//    alert('Вы навели на первую кнопку');
// })