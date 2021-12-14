"use strict";
let pow = function (arr) {
  let res = [];
  res[0] = arr[0] ** arr[1];
  //   let j = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    res.push(res[i - 1] ** arr[i + 1]);
  }
  //   return res[res.length - 2];

  return res[res.length - 1];
};

console.log(pow([2, 3, 2]));
debugger;
