
var nameError = document.getElementById("name-valid");
var emailError = document.getElementById("email-valid");

function validateName(){
    var name = document.getElementById('name-section').value;

    if(name.length <= 4){
        nameError.innerHTML= "enter your name";
        return false;
    }
}

function validateEmail(){
    var email = document.getElementById('email-section').value;

    if(email.length <= 4){
        emailError.innerHTML= "enter your email";
    }
    
}

function outer(){
    var a=10;
    return function inner(){
        console.log(a);
    }
    // return inner;
}
outer()();

console.log(b);

var b  = function (){
    console.log("jdfds");
}

let name = prompt("Enter a name:");

console.log("Entered name is ", name);

let intInput = parseInt(prompt("Enter the int input"));
let floatInput = parseFloat(prompt("Enter the float input"));

let result = intInput + floatInput;
console.log("Result is " + result);

let p = parseInt(prompt("Enter Principal Amount"));
let r = parseFloat(prompt("Enter Interest Rate"));
let n = parseFloat(prompt("Enter number of years"));

let si = (p*r*n)/100;
console.log("Result is " + si);

let mark = parseFloat(prompt("Enter your mark"));

function checkMark(mark){
    if(mark > 50 && mark < 100){
        console.log("passed");
    }
    else {
        console.log("failed");
    }
}
checkMark(mark);

let mark = parseFloat(prompt("Enter Your Mark"));

if(mark >= 90 && mark <= 100){
    console.log("A Grade");
}
else if(mark >= 80 && mark <= 89 ){
    console.log("B Grade");
}
else if(mark >= 70 && mark <= 79){
    console.log("C Grade");
}
else if(mark >= 60 && mark <=69){
    console.log("D Grade");
}
else if(mark >=50 && mark <=59){
    console.log("E Grade");
}
else {
    console.log("Failed");
}

let dayNumber = parseInt(prompt("Enter a number to get the day of the week:"));

switch (dayNumber) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Entry");
    break;
}


let number = parseInt(prompt("Enter a number to display its multiplication table:"));

for (let i = 1; i <= 10; i++) {
  console.log(${number} x ${i} = ${number * i});
}

let limit = parseInt(prompt("Enter the limit"));
let sum=0;
for(let i =0;i<=limit;i++){
    if(i % 2 != 0){
        sum += i;
    }
}
console.log("Result is " + sum);

let size = 5;
let pattern = '';
for(let i=1;i<=size;i++){
    for(j=1;j<=i;j++){
        pattern += j + ' ';
    }
    pattern += '\n';
}
console.log(pattern);

function getArrayElements(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

let array1 = getArrayElements("Enter the 1st array elements (Seperate by comma)");
let array2 = getArrayElements("Enter 2nd array elements (comma seperated");

let temp = array1;
array1 = array2;
array2 = temp;

console.log(array1);
console.log(array2);

function getArrayElements(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

let array = getArrayElements("Enter array values");

function printEvenNumbers(arr) {
    let count =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            count+=1;
        }
    }
    return count;
}


function getArrayElements(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

let array = getArrayElements("Enter array elements");

console.log(sortArray(array));

function getArray(message){
    let input = prompt(message);
    return input.toLowerCase();
}

let originalArray = getArray("enter text");
let reversedArray = originalArray.split('').reverse().join('');

if(originalArray==reversedArray){
    console.log(originalArray + " is a Palindrome");
}else {
    console.log(originalArray + " is not a Palindrome");
}

function get2DArrayFromUser(message) {
    let input = prompt(message);
    let rows = input.split(';'); 
    let array = rows.map(row => row.split(',').map(Number));
    return array;
}

function add2DArrays(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        let row = [];
        for (let j = 0; j < array1[i].length; j++) {
            row.push(array1[i][j] + array2[i][j]);
        }
        result.push(row);
    }
    return result;
}

let array1 = get2DArrayFromUser("Enter the first 2D array (rows separated by ';' and values by ','):");
let array2 = get2DArrayFromUser("Enter the second 2D array (rows separated by ';' and values by ','):");

let sumArray = add2DArrays(array1, array2);

console.log("Sum of the two 2D arrays:");
console.log(sumArray);

function getArray(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

function displayArray(array){
    console.log(array);
}

function main (){
    array1 = getArray("Enter array elements");
    displayArray(array1);
}

main();

number = parseInt(prompt("enter a number"));
let isPrime = 1;
function checkPrime(value){
    for(let i = 2;i<=value/2;i++){
        if(value % i == 0){
            isPrime=0;
            break;
        }
    }
    if(isPrime==0){
        console.log("not Prime");
    }else {
        console.log("Prime");
    }
}

checkPrime(number);

class Calculator {
    addition(a, b) {
        return a + b;
    }

    subtraction(a, b) {
        return a - b;
    }

    multiplication(a, b) {
        return a * b;
    }

    division(a, b) {
        if (b === 0) {
            return "Division by zero is not allowed!";
        }
        return a / b;
    }
}

function main() {
    let calc = new Calculator();

    let choice = parseInt(prompt("Choose an operation: \n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"));

    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    let result;
    if (choice === 1) {
        result = calc.addition(num1, num2);
    } else if (choice === 2) {
        result = calc.subtraction(num1, num2);
    } else if (choice === 3) {
        result = calc.multiplication(num1, num2);
    } else if (choice === 4) {
        result = calc.division(num1, num2);
    } else {
        console.log("Invalid choice!");
        return;
    }

    console.log("The result is: " + result);
}


main();

let writtenMark = parseInt(prompt("Enter the Written test mark"));
let labMark = parseInt(prompt("Enter the lab exam mark"));
let assignmentMark = parseInt(prompt("Enter Assignments mark"));
let result;

function gradeCheck(written,lab,assignment){
    return result=(written*70)/100 + (lab*20)/100 + (assignment*10)/100 ;
}

let totalGrade = gradeCheck(writtenMark,labMark,assignmentMark);
console.log("Grade is " + totalGrade);

function calculateIncomeTax(income) {
    let tax;

    if (income <= 250000) {
        tax = 0;
    } else if (income <= 500000) {
        tax = (income * 5) / 100;
    } else if (income <= 1000000) {
        tax = (income * 20) / 100;
    } else {
        tax = (income * 30) / 100;
    }

    return tax;
}

function main() {
    let annualIncome = parseFloat(prompt("Enter your annual income:"));
    let taxAmount = calculateIncomeTax(annualIncome);
    console.log("The tax you need to pay is: ₹" + taxAmount.toFixed(2));
}

main();

let limit = 5;
let count=1;
let str='';

for(let i=1;i<5;i++){
    for(let j=1;j<=i;j++){
        str+=count++ +" ";
    }
    str+='\n';
}
console.log(str);

function getArray(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

function adjacentMultiply(array){
    let num=[];
    for(let i=0;i<array.length-1;i++){
        num.push(array[i]*array[i+1]);
    }
    return num;
}

let oldArray = getArray("enter array elements (comma separated)");

let newArray = adjacentMultiply(oldArray);
console.log(newArray);


function getArray(message) {
    let rows = prompt(Enter number of rows for ${message}:);
    let array = [];

    for (let i = 0; i < rows; i++) {
        let row = prompt(Enter row ${i + 1} values for ${message} (comma-separated):);
        array.push(row.split(',').map(Number));
    }

    return array;
}

function addArray(array1, array2) {
    let sumArray = [];

    for (let i = 0; i < array1.length; i++) {
        let rowSum = [];
        for (let j = 0; j < array1[i].length; j++) {
            rowSum.push(array1[i][j] + array2[i][j]);
        }
        sumArray.push(rowSum);
    }

    return sumArray;
}

function displayArray(array, message) {
    console.log(${message}:);
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].join(' '));
    }
}

function main() {
    let array1 = getArray("Array 1");
    let array2 = getArray("Array 2");

    let sumArray = addArray(array1, array2);

    displayArray(array1, "Array 1");
    displayArray(array2, "Array 2");
    displayArray(sumArray, "Sum of Array 1 and Array 2");
}

main();

class ArrayOperations {
    constructor() {
        this.array = [];
    }

    getArray(rows) {
        for (let i = 0; i < rows; i++) {
            let row = prompt(Enter values for row ${i + 1} (comma-separated):);
            this.array.push(row.split(',').map(Number));
        }
    }

    displayArray() {
        console.log("The 2D array is:");
        this.array.forEach(row => {
            console.log(row.join(' '));
        });
    }

    static main() {
        let operations = new ArrayOperations();

        let rows = parseInt(prompt("Enter the number of rows:"));

        operations.getArray(rows);
        operations.displayArray();
    }
}

ArrayOperations.main();

class Area {
    circle(radius) {
        return Math.PI * radius * radius;
    }

    square(side) {
        return side * side;
    }

    rectangle(length, width) {
        return length * width;
    }

    triangle(base, height) {
        return 0.5 * base * height;
    }
}

class MyClass extends Area {
    main() {
        let choice;
        do {
            choice = parseInt(prompt(Choose an option to calculate area:\n1. Circle\n2. Square\n3. Rectangle\n4. Triangle\n5. Exit));
            switch (choice) {
                case 1:
                    this.circle();
                    break;
                case 2:
                    this.square();
                    break;
                case 3:
                    this.rectangle();
                    break;
                case 4:
                    this.triangle();
                    break;
                case 5:
                    console.log("Exiting the program.");
                    break;
                default:
                    console.log("Invalid choice, please select again.");
            }
        } while (choice !== 5);
    }

    circle() {
        let radius = parseFloat(prompt("Enter the radius of the circle:"));
        let area = super.circle(radius);
        console.log(The area of the circle is: ${area.toFixed(2)});
    }

    square() {
        let side = parseFloat(prompt("Enter the side length of the square:"));
        let area = super.square(side);
        console.log(The area of the square is: ${area.toFixed(2)});
    }

    rectangle() {
        let length = parseFloat(prompt("Enter the length of the rectangle:"));
        let width = parseFloat(prompt("Enter the width of the rectangle:"));
        let area = super.rectangle(length, width);
        console.log(The area of the rectangle is: ${area.toFixed(2)});
    }

    triangle() {
        let base = parseFloat(prompt("Enter the base length of the triangle:"));
        let height = parseFloat(prompt("Enter the height of the triangle:"));
        let area = super.triangle(base, height);
        console.log(The area of the triangle is: ${area.toFixed(2)});
    }
}

let myObject = new MyClass();
myObject.main();


var library = [
    {
        title:'Bill Gates',
        author:'The Road',
        readingStatus:true
    },
    {
        title:'Sultan',
        author:'Tew',
        readingStatus:false
    },
    {
        title:'frogs',
        author:'John',
        readingStatus:true
    }
];

function displayReadingStatus(value){
    value.forEach( book  => {
        if(book.readingStatus){
            console.log(${book.title} is already readed.)
        }else {
            console.log(You need to read ${book.title})
        }
    })
}

displayReadingStatus(library);

let my_string = "HELLO";

try {
    let reversedString = my_string.split('').reverse().join('');
    console.log(Reversed string is : ${reversedString});
} catch (err) {
    console.log(Error : ${err.message});
} finally {
    console.log(Type of my_string is : ${typeof my_string});
}

let my_height = "70"; 
try {
    if (isNaN(my_height)) {
        throw new Error("notANumberError");
    }

    if (my_height > 100) {  
        throw new Error("HugeHeightError");
    }

    if (my_height < 30) {  
        throw new Error("TinyHeightError");
    }

    console.log(Your height is ${my_height} cm.);
} catch (err) {
    console.log(Error: ${err.message});
}

class Car {
    constructor(name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
    
}

let myCar = new Car('Toyota', 15000, 180);

console.log(myCar.name);    
console.log(myCar.mileage); 
console.log(myCar.max_speed);


let myArray = [1,2,3,4,5,1];

function myFilter(myArray,checkEven){
    console.log(checkEven);
    
}

function checkEven(Array){
    let sum=Array.reduce((acc,curr)=>{
        return acc += curr;
    },0)
    console.log(sum);

    return sum % 2 ===0;

}

myFilter(myArray,checkEven(myArray));

Get references to the checkbox and button elements
const checkbox = document.getElementById('myCheckbox');
const button = document.getElementById('toggleButton');

// Add click event listener to the button
button.addEventListener('click', () => {
    // Toggle the checked property of the checkbox
    checkbox.checked = !checkbox.checked;
});

let checkBox = document.getElementById("myCheckbox");
let button = document.getElementById("toggleButton");

button.addEventListener('click', () => checkBox.checked=!checkBox.checked);

button.addEventListener('contextmenu', (event) => {
    event.preventDefault();
})

"use strict";

let x = 3.14; // Works fine
y = 10; // Throws an error because 'y' is not declared

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // TO DO: Implement login functionality using Facebook API or a backend service
    console.log(Email: ${email}, Password: ${password});
});

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


const cart = ["Apple", "Orange", "Banana"];

let selection = prompt(Order something from this list ${cart}: );


createOrder(cart, selection)
    .then(itemPurchased => {
        return proceedToPayment(itemPurchased);
    })
    .then(({ item, price }) => {
        return showOrderSummary({ item, price });
    })
    .then((price) => {
        setTimeout(()=>{
            console.log("Payment successful");
        },5999)
    return price})
    .then(priceUpdating => {
        return updateWallet(priceUpdating);
    })
    .then(updatedBalance => {
        setTimeout(()=>{
            console.log(updatedBalance); 
        },10050)
    })
    .catch(err => {
        console.error(err.message);
    })

function createOrder(cart1, item) {
    return new Promise((resolve, reject) => {
        let found = false;
        cart1.forEach(cartItem => {
            if (cartItem === item) {
                console.log(You have Ordered the ${item});
                resolve(item);
                found = true;
            }
        });
        if (!found) {
            reject(new Error("Item not Found"));
        }
    });
}

function proceedToPayment(item) {
    return new Promise((resolve, reject) => {
        let price;
        if (item === "Apple") price = 100;
        else if (item === "Orange") price = 60;
        else if (item === "Banana") price = 30;
        else reject(new Error("Out of Stock"));
        console.log(You have to pay ${price}/kg for ${item}.);
        resolve({ item, price });
    });
}

function showOrderSummary({ item, price }) {
    console.log(For Completing this order..Do payment to this QR ( ${item} : ${price} ));
    return price;
}

function updateWallet(price) {
    const wallet = 3000;
    const updatedWallet = wallet - price;
    return new Promise((resolve, reject) => {
        if (updatedWallet >= 0) {
            resolve(-${price}\tYour Wallet Updated Balance: ${updatedWallet});
        } else {
            reject(new Error("Insufficient Balance in your Wallet."));
        }
    });
}

// const promise1 = Promise.resolve('First promise resolved');
// const promise2 = Promise.resolve('Second promise resolved');
// const promise3 = Promise.resolve('Third promise rejected');

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log('All promises resolved:', values); // This won't run
//   })
//   .catch((error) => {
//     console.error('Promise.all rejected:', error); // Logs: "Promise.all rejected: Third promise rejected"
//   });

// const promise1 = Promise.resolve('First promise resolved');
// const promise2 = Promise.resolve('Second promise resolved');
// const promise3 = Promise.reject('Third promise rejected');

// const runPromises = async () => {
//   try {
//     const values = await Promise.all([promise1, promise2, promise3]);
//     console.log('All promises resolved:', values); // This won't run
//   } catch (error) {
//     console.error('Promise.all rejected:', error); // Logs: "Promise.all rejected: Third promise rejected"
//   }
// };

runPromises();

function sortArray(arr){
    return arr.sort((a,b) => {
        return b-a;
    });
}
console.log(sortArray([3,2,3,4,5,6,2,4,5,3,1,9]));

function promiseFn(){
const pr = new Promise((resolve,reject) => {
    let a=true;
    if(a){
        setTimeout(() => {
            resolve("Promise Resolved");
        },1000);
    }else {
        reject("promise rejected");
    }
});
return pr;
}
async function handlePromise(){
    try {
        console.log("Wait for 1 sec")
        const val = await promiseFn();
        console.log("Dummy print")
        console.log(val);
    }
    catch(error) {
        console.log(error);
    }
}

