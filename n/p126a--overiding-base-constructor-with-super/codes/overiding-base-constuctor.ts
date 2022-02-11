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
  public constructor (
    name: string,
    surname: string,
    email: string,
    public subjects: string[]
  ) {
    super(name, surname, email)   // super is required to overide base constuctor
  }

  public greet() { // <----- over riding parent
    super.greet()  // <----- you can call base's method with super
    console.log("I am a teaher");
  }

  public teach() {
    console.log("I teach " + this.subjects.join(' '));
  }
}

const person = new Person( "foo", "bar", "bar@gmail.com")
const teacher = new Teacher( "Remo", "Jansen", "foo@gmail.com", ['math', 'sience'])


console.log(person.greet())  // I am a person
console.log(teacher.greet()) // I am a person
                             // I am a teaher

console.log(teacher.teach()) // I teach math sience
