let str = 'урок-3-был слишком легким';

function upperStr() {
   return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(upperStr());

function spaceStr() {
   return str.replace(/ /g, '-');
}
console.log(spaceStr());

function cutStr() {
   let word = str.search('легким');
   return word.replace('им', 'оо');
}
console.log(cutStr());