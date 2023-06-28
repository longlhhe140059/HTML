

// falsy_truthy
// false = 0, null, undefine, '', NaN
// NaN happend when there are string use with calculator -, /, *, ...

// == and ===
/*
console.log(1 == 1) // true
console.log(1 == '1') // true
console.log(1 === 1) // true
console.log(1 === '1') // false
*/
p
// declare function
function sum(num1,num2){
    console.log('this is sum:'+(num1 + num2))
    return num1 + num2;
}

// expression function need to be created before you call
const sum1 = function(num1,num2){
    console.log('this is sum1:'+(num1+num2))
}

// arrow function ()=>
const sum2 = (num1,num2)=>{
    console.log('this is sum2:'+(num1+num2))
}
