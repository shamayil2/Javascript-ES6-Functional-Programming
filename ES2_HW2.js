/*Write an arrow function that capitalizes a given string. For example: If we pass "hello" as string, 
the output should be "HELLO". Explore the method in javaScript to convert all letters to capital letters.*/

// const capitalize = (string) => {

//     return (string.toLowerCase());

// }

// console.log(capitalize("HELLOO"))

// const data = (currDate) => {

//     let newDate = new Date(currDate);

//     let formattedDate = newDate.toLocaleDateString(newDate)

//     return formattedDate
// }

// console.log(data('2025-08-31'))

// const newTime = () => {

//     const currTime = new Date().toLocaleTimeString()

//     console.log(currTime)
// }
// newTime()

// const convertToCel = (fahren) => {

//     let cels = (fahren - 32) * 5 / 9
//     console.log(cels)

// }

// convertToCel(136)

// const isEmpty = (string) => {

//     if (string.length == "") {
//         console.log("String empty")
//     } else {
//         console.log("String Not Empty")
//     }

// }

// isEmpty("")


// const randomNum = Math.floor(Math.random() * 50) + 1;

// console.log(randomNum)

const squareRoot = () => {
    const num = Math.floor(Math.random() * 100) + 1;
    console.log(num)
    const sqRoot = Math.sqrt(num);
    console.log(sqRoot)
}

squareRoot()