handlePromise();

const pr1= Promise.resolve("Resolved");
const pr2 = Promise.reject("Rejected");
const pr3 = Promise.resolve("Resolved");

async function handling(){
    try {
        const pr = await Promise.allSettled([pr1,pr2,pr3]);
        console.log(pr);
    }
    catch (error){
        console.log(error);
    }finally{
        console.log("Always run.whether it is error or not");
    }
}
handling();

console.log(global);

const mhuy = "fdfa";


class user {
    

    constructor(){
        this.name="Hi hello";
    }
    getName(){
        return this.name;
    }
}



const newObj = new user();

console.log(newObj.getName());

const variable = newObj.getName();

console.log(variable());

let userName;
let Name = "Guest";

let displayName = userName ?? Name;
console.log(displayName); // Output: "Guest"

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value)

const text = "MALAYALAM";
let revText = "";

for(let i = text.length-1 ; i>=0 ; i--) {
    revText += text[i]
}
console.log(revText)
if (revText == text ) {
    console.log("Palindrome")
} else {
    console.log("Not palindrome");
    
}

let array = [4,6,3,3,7,4,7,8,6,4]

for(let i =0;i<array.length;i++){
    let isPrime = 1;
    for(let j=2;j<=array[i]/2;j++){
        if(array[i]%j===0){
            isPrime = 0;
            break;
        } else {
            isPrime = 1;
        }
    }
    if(isPrime){
        console.log(array[i])
    }
}


const promises = new Promise((res,rej)=>{
    let success = true;
    (success) ? res("Success") : rej("Failed"); 
})

async function name (){
    try {
        const result = await promises
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

name()
const obj = { 
    "a": 2,
    "b": { "x": 3, "y": 4 },
    "c": [1, 2], 
    "d": 5 };

function sumOf(obj){
    let sum = 0;
    for(let key in obj){
        if(typeof obj[key]==="number") {
            sum+=obj[key]*obj[key]
        } else if(typeof obj[key]==="object") {
            sum+=sumOf(obj[key])
        }
    }
    return sum;
}

const sums = sumOf(obj);

console.log(sums)


let array = [1,3,5,3,5,6,7,8,1]
let flag = 0
for(let i=0;i<array.length;i++) {
    flag =0
    for(let j=i+1;j<array.length;j++) {
        if(array[i]===array[j]) {
            flag = 1
            break;
        }
    }
    if(flag===0)console.log(array[i]);
}

let array = [1,3,5,3,5,6,7,8,1]

let res = array.filter((val)=> val%2===0 ).map((val)=>val*2).reduce((acc,curr)=> acc+=curr)
console.log(res)

let array = [1,3,5,3,5,6,7,8,1]
let scndLargest =0;
let largest =0
for(let i =0;i<array.length;i++) {
        if(array[i]>largest) {
            scndLargest = largest
            largest = array[i]
        } else if (array[i]>scndLargest && array[i]<largest){

            scndLargest = array[i]
        }
}

console.log("Scnd largest: "+scndLargest+" Largest: "+largest)


let array = [1,3,5,3,5,6,7,8,1]

const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Tom', age: 40 }
  ];
  
let res = people.map((value)=> value.age).reduce((acc,curr)=>acc+=curr )

console.log(res)

const text = "How are You";

let res = text.split(' ').reverse().join(' ')

console.log(res)

let array = [1,3,5,0,5,0,7,0,1]

const zero = array.filter(val => val ===0)
const nonZero = array.filter(val => val!==0)

// const res = nonZero.concat(zero)
const res = [...nonZero,...zero]
console.log(res)

const text = "Hello World"

let result = text.split('').map((x)=> {
    if(x==='a' || x==='e' || x==='i' || x==='o' || x==='u' ) {
        x=''
    }
    return x;
}).join('')

console.log(result)

let array = [1,3,5,3,5,6,7,8,1]

let res = array.map((val,ind)=> {
    return val*ind
})

console.log(res)
let array = [1,3,5,3,5,[6,7],8,1]

const res =       array.reverse()   

console.log(res)

const text = "Hello Worldaeiou"
let count =0;
let res = text.split('').map((val)=>{
    if(val === "a" || val === "e" || val=== "i" || val=== "o"|| val==="u"){
        val =""
        count++;
    }
    return val
}).join('')
console.log(count)
console.log(res)

const express = require('express')
const app = express()



app.get('/',(req,res,next)=>{
console.log('Suiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
next()
})
app.use((req,res) => {
    console.log("Missle")
})

app.listen(3000,()=> {
    console.log('http://localhost:3000')
})



app.get('/',(req,res,next)=>{
    res.send("Hello middle ware")
    next()
})

app.use((req,res)=>{ 
    console.log('Hello gys Middle ware worked')
})

app.listen(3000,()=> {
    console.log("Server running on http://localhost:3000")
})

const fs = require('fs')

fs.readFile('inex.html','utf-8',(err,data)=>{
    if(err) {
        console.log(err.message)
         return 0 ;}
    console.log(data)
})

console.log(fs.readFileSync('inde.html','utf-8'))

let date = Date()

if(fs.existsSync(hellosss.txt)){
    console.log("exists")
}


const array = "Aadil"
const array = [13, 20, 30];

for(let val of array){
    console.log(val)
}

for(let val of array){
    console.log(val)
}
array.forEach((value) => {
    console.log(value);
});


console.log(array.map((val)=>val*1).filter((val)=>{ return val%2===0}).reduce((acc,curr)=>{ return acc+=curr}))

const os = require('os');

console.log(os.machine());  // Output: The hostname of your system

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("Server created")
    res.write("Hello WORLD")
    res.end()
})

server.listen(3000,()=> {
    console.log()
})

const obj = {
    "key1":100,
    "key2":300
}
var name = "Vishnu";  // Global variable

const person = {
  name: 'John',
  greet: () => console.log(this.name)  // 'this' refers to the global context
};

person.greet();  // Output: 'Vishnu'

const express = require('express')
const app = express()

app.use((req,res,next)=> {
  res.send("Hello world")
  next()
})

router.use((req,res,next)=> {
  res.render('ejs')
  next()
})

router.use('/ejs',router)

app.use((err,req,res,next)=> {
  if(err) console.log(err.message)
    else {
  res.render('ejs')
}
})

app.use(express.json())

const cors = require('CORS')
app.use(cors())

const myMiddleWare = async ((req,res,next)=> {
  const success =true
  if(success) {
    res.send("")
    next()
  }
})

const express  = require('express')
const app = express()

app.set('view engine','ejs')
app.set('views',"views")

app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=> {
    res.render('index')
})
app.post('/', (req, res) => {
  const val = req.body.name;
  console.log(val);

  // Send a response to the client after form submission
  res.send(You submitted: ${val});

});



app.listen(3000,()=> {
  console.log("Server running on http://localhost:3000")
})

const http = require('http')

const server = http.createServer((req,res)=> {
  res.write("Hellooooooooo")
  res.end()
})

server.listen(3000,()=> {
  console.log("Server running on http://localhost:3000")
})

const date = new Date()

console.log(date.getDay())

const os = require('os');

console.log('Platform:', os.platform());
console.log('CPU architecture:', os.arch());
console.log('Number of CPUs:', os.cpus().length);
console.log('Total Memory:', os.totalmem() / (1024 * 1024 * 1024), 'GB');
console.log('Free Memory:', os.freemem() / (1024 * 1024 * 1024), 'GB');
console.log('Uptime:', os.uptime() / 3600, 'hours');
console.log('Home Directory:', os.homedir());
console.log('Network Interfaces:', os.networkInterfaces());

const fs = require('fs')

fs.unlink('newFile.pwn',(err)=> {
    console.log("deleted successfuly")
})

const str = "hello"
let strings = ''
for(let i =0;i<str.length;i++) {
    if(i==str.length-1 || i==0) {
        strings+=str[i].toUpperCase()
    }else {
        strings+=str[i]
    }

}

console.log(strings)

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const userAgent = req.get('User-Agent'); // Access the 'User-Agent' from the request headers
    res.send(Your User-Agent is: ${userAgent});
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

const numbers = [1, 3, 6, 7];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: false
let obj = {};
console.log(Object.keys(obj).length === 0); // true (the object is empty)

let obj = {
    "key1":2134,
    "key2":1234,
    "key3":1314,
    "key4":1243,
    "key5":5739
}

let str = "malayalam"

const res = str.slice(0,-1) + str.slice(-1).toUpperCase()
console.log(res)
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];

console.info(users); // Logs the users in a table format
const products = [
    { name: "Laptop", price: 900 },
    { name: "Phone", price: 600 },
    { name: "Tablet", price: 300 },
  ];

  const res = products.reduce((acc,curr)=>acc+=curr.price,0)
console.log(res)



function variadic(...numbers) {
    return numbers.reduce((acc,curr)=>acc+=curr)
}

console.log(variadic(1,2,3,4,5,6,7,8,9,10))

const employeesA = ['Alice', 'Bob'];
const employeesB = ['Charlie', 'David'];

const newArray = [...employeesA,...employeesB]

const [a,b,...rest] = newArray

console.log(a+b+"  rest:  "+rest)

const users = [{ name: 'Alice' }, { name: 'Bob' }];
const car = { brand: "Toyota", model: "Corolla", year: 2020 };

for(let val of users) {
    
}


for(let key in car) {
    console.log(key+": "+car[key])
}


users.forEach(val => {
    console.log(val.name)    
});

const numbers = [1, 2, 3, 4, 5, 6, 7];

 console.log(numbers.splice(4,1))

let arr = [1, 2, 3];
let result = arr.flatMap(x => [x * 2])//.flat();
console.log(result); // [2, 4, 6]


var nameError = document.getElementById("name-valid");
var emailError = document.getElementById("email-valid");

function validateName(){
    var name = document.getElementById('name-section').value;

    if(name.length <= 4){
        nameError.innerHTML= "enter your name";
        return false;
    }
}

function validateEmail(){
    var email = document.getElementById('email-section').value;

    if(email.length <= 4){
        emailError.innerHTML= "enter your email";
    }
    
}

function outer(){
    var a=10;
    return function inner(){
        console.log(a);
    }
    // return inner;
}
outer()();

console.log(b);

var b  = function (){
    console.log("jdfds");
}

let name = prompt("Enter a name:");

console.log("Entered name is ", name);

let intInput = parseInt(prompt("Enter the int input"));
let floatInput = parseFloat(prompt("Enter the float input"));

let result = intInput + floatInput;
console.log("Result is " + result);

let p = parseInt(prompt("Enter Principal Amount"));
let r = parseFloat(prompt("Enter Interest Rate"));
let n = parseFloat(prompt("Enter number of years"));

let si = (p*r*n)/100;
console.log("Result is " + si);

let mark = parseFloat(prompt("Enter your mark"));

function checkMark(mark){
    if(mark > 50 && mark < 100){
        console.log("passed");
    }
    else {
        console.log("failed");
    }
}
checkMark(mark);

let mark = parseFloat(prompt("Enter Your Mark"));

if(mark >= 90 && mark <= 100){
    console.log("A Grade");
}
else if(mark >= 80 && mark <= 89 ){
    console.log("B Grade");
}
else if(mark >= 70 && mark <= 79){
    console.log("C Grade");
}
else if(mark >= 60 && mark <=69){
    console.log("D Grade");
}
else if(mark >=50 && mark <=59){
    console.log("E Grade");
}
else {
    console.log("Failed");
}

let dayNumber = parseInt(prompt("Enter a number to get the day of the week:"));

switch (dayNumber) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Entry");
    break;
}


let number = parseInt(prompt("Enter a number to display its multiplication table:"));

for (let i = 1; i <= 10; i++) {
  console.log(${number} x ${i} = ${number * i});
}

let limit = parseInt(prompt("Enter the limit"));
let sum=0;
for(let i =0;i<=limit;i++){
    if(i % 2 != 0){
        sum += i;
    }
}
console.log("Result is " + sum);

let size = 5;
let pattern = '';
for(let i=1;i<=size;i++){
    for(j=1;j<=i;j++){
        pattern += j + ' ';
    }
    pattern += '\n';
}
console.log(pattern);

function getArrayElements(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

let array1 = getArrayElements("Enter the 1st array elements (Seperate by comma)");
let array2 = getArrayElements("Enter 2nd array elements (comma seperated");

let temp = array1;
array1 = array2;
array2 = temp;

console.log(array1);
console.log(array2);

function getArrayElements(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

let array = getArrayElements("Enter array values");

function printEvenNumbers(arr) {
    let count =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            count+=1;
        }
    }
    return count;
}


function getArrayElements(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

let array = getArrayElements("Enter array elements");

console.log(sortArray(array));

function getArray(message){
    let input = prompt(message);
    return input.toLowerCase();
}

let originalArray = getArray("enter text");
let reversedArray = originalArray.split('').reverse().join('');

if(originalArray==reversedArray){
    console.log(originalArray + " is a Palindrome");
}else {
    console.log(originalArray + " is not a Palindrome");
}

function get2DArrayFromUser(message) {
    let input = prompt(message);
    let rows = input.split(';'); 
    let array = rows.map(row => row.split(',').map(Number));
    return array;
}

function add2DArrays(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        let row = [];
        for (let j = 0; j < array1[i].length; j++) {
            row.push(array1[i][j] + array2[i][j]);
        }
        result.push(row);
    }
    return result;
}

let array1 = get2DArrayFromUser("Enter the first 2D array (rows separated by ';' and values by ','):");
let array2 = get2DArrayFromUser("Enter the second 2D array (rows separated by ';' and values by ','):");

let sumArray = add2DArrays(array1, array2);

console.log("Sum of the two 2D arrays:");
console.log(sumArray);

function getArray(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

function displayArray(array){
    console.log(array);
}

function main (){
    array1 = getArray("Enter array elements");
    displayArray(array1);
}

main();

number = parseInt(prompt("enter a number"));
let isPrime = 1;
function checkPrime(value){
    for(let i = 2;i<=value/2;i++){
        if(value % i == 0){
            isPrime=0;
            break;
        }
    }
    if(isPrime==0){
        console.log("not Prime");
    }else {
        console.log("Prime");
    }
}

checkPrime(number);

class Calculator {
    addition(a, b) {
        return a + b;
    }

    subtraction(a, b) {
        return a - b;
    }

    multiplication(a, b) {
        return a * b;
    }

    division(a, b) {
        if (b === 0) {
            return "Division by zero is not allowed!";
        }
        return a / b;
    }
}

function main() {
    let calc = new Calculator();

    let choice = parseInt(prompt("Choose an operation: \n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"));

    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    let result;
    if (choice === 1) {
        result = calc.addition(num1, num2);
    } else if (choice === 2) {
        result = calc.subtraction(num1, num2);
    } else if (choice === 3) {
        result = calc.multiplication(num1, num2);
    } else if (choice === 4) {
        result = calc.division(num1, num2);
    } else {
        console.log("Invalid choice!");
        return;
    }

    console.log("The result is: " + result);
}


main();

let writtenMark = parseInt(prompt("Enter the Written test mark"));
let labMark = parseInt(prompt("Enter the lab exam mark"));
let assignmentMark = parseInt(prompt("Enter Assignments mark"));
let result;

function gradeCheck(written,lab,assignment){
    return result=(written*70)/100 + (lab*20)/100 + (assignment*10)/100 ;
}

let totalGrade = gradeCheck(writtenMark,labMark,assignmentMark);
console.log("Grade is " + totalGrade);

function calculateIncomeTax(income) {
    let tax;

    if (income <= 250000) {
        tax = 0;
    } else if (income <= 500000) {
        tax = (income * 5) / 100;
    } else if (income <= 1000000) {
        tax = (income * 20) / 100;
    } else {
        tax = (income * 30) / 100;
    }

    return tax;
}

function main() {
    let annualIncome = parseFloat(prompt("Enter your annual income:"));
    let taxAmount = calculateIncomeTax(annualIncome);
    console.log("The tax you need to pay is: ₹" + taxAmount.toFixed(2));
}

main();

let limit = 5;
let count=1;
let str='';

for(let i=1;i<5;i++){
    for(let j=1;j<=i;j++){
        str+=count++ +" ";
    }
    str+='\n';
}
console.log(str);

function getArray(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

function adjacentMultiply(array){
    let num=[];
    for(let i=0;i<array.length-1;i++){
        num.push(array[i]*array[i+1]);
    }
    return num;
}

let oldArray = getArray("enter array elements (comma separated)");

let newArray = adjacentMultiply(oldArray);
console.log(newArray);


function getArray(message) {
    let rows = prompt(Enter number of rows for ${message}:);
    let array = [];

    for (let i = 0; i < rows; i++) {
        let row = prompt(Enter row ${i + 1} values for ${message} (comma-separated):);
        array.push(row.split(',').map(Number));
    }

    return array;
}

function addArray(array1, array2) {
    let sumArray = [];

    for (let i = 0; i < array1.length; i++) {
        let rowSum = [];
        for (let j = 0; j < array1[i].length; j++) {
            rowSum.push(array1[i][j] + array2[i][j]);
        }
        sumArray.push(rowSum);
    }

    return sumArray;
}

function displayArray(array, message) {
    console.log(${message}:);
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].join(' '));
    }
}

