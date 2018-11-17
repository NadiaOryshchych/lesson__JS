"use strict";

let expensesUnit1 = prompt("Введите обязательную статью расходов в этом месяце?", "скрепка");
let expensesCost1 = +prompt("Во сколько обойдется?", "1.25");
let expensesUnit2 = prompt("Введите обязательную статью расходов в этом месяце?", "кнопка");
let expensesCost2 = +prompt("Во сколько обойдется?", "1.75");

let appData = {
   money: +prompt("Какой ваш бюджет на месяц?", "500"),
   time: prompt("Введите дату в формате YYYY-MM-DD", "2018-10-08"),
   expenses: {
    expensesUnit1: expensesCost1,
    expensesUnit2: expensesCost2
   },
   optionalExpenses: {},
   income: [],
   savings: false
};

let value = (appData.money / 30);
console.log(value);