// let a, i;

// for (a = 2; a <= 100; a++) {
//       for (i = 2; i <= a; i++) {
//             if (a % i == 0) {
//                   continue;
//             }
//       }
//       console.log(a + ' - Делители этого числа: 1 и ' + i);
// }

rez:
      for (let a = 2; a <= 100; a++) {
            for (var i = 2; i < a; i++) {
                  if (a % i == 0) continue rez;
            }
            document.body.innerHTML += a + ' - Делители этого числа: 1 и ' + i + '<br>';
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


// Превращение типов данных
// В строки: String, конкатинация
// В числа: Number, унарный плюс
// В булиновые значения: Boolean, !! (превращает в булин)
// false = 0, '', null, undefined, NaN


// let a = 'configuration';
// let t = a.split('');
// console.log(t);
// let r = t.join('');
// console.log(r);

// Я смотрела лекцию Вани. Он сказал, что метод forEach - является методом перебора массива. 
// А for in и for of ? Это также методы перебора? Но уже объекта?