// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //add at star ---- [9,0,1,2,3,4,5]
// myArr.shift()  // removed 9 ------[0,1,2,3,4,5]

// console.log(myArr.includes(9)); // available or not -- false
// console.log(myArr.indexOf(3)); -- 3

// const newArr = myArr.join()  // change the array into string 

// console.log(myArr);  // typeof object
// console.log( newArr); // typeof string


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // return the copy of section of array ---[1,2] < 3

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  // remove the section of in oroginal array ---[0,4,5]
console.log("C ", myArr);  //   oroginal array ---[0,4,5]
console.log(myn2);    // [1,2,3]  output of splice
 