function main() {
    let array1 = getArray("Array 1");
    let array2 = getArray("Array 2");

    let sumArray = addArray(array1, array2);

    displayArray(array1, "Array 1");
    displayArray(array2, "Array 2");
    displayArray(sumArray, "Sum of Array 1 and Array 2");
}

main();

class ArrayOperations {
    constructor() {
        this.array = [];
    }

    getArray(rows) {
        for (let i = 0; i < rows; i++) {
            let row = prompt(Enter values for row ${i + 1} (comma-separated):);
            this.array.push(row.split(',').map(Number));
        }
    }

    displayArray() {
        console.log("The 2D array is:");
        this.array.forEach(row => {
            console.log(row.join(' '));
        });
    }

    static main() {
        let operations = new ArrayOperations();

        let rows = parseInt(prompt("Enter the number of rows:"));

        operations.getArray(rows);
        operations.displayArray();
    }
}

ArrayOperations.main();

class Area {
    circle(radius) {
        return Math.PI * radius * radius;
    }

    square(side) {
        return side * side;
    }

    rectangle(length, width) {
        return length * width;
    }

    triangle(base, height) {
        return 0.5 * base * height;
    }
}

class MyClass extends Area {
    main() {
        let choice;
        do {
            choice = parseInt(prompt(Choose an option to calculate area:\n1. Circle\n2. Square\n3. Rectangle\n4. Triangle\n5. Exit));
            switch (choice) {
                case 1:
                    this.circle();
                    break;
                case 2:
                    this.square();
                    break;
                case 3:
                    this.rectangle();
                    break;
                case 4:
                    this.triangle();
                    break;
                case 5:
                    console.log("Exiting the program.");
                    break;
                default:
                    console.log("Invalid choice, please select again.");
            }
        } while (choice !== 5);
    }

    circle() {
        let radius = parseFloat(prompt("Enter the radius of the circle:"));
        let area = super.circle(radius);
        console.log(The area of the circle is: ${area.toFixed(2)});
    }

    square() {
        let side = parseFloat(prompt("Enter the side length of the square:"));
        let area = super.square(side);
        console.log(The area of the square is: ${area.toFixed(2)});
    }

    rectangle() {
        let length = parseFloat(prompt("Enter the length of the rectangle:"));
        let width = parseFloat(prompt("Enter the width of the rectangle:"));
        let area = super.rectangle(length, width);
        console.log(The area of the rectangle is: ${area.toFixed(2)});
    }

    triangle() {
        let base = parseFloat(prompt("Enter the base length of the triangle:"));
        let height = parseFloat(prompt("Enter the height of the triangle:"));
        let area = super.triangle(base, height);
        console.log(The area of the triangle is: ${area.toFixed(2)});
    }
}

let myObject = new MyClass();
myObject.main();


var library = [
    {
        title:'Bill Gates',
        author:'The Road',
        readingStatus:true
    },
    {
        title:'Sultan',
        author:'Tew',
        readingStatus:false
    },
    {
        title:'frogs',
        author:'John',
        readingStatus:true
    }
];

function displayReadingStatus(value){
    value.forEach( book  => {
        if(book.readingStatus){
            console.log(${book.title} is already readed.)
        }else {
            console.log(You need to read ${book.title})
        }
    })
}

displayReadingStatus(library);

let my_string = "HELLO";

try {
    let reversedString = my_string.split('').reverse().join('');
    console.log(Reversed string is : ${reversedString});
} catch (err) {
    console.log(Error : ${err.message});
} finally {
    console.log(Type of my_string is : ${typeof my_string});
}

let my_height = "70"; 
try {
    if (isNaN(my_height)) {
        throw new Error("notANumberError");
    }

    if (my_height > 100) {  
        throw new Error("HugeHeightError");
    }

    if (my_height < 30) {  
        throw new Error("TinyHeightError");
    }

    console.log(Your height is ${my_height} cm.);
} catch (err) {
    console.log(Error: ${err.message});
}

class Car {
    constructor(name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
    
}

let myCar = new Car('Toyota', 15000, 180);

console.log(myCar.name);    
console.log(myCar.mileage); 
console.log(myCar.max_speed);


let myArray = [1,2,3,4,5,1];

function myFilter(myArray,checkEven){
    console.log(checkEven);
    
}

function checkEven(Array){
    let sum=Array.reduce((acc,curr)=>{
        return acc += curr;
    },0)
    console.log(sum);

    return sum % 2 ===0;

}

myFilter(myArray,checkEven(myArray));

Get references to the checkbox and button elements
const checkbox = document.getElementById('myCheckbox');
const button = document.getElementById('toggleButton');

// Add click event listener to the button
button.addEventListener('click', () => {
    // Toggle the checked property of the checkbox
    checkbox.checked = !checkbox.checked;
});

let checkBox = document.getElementById("myCheckbox");
let button = document.getElementById("toggleButton");

button.addEventListener('click', () => checkBox.checked=!checkBox.checked);

button.addEventListener('contextmenu', (event) => {
    event.preventDefault();
})

"use strict";

let x = 3.14; // Works fine
y = 10; // Throws an error because 'y' is not declared

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // TO DO: Implement login functionality using Facebook API or a backend service
    console.log(Email: ${email}, Password: ${password});
});

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


const cart = ["Apple", "Orange", "Banana"];

let selection = prompt(Order something from this list ${cart}: );


createOrder(cart, selection)
    .then(itemPurchased => {
        return proceedToPayment(itemPurchased);
    })
    .then(({ item, price }) => {
        return showOrderSummary({ item, price });
    })
    .then((price) => {
        setTimeout(()=>{
            console.log("Payment successful");
        },5999)
    return price})
    .then(priceUpdating => {
        return updateWallet(priceUpdating);
    })
    .then(updatedBalance => {
        setTimeout(()=>{
            console.log(updatedBalance); 
        },10050)
    })
    .catch(err => {
        console.error(err.message);
    })

function createOrder(cart1, item) {
    return new Promise((resolve, reject) => {
        let found = false;
        cart1.forEach(cartItem => {
            if (cartItem === item) {
                console.log(You have Ordered the ${item});
                resolve(item);
                found = true;
            }
        });
        if (!found) {
            reject(new Error("Item not Found"));
        }
    });
}

function proceedToPayment(item) {
    return new Promise((resolve, reject) => {
        let price;
        if (item === "Apple") price = 100;
        else if (item === "Orange") price = 60;
        else if (item === "Banana") price = 30;
        else reject(new Error("Out of Stock"));
        console.log(You have to pay ${price}/kg for ${item}.);
        resolve({ item, price });
    });
}

function showOrderSummary({ item, price }) {
    console.log(For Completing this order..Do payment to this QR ( ${item} : ${price} ));
    return price;
}

function updateWallet(price) {
    const wallet = 3000;
    const updatedWallet = wallet - price;
    return new Promise((resolve, reject) => {
        if (updatedWallet >= 0) {
            resolve(-${price}\tYour Wallet Updated Balance: ${updatedWallet});
        } else {
            reject(new Error("Insufficient Balance in your Wallet."));
        }
    });
}

// const promise1 = Promise.resolve('First promise resolved');
// const promise2 = Promise.resolve('Second promise resolved');
// const promise3 = Promise.resolve('Third promise rejected');

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log('All promises resolved:', values); // This won't run
//   })
//   .catch((error) => {
//     console.error('Promise.all rejected:', error); // Logs: "Promise.all rejected: Third promise rejected"
//   });

// const promise1 = Promise.resolve('First promise resolved');
// const promise2 = Promise.resolve('Second promise resolved');
// const promise3 = Promise.reject('Third promise rejected');

// const runPromises = async () => {
//   try {
//     const values = await Promise.all([promise1, promise2, promise3]);
//     console.log('All promises resolved:', values); // This won't run
//   } catch (error) {
//     console.error('Promise.all rejected:', error); // Logs: "Promise.all rejected: Third promise rejected"
//   }
// };

runPromises();

function sortArray(arr){
    return arr.sort((a,b) => {
        return b-a;
    });
}
console.log(sortArray([3,2,3,4,5,6,2,4,5,3,1,9]));

function promiseFn(){
const pr = new Promise((resolve,reject) => {
    let a=true;
    if(a){
        setTimeout(() => {
            resolve("Promise Resolved");
        },1000);
    }else {
        reject("promise rejected");
    }
});
return pr;
}
async function handlePromise(){
    try {
        console.log("Wait for 1 sec")
        const val = await promiseFn();
        console.log("Dummy print")
        console.log(val);
    }
    catch(error) {
        console.log(error);
    }
}

handlePromise();

const pr1= Promise.resolve("Resolved");
const pr2 = Promise.reject("Rejected");
const pr3 = Promise.resolve("Resolved");

async function handling(){
    try {
        const pr = await Promise.allSettled([pr1,pr2,pr3]);
        console.log(pr);
    }
    catch (error){
        console.log(error);
    }finally{
        console.log("Always run.whether it is error or not");
    }
}
handling();

console.log(global);

const mhuy = "fdfa";


class user {
    

    constructor(){
        this.name="Hi hello";
    }
    getName(){
        return this.name;
    }
}



const newObj = new user();

console.log(newObj.getName());

const variable = newObj.getName();

console.log(variable());

let userName;
let Name = "Guest";

let displayName = userName ?? Name;
console.log(displayName); // Output: "Guest"

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value)

const text = "MALAYALAM";
let revText = "";

for(let i = text.length-1 ; i>=0 ; i--) {
    revText += text[i]
}
console.log(revText)
if (revText == text ) {
    console.log("Palindrome")
} else {
    console.log("Not palindrome");
    
}

let array = [4,6,3,3,7,4,7,8,6,4]

for(let i =0;i<array.length;i++){
    let isPrime = 1;
    for(let j=2;j<=array[i]/2;j++){
        if(array[i]%j===0){
            isPrime = 0;
            break;
        } else {
            isPrime = 1;
        }
    }
    if(isPrime){
        console.log(array[i])
    }
}


const promises = new Promise((res,rej)=>{
    let success = true;
    (success) ? res("Success") : rej("Failed"); 
})

async function name (){
    try {
        const result = await promises
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

name()
const obj = { 
    "a": 2,
    "b": { "x": 3, "y": 4 },
    "c": [1, 2], 
    "d": 5 };

function sumOf(obj){
    let sum = 0;
    for(let key in obj){
        if(typeof obj[key]==="number") {
            sum+=obj[key]*obj[key]
        } else if(typeof obj[key]==="object") {
            sum+=sumOf(obj[key])
        }
    }
    return sum;
}

const sums = sumOf(obj);

console.log(sums)


let array = [1,3,5,3,5,6,7,8,1]
let flag = 0
for(let i=0;i<array.length;i++) {
    flag =0
    for(let j=i+1;j<array.length;j++) {
        if(array[i]===array[j]) {
            flag = 1
            break;
        }
    }
    if(flag===0)console.log(array[i]);
}

let array = [1,3,5,3,5,6,7,8,1]

let res = array.filter((val)=> val%2===0 ).map((val)=>val*2).reduce((acc,curr)=> acc+=curr)
console.log(res)

let array = [1,3,5,3,5,6,7,8,1]
let scndLargest =0;
let largest =0
for(let i =0;i<array.length;i++) {
        if(array[i]>largest) {
            scndLargest = largest
            largest = array[i]
        } else if (array[i]>scndLargest && array[i]<largest){

            scndLargest = array[i]
        }
}

console.log("Scnd largest: "+scndLargest+" Largest: "+largest)


let array = [1,3,5,3,5,6,7,8,1]

const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Tom', age: 40 }
  ];
  
let res = people.map((value)=> value.age).reduce((acc,curr)=>acc+=curr )

console.log(res)

const text = "How are You";

let res = text.split(' ').reverse().join(' ')

console.log(res)

let array = [1,3,5,0,5,0,7,0,1]

const zero = array.filter(val => val ===0)
const nonZero = array.filter(val => val!==0)

// const res = nonZero.concat(zero)
const res = [...nonZero,...zero]
console.log(res)

const text = "Hello World"

let result = text.split('').map((x)=> {
    if(x==='a' || x==='e' || x==='i' || x==='o' || x==='u' ) {
        x=''
    }
    return x;
}).join('')

console.log(result)

let array = [1,3,5,3,5,6,7,8,1]

let res = array.map((val,ind)=> {
    return val*ind
})

console.log(res)
let array = [1,3,5,3,5,[6,7],8,1]

const res =       array.reverse()   

console.log(res)

const text = "Hello Worldaeiou"
let count =0;
let res = text.split('').map((val)=>{
    if(val === "a" || val === "e" || val=== "i" || val=== "o"|| val==="u"){
        val =""
        count++;
    }
    return val
}).join('')
console.log(count)
console.log(res)

const express = require('express')
const app = express()



app.get('/',(req,res,next)=>{
console.log('Suiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
next()
})
app.use((req,res) => {
    console.log("Missle")
})

app.listen(3000,()=> {
    console.log('http://localhost:3000')
})



app.get('/',(req,res,next)=>{
    res.send("Hello middle ware")
    next()
})

app.use((req,res)=>{ 
    console.log('Hello gys Middle ware worked')
})

app.listen(3000,()=> {
    console.log("Server running on http://localhost:3000")
})

const fs = require('fs')

fs.readFile('inex.html','utf-8',(err,data)=>{
    if(err) {
        console.log(err.message)
         return 0 ;}
    console.log(data)
})

console.log(fs.readFileSync('inde.html','utf-8'))

let date = Date()

if(fs.existsSync(hellosss.txt)){
    console.log("exists")
}


const array = "Aadil"
const array = [13, 20, 30];

for(let val of array){
    console.log(val)
}

for(let val of array){
    console.log(val)
}
array.forEach((value) => {
    console.log(value);
});


console.log(array.map((val)=>val*1).filter((val)=>{ return val%2===0}).reduce((acc,curr)=>{ return acc+=curr}))

const os = require('os');

console.log(os.machine());  // Output: The hostname of your system

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("Server created")
    res.write("Hello WORLD")
    res.end()
})

server.listen(3000,()=> {
    console.log()
})

const obj = {
    "key1":100,
    "key2":300
}
var name = "Vishnu";  // Global variable

const person = {
  name: 'John',
  greet: () => console.log(this.name)  // 'this' refers to the global context
};

person.greet();  // Output: 'Vishnu'

const express = require('express')
const app = express()

app.use((req,res,next)=> {
  res.send("Hello world")
  next()
})

router.use((req,res,next)=> {
  res.render('ejs')
  next()
})

router.use('/ejs',router)

app.use((err,req,res,next)=> {
  if(err) console.log(err.message)
    else {
  res.render('ejs')
}
})

app.use(express.json())

const cors = require('CORS')
app.use(cors())

const myMiddleWare = async ((req,res,next)=> {
  const success =true
  if(success) {
    res.send("")
    next()
  }
})

const express  = require('express')
const app = express()

