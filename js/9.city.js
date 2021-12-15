"use strict";

let cityFacts = function (obj) {
  const {
    name,
    population,
    continent,
    regions: [kv, kn, ks],
  } = obj;
  return `${name} has a population of ${population} and is situated in ${continent}  ${ks} ${kn} ${kv}`;
};
console.log(
  cityFacts({
    name: "Paris",
    population: "2,140,526",
    regions: ["kvartal", "kentron", "komitas"],
    continent: "Europe",
  })
);

("Paris has a population of 2,140,526 and is situated in Europe");
