# Classes

p110



Class has are made up of *member*.

There are two kinds of members: *properties* and *methods*.

*Perporties* is also called *attributes*.

```typescript
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

const person = new Person("Remo", "Jansen", "remo.jansen@wolksoftware.com");


console.log(person)
```

Results

```
$ ts-node person.ts
Person {
  email: 'remo.jansen@wolksoftware.com',
  name: 'Remo',
  surname: 'Jansen'
}
```

