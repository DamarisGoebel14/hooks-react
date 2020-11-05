// Declaring multiple state variables

function ExampleWithManyStates() {
    // Declare multiple state variables!
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
    // ...
}

// Array destructuring
const foo = ['one', 'two', 'three'];
const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
console.log(foo)


const alphabet = ['A','B','C','D']
const numbers = ['1','2','3','4']

/*const a = alphabet[0] //prints A
const b = alphabet[1] // prints B*/

const [a,b,c, ...] = alphabet // skip 2nd element of the array

const newArr = [...alphabet,...numbers] // same as alphabet.concat(numbers)
console.log(a)
console.log(b)
console.log(c)
console.log(newArr)


function sumAndMultiply(a,b){
    return[a+b,a*b]
}

/*
const array = sumAndMultiply(2,3)
*/
const [sum, multiply] = sumAndMultiply(2,3)


/*
console.log(array) // prints 5, 6
*/

console.log(sum) // prints 5
console.log(multiply) // prints 6


//destructuring an object
const personOne = {
    name: Kyle,
    age:24,
    address: {
        city:'Somewhere',
        state: 'Another one'
    }
}

const {name: firstName,age, favoriteFood = 'Rice', ...rest, address: {city}} = personOne

console.log(name) // prints Kyle
console.log(age)
console.log(rest) // alles aus dem Objekt

function printUser(user) {
    console.log(`Name is ${user.name}. Age is ${user.age}`)
}

// destructured
function printUser({name, age}) {
    console.log(`Name is ${name}. Age is ${age}`)
}

printUser(personOne)