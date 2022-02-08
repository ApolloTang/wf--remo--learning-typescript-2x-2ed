// Expressions

const Person = class {
  public constructor(
    public name: string,
    public surname: string,
    public email: string
  ) {
  }

  public greet() {
    console.log("Hi!");
  }
}

