"use strict";

let appData = {
   money: +prompt("Какой ваш бюджет на месяц?", "500"),
   time: prompt("Введите дату в формате YYYY-MM-DD", "2018-10-08"),
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false
};

// let unit1 = prompt("Введите обязательную статью расходов в этом месяце?", "скрепка");
// let unit2 = prompt("Введите обязательную статью расходов в этом месяце?", "кнопка");
appData.expenses[prompt("Введите обязательную статью расходов в этом месяце?", "скрепка")] = +prompt("Во сколько обойдется?", "1.25");
appData.expenses[prompt("Введите обязательную статью расходов в этом месяце?", "кнопка")] = +prompt("Во сколько обойдется?", "1.75");

let value = (appData.money / 30);
console.log(value);