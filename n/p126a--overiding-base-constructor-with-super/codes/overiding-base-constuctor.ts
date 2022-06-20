class Person {
  public constructor (
    public name: string,
    public surname: string,
    public email: string
  ) { }

  public greet() {
    return "I am a person";
  }
}

class Teacher extends Person {
  public constructor (   // <--- now teacher has its own construction
    public name: string,
    public surname: string,
    public email: string,
    public subjects: string[]  // <--- extra signature
  ) {
    super(name, surname, email)   // <--- Here we call super
  }

  public greet() {  // <--- over riding parent
    return "I am a teaher";
  }

  public teach() {
    return "I teach " + this.subjects.join(' ');
  }
}

const person = new Person( "foo", "bar", "bar@gmail.com")
console.log(person.greet())  // I am a person

const teacher = new Teacher( "Remo", "Jansen", "foo@gmail.com", ['math', 'sience'])
//                                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                                             teacher's constructor has different signature
console.log(teacher.greet()) // I am a teacher
console.log(teacher.teach()) // I teach math sience
