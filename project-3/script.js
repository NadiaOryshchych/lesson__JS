'use strict';

let money, time;

function start() {
      money = +prompt('Какой ваш бюджет на месяц?', '500');
      while(isNaN(money) || money == ' ' || money == null ) {
            money = +prompt('Какой ваш бюджет на месяц?', '500');
      }
      time = prompt('Введите дату в формате YYYY-MM-DD', '2018-10-08');
}
start();

var appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: true
};

function chooseExpense() {
      for (let i = 0; i < 2; i++) {
            let unit = prompt('Введите обязательную статью расходов в этом месяце?', 'палка'),
                  cost = +prompt('Во сколько обойдется?', '23');

            if (typeof (unit) === 'string' && typeof (unit) != null &&
                  typeof (cost) != null && unit != '' && cost != '' &&
                  unit.length < 50) {
                  console.log('Done!');
                  appData.expenses[unit] = cost;
            } else {
                  console.log('noup');
                  i--;
            }
      }
}
chooseExpense();

function detectDayBudget() {
      appData.moneyPerDay = (appData.budget / 30).toFixed(2);
      alert(' Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
      if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
      } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
      } else {
            console.log('Error');
      }
}
detectLevel();

function checkSavings() {
      if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', '777'),
                  percent = +prompt('Под какой процент?', '');
            
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
      }
}
checkSavings();

function chooseOptExpenses() {
      for (let i = 1; i <= 3; i++) {
            let nonUnit = prompt('Статья необязательных расходов?', 'палка');

            if (typeof (nonUnit) === 'string' && typeof (nonUnit) != null &&
                  nonUnit != '' && nonUnit.length < 50) {
                  console.log('Done!');
                  appData.optionalExpenses[i] = nonUnit;
            } else {
                  console.log('noup');
                  i--;
            }
      }
}
chooseOptExpenses();

// // let num = 10;
// // function showFirstMessage(text) {
// //       console.log(text);
// //       num = 20;
// //       console.log(num);
// // }

// // showFirstMessage("hi");
// // console.log(num);

// function calc(a,b) {
//       return(a+b);
// }
// console.log(calc(3,4));

// let calc1 = (a,b) => a+b;
// console.log(calc1(3, 4));

// let str = 'test';
// console.log(str.length);
// console.log(str.toUpperCase());

// let td = '12.2px';
// console.log(Math.round(td));
// console.log(parseInt(td));
// console.log(parseFloat(td));