"use strict";

var expensesUnit1 = prompt("Введите обязательную статью расходов в этом месяце?", "скрепка");
var expensesCost1 = +prompt("Во сколько обойдется?", "1.25");
var expensesUnit2 = prompt("Введите обязательную статью расходов в этом месяце?", "кнопка");
var expensesCost2 = +prompt("Во сколько обойдется?", "1.75");

var appData = {
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

var value = (appData.moneyData - 
   (appData.expenses.expensesUnit1 + appData.expenses.expensesUnit2)) / 30;
console.log(value);