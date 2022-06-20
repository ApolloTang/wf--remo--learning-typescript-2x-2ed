# Depth of the inheritance tree (DIT)



```typescript
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
```



:warning: It is not recommended to have too many levels in the inheritance tree. A class situated too deeply in the inheritance tree will be relatively complex to develop, test, and maintain.

:bulb: We should try to keep the DIT between 0 to 4 because a value greater than 4 would compromise encapsulation and increase complexity.