app.set('view engine','ejs')
app.set('views',"views")

app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=> {
    res.render('index')
})
app.post('/', (req, res) => {
  const val = req.body.name;
  console.log(val);

  // Send a response to the client after form submission
  res.send(You submitted: ${val});

});



app.listen(3000,()=> {
  console.log("Server running on http://localhost:3000")
})

const http = require('http')

const server = http.createServer((req,res)=> {
  res.write("Hellooooooooo")
  res.end()
})

server.listen(3000,()=> {
  console.log("Server running on http://localhost:3000")
})

const date = new Date()

console.log(date.getDay())

const os = require('os');

console.log('Platform:', os.platform());
console.log('CPU architecture:', os.arch());
console.log('Number of CPUs:', os.cpus().length);
console.log('Total Memory:', os.totalmem() / (1024 * 1024 * 1024), 'GB');
console.log('Free Memory:', os.freemem() / (1024 * 1024 * 1024), 'GB');
console.log('Uptime:', os.uptime() / 3600, 'hours');
console.log('Home Directory:', os.homedir());
console.log('Network Interfaces:', os.networkInterfaces());

const fs = require('fs')

fs.unlink('newFile.pwn',(err)=> {
    console.log("deleted successfuly")
})

const str = "hello"
let strings = ''
for(let i =0;i<str.length;i++) {
    if(i==str.length-1 || i==0) {
        strings+=str[i].toUpperCase()
    }else {
        strings+=str[i]
    }

}

console.log(strings)

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const userAgent = req.get('User-Agent'); // Access the 'User-Agent' from the request headers
    res.send(Your User-Agent is: ${userAgent});
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

const numbers = [1, 3, 6, 7];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: false
let obj = {};
console.log(Object.keys(obj).length === 0); // true (the object is empty)

let obj = {
    "key1":2134,
    "key2":1234,
    "key3":1314,
    "key4":1243,
    "key5":5739
}

let str = "malayalam"

const res = str.slice(0,-1) + str.slice(-1).toUpperCase()
console.log(res)
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];

console.info(users); // Logs the users in a table format
const products = [
    { name: "Laptop", price: 900 },
    { name: "Phone", price: 600 },
    { name: "Tablet", price: 300 },
  ];

  const res = products.reduce((acc,curr)=>acc+=curr.price,0)
console.log(res)



function variadic(...numbers) {
    return numbers.reduce((acc,curr)=>acc+=curr)
}

console.log(variadic(1,2,3,4,5,6,7,8,9,10))

const employeesA = ['Alice', 'Bob'];
const employeesB = ['Charlie', 'David'];

const newArray = [...employeesA,...employeesB]

const [a,b,...rest] = newArray

console.log(a+b+"  rest:  "+rest)

const users = [{ name: 'Alice' }, { name: 'Bob' }];
const car = { brand: "Toyota", model: "Corolla", year: 2020 };

for(let val of users) {
    
}


for(let key in car) {
    console.log(key+": "+car[key])
}


users.forEach(val => {
    console.log(val.name)    
});

const numbers = [1, 2, 3, 4, 5, 6, 7];

 console.log(numbers.splice(4,1))

let arr = [1, 2, 3];
let result = arr.flatMap(x => [x * 2])//.flat();
console.log(result); // [2, 4, 6]


var nameError = document.getElementById("name-valid");
var emailError = document.getElementById("email-valid");

function validateName(){
    var name = document.getElementById('name-section').value;

    if(name.length <= 4){
        nameError.innerHTML= "enter your name";
        return false;
    }
}

function validateEmail(){
    var email = document.getElementById('email-section').value;

    if(email.length <= 4){
        emailError.innerHTML= "enter your email";
    }
    
}

function outer(){
    var a=10;
    return function inner(){
        console.log(a);
    }
    // return inner;
}
outer()();

console.log(b);

var b  = function (){
    console.log("jdfds");
}

let name = prompt("Enter a name:");

console.log("Entered name is ", name);

let intInput = parseInt(prompt("Enter the int input"));
let floatInput = parseFloat(prompt("Enter the float input"));

let result = intInput + floatInput;
console.log("Result is " + result);

let p = parseInt(prompt("Enter Principal Amount"));
let r = parseFloat(prompt("Enter Interest Rate"));
let n = parseFloat(prompt("Enter number of years"));

let si = (p*r*n)/100;
console.log("Result is " + si);

let mark = parseFloat(prompt("Enter your mark"));

function checkMark(mark){
    if(mark > 50 && mark < 100){
        console.log("passed");
    }
    else {
        console.log("failed");
    }
}
checkMark(mark);

let mark = parseFloat(prompt("Enter Your Mark"));

if(mark >= 90 && mark <= 100){
    console.log("A Grade");
}
else if(mark >= 80 && mark <= 89 ){
    console.log("B Grade");
}
else if(mark >= 70 && mark <= 79){
    console.log("C Grade");
}
else if(mark >= 60 && mark <=69){
    console.log("D Grade");
}
else if(mark >=50 && mark <=59){
    console.log("E Grade");
}
else {
    console.log("Failed");
}

let dayNumber = parseInt(prompt("Enter a number to get the day of the week:"));

switch (dayNumber) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Entry");
    break;
}


let number = parseInt(prompt("Enter a number to display its multiplication table:"));

for (let i = 1; i <= 10; i++) {
  console.log(${number} x ${i} = ${number * i});
}

let limit = parseInt(prompt("Enter the limit"));
let sum=0;
for(let i =0;i<=limit;i++){
    if(i % 2 != 0){
        sum += i;
    }
}
console.log("Result is " + sum);

let size = 5;
let pattern = '';
for(let i=1;i<=size;i++){
    for(j=1;j<=i;j++){
        pattern += j + ' ';
    }
    pattern += '\n';
}
console.log(pattern);

function getArrayElements(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

let array1 = getArrayElements("Enter the 1st array elements (Seperate by comma)");
let array2 = getArrayElements("Enter 2nd array elements (comma seperated");

let temp = array1;
array1 = array2;
array2 = temp;

console.log(array1);
console.log(array2);

function getArrayElements(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

let array = getArrayElements("Enter array values");

function printEvenNumbers(arr) {
    let count =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            count+=1;
        }
    }
    return count;
}


function getArrayElements(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

let array = getArrayElements("Enter array elements");

console.log(sortArray(array));

function getArray(message){
    let input = prompt(message);
    return input.toLowerCase();
}

let originalArray = getArray("enter text");
let reversedArray = originalArray.split('').reverse().join('');

if(originalArray==reversedArray){
    console.log(originalArray + " is a Palindrome");
}else {
    console.log(originalArray + " is not a Palindrome");
}

function get2DArrayFromUser(message) {
    let input = prompt(message);
    let rows = input.split(';'); 
    let array = rows.map(row => row.split(',').map(Number));
    return array;
}

function add2DArrays(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        let row = [];
        for (let j = 0; j < array1[i].length; j++) {
            row.push(array1[i][j] + array2[i][j]);
        }
        result.push(row);
    }
    return result;
}

let array1 = get2DArrayFromUser("Enter the first 2D array (rows separated by ';' and values by ','):");
let array2 = get2DArrayFromUser("Enter the second 2D array (rows separated by ';' and values by ','):");

let sumArray = add2DArrays(array1, array2);

console.log("Sum of the two 2D arrays:");
console.log(sumArray);

function getArray(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

function displayArray(array){
    console.log(array);
}

function main (){
    array1 = getArray("Enter array elements");
    displayArray(array1);
}

main();

number = parseInt(prompt("enter a number"));
let isPrime = 1;
function checkPrime(value){
    for(let i = 2;i<=value/2;i++){
        if(value % i == 0){
            isPrime=0;
            break;
        }
    }
    if(isPrime==0){
        console.log("not Prime");
    }else {
        console.log("Prime");
    }
}

checkPrime(number);

class Calculator {
    addition(a, b) {
        return a + b;
    }

    subtraction(a, b) {
        return a - b;
    }

    multiplication(a, b) {
        return a * b;
    }

    division(a, b) {
        if (b === 0) {
            return "Division by zero is not allowed!";
        }
        return a / b;
    }
}

function main() {
    let calc = new Calculator();

    let choice = parseInt(prompt("Choose an operation: \n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"));

    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    let result;
    if (choice === 1) {
        result = calc.addition(num1, num2);
    } else if (choice === 2) {
        result = calc.subtraction(num1, num2);
    } else if (choice === 3) {
        result = calc.multiplication(num1, num2);
    } else if (choice === 4) {
        result = calc.division(num1, num2);
    } else {
        console.log("Invalid choice!");
        return;
    }

    console.log("The result is: " + result);
}


main();

let writtenMark = parseInt(prompt("Enter the Written test mark"));
let labMark = parseInt(prompt("Enter the lab exam mark"));
let assignmentMark = parseInt(prompt("Enter Assignments mark"));
let result;

function gradeCheck(written,lab,assignment){
    return result=(written*70)/100 + (lab*20)/100 + (assignment*10)/100 ;
}

let totalGrade = gradeCheck(writtenMark,labMark,assignmentMark);
console.log("Grade is " + totalGrade);

function calculateIncomeTax(income) {
    let tax;

    if (income <= 250000) {
        tax = 0;
    } else if (income <= 500000) {
        tax = (income * 5) / 100;
    } else if (income <= 1000000) {
        tax = (income * 20) / 100;
    } else {
        tax = (income * 30) / 100;
    }

    return tax;
}

function main() {
    let annualIncome = parseFloat(prompt("Enter your annual income:"));
    let taxAmount = calculateIncomeTax(annualIncome);
    console.log("The tax you need to pay is: ₹" + taxAmount.toFixed(2));
}

main();

let limit = 5;
let count=1;
let str='';

for(let i=1;i<5;i++){
    for(let j=1;j<=i;j++){
        str+=count++ +" ";
    }
    str+='\n';
}
console.log(str);

function getArray(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

function adjacentMultiply(array){
    let num=[];
    for(let i=0;i<array.length-1;i++){
        num.push(array[i]*array[i+1]);
    }
    return num;
}

let oldArray = getArray("enter array elements (comma separated)");

let newArray = adjacentMultiply(oldArray);
console.log(newArray);


function getArray(message) {
    let rows = prompt(Enter number of rows for ${message}:);
    let array = [];

    for (let i = 0; i < rows; i++) {
        let row = prompt(Enter row ${i + 1} values for ${message} (comma-separated):);
        array.push(row.split(',').map(Number));
    }

    return array;
}

function addArray(array1, array2) {
    let sumArray = [];

    for (let i = 0; i < array1.length; i++) {
        let rowSum = [];
        for (let j = 0; j < array1[i].length; j++) {
            rowSum.push(array1[i][j] + array2[i][j]);
        }
        sumArray.push(rowSum);
    }

    return sumArray;
}

function displayArray(array, message) {
    console.log(${message}:);
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].join(' '));
    }
}

function main() {
    let array1 = getArray("Array 1");
    let array2 = getArray("Array 2");

    let sumArray = addArray(array1, array2);

    displayArray(array1, "Array 1");
    displayArray(array2, "Array 2");
    displayArray(sumArray, "Sum of Array 1 and Array 2");
}

main();

class ArrayOperations {
    constructor() {
        this.array = [];
    }

    getArray(rows) {
        for (let i = 0; i < rows; i++) {
            let row = prompt(Enter values for row ${i + 1} (comma-separated):);
            this.array.push(row.split(',').map(Number));
        }
    }

    displayArray() {
        console.log("The 2D array is:");
        this.array.forEach(row => {
            console.log(row.join(' '));
        });
    }

    static main() {
        let operations = new ArrayOperations();

        let rows = parseInt(prompt("Enter the number of rows:"));

        operations.getArray(rows);
        operations.displayArray();
    }
}

ArrayOperations.main();

class Area {
    circle(radius) {
        return Math.PI * radius * radius;
    }

    square(side) {
        return side * side;
    }

    rectangle(length, width) {
        return length * width;
    }

    triangle(base, height) {
        return 0.5 * base * height;
    }
}

class MyClass extends Area {
    main() {
        let choice;
        do {
            choice = parseInt(prompt(Choose an option to calculate area:\n1. Circle\n2. Square\n3. Rectangle\n4. Triangle\n5. Exit));
            switch (choice) {
                case 1:
                    this.circle();
                    break;
                case 2:
                    this.square();
                    break;
                case 3:
                    this.rectangle();
                    break;
                case 4:
                    this.triangle();
                    break;
                case 5:
                    console.log("Exiting the program.");
                    break;
                default:
                    console.log("Invalid choice, please select again.");
            }
        } while (choice !== 5);
    }

    circle() {
        let radius = parseFloat(prompt("Enter the radius of the circle:"));
        let area = super.circle(radius);
        console.log(The area of the circle is: ${area.toFixed(2)});
    }

    square() {
        let side = parseFloat(prompt("Enter the side length of the square:"));
        let area = super.square(side);
        console.log(The area of the square is: ${area.toFixed(2)});
    }

    rectangle() {
        let length = parseFloat(prompt("Enter the length of the rectangle:"));
        let width = parseFloat(prompt("Enter the width of the rectangle:"));
        let area = super.rectangle(length, width);
        console.log(The area of the rectangle is: ${area.toFixed(2)});
    }

    triangle() {
        let base = parseFloat(prompt("Enter the base length of the triangle:"));
        let height = parseFloat(prompt("Enter the height of the triangle:"));
        let area = super.triangle(base, height);
        console.log(The area of the triangle is: ${area.toFixed(2)});
    }
}

let myObject = new MyClass();
myObject.main();


var library = [
    {
        title:'Bill Gates',
        author:'The Road',
        readingStatus:true
    },
    {
        title:'Sultan',
        author:'Tew',
        readingStatus:false
    },
    {
        title:'frogs',
        author:'John',
        readingStatus:true
    }
];

function displayReadingStatus(value){
    value.forEach( book  => {
        if(book.readingStatus){
            console.log(${book.title} is already readed.)
        }else {
            console.log(You need to read ${book.title})
        }
    })
}

displayReadingStatus(library);

let my_string = "HELLO";

try {
    let reversedString = my_string.split('').reverse().join('');
    console.log(Reversed string is : ${reversedString});
} catch (err) {
    console.log(Error : ${err.message});
} finally {
    console.log(Type of my_string is : ${typeof my_string});
}

let my_height = "70"; 
try {
    if (isNaN(my_height)) {
        throw new Error("notANumberError");
    }

    if (my_height > 100) {  
        throw new Error("HugeHeightError");
    }

    if (my_height < 30) {  
        throw new Error("TinyHeightError");
    }

    console.log(Your height is ${my_height} cm.);
} catch (err) {
    console.log(Error: ${err.message});
}

class Car {
    constructor(name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
    
}

let myCar = new Car('Toyota', 15000, 180);

console.log(myCar.name);    
console.log(myCar.mileage); 
console.log(myCar.max_speed);


let myArray = [1,2,3,4,5,1];

function myFilter(myArray,checkEven){
    console.log(checkEven);
    
}

function checkEven(Array){
    let sum=Array.reduce((acc,curr)=>{
        return acc += curr;
    },0)
    console.log(sum);

    return sum % 2 ===0;

}

myFilter(myArray,checkEven(myArray));

Get references to the checkbox and button elements
const checkbox = document.getElementById('myCheckbox');
const button = document.getElementById('toggleButton');

// Add click event listener to the button
button.addEventListener('click', () => {
    // Toggle the checked property of the checkbox
    checkbox.checked = !checkbox.checked;
});

let checkBox = document.getElementById("myCheckbox");
let button = document.getElementById("toggleButton");

button.addEventListener('click', () => checkBox.checked=!checkBox.checked);

button.addEventListener('contextmenu', (event) => {
    event.preventDefault();
})

"use strict";

let x = 3.14; // Works fine
y = 10; // Throws an error because 'y' is not declared

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // TO DO: Implement login functionality using Facebook API or a backend service
    console.log(Email: ${email}, Password: ${password});
});

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


const cart = ["Apple", "Orange", "Banana"];

let selection = prompt(Order something from this list ${cart}: );


