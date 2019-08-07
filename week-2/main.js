console.log('Hello World! // English');
console.log('Hej Världen! // Swedish');
console.log('Hej Verden! // Danish');
console.log('Hello Dunya! //Urdu');

//2
console.log("I'm awesome");

//3
let x;
console.log("The value of my variable x will be: undefined");
console.log(x);
 x = 1;
console.log("The value of my variable x will be: 1");
console.log(x);

//4
let y = "Hello";
console.log("The value of my variable y will be: Hello");
console.log(y);
y = "Hello World";
console.log("The value of my variable y will be: Hello World");
console.log(y);


//5
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
let b;
if(z > a){
    b = z
}else{
    b = a
}
console.log(b);

//6

let animals = [];
console.log("The value of my array will be: []");
console.log(animals);
animals = ["Cat", "Cow", "Horse"];
console.log(animals);
animals.push("baby pig");
console.log(animals);

//7

let myString = "this is a test";
console.log(myString);
console.log(myString.length);

//8
let r = 1;
let e ="hi";
let w = true;
let q = null;
console.log(r);
console.log(e);
console.log(w);
console.log(q);
console.log("Data type of variable r is: a number");
console.log("Data type of variable r is: a string");
console.log("Data type of variable r is: a boolean");
console.log("Data type of variable r is: a object");
console.log(typeof r);
console.log(typeof e);
console.log(typeof w);
console.log(typeof q);

if(typeof r == typeof e){
    console.log("SAME TYPE");
}
if(typeof w == typeof q){
    console.log("SAME TYPE");
}
if(typeof e == typeof w){
    console.log("SAME TYPE");
}
if(typeof q == typeof e){
    console.log("SAME TYPE");
}