console.log("Am I Working?")

function sum(a, b) {
    return a + b
}

console.log(sum(5,3))

let sum2 = function(a, b) {
    return a + b
}

console.log(sum2(5,3))

setTimeout(function() {
    console.log("2 seconds have passed..")
    console.log(sum2(15,13))
}, 2000)

let sum3 = (a, b) => a + b
let squared = x => x*x
let largerFunction = (a,b,c) => {
    //Do things
    return a + b / c
}

console.log(sum3(4,9))
console.log(squared(9))

let button = document.getElementById("btn")

button.addEventListener("click", () => hello("Adele"))

function hello(x) {
    console.log("Hello " + x)
}

const letters = ["A", "B", "C", "D"]
const numbers = [1, 2, 3, 4]

let squaredNumbers = numbers.map(n => n*n)
console.log(squaredNumbers)

let age = 17
let adultAge = age >= 18 && age

console.log(adultAge)

function takeNumbers(x, y, z, w) {
    return x*y*z*w
}

console.log(takeNumbers(... numbers))

function printEverything(...stuff) {
    console.log("Printing everything:")
    stuff.forEach(x => {
        console.log(x)
    })
}

printEverything("String", 5, 77, "sst", {0: "asda"}, [4,5,7], letters)


let data = {
    name: "foo",
    age: 16,
    address: {
        street: "foo",
        code: "36366",
        city: {
            name: "Lahti",
            status: "alive"
        }
    }
}

//console.log(data.address.city.name)

if(data && data.address && data.address.city) {
    console.log(data.address.city.name)
}
else {
    console.log("Failed")
}

console.log(data.address?.city?.name)

let a = 0
let b = null
let c = "text"

console.log(a && c)
console.log(a || c)
console.log(a ?? c)

console.log(b && c)
console.log(b || c)
console.log(b ?? c)