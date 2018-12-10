function modal() {
   // Модальное окно
   let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      descr = document.querySelectorAll('.description-btn');


   for (let i = 0; i < descr.length; i++) {
      descr[i].addEventListener('click', function () {
         overlay.style.display = 'block';
         this.classList.add('more-splash');
         document.body.style.overflow = 'hidden';
      });
      close.addEventListener('click', function () {
         overlay.style.display = 'none';
         descr[i].classList.remove('more-splash');
         document.body.style.overflow = '';
      });
   }

   more.addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
   });
   close.addEventListener('click', function () {
      overlay.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
   });
}

module.exports = modal;