class Person {
  constructor( { firstName, lastName, age, gender, interest } ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interest = interest;
  }

  bioMessage() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old. They like ${this.intererest}.`;
    
  }

  greeting() {
    return `Hi! I'\m ${this.firstName} ${this.lastName}`;
  }
}

class Teacher extends Person {
  constructor( { firstName, lastName, age, gender, interest, subject }) {
    super( { firstName, lastName, age, gender, interest } );
    this.subject = subject;
  }

  bioMessage() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old. They like ${this.interest}`;
  }

  greeting() {
    return `Hi! I\'m ${this.firstName} ${this.lastName} and I teach ${this.subject}`
  }

}

class Student extends Person {
  constructor( { firstName, lastName, age, gender, interest } ) {
    super( { firstName, lastName, age, gender, interest } );
  }

  bioMessage() {
    console.log(super.bioMessage());
    return `${this.firstName} ${this.lastName} is ${this.age} years old. They like ${this.interest}`;
  }

  greeting() {
    return `Yo! I'm ${this.firstName}.`;
  }
}

let professor = new Teacher({
  firstName: 'Joao',
  lastName: 'Pereira',
  age: 17,
  gender: 'masculino', 
  subject: 'Matermática',
  interest: 'física-quantica'
});

console.log("\n \nTeacher")
console.log(professor.bioMessage());
console.log(professor.greeting());

let student = new Student({
  firstName: 'Maria', 
  lastName: 'Ferreira', 
  age: 14, 
  gender: 'Feminino', 
  interest: ['cinema', 'ler livros', 'jogar volei']
})

