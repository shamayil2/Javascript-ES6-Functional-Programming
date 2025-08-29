// const car = { brand: "Toyota", model: "NTQ" }
// console.log(car.brand)
// console.log(car.model)
// car.brand = "Honda"
// console.log(car)
// car.year = 2022;
// car.color = "Blue"
// for (let prop in car) {

//     console.log(prop, " : ", car[prop])

// }

// const citizen = { name: "Ram", age: 24, occupation: "Software Engineer" }
// citizen.age = 68;
// console.log(citizen.age)

// citizen.age = citizen.age + 2
// console.log(citizen.age)

// citizen.city = "Delhi"

// for (let prop in citizen) {
//     console.log(prop, ": ", citizen[prop])
// }

const person = { name: "Shamayil", age: 63 }
person.bp = "normal"

if (person.age > 60 && person.bp == "normal") {
    console.log("Fit to Travel")
} else {
    console.log("Not fit to travel")
}