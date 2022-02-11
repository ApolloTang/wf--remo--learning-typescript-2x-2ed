// first-in-first-out (FIFO) data structure.
class Queue<T> {
  private _items:T[] = []
  public push(item:T) {
    this._items.push(item)
  }
  public pop() {
    // array shift method removes the first element from an array
    // (from the left) // and returns that removed element.
    return this._items.shift()
  }
}

class User {
  public name!: string
  public age!: number
}

const queue = new Queue<User>()
queue.push({name: 'foo', age: 11})
queue.push({name: 'bar', age: 12})


console.log(queue.pop()) // { name: 'foo', age: 11 }
console.log(queue.pop()) // { name: 'bar', age: 12 }
