'use strict';

let appData = {
   money: +prompt('Какой ваш бюджет на месяц?', '500'),
   time: prompt('Введите дату в формате YYYY-MM-DD', '2018-10-08'),
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false
};

for (let i = 0; i < 2; i++) {
   let unit = prompt('Введите обязательную статью расходов в этом месяце?', ''),
      cost = prompt('Во сколько обойдется?', '');
      
   if (typeof(unit) === 'string' && typeof(unit) != null && 
         typeof (cost) != null && unit != '' && cost != '' && 
         unit.length < 50) {
            console.log('Done!');         
            appData.expenses[unit] = cost;
   } else {
      console.log('noup');
      i--;
   }
};

/* let i = 0;
while (i < 2) {
      let unit = prompt('Введите обязательную статью расходов в этом месяце?', ''),
            cost = prompt('Во сколько обойдется?', '');
      if (typeof (unit) === 'string' && typeof (unit) != null &&
            typeof (cost) != null && unit != '' && cost != '' &&
            unit.length < 50) {
            console.log('Done!');
            appData.expenses[unit] = cost;
      } else {
            console.log('noup');
            i--;
      };
      i++;
}; */

/* let i = 0;
do {
      let unit = prompt('Введите обязательную статью расходов в этом месяце?', ''),
            cost = prompt('Во сколько обойдется?', '');
      if (typeof (unit) === 'string' && typeof (unit) != null &&
            typeof (cost) != null && unit != '' && cost != '' &&
            unit.length < 50) {
            console.log('Done!');
            appData.expenses[unit] = cost;
      } else {
            console.log('noup');
            i--;
      };
      i++;
} while (i < 2); */

appData.moneyPerDay = appData.money / 30;

alert(' Ежедневный бюджет: ' + appData.moneyPerDay.toFixed(2));

if (appData.moneyPerDay < 100) {
   console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
   console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
   console.log('Высокий уровень достатка');
} else {
   console.log('Error');
}


// switch (num) {
//    case num < 49:
//       console.log("No");
//       break;
//    case num > 100:
//       console.log("to big");
//       break;
//    case num > 80:
//       console.log("to big all");
//       break;
//    case 50:
//       console.log("true");
//       break;
//    default:
//       console.log("wrong someing");
//       break;
// };