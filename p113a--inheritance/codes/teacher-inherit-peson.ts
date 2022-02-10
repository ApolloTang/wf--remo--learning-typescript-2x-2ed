class Person {
  public name: string;
  public surname: string;
  public email: string;
  public constructor(name: string, surname: string, email: string) {
    this.email = email;
    this.name = name;
    this.surname = surname;
  }

  public greet() {
    console.log("Hi!");
  }
}

class Teacher extends Person {
  public teach() {
    console.log("I teach");
  }
}

const teacher = new Teacher(
  "Remo",
  "Jansen",
  "foo@gmail.com"
)

console.log(teacher.greet())
console.log(teacher.teach())


const person = new Person(
  "Remo",
  "Jansen",
  "foo@gmail.com"
)
console.log(person.greet())
console.log(person.teach()) // Error


