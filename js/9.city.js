"use strict";

let cityFacts = function (obj) {
  return (
    obj.name +
    " has a population " +
    obj.population +
    " and " +
    obj.continent +
    " is situated in Europe"
  );
};
console.log(
  cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe",
  })
);

("Paris has a population of 2,140,526 and is situated in Europe");
