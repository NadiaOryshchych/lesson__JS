$(document).ready(function () {
   $('.main_btna, .contact, li:contains("расписания туров")')
   .on('click', function () {
      $('.overlay').fadeIn("slow");
      $('.modal').animate({
            display: "block",
            height: "toggle"
         }, 2000);
   });
   $('.close').on('click', function() {
      $('.overlay').hide("slow");
      $('.modal').slideUp();
   });
});

// $(window).bind("load", function () {
//    // Your code here.
// });



// Перебор элементов
// $(document).ready(function() {
//    $('.list-item:first').hover(function() {
//       $(this).toggleClass('active');
//    });

//    $('.list-item:eq(2)').on('click', function() {
//       $('.image:even').fadeToggle('slow');
//    });

//    $('.list-item:eq(4)').on('click', function () {
//       $('.image:odd').animate(
//          {
//             opacity: 'toggle',
//             height: 'toggle'
//          }, 3000
//       );
//    });
// });

// document.querySelectorAll('.list-item').forEach(...)
// .classList
// .addEventListener
// $ajax - fetch
// animations