## Methods Of Arrays

length = array.push(1, 2, 3, 4, 5);  
array.push(...secondArray);\
lastElement = array.pop();\
array.unshift(1,2,3,4) (.push to beginning)\
array.shift() (.pop to beginning)\
deletedElemsArr = array.splice(start, 
deleteCount, replacementItems)\
newArray = array.slice(start, end)
(without params copies whole array)\
`delete array[2] - array dim remains the same, elem=undefined`\
newArray = array.concat(1,2,4,6);(same concat([1,2,4,6])\
index = array.indexOf(el,start)\
lastIndexOf(el,backwardStart)\
arr = string.split('');\
str = arr.join('');\
bool = Array.isArray(array);\
for (let elem of array) {}\
arr.forEach((el, ind, arr) => {}); <<< returns undefined\
newArr = arr.map((el,ind,arr) => {}).map()..etc;\
val = arr.reduce((acc,el,ind,arr) => {},initAcc);\
newArr = arr.filter((el,ind,arr) => boolean);\
newArr = arr.sort((curr,next) => return comparison(<0,>0,=0));
!IMPORTANT: the original array is changed by sort\
newArr = arr.reverse();
!IMPORTANT: the original array is changed by reverse\
hasInArr = arr.includes(elem,fromIndex); fromIndex can be
negative\
item = arr.find((item,ind,arr)=>item===5); undefined if no match\
index = arr.findIndex((item,ind,arr)=>item===5); -1 if no match\
bool = arr.every(elem => check(elem));

## Methods of Objects

    const obj = {
        key: value,
        true: trueVal,
        5: 20
    };
    console.log(obj.key);
    console.log(obj.true);
    console.log(obj[5]);
    console.log(obj["key"]);

    const phoneField = "phone";
    user[phoneField] = '555444'; // same as:
    user["phone"] = '555444';
    user[phoneField.concat('Number')];
    user.let = "let"; // no syntax errors
    user.return = "return"; // same; can use reserved words

    if ('phone' in user) {}
    delete user.phone;
    for (let key in user) {}

    const newUser = {};
    for (let key in user) { newUser[key] = user[key] }
    const newUser = Object.assign({}, user); // the same result

### Optional chains

    user.parents.grandmother?.email << will work even 
    if grandmother does not exist

### Object creation

    const obj = {};
    const obj = new Object();

#### Object constructor

    function User(name,email) {
        this.name = name;
        this.email = email;
    }
    const firstUser = new User("Alex", "alex@email.com");

### Other Object Methods

    const keyArr = Object.keys(user);
    Object.keys(user)
        .forEach(key => alert(`value: ${user[key]}`));
    const valArr = Object.values(user);
    Object.entries(user).forEach(([key,value]) => 
        alert(`key: ${key}, value: ${value}`));

### Flags of Descriptors of Object Properties

Object.getOwnPropertyDescriptor(obj, 'name');  
Object.defineProperty(obj, 'name', {writable: false});

'use strict' at the beginning (to throw certain errors)
    
    function User(name, login) {
        Object.defineProperties(this, {
            name: {
                value: name, // using defineProperties:
                writable: true, // all false by default
            }, // (true if this.name = name
            login: {value: login} 
        });
    }
    Object.getOwnPropertyDescriptors(obj);
writable: can write,
enumerable: can get properties using for-in,
Object.keys/values/entries,
configurable: can `delete user.name` property

Object.preventExtensions(user); - blocks adding new fields
(outside of constructor); can be used in constructor (with this)\
Object.seal(this); - blocks adding/deleting properties\
Object.freeze(this); - blocks any change (incl. writing),
overwrites flags defined in constructor with false

Object.isExtensible(user);
Object.isSealed(user);
Object.isFrozen(user);

## Map

Map is key/value class, but key can be anything
(not cast to string)\
const newMap = new Map();\
newMap.name = 'anyName'; // is not stored in Map, 
but in Map object\
newMap.set('key', 'value');
newMap.get('key');

    const keyObj = { size: 20 };
    function keyFunc() {}

    newMap.set(keyObj,'objValue');
    newMap.set(keyFunc,'funcValue');

    const bool = newMap.has(keyObj);
    newMap.delete('keyObj');

    const size = newMap.size;
    newMap.clear()

    const iterator = newMap.keys(); // not array but iterable obj
    const elem = iterator.next();

    arr = Array.from(newMap.keys());
    newMap.values();
    newMap.entries();

Another way to add fields:

    const newMap =  new Map([
        ['key', 'value'],
        [keyObj,'objValue']
    ]);

Iterate Map:

    newMap.forEach((value,key,map)=>{});

Convert iterable properties of an object to a map and back:

    const obj = { size: 20, weight: 30 };
    const map = new Map(Object.entries(obj));
    const newObj = Object.fromEntries(map.entries());

## Set

Set is an object containing unique values

    const set = new Set();
    set.add('val');
    set.has('val'); // true
    set.delete('val');
    size = set.size;
    set.clear();
    const set = new Set([1,2,3,4,'f']);
    set.keys(), set.value(), set.entries() <- !keys===values!
    arr = Array.from(set.keys());
    set.forEach(val, val2, set=>{});

### Iterating with For-of

For-of is used for iterating over iterable objects,
Arrays, Maps, and Sets:

    for (let elem of set) { ...elem... }

! For Map elem is array: `[.., ..]`

## WeakMap, WeakSet

Map and Set in which links to Objects can be garbage-collected.  
Keys in WeakMap and values in WeakSet can only be Objects.

    const obj1 = {};
    let obj2 = {};
    const weakMap = new WeakMap();
    weakMap.set(obj1, 'value');
    weakMap.set(obj2, 'value');
    obj2 = null;
    setTimeout(() = > console.log(weakMap), 10000);
