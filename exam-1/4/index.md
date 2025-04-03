Can you explain about Interface and Enum, and where will you be using,
please make some examples.

## interface

An interface is a structure that defines a contract in your code. Interfaces are used to define the shape of an object, which can include properties and methods. They are useful for defining the structure of data and ensuring that objects conform to a specific format.

### Example of Interface

```typescript
interface Person {
  name: string;
  age: number;
  greet(): void;
}
const person: Person = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person.greet(); // Output: Hello, my name is John
```

### When to use Interface

- When you want to define the shape of an object.
- When you want to define a structure for function parameters or return types.
- When you want to create a type that can be extended or implemented by other types.

## enum

An enum (short for "enumeration") is a special type in TypeScript that allows you to define a set of named constants. Enums are useful for defining a collection of related values that can be used in your code. They provide a way to give more meaningful names to numeric or string values, making your code more readable and maintainable.

### Example of Enum

```typescript
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
const myColor: Color = Color.Red;
console.log(myColor); // Output: RED
```

### When to use Enum

- When you have a set of related constants that represent a specific category or type.
- When you want to improve code readability by using meaningful names instead of numeric or string values.
