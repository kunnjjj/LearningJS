alert("this is js");

const res = prompt("What is your age?", 20);
console.log(res); // tells input value if OK is pressed, else gives null

// debugger;

const correct = confirm(`your age is ${res}`);
console.log(correct); // true if OK

function tellName(name) {
    console.log(`Hello ${name}`)
}

tellName("Kunj")

// study about testing library mocha
// describe("pow",function(x,n){

//     it("raises x to nth power",function(){

//     });
// });


let user1=new Object(); // "object constructor" syntax

let user2={}; // "object literal" syntax

let user3={
    name:"abc",
    age:20
};  

console.log(user3.age);

user3.isAdmin=true;

delete user3.age;

user3["multiword attribute"]=20;

// ----------------------------------------

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"