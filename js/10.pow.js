"use strict";

// let pow = function (arr) {
//   let res = [];
//   res[0] = arr[0] ** arr[1];
//   //   let j = 0;
//   for (let i = 1; i < arr.length - 1; i++) {
//     res.push(res[i - 1] ** arr[i + 1]);
//   }
//   //   return res[res.length - 2];

//   return res[res.length - 1];
// };

// console.log(pow([2, 3, 2]));
// debugger;

let printSum = function (firstMember, ...numbers) {
  if (parseInt(firstMember) == firstMember) {
    numbers.unshift(firstMember);
    firstMember === "+";
  }

  return numbers.reduce(function (agrr, val) {
    if (firstMember === "+") {
      return agrr + val;
    } else if (firstMember === "-") {
      return agrr - val;
    } else if (firstMember === "*") {
      return agrr * val;
    } else if (firstMember === "**") {
      return agrr ** val;
    } else {
      return agrr + val;
    }
  });
};

console.log(printSum("*", 1, 2, 3));
console.log(printSum("-", 1, 2, 3, 6, 7));
console.log(printSum("+", 2, 2, 3));
console.log(printSum("**", 2, 3, 2));
console.log(printSum(1, 2, 3, 4, 5));
