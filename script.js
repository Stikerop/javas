'use strict'

const arr = [2, 13, 63, 18, 12];
arr.sort(compareNum);
console.log(arr);

function  compareNum(a, b) {
    return a - b;
}
arr[99] = 2;
console.log(arr.length);
console.log(arr);

arr.forEach(function (item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});


arr.pop();
arr.push(10, 12, 14);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value)
}

