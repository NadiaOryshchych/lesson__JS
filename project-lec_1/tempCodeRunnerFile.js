let a = 100;
let b = 1;

do {
      for (let i = 1; i > 2; i++) {
            let rez = a % b;
            if (rez == 0) {
                  console.log(a + ' - Делители этого числа: 1 и ' + b);
            }
            b++;
      }
} while (true);
