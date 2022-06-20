
interface Validatable {
  validate(): void;
}


// first-in-first-out (FIFO) data structure.
class Queue<T extends Validatable> {
  private _items:T[] = []

  public push(item:T) {
    item.validate()
    this._items.push(item)
  }

  public pop() {
    // array shift method removes the first element from an array
    // (from the left) // and returns that removed element.
    return this._items.shift()
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
console.log(queueUser.pop()) // { name: 'foo', surname: 'bar' }
// queueUser.push( new User('foo', '')) // Error: Invalid user


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
queueCar.push( new Car('foo', 'bar'))
console.log(queueCar.pop()) // { manufacturer: 'foo', model: 'bar' }
// queueCar.push( new Car('foo', '')) // Error: Invalid car
