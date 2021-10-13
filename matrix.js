const people = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 }
];

02 formas de fazer: 

1º 
const verifyPeople = people => people.age > 18 ? `${people.name} can go to the matrix` : `${people.name} is under the age!!`
const matrix = people.map(verifyPeople)
//-----------------------------------//
2º
const matrix = people.map(  
  people => people.age > 18 ? `${people.name} can go to the matrix` : `${people.name} is under the age!!`
)
console.log(matrix);