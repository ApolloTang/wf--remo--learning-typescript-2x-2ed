# Strict property initialization

p111

When `strict` is `false`  you can skip initializing al property:

<img src="imgs/1-strict-false.png" />


However, if you set  `strict` to  `true` , missing initialization is a type error.

<img src="imgs/2-strict-true.png" />



## Non-null assertion operator

You can use the **non-null assertion operator** [reference](https://stackoverflow.com/questions/42273853/in-typescript-what-is-the-exclamation-mark-bang-operator-when-dereferenci) to tell to temporarily relax the "not null" constraint that it might otherwise demand. 

<img src="imgs/3-non-null-assertion-operator.png" />



## Class without constructor

It is very common to encounter above type error when we define a class without a constructor, so we use non-null assertion operator

<img src="imgs/4-class-with-no-constructor.png" />
