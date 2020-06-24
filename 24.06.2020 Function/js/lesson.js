"use strict";
// let a;
// a=10;
// console.log(a)

// var a=10;
// var a=100;

//GLOBAL AND SCOPE VARIABLES

// let name="Kamran";

// if(true){
//     let name="Elgun";
//     name="Orxan";
//     console.log(name);
// }
// console.log(name);
// if(true){
//     name="hesen"
// }


// let number=3;
// let power=2;

// let result=1;
// for (let i = 0; i < power; i++) {
//     result*=number;
// }
// console.log(result);

// let number1=5;
// let power1=4;

// let result1=1;
// for (let i = 0; i < power1; i++) {
//     result1*=number1;
// }
// console.log(result1);


// let number2=6;
// let power2=3;

// let result2=1;
// for (let i = 0; i < power2; i++) {
//     result2*=number2;
// }
// console.log(result2);


//FUNCTION - REUSEABLE CODE BLOCK


// function GetPower(number = 3, power = 2) {
//     if (!(isNaN(number) || isNaN(power))) {
//         let result = 1;
//         for (let i = 0; i < power; i++) {
//             result *= number;
//         }
//         console.log(result);
//     } else {
//         console.log("Zehmet olmasa eded daxil edin!!!")
//     }

// }

// GetPower(5,3);
// GetPower(2,3);
// GetPower(4,2);
// GetPower(3,2);

// function Sum() {
//     // console.log(arguments)
//     let result = 0;
//     for (const item of arguments) {
//         if (!isNaN(item))
//             result += item
//     }
//     return result;
// }



// console.log(Sum(1,3,"Yeddi",1,3,12,40));

// function GetPi(){
//     return 3.14;
// }


//ARROW FUNCTION
// const GetPi = () => 3.14;

// const GetNumber=number=>number;
// const Sum=(n1,n2)=>n1+n2;
// console.log(Sum(5,6))

// const Sum=(arr)=>{
//     let result = 0;
//     for (const item of arr) {
//         if (!isNaN(item))
//             result += item
//     }
//     return result;
// }

// Sum([1,3,"Yeddi",1,3]);

//VALU and REFERENCE types
// let a=5;
// let b=a;
// b=10;
// console.log("a="+a);
// console.log("b="+b);

// let arr=[1,2,3];
// let arr1=arr;
// arr1[0]=100;
// console.log("arr="+arr[0]);
// console.log("arr1="+arr1[0]);

// let x=5;
// Change(x);
// console.log(x);

// function Change(x){
//     x=10;
//     console.log(x);
// }
let arr=[1,2,3]
Change(arr)
console.log(arr[0]);

function Change(x){
    x[0]=10;
    console.log(x[0]);
}