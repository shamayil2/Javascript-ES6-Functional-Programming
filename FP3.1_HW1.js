// const words = ["apple", "banana", "kiwi", "orange", "grape"];
// const longestWord = words.reduce((acc, curr) =>

//     curr.length > acc.length ? curr : acc, "")
// console.log(longestWord)

// const wordsLength = ["apple", "banana", "kiwi", "orange", "grape"];

// const totalLength = wordsLength.reduce((acc, curr) => acc + curr.length, 0)
// console.log(totalLength)

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evens = nums.reduce((acc, curr) => curr % 2 == 0 ? acc + 1 : acc, 0)
// console.log(evens)

// const wordsCaps = ["hello", "world", "how", "are", "you"];
// const wordCapsNew = wordsCaps.reduce((acc, curr) => acc + curr[0].toUpperCase() + curr.slice(1, curr.length) + " ", "")
// console.log(wordCapsNew)

// const wordsLetter = ["apple", "banana", "kiwi", "orange", "grape", "banana", "grape", "grape", "grape"];

// const wordsObj = wordsLetter.reduce((acc, curr) => {

//     const firstLetter = curr[0];
//     acc[firstLetter] ? acc[firstLetter]++ : acc[firstLetter] = 1
//     return acc;
// }, {})

// console.log(wordsObj)

// const numPositive = [-2, 3, 4, 0, -5, 6]

// const communityData = [

//     { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },

//     { name: "Aakash", role: "mentor", hours: [1, 2, 3, 4, 5, 6, 7] },

//     { name: "Ramesh", role: "student", hours: [4, 5, 6, 4, 5, 6, 0] },

//     { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },

//     { name: "Harsh", role: "student", hours: [7, 8, 9, 7, 8, 9, 0] },

//     { name: "Akshay", role: "student", hours: [1, 3, 5, 7, 9, 0, 2] },

//     { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },

//     { name: "Mohan", role: "student", hours: [4, 6, 8, 0, 1, 9, 2] }

// ];
// const data = communityData.filter((person) => {

//     const hours = person.hours.reduce((acc, curr) => acc + curr, 0)

//     if (hours > 20 && person.role == "student") {
//         return true
//     } else {
//         return false
//     }

// }).map((person) => {
//     person.tag = "Regular"

//     return person
// })
// console.log(communityData)




const community = [

    { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },

    { name: "Aakash", role: "mentor", hours: [1, 2, 3, 1, 2, 3, 0] },

    { name: "Ramesh", role: "student", hours: [1, 2, 3, 1, 2, 3, 3] },

    { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },

    { name: "Harsh", role: "student", hours: [1, 7, 3, 2, 2, 3, 0] },

    { name: "Akshay", role: "student", hours: [1, 6, 3, 1, 2, 3, 0] },

    { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },

    { name: "Mohan", role: "student", hours: [1, 8, 3, 0, 2, 3, 0] }

];

const mostActive = community.reduce((acc, curr) => {
    const accHours = acc.hours.reduce((acc, curr) => acc + curr, 0)
    const currHours = curr.hours.reduce((acc, curr) => acc + curr, 0)

    currHours > accHours ? acc = curr : acc = acc

    return acc

})

console.log(mostActive)