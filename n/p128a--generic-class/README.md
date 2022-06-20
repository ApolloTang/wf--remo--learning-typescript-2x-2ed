# Generic classes



```typescript

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
```



```typescript
class User {
  public name!: string
  public surname!: string
}

const queueUser = new Queue<User>()
queueUser.push({name: 'foo', surname: 'bar'})
console.log(queueUser.pop()) // { name: 'foo', surname: 'bar' }
```



```typescript
class Car {
  public manufacturer!: string
  public model!: string
}

const queueCar = new Queue<Car>()
queueCar.push({manufacturer: 'foo', model: 'bar'})
console.log(queueCar.pop()) // { manufacturer: 'foo', model: 'bar' }
```

