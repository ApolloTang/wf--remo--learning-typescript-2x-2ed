// first-in-first-out (FIFO) data structure.

class Queue<T> {
  private _queue:T[] = []

  public push(item:T) {
    // array push method add a new element to the right
    this._queue.push(item)
  }

  public pop() {
    // array shift method removes the first element from an array
    // (from the left) and returns that removed element.
    return this._queue.shift()
  }
}


class User {
  public name!: string
  public surname!: string
}


const queueUser = new Queue<User>()
queueUser.push({name: 'John', surname: 'Blow'})
console.log(queueUser.pop()) // { name: 'John', surname: 'Blow' }


class Car {
  public manufacturer!: string
  public model!: string
}

const queueCar = new Queue<Car>()
queueCar.push({manufacturer: 'Ford', model: 'model-t'})
console.log(queueCar.pop()) // { manufacturer: 'Ford', model: 'model-t' }
