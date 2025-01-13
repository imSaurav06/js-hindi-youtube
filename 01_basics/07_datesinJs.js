// Dates

let myDate = new Date()   // typeof - object
// console.log(myDate.toString());         // Tue Jan 14 2025 01:52:13 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());        // Tue Jan 14 2025
// console.log(myDate.toLocaleString());      // 1/14/2025, 1:52:13 AM
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)  //yyyy , mm , dd
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) //yyyy , mm , dd , tt , ss
// let myCreatedDate = new Date("2023-01-14") // yyyy mm dd
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()   /// milli_seconds

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); /// milli_seconds into second

let newDate = new Date()  
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

