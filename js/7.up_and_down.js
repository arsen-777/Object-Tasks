"use strcit";

let getVoteCount = function (obj) {
  const { upvotes, downvotes } = obj;
  return upvotes - downvotes;
};

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
