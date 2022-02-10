class Person {
  public constructor (
    public name: string,
    public surname: string,
    public email: string
  ) { }

  public greet() {
    console.log("I am a person");
  }
}

class Teacher extends Person {
  public greet() { // <----- over riding parent
    console.log("I am a teaher");
  }

  public teach() {
    console.log("I teach");
  }
}

const person = new Person( "foo", "bar", "bar@gmail.com")
const teacher = new Teacher( "Remo", "Jansen", "foo@gmail.com")


console.log(person.greet())  // I am a person
console.log(teacher.greet()) // I am a teaher

console.log(teacher.teach()) // I teach
// console.log(person.teach())  // Error



