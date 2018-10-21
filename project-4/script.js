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
   savings: true,
   chooseExpense: function() {
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
   },
   detectDayBudget: function() {
      appData.moneyPerDay = (appData.budget / 30).toFixed(2);
      alert(' Ежедневный бюджет: ' + appData.moneyPerDay);
   },
   detectLevel: function() {
      if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
      } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
      } else {
            console.log('Error');
      }
   },
   checkSavings: function () {
         if (appData.savings == true) {
               let save = +prompt('Какова сумма накоплений?', '777'),
                     percent = +prompt('Под какой процент?', '');

               appData.monthIncome = save / 100 / 12 * percent;
               alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
         }
   },
   chooseOptExpenses: function () {
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
   },
   chooseIncome: function() {
         let items = prompt('Что принесет дополниетльный доход? (Перечислите через зарятую)', '');
        
         if (typeof(items) === 'string' && items != '' && items != false ) {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то забыли?'));
            appData.income.sort();
         } else {
            alert('Что-то вы ввели не так, как надо, начните сначала');
            this.chooseIncome();
         }

         appData.income.forEach(function(item, i) {
             document.write(i+1 + ': ' + item + '<br>');
         });
   }
};

console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
      console.log(key + ' : ' + appData[key]);
}


// let options = {
//       width: 1024,
//       height: 1024,
//       name: 'test'
// };
// console.log(options.name);
// options.bool = false;
// options.colors = {
//       border: 'black',
//       bs: 'red'
// };
// delete options.bool;
// console.log(options);

// for (let key in options) {
//       console.log('Свойства ' + key + ' имеет значение ' + options[key]);
// }
// console.log(Object.keys(options).length);


// let arr = [1, 2, 3, 4, 5];
// arr.pop();
// arr.push('6');
// arr.shift();
// arr.unshift(333);
// arr[99] = 99;
// console.log(arr.length);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
// }

// let arr = ['first', 2, 3, 'four', 5];

// arr.forEach(function(item, i, mass) {
//       console.log(i + ': ' + item + ' (массив: ' + mass + ')');
// });
// console.log(arr); 

// let mass = [1, 3, 4, 6,7];
// for (let key of mass) {
//       console.log(key/*  + ' = ' + mass[key] */);
// }

// let ans = prompt('', ''), 
//       arra = [];
// arra = ans.split(',');
// console.log(arra);

// let arr = ['1','114','4'],
//       i = arr.join('^'),
//       u = arr.sort(compareNum);
// function compareNum(a,b) {
//       return a-b;
// }
// console.log(arr);
// console.log(i);

// let soldier = {
//       health: 400,
//       armor: 100
// };
// let john = {
//       health: 100
// };
// john.__proto__ = soldier;
// console.log(john);
// console.log(john.armor);

