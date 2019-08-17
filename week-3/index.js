//1.Strings
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString= myString.replace(/,/g, " ");
console.log(myString);

//2.Arrays
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0,"meerkat");
console.log("The new value of the array will be: ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle']");
console.log(favoriteAnimals);
console.log("The array has a length of:" +" "+ favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
let meerkatIndex = favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at index: " + meerkatIndex);

//More JS
let sumNumbers = (a, b, c) =>  a + b + c;

console.log(sumNumbers(3, 5, 7));

let colorCar = (color) =>  console.log('a ' + color + ' car');

colorCar('red');

let newObject = {Name: 'Abdul', 
                age: 35,
                country: 'Sweden' };

let printMyObject = (anObject) => console.log(anObject);

printMyObject(newObject);
    
let vehicleType = (color, code) => {
    if(code === 1){
        console.log("a " + color + "car");
    }else{
        console.log("a " + color + " motorbike");
    }
}
vehicleType("blue", 2);