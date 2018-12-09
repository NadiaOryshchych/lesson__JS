// let options = {
//    width: 1366,
//    height: 768,
//    background: 'red',
//    font: {
//       size: '16px',
//       color: '#fff'
//    }
// };

// console.log(JSON.parse(JSON.stringify(options)));  

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
   let request = new XMLHttpRequest();

   // request.open(method, url, async, login, parol);
   request.open('GET', 'js/current.json');
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
   request.send();

   // status (мы получаем код - 404 и тд)
   // statusText (мы получаем текстовый ответ)
   //responseText / response
   //readyState (отслеживает состояние объекта) - noReadyChangeState

   request.addEventListener('readystatechange', function() {
      if (request.readyState === 4 && request.status == 200) {
         let data = JSON.parse(request.response);

         inputUsd.value = inputRub.value / data.usd;
      } else {
         inputUsd.value = "Что-то пошло не так!";
      }
   });
});