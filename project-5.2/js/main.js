let mainBtn = document.getElementById('start'),

   itemsValue = document.querySelectorAll('.result-table div'),

   expensesItem = document.getElementsByClassName('expenses-item'),

   itemsBtn = document.querySelectorAll('.data > button'),

   optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),

   chooseIncome = document.querySelector('#income'),
   savings = document.querySelector('#checkbox'),
   chooseSum = document.querySelector('#sum'),
   choosePercent = document.querySelector('#percent'),
   year = document.querySelector('.year-value'),
   month = document.querySelector('.month-value'),
   day = document.querySelector('.day-value');

console.log(mainBtn);

console.log(itemsValue);
for (let y = 0; y < itemsValue.length; y++) {
   if (y % 2 !== 0) {
      console.log(itemsValue[y]);
   } 
}

console.log(itemsBtn);
for (let i = 0; i < itemsBtn.length; i++) {
   console.log(itemsBtn[i]);
}

console.log(expensesItem);

console.log(optionalexpensesItem);

console.log(chooseIncome);
console.log(savings);
console.log(chooseSum);
console.log(choosePercent);
console.log(year);
console.log(month);
console.log(day);