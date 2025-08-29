 //Write an arrow function that reverses a string using for-loop. Print the reversed string.


 //  const reverse = (string) => {
 //      let revStr = ""
 //      for (let i = string.length - 1; i >= 0; i--) {
 //          revStr += string[i];
 //      }
 //      console.log(revStr)
 //  }

 //  reverse("world")

 //Write an arrow function that returns the longest word in an array of words. Print the longest word.

 //  const findLongestWord = (arr) => {

 //      let maxWord;
 //      let maxLength = 0;

 //      for (let ele of arr) {
 //          if (ele.length > maxLength) {
 //              maxWord = ele;
 //              maxLength = ele.length;
 //          }
 //      }

 //      console.log(maxWord);

 //  }

 // 

 //Write an arrow function with price 
 //and quantity as default parameters to calculate the total cost of a shopping cart.

 //  const cartPrice = (price = 10, quantity = 1) => {

 //      console.log(price * quantity)

 //  }

 //  cartPrice(1)

 //  function sum(a, b) {
 //     if (b === undefined) {
 //        b = 5;
 //     }
 //    return a + b;
 //  };

 const sum = (a, b = 5) => {
     return a + b;
 }

 console.log(sum(99))