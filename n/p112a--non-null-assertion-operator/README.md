# Non-null assertion operator

You can use the **non-null assertion operator** [reference](https://stackoverflow.com/questions/42273853/in-typescript-what-is-the-exclamation-mark-bang-operator-when-dereferenci) to temporarily relax the "not null" constraint that it might otherwise demand. 

<img src="imgs/1-non-null-assertion-operator.png" />



## Class without constructor

It is very common to encounter above type error when we define a class without a constructor, so we use non-null assertion operator

<img src="imgs/2-class-with-no-constructor.png" align="left"/>
<img src="imgs/2-class-with-no-constructor.png" width="10000px" height="0"/>


## Optional member: usage of non-null assertion operator

```typescript
class Vector {

  public constructor(
    public x: number,
    public y: number,
    public z?: number   // <--- optional
  ) {}

  public is3D() {
    return this.z !== undefined;
  }

  public is2D() {
    return this.z === undefined;
  }

  public getLength() {
    return Math.sqrt(
      Math.pow(this.x, 2) +
      Math.pow(this.y, 2) +
      // ((this.is3D()) ? ( Math.pow((this.z), 2) ) : 0)
      // ((this.is3D()) ? ( Math.pow((this.z as number), 2) ) : 0)
      ((this.is3D()) ? ( Math.pow((this.z!), 2) ) : 0)  // <------ (see note bellow)
    );
  }

}
```

The above example is from p123a--optional-members.



Note:

<img src="./imgs/3-type-check-is-unable-to-conclude.png" align="left" width="100%" />

In the above `Math.pow` take a number type in it 1st actual-argument, but we are passing in `this.z` that is a sum type of number and undefined. Although the second case of ternary operator will not run unlesss `this.is3D() === true`, typescript can not figure this out unless it execute the code.  To get arround this we can assert that `this.z` to `number type`:

```typescript
((this.is3D()) ? ( Math.pow((this.z as number), 2) ) : 0)
```

Another way to deal with this kind of situation is to use  **non-null assertion operator**:

```typescript
((this.is3D()) ? ( Math.pow((this.z!), 2) ) : 0)
```

From: 

> using the new ES Map type with code like `dict.has(key) ? dict.get(key) : 'default';` the TS compiler can't infer that the `get` call never returns null/undefined. `dict.has(key) ? dict.get(key)! : 'default';` narrows the type correctly. 
>
>  [May 30 2018 at 22:58](https://stackoverflow.com/questions/42273853/in-typescript-what-is-the-exclamation-mark-bang-operator-when-dereferenci#comment88238625_42274019)


and https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator





