let x = 10
const y = 20
var z = 30

if (true) {
    let x = 10 //  it local variable can't access cause it is in scopes{} 
    const y = 20   //  it local variable can't access cause it is in scopes{} 
    var z = 30   //  it globle variable may access and this is disadvantage
    
}
// console.log(a);
// console.log(b);
// console.log(c);

//.................................................................


//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

//...................................................................


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"    //
        console.log(username);       /// Can access parent variable data (IseCream)
    }
    // console.log(website);-----> can't acces childe variable data 

     two()

}         // one()

//...................................................................................



if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);   Can access parent variable data (IseCream) cause username = "hitesh" is global for inner if(){...}
        
    }
    // console.log(website);  --->  can't acces childe variable data cause website = " youtube" is local for outer if(){...}
}

// console.log(username);    // Can access parent variable data (IseCream) cause username = "hitesh" is local for inner if(){...}





// ++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5) // error upper
const addTwo = function(num){  /// const addTwo it is a expration (varable type function)
    return num + 2
}
addTwo(5) // not error bottum
