// console.log(a); // reference error, can't be used before initialisation

let a=10;
var b=100;


// let and const are not declared in global space(window object)
// they do get hoisted but are in temporal dead zone(zone before they are actually declared)

console.log(window.a); // undefined
console.log(window.b); // no error

// const x;
// x=10; // error const must be initialised (syntax)



// const x=10; 
// x=20; // x is of type const hence cant be changed




// > let and const are hoisted. we cant use them before initialization is result of "temporal dead zone".
// -> js use diff memory than global execution context to store let and cost. which is reason behind "temporal dead zone"
// -> level of strictness ... var<<let<<const.
// -> var //no temporal dead zone, can redeclare and re-initialize, stored in GES
//     let //use TDZ, can't re-declare, can re-initialize, stored in separate memory
//     const //use TDZ, can't re-declare, can't re-initialize, stored in separate memory
// -> syntax error is similar to compile error. while type and reference error falls under run time error.
// -> syntax error ... violation of JS syntax
//     type error ...  while trying to re-initialize const variable
//     reference error ... while trying to access variable which is not there in global memory.

// https://javascript.info/weakmap-weakset can be used for caching