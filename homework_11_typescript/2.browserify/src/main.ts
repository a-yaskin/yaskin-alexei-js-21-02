// import {printHello} from "./module";
// printHello(prompt());

type StrOrNum = string | number;
let str: string;
let bool: boolean;
let num: number;
let numArr: number[] = [1, 2];
let strArr: Array<string> = ['string1', 'string2'];
let arr: Array<string | number> = ['str', 2];

function sum(a:number, b:number): number {
  return a + b;
}

sum(1, 5);

function func(a: number, b: number = 0, sum?: boolean) {
  return sum ? a + b: a - b;
}

func(1, 2);

const user = {
  name: 'Alex',
  surname: 'Scott'
}

// function getFullName(person: {name: string, surname: string}) {
//   return person.name.concat(` ${person. surname}`);
// }

// Alias
type UserType = {
  name: string,
  surname: string
}

function getFullName(person: UserType) {
  return person.name.concat(` ${person. surname}`);
}

console.log(getFullName(user));


// Interfaces

interface PersonInterface { // Interface declaration
  name: string,
  email: string,
  sayHi?(): string,
  setName?(name: string): void
}

interface Employee {
  phoneNumber: string
}

const person: PersonInterface = {
  name: 'Alex',
  email: 'alex@dom.com',
  sayHi(): string {
    return `Hi ${this.name}`;
  }
}

interface Admin extends PersonInterface, Employee { // Interface inheritance
  readonly adminId: number // readonly property
}

const admin: Admin = { // Interface implementation
  name: 'admin',
  email: 'adm@dom',
  adminId: 123,
  phoneNumber: '8800343394'
}

// admin.adminId = 333; // Attempt to assign to const or readonly variable

function getPersonInfo(person: PersonInterface) {
  return `${person.name} ${person.email}`;
}

console.log(getPersonInfo(admin)); // Can pass implementations of any interface inherited from PersonInterface

class Animal {
  name: string;
  protected countOfLegs: number; // Accessible only inside of the class AND its subclasses
  private age: number; // Accessible only inside of the class, is not inherited
  getAge() {
    return this.age;
  }
  setAge(age: number) {
    this.age = age;
  }
  readonly eat: () => void;
  constructor(name: string, countOfLegs: number, age: number = 0) {
    this.name = name;
    this.age = age;
    this.countOfLegs = countOfLegs;
  }
}

class Dog extends Animal {
  constructor(name: string, countOfLegs: number, age: number) {
    super(name, countOfLegs, age);
    // this.age = 10; // TS2341: Property 'age' is private and only accessible within class 'Animal'.
    this.countOfLegs = 5; // OK!
  }
  // dogAge = this.age; // TS2341: Property 'age' is private and only accessible within class 'Animal'.
  dogCountOfLegs = this.countOfLegs; // !! Still 4!
}

const dog = new Dog('Pitt', 4, 12);
// const dogCountOfLegs = dog.countOfLegs; // TS2445: Property 'countOfLegs' is protected and only accessible within class 'Animal' and its subclasses.
// const dogAge = dog.age; // TS2341: Property 'age' is private and only accessible within class 'Animal'.
console.log('dog:', dog);

const cat = new Animal('Tom', 4, 12);
// cat.eat = () => { // TS2540: Cannot assign to 'eat' because it is a read-only property.
// }
console.log('cat: ', cat);

// Generics
// More: https://www.youtube.com/watch?v=L1ONtRnIxcY and https://www.youtube.com/watch?v=-6DWwR_R4Xk
function sumOrConcat<T extends number | string>(a: T, b: T): T {
  return a; // + b;
}

sumOrConcat('v', 'a');