createOrder(cart, selection)
    .then(itemPurchased => {
        return proceedToPayment(itemPurchased);
    })
    .then(({ item, price }) => {
        return showOrderSummary({ item, price });
    })
    .then((price) => {
        setTimeout(()=>{
            console.log("Payment successful");
        },5999)
    return price})
    .then(priceUpdating => {
        return updateWallet(priceUpdating);
    })
    .then(updatedBalance => {
        setTimeout(()=>{
            console.log(updatedBalance); 
        },10050)
    })
    .catch(err => {
        console.error(err.message);
    })

function createOrder(cart1, item) {
    return new Promise((resolve, reject) => {
        let found = false;
        cart1.forEach(cartItem => {
            if (cartItem === item) {
                console.log(You have Ordered the ${item});
                resolve(item);
                found = true;
            }
        });
        if (!found) {
            reject(new Error("Item not Found"));
        }
    });
}

function proceedToPayment(item) {
    return new Promise((resolve, reject) => {
        let price;
        if (item === "Apple") price = 100;
        else if (item === "Orange") price = 60;
        else if (item === "Banana") price = 30;
        else reject(new Error("Out of Stock"));
        console.log(You have to pay ${price}/kg for ${item}.);
        resolve({ item, price });
    });
}

function showOrderSummary({ item, price }) {
    console.log(For Completing this order..Do payment to this QR ( ${item} : ${price} ));
    return price;
}

function updateWallet(price) {
    const wallet = 3000;
    const updatedWallet = wallet - price;
    return new Promise((resolve, reject) => {
        if (updatedWallet >= 0) {
            resolve(-${price}\tYour Wallet Updated Balance: ${updatedWallet});
        } else {
            reject(new Error("Insufficient Balance in your Wallet."));
        }
    });
}

// const promise1 = Promise.resolve('First promise resolved');
// const promise2 = Promise.resolve('Second promise resolved');
// const promise3 = Promise.resolve('Third promise rejected');

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log('All promises resolved:', values); // This won't run
//   })
//   .catch((error) => {
//     console.error('Promise.all rejected:', error); // Logs: "Promise.all rejected: Third promise rejected"
//   });

// const promise1 = Promise.resolve('First promise resolved');
// const promise2 = Promise.resolve('Second promise resolved');
// const promise3 = Promise.reject('Third promise rejected');

// const runPromises = async () => {
//   try {
//     const values = await Promise.all([promise1, promise2, promise3]);
//     console.log('All promises resolved:', values); // This won't run
//   } catch (error) {
//     console.error('Promise.all rejected:', error); // Logs: "Promise.all rejected: Third promise rejected"
//   }
// };

runPromises();

function sortArray(arr){
    return arr.sort((a,b) => {
        return b-a;
    });
}
console.log(sortArray([3,2,3,4,5,6,2,4,5,3,1,9]));

function promiseFn(){
const pr = new Promise((resolve,reject) => {
    let a=true;
    if(a){
        setTimeout(() => {
            resolve("Promise Resolved");
        },1000);
    }else {
        reject("promise rejected");
    }
});
return pr;
}
async function handlePromise(){
    try {
        console.log("Wait for 1 sec")
        const val = await promiseFn();
        console.log("Dummy print")
        console.log(val);
    }
    catch(error) {
        console.log(error);
    }
}

handlePromise();

const pr1= Promise.resolve("Resolved");
const pr2 = Promise.reject("Rejected");
const pr3 = Promise.resolve("Resolved");

async function handling(){
    try {
        const pr = await Promise.allSettled([pr1,pr2,pr3]);
        console.log(pr);
    }
    catch (error){
        console.log(error);
    }finally{
        console.log("Always run.whether it is error or not");
    }
}
handling();

console.log(global);

const mhuy = "fdfa";


class user {
    

    constructor(){
        this.name="Hi hello";
    }
    getName(){
        return this.name;
    }
}



const newObj = new user();

console.log(newObj.getName());

const variable = newObj.getName();

console.log(variable());

let userName;
let Name = "Guest";

let displayName = userName ?? Name;
console.log(displayName); // Output: "Guest"

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value)

const text = "MALAYALAM";
let revText = "";

for(let i = text.length-1 ; i>=0 ; i--) {
    revText += text[i]
}
console.log(revText)
if (revText == text ) {
    console.log("Palindrome")
} else {
    console.log("Not palindrome");
    
}

let array = [4,6,3,3,7,4,7,8,6,4]

for(let i =0;i<array.length;i++){
    let isPrime = 1;
    for(let j=2;j<=array[i]/2;j++){
        if(array[i]%j===0){
            isPrime = 0;
            break;
        } else {
            isPrime = 1;
        }
    }
    if(isPrime){
        console.log(array[i])
    }
}


const promises = new Promise((res,rej)=>{
    let success = true;
    (success) ? res("Success") : rej("Failed"); 
})

async function name (){
    try {
        const result = await promises
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

name()
const obj = { 
    "a": 2,
    "b": { "x": 3, "y": 4 },
    "c": [1, 2], 
    "d": 5 };

function sumOf(obj){
    let sum = 0;
    for(let key in obj){
        if(typeof obj[key]==="number") {
            sum+=obj[key]*obj[key]
        } else if(typeof obj[key]==="object") {
            sum+=sumOf(obj[key])
        }
    }
    return sum;
}

const sums = sumOf(obj);

console.log(sums)


let array = [1,3,5,3,5,6,7,8,1]
let flag = 0
for(let i=0;i<array.length;i++) {
    flag =0
    for(let j=i+1;j<array.length;j++) {
        if(array[i]===array[j]) {
            flag = 1
            break;
        }
    }
    if(flag===0)console.log(array[i]);
}

let array = [1,3,5,3,5,6,7,8,1]

let res = array.filter((val)=> val%2===0 ).map((val)=>val*2).reduce((acc,curr)=> acc+=curr)
console.log(res)

let array = [1,3,5,3,5,6,7,8,1]
let scndLargest =0;
let largest =0
for(let i =0;i<array.length;i++) {
        if(array[i]>largest) {
            scndLargest = largest
            largest = array[i]
        } else if (array[i]>scndLargest && array[i]<largest){

            scndLargest = array[i]
        }
}

console.log("Scnd largest: "+scndLargest+" Largest: "+largest)


let array = [1,3,5,3,5,6,7,8,1]

const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Tom', age: 40 }
  ];
  
let res = people.map((value)=> value.age).reduce((acc,curr)=>acc+=curr )

console.log(res)

const text = "How are You";

let res = text.split(' ').reverse().join(' ')

console.log(res)

let array = [1,3,5,0,5,0,7,0,1]

const zero = array.filter(val => val ===0)
const nonZero = array.filter(val => val!==0)

// const res = nonZero.concat(zero)
const res = [...nonZero,...zero]
console.log(res)

const text = "Hello World"

let result = text.split('').map((x)=> {
    if(x==='a' || x==='e' || x==='i' || x==='o' || x==='u' ) {
        x=''
    }
    return x;
}).join('')

console.log(result)

let array = [1,3,5,3,5,6,7,8,1]

let res = array.map((val,ind)=> {
    return val*ind
})

console.log(res)
let array = [1,3,5,3,5,[6,7],8,1]

const res =       array.reverse()   

console.log(res)

const text = "Hello Worldaeiou"
let count =0;
let res = text.split('').map((val)=>{
    if(val === "a" || val === "e" || val=== "i" || val=== "o"|| val==="u"){
        val =""
        count++;
    }
    return val
}).join('')
console.log(count)
console.log(res)

const express = require('express')
const app = express()



app.get('/',(req,res,next)=>{
console.log('Suiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
next()
})
app.use((req,res) => {
    console.log("Missle")
})

app.listen(3000,()=> {
    console.log('http://localhost:3000')
})



app.get('/',(req,res,next)=>{
    res.send("Hello middle ware")
    next()
})

app.use((req,res)=>{ 
    console.log('Hello gys Middle ware worked')
})

app.listen(3000,()=> {
    console.log("Server running on http://localhost:3000")
})

const fs = require('fs')

fs.readFile('inex.html','utf-8',(err,data)=>{
    if(err) {
        console.log(err.message)
         return 0 ;}
    console.log(data)
})

console.log(fs.readFileSync('inde.html','utf-8'))

let date = Date()

if(fs.existsSync(hellosss.txt)){
    console.log("exists")
}


const array = "Aadil"
const array = [13, 20, 30];

for(let val of array){
    console.log(val)
}

for(let val of array){
    console.log(val)
}
array.forEach((value) => {
    console.log(value);
});


console.log(array.map((val)=>val*1).filter((val)=>{ return val%2===0}).reduce((acc,curr)=>{ return acc+=curr}))

const os = require('os');

console.log(os.machine());  // Output: The hostname of your system

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("Server created")
    res.write("Hello WORLD")
    res.end()
})

server.listen(3000,()=> {
    console.log()
})

const obj = {
    "key1":100,
    "key2":300
}
var name = "Vishnu";  // Global variable

const person = {
  name: 'John',
  greet: () => console.log(this.name)  // 'this' refers to the global context
};

person.greet();  // Output: 'Vishnu'

const express = require('express')
const app = express()

app.use((req,res,next)=> {
  res.send("Hello world")
  next()
})

router.use((req,res,next)=> {
  res.render('ejs')
  next()
})

router.use('/ejs',router)

app.use((err,req,res,next)=> {
  if(err) console.log(err.message)
    else {
  res.render('ejs')
}
})

app.use(express.json())

const cors = require('CORS')
app.use(cors())

const myMiddleWare = async ((req,res,next)=> {
  const success =true
  if(success) {
    res.send("")
    next()
  }
})

const express  = require('express')
const app = express()

app.set('view engine','ejs')
app.set('views',"views")

app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=> {
    res.render('index')
})
app.post('/', (req, res) => {
  const val = req.body.name;
  console.log(val);

  // Send a response to the client after form submission
  res.send(You submitted: ${val});

});



app.listen(3000,()=> {
  console.log("Server running on http://localhost:3000")
})

const http = require('http')

const server = http.createServer((req,res)=> {
  res.write("Hellooooooooo")
  res.end()
})

server.listen(3000,()=> {
  console.log("Server running on http://localhost:3000")
})

const date = new Date()

console.log(date.getDay())

const os = require('os');

console.log('Platform:', os.platform());
console.log('CPU architecture:', os.arch());
console.log('Number of CPUs:', os.cpus().length);
console.log('Total Memory:', os.totalmem() / (1024 * 1024 * 1024), 'GB');
console.log('Free Memory:', os.freemem() / (1024 * 1024 * 1024), 'GB');
console.log('Uptime:', os.uptime() / 3600, 'hours');
console.log('Home Directory:', os.homedir());
console.log('Network Interfaces:', os.networkInterfaces());

const fs = require('fs')

fs.unlink('newFile.pwn',(err)=> {
    console.log("deleted successfuly")
})

const str = "hello"
let strings = ''
for(let i =0;i<str.length;i++) {
    if(i==str.length-1 || i==0) {
        strings+=str[i].toUpperCase()
    }else {
        strings+=str[i]
    }

}

console.log(strings)

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const userAgent = req.get('User-Agent'); // Access the 'User-Agent' from the request headers
    res.send(Your User-Agent is: ${userAgent});
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

const numbers = [1, 3, 6, 7];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: false
let obj = {};
console.log(Object.keys(obj).length === 0); // true (the object is empty)

let obj = {
    "key1":2134,
    "key2":1234,
    "key3":1314,
    "key4":1243,
    "key5":5739
}

let str = "malayalam"

const res = str.slice(0,-1) + str.slice(-1).toUpperCase()
console.log(res)
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];

console.info(users); // Logs the users in a table format
const products = [
    { name: "Laptop", price: 900 },
    { name: "Phone", price: 600 },
    { name: "Tablet", price: 300 },
  ];

  const res = products.reduce((acc,curr)=>acc+=curr.price,0)
console.log(res)



function variadic(...numbers) {
    return numbers.reduce((acc,curr)=>acc+=curr)
}

console.log(variadic(1,2,3,4,5,6,7,8,9,10))

const employeesA = ['Alice', 'Bob'];
const employeesB = ['Charlie', 'David'];

const newArray = [...employeesA,...employeesB]

const [a,b,...rest] = newArray

console.log(a+b+"  rest:  "+rest)

const users = [{ name: 'Alice' }, { name: 'Bob' }];
const car = { brand: "Toyota", model: "Corolla", year: 2020 };

for(let val of users) {
    
}


for(let key in car) {
    console.log(key+": "+car[key])
}


users.forEach(val => {
    console.log(val.name)    
});

const numbers = [1, 2, 3, 4, 5, 6, 7];

 console.log(numbers.splice(4,1))

let arr = [1, 2, 3];
let result = arr.flatMap(x => [x * 2])//.flat();
console.log(result); // [2, 4, 6]


var nameError = document.getElementById("name-valid");
var emailError = document.getElementById("email-valid");

function validateName(){
    var name = document.getElementById('name-section').value;

    if(name.length <= 4){
        nameError.innerHTML= "enter your name";
        return false;
    }
}

function validateEmail(){
    var email = document.getElementById('email-section').value;

    if(email.length <= 4){
        emailError.innerHTML= "enter your email";
    }
    
}

function outer(){
    var a=10;
    return function inner(){
        console.log(a);
    }
    // return inner;
}
outer()();

console.log(b);

var b  = function (){
    console.log("jdfds");
}

let name = prompt("Enter a name:");

console.log("Entered name is ", name);

let intInput = parseInt(prompt("Enter the int input"));
let floatInput = parseFloat(prompt("Enter the float input"));

let result = intInput + floatInput;
console.log("Result is " + result);

let p = parseInt(prompt("Enter Principal Amount"));
let r = parseFloat(prompt("Enter Interest Rate"));
let n = parseFloat(prompt("Enter number of years"));

let si = (p*r*n)/100;
console.log("Result is " + si);

let mark = parseFloat(prompt("Enter your mark"));

function checkMark(mark){
    if(mark > 50 && mark < 100){
        console.log("passed");
    }
    else {
        console.log("failed");
    }
}
checkMark(mark);

let mark = parseFloat(prompt("Enter Your Mark"));

if(mark >= 90 && mark <= 100){
    console.log("A Grade");
}
else if(mark >= 80 && mark <= 89 ){
    console.log("B Grade");
}
else if(mark >= 70 && mark <= 79){
    console.log("C Grade");
}
else if(mark >= 60 && mark <=69){
    console.log("D Grade");
}
else if(mark >=50 && mark <=59){
    console.log("E Grade");
}
else {
    console.log("Failed");
}

let dayNumber = parseInt(prompt("Enter a number to get the day of the week:"));

switch (dayNumber) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Entry");
    break;
}


let number = parseInt(prompt("Enter a number to display its multiplication table:"));

for (let i = 1; i <= 10; i++) {
  console.log(${number} x ${i} = ${number * i});
}

let limit = parseInt(prompt("Enter the limit"));
let sum=0;
for(let i =0;i<=limit;i++){
    if(i % 2 != 0){
        sum += i;
    }
}
console.log("Result is " + sum);

let size = 5;
let pattern = '';
for(let i=1;i<=size;i++){
    for(j=1;j<=i;j++){
        pattern += j + ' ';
    }
    pattern += '\n';
}
console.log(pattern);

function getArrayElements(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

let array1 = getArrayElements("Enter the 1st array elements (Seperate by comma)");
let array2 = getArrayElements("Enter 2nd array elements (comma seperated");

let temp = array1;
array1 = array2;
array2 = temp;

console.log(array1);
console.log(array2);

function getArrayElements(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

let array = getArrayElements("Enter array values");

function printEvenNumbers(arr) {
    let count =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            count+=1;
        }
    }
    return count;
}


