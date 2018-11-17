let num = 33721;
// console.log(num);

// создает массив из строки:
// var arr = Array.from(num);
// console.log(arr);

// почему тогда этот работает?? 
// если split преобразовывает тоже строки
let arr = String(num).split(""); 
// console.log(arr);

let prod = 1;
for(let i = 0; i < arr.length; i++){
    prod *= arr[i];
    }
console.log(prod);

let value = String(prod ** 3).split("");
// console.log(value);

console.log(value[0] + value[1]);

// // глобальная переменная
// var q = 1;
// console.log(q);
// {
//    var q = 3;
//    console.log(q);
// }
// console.log(q);

// // локальная переменная??
// let m = 1;
// console.log(m);
// {
//    let m = 3;
//    console.log(m);
// }
// console.log(m);

// // чем отличается let и const?
// const p = 1;
// console.log(p);
// {
//    const p = 3;
//    console.log(p);
// }
// console.log(p);