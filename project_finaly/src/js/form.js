function form() {
   // Form 
   let message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся!',
      failure: 'Что-то пошло не так...',
      errorPhone: 'Введите номер в правильном формате!'
   };

   let form = document.querySelector('.main-form'),
      input = document.getElementsByTagName('input'),
      formContact = document.querySelector('#form'),
      statusMessage = document.createElement('div');

   statusMessage.classList.add('status');

   console.log(input);
   for (let i = 0; i < input.length; i++) {
      input[i].addEventListener('input', function () {
         // let res = /[^0-9+]/.test(this);
         // if (res == false) {
         //     statusMessage.innerHTML = message.errorPhone;   
         // }
         // return res;
         if (this.type == 'tel') {
            this.value = this.value.replace(/[^0-9+]/, '');
         }
      });
   }

   function formSend(elem) {
      elem.addEventListener('submit', function (event) {
         event.preventDefault();
         elem.appendChild(statusMessage);
         let formData = new FormData(elem);

         function postData(data) {
            return new Promise(function (resolve, reject) {
               let request = new XMLHttpRequest();
               request.open('POST', 'server.php');
               request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

               request.onreadystatechange = function () {
                  if (request.readyState < 4) {
                     resolve();
                  } else if (request.readyState === 4) {
                     if (request.status == 200 && request.status < 300) {
                        resolve();
                     } else {
                        reject();
                     }
                  }
               };
               request.send(formData);
            });
         } // end postData

         function clearInput() {
            for (let i = 0; i < input.length; i++) {
               input[i].value = '';
            }
         }

         postData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);
      });
   }
   formSend(form);
   formSend(formContact);
}

module.exports = form;