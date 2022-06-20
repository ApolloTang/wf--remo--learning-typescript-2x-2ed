# Overiding base's method



```typescript
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
  public greet() { // <----- over riding parent
    return "I am a teaher";
  }

  public teach() {
    return "I teach";
  }
}

const person = new Person( "foo", "bar", "bar@gmail.com")
const teacher = new Teacher( "Remo", "Jansen", "foo@gmail.com")

console.log(teacher.greet()) // I am a teaher
console.log(teacher.teach()) // I teach

console.log(person.greet())  // I am a person

// console.log(person.teach())  // Error <-- person Person does noe has "teach" method
```





