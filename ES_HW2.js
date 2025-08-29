// const logFirstAndSecond = (...rest) => {
//     let [first, second, ...args] = rest
//     console.log(first)
//     console.log(second)
//     console.log(args)

// }

// logFirstAndSecond(1, 2, 3, 4, 5)

// const containsValue = (...rest) => {

//     const [first, ...args] = rest
//     for (let ele of args) {
//         if (ele == first) {
//             return true;
//         }
//     }

//     return false;

// }

// console.log(containsValue(4, 1, 2, 5, 4))

// const copyPersonObject = (...rest) => {

//     [first, key, value] = rest
//     const newPerson = {...first }
//     newPerson[key] = value;

//     return newPerson
// }

// console.log(copyPersonObject({ firstName: "Alice", age: 20 }, "lastName", "Johnson"))

// const mergeObjects = (...rest) => {

//     const [first, second] = rest

//     const newObj = {...first, ...second }

//     console.log(newObj)

// }

// mergeObjects({ x: "hello" }, { y: "world" })

// const mergeObject = (...rest) => {

//     const [first, second] = rest
//     let newObj = {...first, ...second }
//     console.log(newObj)
// }

// mergeObject({ a: 1, b: 2 }, { b: 3, c: 4 })

// const generateObj = (...rest) => {
//     let mealObj = {}
//     for (let i = 0; i < rest.length; i += 2) {
//         mealObj[rest[i]] = rest[i + 1]
//     }
//     return mealObj
// }

// console.log(generateObj("mealType", "Lunch", "meal", "Rice-Dal", "calorie", "200 Cal"))

// const createPerson = (name, age) => {

//     return { name, age }

// }

// console.log(createPerson("Sugar", 29))

// const concatenateWithSeparator = (...rest) => {

//     const [first, ...args] = rest;

//     console.log(args.join(first))


// }

// concatenateWithSeparator('-', 'apple', 'orange', 'banana')

// const extractNestedValues = (obj) => {

//     const { data } = obj
//     const { firstName, lastName, age } = data

//     console.log(firstName, " ", lastName, " will be ", age, " years old.")

// }

// extractNestedValues({ data: { firstName: "Priya", lastName: "Gupta", age: 20 } })

// const checkEvenOdd = (num) => {

//     num % 2 == 0 ? console.log(`${num} is an even number`) : console.log(`${num} is odd number`)

// }

// checkEvenOdd(11)

// const object = { name: 'Dave', age: 25 };

// const addKeyValuePair = (obj, key, value) => {

//     obj[key] = value
//     return obj;
// }

// console.log(addKeyValuePair(object, 'cityy', 'New York'));

const numbersArray = [2, 4, 6, 8, 10];

const processArraySum = (arr, doubleNumber) => {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = doubleNumber(arr[i]);
    }
    return arr;
}

const doubleNumber = (num) => {
    return (num * 2);
}

console.log(processArraySum(numbersArray, doubleNumber))