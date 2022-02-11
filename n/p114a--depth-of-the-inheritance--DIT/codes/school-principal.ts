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

class SchoolPrincipal extends Teacher {
  public manage() {
    console.log("I am a principal");
  }
}

const schoolPrincipal = new SchoolPrincipal(
  "Remo",
  "Jansen",
  "foo@gmail.com"
)

console.log(schoolPrincipal.manage())
