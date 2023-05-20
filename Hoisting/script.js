
console.log(x);
// this doesnt give error, we got 'undefined'
console.log(func);
// we get the func definition here

console.log(func2); //this is stored inside a var hence gives undefined


var x = 5;

function func() {
    console.log("printing something");
}

// in the first phase, all variables and functions are in memory context
// variables contain undefined and functions contain entire definition

var func2 =()=>{
    console.log("arrow function");
}
