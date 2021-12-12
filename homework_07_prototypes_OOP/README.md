## Prototypal Inheritance

    const teacher = {
        __proto__: person, // inheritance
        name: 'Oleg', // overriding property
        subject: 'JS', // extension
        sayGoodbye() { // overriding (w/o '...__proto__...')
            teacher._proto__.sayGoodbye() // or extension
            alert('and best wishes');
        }
    }

    teacher.name = 'Oleg';

### Prototype Chain

    const director = {
        __proto__: teacher
    }
    
    director.sayHi() // 'Oleg: Hi'

### Methods

Object.keys(director) - returns own enumerable properties  
for (let keys in director) {} - returns all properties and methods  
Object.getOwnPropertyNames(director) - returns all own properties

Object.setPrototypeOf(director, teacher);
Object.getPrototypeOf(director);


### Function-constructor; Function.prototype

Using constructor:

    function Teacher(subject) {
        this.subject = subject;
    }
    
    Teacher.prototype = person;
    const teacher = new Teacher();

Using constructor of an object:  
secondTeacher = new commonTeacher.constructor('JS');

To preserve constructor:

    Teacher.prototype = {
        ...person,
        constructor: Teacher
    }  

OR (if all not necessary):
`Teacher.prototype.sayHi = person.sayHi;`

### Functional Inheritance

    function Teacher(name, subject) {
        Person.call(this, name);
        ....
    }

Can use several constructors to inherit from multiple prototypes.
All fields are own using functional inheritance.

### Wrappers over primitives

'sdlkjs'.toString()  
....

### Borrow methods from built-in prototypes

const obj = { 0:'', 1:'', length:2 }
obj.join = Array.prototype.join;

## OOP. Classes

    class Teacher extends Person {
        field;
    
        constructor(name, subj) {
            super(name);
            this.subj = subj;
        }
        
        sayHi() {...}
    
    }

const teacher = new Teacher();

! all methods are non-enumerable  
! strict mode is used in classes

    constructor(name = 'initial name') { // either this...
      this.name = name || this.name // ...or this way

get name() { return this._name}\
set name() { this._name = name; } // not to guard but to avoid stack overflow

### Override/extend methods

! Methods of classes are stored in prototype (not in the own properties!)

    sayBye() {
        super.sayBye(); // Gets this of the current class
        ...
    }

### Static methods

Object.keys(obj); - static

    class Teacher {
        static count = 0;
        static sayHi() {}
        constructor() {
            Teacher.count++;
    ...

    static log(teacher) {...}
    Teacher.log(teacher);
    
    this.#name = name; // to guard

### Extending built-in classes

class PseudoArray extends Array { getSum()...}
    