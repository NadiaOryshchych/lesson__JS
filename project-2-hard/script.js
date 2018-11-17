'use strict';
// Перове задание
let week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (let i = 0; i < 7; i++) {
      if (i === 5 || i === 6) {
           document.write('<div style="font-weight: bold">' + week[i] + '</div>');
           console.log('holiday');
      } else if (i === 0) {
           document.write('<div style="font-style: italic">' + week[i] + '</div>');
      } else {
           document.write('<div>' + week[i] + '</div>');
      }
}

// Второе задание
let arr = ['34', '768', '234', '13', '199', '80', '75'];

for (let u = 0; u < arr.length; u++) {
      let one = arr[u].toString();
      // console.log(one);
      // console.log(one.charAt(0));
      if (one.charAt(0) == 3 || one.charAt(0) == 7) {
            console.log(one);
      }      
}