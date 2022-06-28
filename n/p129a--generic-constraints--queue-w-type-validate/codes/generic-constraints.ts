// File: p129a--generic-constraints--queue-w-type-validate/codes/generic-constraints.ts

interface Validatable {
  validate(): void;
}


// first-in-first-out (FIFO) data structure.
class Queue<T extends Validatable> {
  private _queue:T[] = []

  public push(item:T) {
    item.validate()
    // array push method add a new element to the right
    this._queue.push(item)
  }

  public pop() {
    // array shift method removes the first element from an array
    // (from the left) and returns that removed element.
    return this._queue.shift()
  }
}


class User implements Validatable {
  public constructor(
    public name: string,
    public surname: string
  ) {}

  public validate() {
    if ( this.name === '' || this.surname === '' ) {
      throw new Error('Invalid user')
    }
  }
}


const queueUser = new Queue<User>()
queueUser.push( new User('foo', 'bar'))
console.log(queueUser.pop()) // { name: 'John', surname: 'Blow' }
// queueUser.push( new User('NoLastName', '')) // Error: Invalid user


class Car implements Validatable {
  public constructor(
    public manufacturer: string,
    public model: string
  ) {}

  public validate() {
    if ( this.manufacturer === '' || this.model === '' ) {
      throw new Error('Invalid car')
    }
  }
}

const queueCar = new Queue<Car>()
queueCar.push( new Car('Ford', 'model-t'))
console.log(queueCar.pop()) // { manufacturer: 'Ford', model: 'model-t' }
// queueCar.push( new Car('no-model', '')) // Error: Invalid car
