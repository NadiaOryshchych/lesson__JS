// let a, i;

// for (a = 2; a <= 100; a++) {
//       for (i = 2; i <= a; i++) {
//             if (a % i == 0) {
//                   continue;
//             }
//       }
//       console.log(a + ' - Делители этого числа: 1 и ' + i);
// }


nextPrime:
      for (var i = 2; i <= 10; i++) {

            for (var j = 2; j < i; j++) {
                  if (i % j == 0) continue nextPrime;
            }
            console.log(i);
      }

// do {
//       for (let i = 2; i <= a; i++) {
//             let rez = a % i;
//             if (rez == 0) {
//                   console.log(a + ' - Делители этого числа: 1 и ' + i);
//             }
//       }
//       i++;
// } while (i < 3);
