const people = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const reducer = people.reduce(
  (acc, current, i, array) => {
    if(current.age >= 18 && current.age <= 25) {
      return ({
        ...acc,
        numYoungPeople: acc.numYoungPeople += 1,
        numYoungVotes: current.voted ? acc.numYoungVotes += 1 : acc.numYoungVotes,
      })
    }
    if(current.age >= 26 && current.age <= 35) {
      return ({
        ...acc,
        numMidPeople: acc.numMidPeople += 1,
        numMidVotes: current.voted ? acc.numMidVotes += 1 : acc.numMidVotes,
      })
    }
    if(current.age >= 36 && current.age <= 55) {
      return ({
        ...acc,
        numOldPeople: acc.numOldPeople += 1,
        numOldVotes: current.voted ? acc.numOldVotes += 1 : acc.numOldVotes,
      })
    }
    return acc;
  },    
  ({
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotes: 0,
    numMidPeople: 0,
    numOldVotes: 0,
    numOldPeople: 0,
  })
)
console.log(reducer);