function getArrayElements(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

let array = getArrayElements("Enter array elements");

console.log(sortArray(array));

function getArray(message){
    let input = prompt(message);
    return input.toLowerCase();
}

let originalArray = getArray("enter text");
let reversedArray = originalArray.split('').reverse().join('');

if(originalArray==reversedArray){
    console.log(originalArray + " is a Palindrome");
}else {
    console.log(originalArray + " is not a Palindrome");
}

function get2DArrayFromUser(message) {
    let input = prompt(message);
    let rows = input.split(';'); 
    let array = rows.map(row => row.split(',').map(Number));
    return array;
}

function add2DArrays(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        let row = [];
        for (let j = 0; j < array1[i].length; j++) {
            row.push(array1[i][j] + array2[i][j]);
        }
        result.push(row);
    }
    return result;
}

let array1 = get2DArrayFromUser("Enter the first 2D array (rows separated by ';' and values by ','):");
let array2 = get2DArrayFromUser("Enter the second 2D array (rows separated by ';' and values by ','):");

let sumArray = add2DArrays(array1, array2);

console.log("Sum of the two 2D arrays:");
console.log(sumArray);

function getArray(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

function displayArray(array){
    console.log(array);
}

function main (){
    array1 = getArray("Enter array elements");
    displayArray(array1);
}

main();

number = parseInt(prompt("enter a number"));
let isPrime = 1;
function checkPrime(value){
    for(let i = 2;i<=value/2;i++){
        if(value % i == 0){
            isPrime=0;
            break;
        }
    }
    if(isPrime==0){
        console.log("not Prime");
    }else {
        console.log("Prime");
    }
}

checkPrime(number);

class Calculator {
    addition(a, b) {
        return a + b;
    }

    subtraction(a, b) {
        return a - b;
    }

    multiplication(a, b) {
        return a * b;
    }

    division(a, b) {
        if (b === 0) {
            return "Division by zero is not allowed!";
        }
        return a / b;
    }
}

function main() {
    let calc = new Calculator();

    let choice = parseInt(prompt("Choose an operation: \n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"));

    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    let result;
    if (choice === 1) {
        result = calc.addition(num1, num2);
    } else if (choice === 2) {
        result = calc.subtraction(num1, num2);
    } else if (choice === 3) {
        result = calc.multiplication(num1, num2);
    } else if (choice === 4) {
        result = calc.division(num1, num2);
    } else {
        console.log("Invalid choice!");
        return;
    }

    console.log("The result is: " + result);
}


main();

let writtenMark = parseInt(prompt("Enter the Written test mark"));
let labMark = parseInt(prompt("Enter the lab exam mark"));
let assignmentMark = parseInt(prompt("Enter Assignments mark"));
let result;

function gradeCheck(written,lab,assignment){
    return result=(written*70)/100 + (lab*20)/100 + (assignment*10)/100 ;
}

let totalGrade = gradeCheck(writtenMark,labMark,assignmentMark);
console.log("Grade is " + totalGrade);

function calculateIncomeTax(income) {
    let tax;

    if (income <= 250000) {
        tax = 0;
    } else if (income <= 500000) {
        tax = (income * 5) / 100;
    } else if (income <= 1000000) {
        tax = (income * 20) / 100;
    } else {
        tax = (income * 30) / 100;
    }

    return tax;
}

function main() {
    let annualIncome = parseFloat(prompt("Enter your annual income:"));
    let taxAmount = calculateIncomeTax(annualIncome);
    console.log("The tax you need to pay is: ₹" + taxAmount.toFixed(2));
}

main();

let limit = 5;
let count=1;
let str='';

for(let i=1;i<5;i++){
    for(let j=1;j<=i;j++){
        str+=count++ +" ";
    }
    str+='\n';
}
console.log(str);

function getArray(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

function adjacentMultiply(array){
    let num=[];
    for(let i=0;i<array.length-1;i++){
        num.push(array[i]*array[i+1]);
    }
    return num;
}

let oldArray = getArray("enter array elements (comma separated)");

let newArray = adjacentMultiply(oldArray);
console.log(newArray);


function getArray(message) {
    let rows = prompt(Enter number of rows for ${message}:);
    let array = [];

    for (let i = 0; i < rows; i++) {
        let row = prompt(Enter row ${i + 1} values for ${message} (comma-separated):);
        array.push(row.split(',').map(Number));
    }

    return array;
}

function addArray(array1, array2) {
    let sumArray = [];

    for (let i = 0; i < array1.length; i++) {
        let rowSum = [];
        for (let j = 0; j < array1[i].length; j++) {
            rowSum.push(array1[i][j] + array2[i][j]);
        }
        sumArray.push(rowSum);
    }

    return sumArray;
}

function displayArray(array, message) {
    console.log(${message}:);
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].join(' '));
    }
}

function main() {
    let array1 = getArray("Array 1");
    let array2 = getArray("Array 2");

    let sumArray = addArray(array1, array2);

    displayArray(array1, "Array 1");
    displayArray(array2, "Array 2");
    displayArray(sumArray, "Sum of Array 1 and Array 2");
}

main();

class ArrayOperations {
    constructor() {
        this.array = [];
    }

    getArray(rows) {
        for (let i = 0; i < rows; i++) {
            let row = prompt(Enter values for row ${i + 1} (comma-separated):);
            this.array.push(row.split(',').map(Number));
        }
    }

    displayArray() {
        console.log("The 2D array is:");
        this.array.forEach(row => {
            console.log(row.join(' '));
        });
    }

    static main() {
        let operations = new ArrayOperations();

        let rows = parseInt(prompt("Enter the number of rows:"));

        operations.getArray(rows);
        operations.displayArray();
    }
}

ArrayOperations.main();

class Area {
    circle(radius) {
        return Math.PI * radius * radius;
    }

    square(side) {
        return side * side;
    }

    rectangle(length, width) {
        return length * width;
    }

    triangle(base, height) {
        return 0.5 * base * height;
    }
}

class MyClass extends Area {
    main() {
        let choice;
        do {
            choice = parseInt(prompt(Choose an option to calculate area:\n1. Circle\n2. Square\n3. Rectangle\n4. Triangle\n5. Exit));
            switch (choice) {
                case 1:
                    this.circle();
                    break;
                case 2:
                    this.square();
                    break;
                case 3:
                    this.rectangle();
                    break;
                case 4:
                    this.triangle();
                    break;
                case 5:
                    console.log("Exiting the program.");
                    break;
                default:
                    console.log("Invalid choice, please select again.");
            }
        } while (choice !== 5);
    }

    circle() {
        let radius = parseFloat(prompt("Enter the radius of the circle:"));
        let area = super.circle(radius);
        console.log(The area of the circle is: ${area.toFixed(2)});
    }

    square() {
        let side = parseFloat(prompt("Enter the side length of the square:"));
        let area = super.square(side);
        console.log(The area of the square is: ${area.toFixed(2)});
    }

    rectangle() {
        let length = parseFloat(prompt("Enter the length of the rectangle:"));
        let width = parseFloat(prompt("Enter the width of the rectangle:"));
        let area = super.rectangle(length, width);
        console.log(The area of the rectangle is: ${area.toFixed(2)});
    }

    triangle() {
        let base = parseFloat(prompt("Enter the base length of the triangle:"));
        let height = parseFloat(prompt("Enter the height of the triangle:"));
        let area = super.triangle(base, height);
        console.log(The area of the triangle is: ${area.toFixed(2)});
    }
}

let myObject = new MyClass();
myObject.main();


var library = [
    {
        title:'Bill Gates',
        author:'The Road',
        readingStatus:true
    },
    {
        title:'Sultan',
        author:'Tew',
        readingStatus:false
    },
    {
        title:'frogs',
        author:'John',
        readingStatus:true
    }
];

function displayReadingStatus(value){
    value.forEach( book  => {
        if(book.readingStatus){
            console.log(${book.title} is already readed.)
        }else {
            console.log(You need to read ${book.title})
        }
    })
}

displayReadingStatus(library);

let my_string = "HELLO";

try {
    let reversedString = my_string.split('').reverse().join('');
    console.log(Reversed string is : ${reversedString});
} catch (err) {
    console.log(Error : ${err.message});
} finally {
    console.log(Type of my_string is : ${typeof my_string});
}

let my_height = "70"; 
try {
    if (isNaN(my_height)) {
        throw new Error("notANumberError");
    }

    if (my_height > 100) {  
        throw new Error("HugeHeightError");
    }

    if (my_height < 30) {  
        throw new Error("TinyHeightError");
    }

    console.log(Your height is ${my_height} cm.);
} catch (err) {
    console.log(Error: ${err.message});
}

class Car {
    constructor(name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
    
}

let myCar = new Car('Toyota', 15000, 180);

console.log(myCar.name);    
console.log(myCar.mileage); 
console.log(myCar.max_speed);


let myArray = [1,2,3,4,5,1];

function myFilter(myArray,checkEven){
    console.log(checkEven);
    
}

function checkEven(Array){
    let sum=Array.reduce((acc,curr)=>{
        return acc += curr;
    },0)
    console.log(sum);

    return sum % 2 ===0;

}

myFilter(myArray,checkEven(myArray));

Get references to the checkbox and button elements
const checkbox = document.getElementById('myCheckbox');
const button = document.getElementById('toggleButton');

// Add click event listener to the button
button.addEventListener('click', () => {
    // Toggle the checked property of the checkbox
    checkbox.checked = !checkbox.checked;
});

let checkBox = document.getElementById("myCheckbox");
let button = document.getElementById("toggleButton");

button.addEventListener('click', () => checkBox.checked=!checkBox.checked);

button.addEventListener('contextmenu', (event) => {
    event.preventDefault();
})

"use strict";

let x = 3.14; // Works fine
y = 10; // Throws an error because 'y' is not declared

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // TO DO: Implement login functionality using Facebook API or a backend service
    console.log(Email: ${email}, Password: ${password});
});

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


const cart = ["Apple", "Orange", "Banana"];

let selection = prompt(Order something from this list ${cart}: );


createOrder(cart, selection)
    .then(itemPurchased => {
        return proceedToPayment(itemPurchased);
    })
    .then(({ item, price }) => {
        return showOrderSummary({ item, price });
    })
    .then((price) => {
        setTimeout(()=>{
            console.log("Payment successful");
        },5999)
    return price})
    .then(priceUpdating => {
        return updateWallet(priceUpdating);
    })
    .then(updatedBalance => {
        setTimeout(()=>{
            console.log(updatedBalance); 
        },10050)
    })
    .catch(err => {
        console.error(err.message);
    })

function createOrder(cart1, item) {
    return new Promise((resolve, reject) => {
        let found = false;
        cart1.forEach(cartItem => {
            if (cartItem === item) {
                console.log(You have Ordered the ${item});
                resolve(item);
                found = true;
            }
        });
        if (!found) {
            reject(new Error("Item not Found"));
        }
    });
}

function proceedToPayment(item) {
    return new Promise((resolve, reject) => {
        let price;
        if (item === "Apple") price = 100;
        else if (item === "Orange") price = 60;
        else if (item === "Banana") price = 30;
        else reject(new Error("Out of Stock"));
        console.log(You have to pay ${price}/kg for ${item}.);
        resolve({ item, price });
    });
}

function showOrderSummary({ item, price }) {
    console.log(For Completing this order..Do payment to this QR ( ${item} : ${price} ));
    return price;
}

function updateWallet(price) {
    const wallet = 3000;
    const updatedWallet = wallet - price;
    return new Promise((resolve, reject) => {
        if (updatedWallet >= 0) {
            resolve(-${price}\tYour Wallet Updated Balance: ${updatedWallet});
        } else {
            reject(new Error("Insufficient Balance in your Wallet."));
        }
    });
}

// const promise1 = Promise.resolve('First promise resolved');
// const promise2 = Promise.resolve('Second promise resolved');
// const promise3 = Promise.resolve('Third promise rejected');

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log('All promises resolved:', values); // This won't run
//   })
//   .catch((error) => {
//     console.error('Promise.all rejected:', error); // Logs: "Promise.all rejected: Third promise rejected"
//   });

// const promise1 = Promise.resolve('First promise resolved');
// const promise2 = Promise.resolve('Second promise resolved');
// const promise3 = Promise.reject('Third promise rejected');

// const runPromises = async () => {
//   try {
//     const values = await Promise.all([promise1, promise2, promise3]);
//     console.log('All promises resolved:', values); // This won't run
//   } catch (error) {
//     console.error('Promise.all rejected:', error); // Logs: "Promise.all rejected: Third promise rejected"
//   }
// };

runPromises();

function sortArray(arr){
    return arr.sort((a,b) => {
        return b-a;
    });
}
console.log(sortArray([3,2,3,4,5,6,2,4,5,3,1,9]));

function promiseFn(){
const pr = new Promise((resolve,reject) => {
    let a=true;
    if(a){
        setTimeout(() => {
            resolve("Promise Resolved");
        },1000);
    }else {
        reject("promise rejected");
    }
});
return pr;
}
async function handlePromise(){
    try {
        console.log("Wait for 1 sec")
        const val = await promiseFn();
        console.log("Dummy print")
        console.log(val);
    }
    catch(error) {
        console.log(error);
    }
}

handlePromise();

const pr1= Promise.resolve("Resolved");
const pr2 = Promise.reject("Rejected");
const pr3 = Promise.resolve("Resolved");

async function handling(){
    try {
        const pr = await Promise.allSettled([pr1,pr2,pr3]);
        console.log(pr);
    }
    catch (error){
        console.log(error);
    }finally{
        console.log("Always run.whether it is error or not");
    }
}
handling();

console.log(global);

const mhuy = "fdfa";


class user {
    

    constructor(){
        this.name="Hi hello";
    }
    getName(){
        return this.name;
    }
}



const newObj = new user();

console.log(newObj.getName());

const variable = newObj.getName();

console.log(variable());

let userName;
let Name = "Guest";

let displayName = userName ?? Name;
console.log(displayName); // Output: "Guest"

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value)

const text = "MALAYALAM";
let revText = "";

for(let i = text.length-1 ; i>=0 ; i--) {
    revText += text[i]
}
console.log(revText)
if (revText == text ) {
    console.log("Palindrome")
} else {
    console.log("Not palindrome");
    
}

let array = [4,6,3,3,7,4,7,8,6,4]

for(let i =0;i<array.length;i++){
    let isPrime = 1;
    for(let j=2;j<=array[i]/2;j++){
        if(array[i]%j===0){
            isPrime = 0;
            break;
        } else {
            isPrime = 1;
        }
    }
    if(isPrime){
        console.log(array[i])
    }
}


const promises = new Promise((res,rej)=>{
    let success = true;
    (success) ? res("Success") : rej("Failed"); 
})

