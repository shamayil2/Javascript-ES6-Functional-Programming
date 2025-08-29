let arr = [5, 12, 7, 25, 18, 3]

// function printArray(arr) {

//     for (let i of arr) {
//         console.log(i)
//     }

// }

// printArray(arr)

// function newArray(arr) {
//     let arrNew = []
//     for (let i = 0; i < arr.length; i++) {
//         arrNew.push(arr[i] + 10)
//     }
//     return arrNew;
// }

// console.log(newArray(arr))

// function convertArr(arr){

//     for(let i =0;i<arr.length;i++)

// }


// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     return sum;

// }

// console.log(sum(arr))

function sumOddEven(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sumEven += arr[i]
        } else {
            sumOdd += arr[i]
        }
    }

    return `Sum of evens is ${sumEven} and Sum of odds is ${sumOdd}`

}

console.log(sumOddEven(arr))