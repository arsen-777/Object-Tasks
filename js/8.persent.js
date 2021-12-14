"use strict";

let fiftyThirtyTwenty = function (number) {
  //

  const obj = {
    Needs: number / 2,
    Wants: (number / 100) * 30,
    Savings: (number / 100) * 20,
  };
  return obj;
};

console.log(fiftyThirtyTwenty(10000));