async function name (){
    try {
        const result = await promises
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

name()
const obj = { 
    "a": 2,
    "b": { "x": 3, "y": 4 },
    "c": [1, 2], 
    "d": 5 };

function sumOf(obj){
    let sum = 0;
    for(let key in obj){
        if(typeof obj[key]==="number") {
            sum+=obj[key]*obj[key]
        } else if(typeof obj[key]==="object") {
            sum+=sumOf(obj[key])
        }
    }
    return sum;
}

const sums = sumOf(obj);

console.log(sums)


let array = [1,3,5,3,5,6,7,8,1]
let flag = 0
for(let i=0;i<array.length;i++) {
    flag =0
    for(let j=i+1;j<array.length;j++) {
        if(array[i]===array[j]) {
            flag = 1
            break;
        }
    }
    if(flag===0)console.log(array[i]);
}

let array = [1,3,5,3,5,6,7,8,1]

let res = array.filter((val)=> val%2===0 ).map((val)=>val*2).reduce((acc,curr)=> acc+=curr)
console.log(res)

let array = [1,3,5,3,5,6,7,8,1]
let scndLargest =0;
let largest =0
for(let i =0;i<array.length;i++) {
        if(array[i]>largest) {
            scndLargest = largest
            largest = array[i]
        } else if (array[i]>scndLargest && array[i]<largest){

            scndLargest = array[i]
        }
}

console.log("Scnd largest: "+scndLargest+" Largest: "+largest)


let array = [1,3,5,3,5,6,7,8,1]

const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Tom', age: 40 }
  ];
  
let res = people.map((value)=> value.age).reduce((acc,curr)=>acc+=curr )

console.log(res)

const text = "How are You";

let res = text.split(' ').reverse().join(' ')

console.log(res)

let array = [1,3,5,0,5,0,7,0,1]

const zero = array.filter(val => val ===0)
const nonZero = array.filter(val => val!==0)

// const res = nonZero.concat(zero)
const res = [...nonZero,...zero]
console.log(res)

const text = "Hello World"

let result = text.split('').map((x)=> {
    if(x==='a' || x==='e' || x==='i' || x==='o' || x==='u' ) {
        x=''
    }
    return x;
}).join('')

console.log(result)

let array = [1,3,5,3,5,6,7,8,1]

let res = array.map((val,ind)=> {
    return val*ind
})

console.log(res)
let array = [1,3,5,3,5,[6,7],8,1]

const res =       array.reverse()   

console.log(res)

const text = "Hello Worldaeiou"
let count =0;
let res = text.split('').map((val)=>{
    if(val === "a" || val === "e" || val=== "i" || val=== "o"|| val==="u"){
        val =""
        count++;
    }
    return val
}).join('')
console.log(count)
console.log(res)

const express = require('express')
const app = express()



app.get('/',(req,res,next)=>{
console.log('Suiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
next()
})
app.use((req,res) => {
    console.log("Missle")
})

app.listen(3000,()=> {
    console.log('http://localhost:3000')
})



app.get('/',(req,res,next)=>{
    res.send("Hello middle ware")
    next()
})

app.use((req,res)=>{ 
    console.log('Hello gys Middle ware worked')
})

app.listen(3000,()=> {
    console.log("Server running on http://localhost:3000")
})

const fs = require('fs')

fs.readFile('inex.html','utf-8',(err,data)=>{
    if(err) {
        console.log(err.message)
         return 0 ;}
    console.log(data)
})

console.log(fs.readFileSync('inde.html','utf-8'))

let date = Date()

if(fs.existsSync(hellosss.txt)){
    console.log("exists")
}


const array = "Aadil"
const array = [13, 20, 30];

for(let val of array){
    console.log(val)
}

for(let val of array){
    console.log(val)
}
array.forEach((value) => {
    console.log(value);
});


console.log(array.map((val)=>val*1).filter((val)=>{ return val%2===0}).reduce((acc,curr)=>{ return acc+=curr}))

const os = require('os');

console.log(os.machine());  // Output: The hostname of your system

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("Server created")
    res.write("Hello WORLD")
    res.end()
})

server.listen(3000,()=> {
    console.log()
})

const obj = {
    "key1":100,
    "key2":300
}
var name = "Vishnu";  // Global variable

const person = {
  name: 'John',
  greet: () => console.log(this.name)  // 'this' refers to the global context
};

person.greet();  // Output: 'Vishnu'

const express = require('express')
const app = express()

app.use((req,res,next)=> {
  res.send("Hello world")
  next()
})

router.use((req,res,next)=> {
  res.render('ejs')
  next()
})

router.use('/ejs',router)

app.use((err,req,res,next)=> {
  if(err) console.log(err.message)
    else {
  res.render('ejs')
}
})

app.use(express.json())

const cors = require('CORS')
app.use(cors())

const myMiddleWare = async ((req,res,next)=> {
  const success =true
  if(success) {
    res.send("")
    next()
  }
})

const express  = require('express')
const app = express()

app.set('view engine','ejs')
app.set('views',"views")

app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=> {
    res.render('index')
})
app.post('/', (req, res) => {
  const val = req.body.name;
  console.log(val);

  // Send a response to the client after form submission
  res.send(You submitted: ${val});

});



app.listen(3000,()=> {
  console.log("Server running on http://localhost:3000")
})

const http = require('http')

const server = http.createServer((req,res)=> {
  res.write("Hellooooooooo")
  res.end()
})

server.listen(3000,()=> {
  console.log("Server running on http://localhost:3000")
})

const date = new Date()

console.log(date.getDay())

const os = require('os');

console.log('Platform:', os.platform());
console.log('CPU architecture:', os.arch());
console.log('Number of CPUs:', os.cpus().length);
console.log('Total Memory:', os.totalmem() / (1024 * 1024 * 1024), 'GB');
console.log('Free Memory:', os.freemem() / (1024 * 1024 * 1024), 'GB');
console.log('Uptime:', os.uptime() / 3600, 'hours');
console.log('Home Directory:', os.homedir());
console.log('Network Interfaces:', os.networkInterfaces());

const fs = require('fs')

fs.unlink('newFile.pwn',(err)=> {
    console.log("deleted successfuly")
})

const str = "hello"
let strings = ''
for(let i =0;i<str.length;i++) {
    if(i==str.length-1 || i==0) {
        strings+=str[i].toUpperCase()
    }else {
        strings+=str[i]
    }

}

console.log(strings)

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const userAgent = req.get('User-Agent'); // Access the 'User-Agent' from the request headers
    res.send(Your User-Agent is: ${userAgent});
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

const numbers = [1, 3, 6, 7];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: false
let obj = {};
console.log(Object.keys(obj).length === 0); // true (the object is empty)

let obj = {
    "key1":2134,
    "key2":1234,
    "key3":1314,
    "key4":1243,
    "key5":5739
}

let str = "malayalam"

const res = str.slice(0,-1) + str.slice(-1).toUpperCase()
console.log(res)
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];

console.info(users); // Logs the users in a table format
const products = [
    { name: "Laptop", price: 900 },
    { name: "Phone", price: 600 },
    { name: "Tablet", price: 300 },
  ];

  const res = products.reduce((acc,curr)=>acc+=curr.price,0)
console.log(res)



function variadic(...numbers) {
    return numbers.reduce((acc,curr)=>acc+=curr)
}

console.log(variadic(1,2,3,4,5,6,7,8,9,10))

const employeesA = ['Alice', 'Bob'];
const employeesB = ['Charlie', 'David'];

const newArray = [...employeesA,...employeesB]

const [a,b,...rest] = newArray

console.log(a+b+"  rest:  "+rest)

const users = [{ name: 'Alice' }, { name: 'Bob' }];
const car = { brand: "Toyota", model: "Corolla", year: 2020 };

for(let val of users) {
    
}


for(let key in car) {
    console.log(key+": "+car[key])
}


users.forEach(val => {
    console.log(val.name)    
});

const numbers = [1, 2, 3, 4, 5, 6, 7];

 console.log(numbers.splice(4,1))

let arr = [1, 2, 3];
let result = arr.flatMap(x => [x * 2])//.flat();
console.log(result); // [2, 4, 6]


var nameError = document.getElementById("name-valid");
var emailError = document.getElementById("email-valid");

function validateName(){
    var name = document.getElementById('name-section').value;

    if(name.length <= 4){
        nameError.innerHTML= "enter your name";
        return false;
    }
}

function validateEmail(){
    var email = document.getElementById('email-section').value;

    if(email.length <= 4){
        emailError.innerHTML= "enter your email";
    }
    
}

function outer(){
    var a=10;
    return function inner(){
        console.log(a);
    }
    // return inner;
}
outer()();

console.log(b);

var b  = function (){
    console.log("jdfds");
}

let name = prompt("Enter a name:");

console.log("Entered name is ", name);

let intInput = parseInt(prompt("Enter the int input"));
let floatInput = parseFloat(prompt("Enter the float input"));

let result = intInput + floatInput;
console.log("Result is " + result);

let p = parseInt(prompt("Enter Principal Amount"));
let r = parseFloat(prompt("Enter Interest Rate"));
let n = parseFloat(prompt("Enter number of years"));

let si = (p*r*n)/100;
console.log("Result is " + si);

let mark = parseFloat(prompt("Enter your mark"));

function checkMark(mark){
    if(mark > 50 && mark < 100){
        console.log("passed");
    }
    else {
        console.log("failed");
    }
}
checkMark(mark);

let mark = parseFloat(prompt("Enter Your Mark"));

if(mark >= 90 && mark <= 100){
    console.log("A Grade");
}
else if(mark >= 80 && mark <= 89 ){
    console.log("B Grade");
}
else if(mark >= 70 && mark <= 79){
    console.log("C Grade");
}
else if(mark >= 60 && mark <=69){
    console.log("D Grade");
}
else if(mark >=50 && mark <=59){
    console.log("E Grade");
}
else {
    console.log("Failed");
}

let dayNumber = parseInt(prompt("Enter a number to get the day of the week:"));

switch (dayNumber) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Entry");
    break;
}


let number = parseInt(prompt("Enter a number to display its multiplication table:"));

for (let i = 1; i <= 10; i++) {
  console.log(${number} x ${i} = ${number * i});
}

let limit = parseInt(prompt("Enter the limit"));
let sum=0;
for(let i =0;i<=limit;i++){
    if(i % 2 != 0){
        sum += i;
    }
}
console.log("Result is " + sum);

let size = 5;
let pattern = '';
for(let i=1;i<=size;i++){
    for(j=1;j<=i;j++){
        pattern += j + ' ';
    }
    pattern += '\n';
}
console.log(pattern);

function getArrayElements(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

let array1 = getArrayElements("Enter the 1st array elements (Seperate by comma)");
let array2 = getArrayElements("Enter 2nd array elements (comma seperated");

let temp = array1;
array1 = array2;
array2 = temp;

console.log(array1);
console.log(array2);

function getArrayElements(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

let array = getArrayElements("Enter array values");

function printEvenNumbers(arr) {
    let count =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            count+=1;
        }
    }
    return count;
}


function getArrayElements(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

let array = getArrayElements("Enter array elements");

console.log(sortArray(array));

function getArray(message){
    let input = prompt(message);
    return input.toLowerCase();
}

let originalArray = getArray("enter text");
let reversedArray = originalArray.split('').reverse().join('');

if(originalArray==reversedArray){
    console.log(originalArray + " is a Palindrome");
}else {
    console.log(originalArray + " is not a Palindrome");
}

function get2DArrayFromUser(message) {
    let input = prompt(message);
    let rows = input.split(';'); 
    let array = rows.map(row => row.split(',').map(Number));
    return array;
}

function add2DArrays(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        let row = [];
        for (let j = 0; j < array1[i].length; j++) {
            row.push(array1[i][j] + array2[i][j]);
        }
        result.push(row);
    }
    return result;
}

let array1 = get2DArrayFromUser("Enter the first 2D array (rows separated by ';' and values by ','):");
let array2 = get2DArrayFromUser("Enter the second 2D array (rows separated by ';' and values by ','):");

let sumArray = add2DArrays(array1, array2);

console.log("Sum of the two 2D arrays:");
console.log(sumArray);

function getArray(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

function displayArray(array){
    console.log(array);
}

function main (){
    array1 = getArray("Enter array elements");
    displayArray(array1);
}

main();

number = parseInt(prompt("enter a number"));
let isPrime = 1;
function checkPrime(value){
    for(let i = 2;i<=value/2;i++){
        if(value % i == 0){
            isPrime=0;
            break;
        }
    }
    if(isPrime==0){
        console.log("not Prime");
    }else {
        console.log("Prime");
    }
}

checkPrime(number);

class Calculator {
    addition(a, b) {
        return a + b;
    }

    subtraction(a, b) {
        return a - b;
    }

    multiplication(a, b) {
        return a * b;
    }

    division(a, b) {
        if (b === 0) {
            return "Division by zero is not allowed!";
        }
        return a / b;
    }
}

function main() {
    let calc = new Calculator();

    let choice = parseInt(prompt("Choose an operation: \n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"));

    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    let result;
    if (choice === 1) {
        result = calc.addition(num1, num2);
    } else if (choice === 2) {
        result = calc.subtraction(num1, num2);
    } else if (choice === 3) {
        result = calc.multiplication(num1, num2);
    } else if (choice === 4) {
        result = calc.division(num1, num2);
    } else {
        console.log("Invalid choice!");
        return;
    }

    console.log("The result is: " + result);
}


main();

let writtenMark = parseInt(prompt("Enter the Written test mark"));
let labMark = parseInt(prompt("Enter the lab exam mark"));
let assignmentMark = parseInt(prompt("Enter Assignments mark"));
let result;

function gradeCheck(written,lab,assignment){
    return result=(written*70)/100 + (lab*20)/100 + (assignment*10)/100 ;
}

let totalGrade = gradeCheck(writtenMark,labMark,assignmentMark);
console.log("Grade is " + totalGrade);

function calculateIncomeTax(income) {
    let tax;

    if (income <= 250000) {
        tax = 0;
    } else if (income <= 500000) {
        tax = (income * 5) / 100;
    } else if (income <= 1000000) {
        tax = (income * 20) / 100;
    } else {
        tax = (income * 30) / 100;
    }

    return tax;
}

function main() {
    let annualIncome = parseFloat(prompt("Enter your annual income:"));
    let taxAmount = calculateIncomeTax(annualIncome);
    console.log("The tax you need to pay is: ₹" + taxAmount.toFixed(2));
}

main();

let limit = 5;
let count=1;
let str='';

for(let i=1;i<5;i++){
    for(let j=1;j<=i;j++){
        str+=count++ +" ";
    }
    str+='\n';
}
console.log(str);

function getArray(message){
    let input = prompt(message);
    return input.split(',').map(Number);
}

function adjacentMultiply(array){
    let num=[];
    for(let i=0;i<array.length-1;i++){
        num.push(array[i]*array[i+1]);
    }
    return num;
}

let oldArray = getArray("enter array elements (comma separated)");

let newArray = adjacentMultiply(oldArray);
console.log(newArray);


function getArray(message) {
    let rows = prompt(Enter number of rows for ${message}:);
    let array = [];

    for (let i = 0; i < rows; i++) {
        let row = prompt(Enter row ${i + 1} values for ${message} (comma-separated):);
        array.push(row.split(',').map(Number));
    }

    return array;
}

function addArray(array1, array2) {
    let sumArray = [];

    for (let i = 0; i < array1.length; i++) {
        let rowSum = [];
        for (let j = 0; j < array1[i].length; j++) {
            rowSum.push(array1[i][j] + array2[i][j]);
        }
        sumArray.push(rowSum);
    }

    return sumArray;
}

function displayArray(array, message) {
    console.log(${message}:);
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].join(' '));
    }
}

function main() {
    let array1 = getArray("Array 1");
    let array2 = getArray("Array 2");

    let sumArray = addArray(array1, array2);

    displayArray(array1, "Array 1");
    displayArray(array2, "Array 2");
    displayArray(sumArray, "Sum of Array 1 and Array 2");
}

main();

class ArrayOperations {
    constructor() {
        this.array = [];
    }

    getArray(rows) {
        for (let i = 0; i < rows; i++) {
            let row = prompt(Enter values for row ${i + 1} (comma-separated):);
            this.array.push(row.split(',').map(Number));
        }
    }

    displayArray() {
        console.log("The 2D array is:");
        this.array.forEach(row => {
            console.log(row.join(' '));
        });
    }

    static main() {
        let operations = new ArrayOperations();

        let rows = parseInt(prompt("Enter the number of rows:"));

        operations.getArray(rows);
        operations.displayArray();
    }
}

ArrayOperations.main();

class Area {
    circle(radius) {
        return Math.PI * radius * radius;
    }

    square(side) {
        return side * side;
    }

    rectangle(length, width) {
        return length * width;
    }

    triangle(base, height) {
        return 0.5 * base * height;
    }
}

class MyClass extends Area {
    main() {
        let choice;
        do {
            choice = parseInt(prompt(Choose an option to calculate area:\n1. Circle\n2. Square\n3. Rectangle\n4. Triangle\n5. Exit));
            switch (choice) {
                case 1:
                    this.circle();
                    break;
                case 2:
                    this.square();
                    break;
                case 3:
                    this.rectangle();
                    break;
                case 4:
                    this.triangle();
                    break;
                case 5:
                    console.log("Exiting the program.");
                    break;
                default:
                    console.log("Invalid choice, please select again.");
            }
        } while (choice !== 5);
    }

    circle() {
        let radius = parseFloat(prompt("Enter the radius of the circle:"));
        let area = super.circle(radius);
        console.log(The area of the circle is: ${area.toFixed(2)});
    }

