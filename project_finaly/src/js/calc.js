function calc() {
   // Калькулятор
   let persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      calcInput = document.querySelectorAll('.counter-block-input'),
      place = document.getElementById('select'),
      totalValue = document.getElementById('total');
   totalValue.innerHTML = 0;

   calcInput.forEach(function (item, i, arr) {
      arr[i].addEventListener('input', function () {
         arr[i].value = arr[i].value.replace(/[^0-9]/ig, '');
      });
   });

   function clacSum() {
      if (persons.value == '' || restDays.value == '' || restDays.value == 0 || persons.value == 0) {
         totalValue.innerHTML = 0;
      } else {
         totalValue.innerHTML = (restDays.value * persons.value) * 4000 * place.value;
      }
   }
   persons.addEventListener('change', clacSum);
   restDays.addEventListener('change', clacSum);
   place.addEventListener('change', clacSum);
}

module.exports = calc;