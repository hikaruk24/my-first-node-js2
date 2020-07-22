"use strict";
const number = process.argv[2] || 0; // process.argv[2]がFalsy(0,null,undefined)なら0が代入される
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);