    square() {
        let side = parseFloat(prompt("Enter the side length of the square:"));
        let area = super.square(side);
        console.log(The area of the square is: ${area.toFixed(2)});
    }

    rectangle() {
        let length = parseFloat(prompt("Enter the length of the rectangle:"));
        let width = parseFloat(prompt("Enter the width of the rectangle:"));
        let area = super.rectangle(length, width);
        console.log(The area of the rectangle is: ${area.toFixed(2)});
    }

    triangle() {
        let base = parseFloat(prompt("Enter the base length of the triangle:"));
        let height = parseFloat(prompt("Enter the height of the triangle:"));
        let area = super.triangle(base, height);
        console.log(The area of the triangle is: ${area.toFixed(2)});
    }
}

let myObject = new MyClass();
myObject.main();


var library = [
    {
        title:'Bill Gates',
        author:'The Road',
        readingStatus:true
    },
    {
        title:'Sultan',
        author:'Tew',
        readingStatus:false
    },
    {
        title:'frogs',
        author:'John',
        readingStatus:true
    }
];

function displayReadingStatus(value){
    value.forEach( book  => {
        if(book.readingStatus){
            console.log(${book.title} is already readed.)
        }else {
            console.log(You need to read ${book.title})
        }
    })
}

displayReadingStatus(library);

let my_string = "HELLO";

try {
    let reversedString = my_string.split('').reverse().join('');
    console.log(Reversed string is : ${reversedString});
} catch (err) {
    console.log(Error : ${err.message});
} finally {
    console.log(Type of my_string is : ${typeof my_string});
}

let my_height = "70"; 
try {
    if (isNaN(my_height)) {
        throw new Error("notANumberError");
    }

    if (my_height > 100) {  
        throw new Error("HugeHeightError");
    }

    if (my_height < 30) {  
        throw new Error("TinyHeightError");
    }

    console.log(Your height is ${my_height} cm.);
} catch (err) {
    console.log(Error: ${err.message});
}

class Car {
    constructor(name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
    
}

let myCar = new Car('Toyota', 15000, 180);

console.log(myCar.name);    
console.log(myCar.mileage); 
console.log(myCar.max_speed);


let myArray = [1,2,3,4,5,1];

function myFilter(myArray,checkEven){
    console.log(checkEven);
    
}

function checkEven(Array){
    let sum=Array.reduce((acc,curr)=>{
        return acc += curr;
    },0)
    console.log(sum);

    return sum % 2 ===0;

}

myFilter(myArray,checkEven(myArray));

Get references to the checkbox and button elements
const checkbox = document.getElementById('myCheckbox');
const button = document.getElementById('toggleButton');

// Add click event listener to the button
button.addEventListener('click', () => {
    // Toggle the checked property of the checkbox
    checkbox.checked = !checkbox.checked;
});

let checkBox = document.getElementById("myCheckbox");
let button = document.getElementById("toggleButton");

button.addEventListener('click', () => checkBox.checked=!checkBox.checked);

button.addEventListener('contextmenu', (event) => {
    event.preventDefault();
})

"use strict";

let x = 3.14; // Works fine
y = 10; // Throws an error because 'y' is not declared

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // TO DO: Implement login functionality using Facebook API or a backend service
    console.log(Email: ${email}, Password: ${password});
});

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


const cart = ["Apple", "Orange", "Banana"];

let selection = prompt(Order something from this list ${cart}: );


createOrder(cart, selection)
    .then(itemPurchased => {
        return proceedToPayment(itemPurchased);
    })
    .then(({ item, price }) => {
        return showOrderSummary({ item, price });
    })
    .then((price) => {
        setTimeout(()=>{
            console.log("Payment successful");
        },5999)
    return price})
    .then(priceUpdating => {
        return updateWallet(priceUpdating);
    })
    .then(updatedBalance => {
        setTimeout(()=>{
            console.log(updatedBalance); 
        },10050)
    })
    .catch(err => {
        console.error(err.message);
    })

function createOrder(cart1, item) {
    return new Promise((resolve, reject) => {
        let found = false;
        cart1.forEach(cartItem => {
            if (cartItem === item) {
                console.log(You have Ordered the ${item});
                resolve(item);
                found = true;
            }
        });
        if (!found) {
            reject(new Error("Item not Found"));
        }
    });
}

function proceedToPayment(item) {
    return new Promise((resolve, reject) => {
        let price;
        if (item === "Apple") price = 100;
        else if (item === "Orange") price = 60;
        else if (item === "Banana") price = 30;
        else reject(new Error("Out of Stock"));
        console.log(You have to pay ${price}/kg for ${item}.);
        resolve({ item, price });
    });
}

function showOrderSummary({ item, price }) {
    console.log(For Completing this order..Do payment to this QR ( ${item} : ${price} ));
    return price;
}

function updateWallet(price) {
    const wallet = 3000;
    const updatedWallet = wallet - price;
    return new Promise((resolve, reject) => {
        if (updatedWallet >= 0) {
            resolve(-${price}\tYour Wallet Updated Balance: ${updatedWallet});
        } else {
            reject(new Error("Insufficient Balance in your Wallet."));
        }
    });
}

// const promise1 = Promise.resolve('First promise resolved');
// const promise2 = Promise.resolve('Second promise resolved');
// const promise3 = Promise.resolve('Third promise rejected');

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log('All promises resolved:', values); // This won't run
//   })
//   .catch((error) => {
//     console.error('Promise.all rejected:', error); // Logs: "Promise.all rejected: Third promise rejected"
//   });

// const promise1 = Promise.resolve('First promise resolved');
// const promise2 = Promise.resolve('Second promise resolved');
// const promise3 = Promise.reject('Third promise rejected');

// const runPromises = async () => {
//   try {
//     const values = await Promise.all([promise1, promise2, promise3]);
//     console.log('All promises resolved:', values); // This won't run
//   } catch (error) {
//     console.error('Promise.all rejected:', error); // Logs: "Promise.all rejected: Third promise rejected"
//   }
// };

runPromises();

function sortArray(arr){
    return arr.sort((a,b) => {
        return b-a;
    });
}
console.log(sortArray([3,2,3,4,5,6,2,4,5,3,1,9]));

function promiseFn(){
const pr = new Promise((resolve,reject) => {
    let a=true;
    if(a){
        setTimeout(() => {
            resolve("Promise Resolved");
        },1000);
    }else {
        reject("promise rejected");
    }
});
return pr;
}
async function handlePromise(){
    try {
        console.log("Wait for 1 sec")
        const val = await promiseFn();
        console.log("Dummy print")
        console.log(val);
    }
    catch(error) {
        console.log(error);
    }
}

handlePromise();

const pr1= Promise.resolve("Resolved");
const pr2 = Promise.reject("Rejected");
const pr3 = Promise.resolve("Resolved");

async function handling(){
    try {
        const pr = await Promise.allSettled([pr1,pr2,pr3]);
        console.log(pr);
    }
    catch (error){
        console.log(error);
    }finally{
        console.log("Always run.whether it is error or not");
    }
}
handling();

console.log(global);

const mhuy = "fdfa";


class user {
    

    constructor(){
        this.name="Hi hello";
    }
    getName(){
        return this.name;
    }
}



const newObj = new user();

console.log(newObj.getName());

const variable = newObj.getName();

console.log(variable());

let userName;
let Name = "Guest";

let displayName = userName ?? Name;
console.log(displayName); // Output: "Guest"

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value)

const text = "MALAYALAM";
let revText = "";

for(let i = text.length-1 ; i>=0 ; i--) {
    revText += text[i]
}
console.log(revText)
if (revText == text ) {
    console.log("Palindrome")
} else {
    console.log("Not palindrome");
    
}

let array = [4,6,3,3,7,4,7,8,6,4]

for(let i =0;i<array.length;i++){
    let isPrime = 1;
    for(let j=2;j<=array[i]/2;j++){
        if(array[i]%j===0){
            isPrime = 0;
            break;
        } else {
            isPrime = 1;
        }
    }
    if(isPrime){
        console.log(array[i])
    }
}


const promises = new Promise((res,rej)=>{
    let success = true;
    (success) ? res("Success") : rej("Failed"); 
})

async function name (){
    try {
        const result = await promises
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

name()
const obj = { 
    "a": 2,
    "b": { "x": 3, "y": 4 },
    "c": [1, 2], 
    "d": 5 };

function sumOf(obj){
    let sum = 0;
    for(let key in obj){
        if(typeof obj[key]==="number") {
            sum+=obj[key]*obj[key]
        } else if(typeof obj[key]==="object") {
            sum+=sumOf(obj[key])
        }
    }
    return sum;
}

const sums = sumOf(obj);

console.log(sums)


let array = [1,3,5,3,5,6,7,8,1]
let flag = 0
for(let i=0;i<array.length;i++) {
    flag =0
    for(let j=i+1;j<array.length;j++) {
        if(array[i]===array[j]) {
            flag = 1
            break;
        }
    }
    if(flag===0)console.log(array[i]);
}

let array = [1,3,5,3,5,6,7,8,1]

let res = array.filter((val)=> val%2===0 ).map((val)=>val*2).reduce((acc,curr)=> acc+=curr)
console.log(res)

let array = [1,3,5,3,5,6,7,8,1]
let scndLargest =0;
let largest =0
for(let i =0;i<array.length;i++) {
        if(array[i]>largest) {
            scndLargest = largest
            largest = array[i]
        } else if (array[i]>scndLargest && array[i]<largest){

            scndLargest = array[i]
        }
}

console.log("Scnd largest: "+scndLargest+" Largest: "+largest)


let array = [1,3,5,3,5,6,7,8,1]

const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Tom', age: 40 }
  ];
  
let res = people.map((value)=> value.age).reduce((acc,curr)=>acc+=curr )

console.log(res)

const text = "How are You";

let res = text.split(' ').reverse().join(' ')

console.log(res)

let array = [1,3,5,0,5,0,7,0,1]

const zero = array.filter(val => val ===0)
const nonZero = array.filter(val => val!==0)

// const res = nonZero.concat(zero)
const res = [...nonZero,...zero]
console.log(res)

const text = "Hello World"

let result = text.split('').map((x)=> {
    if(x==='a' || x==='e' || x==='i' || x==='o' || x==='u' ) {
        x=''
    }
    return x;
}).join('')

console.log(result)

let array = [1,3,5,3,5,6,7,8,1]

let res = array.map((val,ind)=> {
    return val*ind
})

console.log(res)
let array = [1,3,5,3,5,[6,7],8,1]

const res =       array.reverse()   

console.log(res)

const text = "Hello Worldaeiou"
let count =0;
let res = text.split('').map((val)=>{
    if(val === "a" || val === "e" || val=== "i" || val=== "o"|| val==="u"){
        val =""
        count++;
    }
    return val
}).join('')
console.log(count)
console.log(res)

const express = require('express')
const app = express()



app.get('/',(req,res,next)=>{
console.log('Suiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
next()
})
app.use((req,res) => {
    console.log("Missle")
})

app.listen(3000,()=> {
    console.log('http://localhost:3000')
})



app.get('/',(req,res,next)=>{
    res.send("Hello middle ware")
    next()
})

app.use((req,res)=>{ 
    console.log('Hello gys Middle ware worked')
})

app.listen(3000,()=> {
    console.log("Server running on http://localhost:3000")
})

const fs = require('fs')

fs.readFile('inex.html','utf-8',(err,data)=>{
    if(err) {
        console.log(err.message)
         return 0 ;}
    console.log(data)
})

console.log(fs.readFileSync('inde.html','utf-8'))

let date = Date()

if(fs.existsSync(hellosss.txt)){
    console.log("exists")
}


const array = "Aadil"
const array = [13, 20, 30];

for(let val of array){
    console.log(val)
}

for(let val of array){
    console.log(val)
}
array.forEach((value) => {
    console.log(value);
});


console.log(array.map((val)=>val*1).filter((val)=>{ return val%2===0}).reduce((acc,curr)=>{ return acc+=curr}))

const os = require('os');

console.log(os.machine());  // Output: The hostname of your system

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("Server created")
    res.write("Hello WORLD")
    res.end()
})

server.listen(3000,()=> {
    console.log()
})

const obj = {
    "key1":100,
    "key2":300
}
var name = "Vishnu";  // Global variable

const person = {
  name: 'John',
  greet: () => console.log(this.name)  // 'this' refers to the global context
};

person.greet();  // Output: 'Vishnu'

const express = require('express')
const app = express()

app.use((req,res,next)=> {
  res.send("Hello world")
  next()
})

router.use((req,res,next)=> {
  res.render('ejs')
  next()
})

router.use('/ejs',router)

app.use((err,req,res,next)=> {
  if(err) console.log(err.message)
    else {
  res.render('ejs')
}
})

app.use(express.json())

const cors = require('CORS')
app.use(cors())

const myMiddleWare = async ((req,res,next)=> {
  const success =true
  if(success) {
    res.send("")
    next()
  }
})

const express  = require('express')
const app = express()

app.set('view engine','ejs')
app.set('views',"views")

app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=> {
    res.render('index')
})
app.post('/', (req, res) => {
  const val = req.body.name;
  console.log(val);

  // Send a response to the client after form submission
  res.send(You submitted: ${val});

});



app.listen(3000,()=> {
  console.log("Server running on http://localhost:3000")
})

const http = require('http')

const server = http.createServer((req,res)=> {
  res.write("Hellooooooooo")
  res.end()
})

server.listen(3000,()=> {
  console.log("Server running on http://localhost:3000")
})

const date = new Date()

console.log(date.getDay())

const os = require('os');

console.log('Platform:', os.platform());
console.log('CPU architecture:', os.arch());
console.log('Number of CPUs:', os.cpus().length);
console.log('Total Memory:', os.totalmem() / (1024 * 1024 * 1024), 'GB');
console.log('Free Memory:', os.freemem() / (1024 * 1024 * 1024), 'GB');
console.log('Uptime:', os.uptime() / 3600, 'hours');
console.log('Home Directory:', os.homedir());
console.log('Network Interfaces:', os.networkInterfaces());

const fs = require('fs')

fs.unlink('newFile.pwn',(err)=> {
    console.log("deleted successfuly")
})

const str = "hello"
let strings = ''
for(let i =0;i<str.length;i++) {
    if(i==str.length-1 || i==0) {
        strings+=str[i].toUpperCase()
    }else {
        strings+=str[i]
    }

}

console.log(strings)

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const userAgent = req.get('User-Agent'); // Access the 'User-Agent' from the request headers
    res.send(Your User-Agent is: ${userAgent});
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

const numbers = [1, 3, 6, 7];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: false
let obj = {};
console.log(Object.keys(obj).length === 0); // true (the object is empty)

let obj = {
    "key1":2134,
    "key2":1234,
    "key3":1314,
    "key4":1243,
    "key5":5739
}

let str = "malayalam"

const res = str.slice(0,-1) + str.slice(-1).toUpperCase()
console.log(res)
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];

console.info(users); // Logs the users in a table format
const products = [
    { name: "Laptop", price: 900 },
    { name: "Phone", price: 600 },
    { name: "Tablet", price: 300 },
  ];

  const res = products.reduce((acc,curr)=>acc+=curr.price,0)
console.log(res)



function variadic(...numbers) {
    return numbers.reduce((acc,curr)=>acc+=curr)
}

console.log(variadic(1,2,3,4,5,6,7,8,9,10))

const employeesA = ['Alice', 'Bob'];
const employeesB = ['Charlie', 'David'];

const newArray = [...employeesA,...employeesB]

const [a,b,...rest] = newArray

console.log(a+b+"  rest:  "+rest)

const users = [{ name: 'Alice' }, { name: 'Bob' }];
const car = { brand: "Toyota", model: "Corolla", year: 2020 };

for(let val of users) {
    
}


for(let key in car) {
    console.log(key+": "+car[key])
}


users.forEach(val => {
    console.log(val.name)    
});

const numbers = [1, 2, 3, 4, 5, 6, 7];

 console.log(numbers.splice(4,1))

let arr = [1, 2, 3];
let result = arr.flatMap(x => [x * 2])//.flat();
console.log(result); // [2, 4, 6]

