// User input any text and convert it from lowerCase to UpperCase

//Declared a function with a variable name "toUpper"
function toUpper(stringArr) {
  // created  a variable name result and made it the array empty.
  let result = [];
  //Loop functionality that will accpet input text and convert it to UpperCase
  stringArr.forEach(function (str) {
    result.push(str.toUpperCase());
  });
  //This will enable us to see the output in any broswer at the console section.
  console.log(result);
}
//user input any text
toUpper(["ama", "kofi", "icgc horeb temple"]);


//Declared a function with a variable name "arrayDouble"
function arrayDouble (stringArr) {
    let sumResult = []; 

    //accept any text input and repeat it twice
    stringArr.forEach(function (str){
                sumResult.push(str);
                sumResult.push(str);
    }); 
    console.log(sumResult); 
}
arrayDouble(['piggy', 'Bank'])


function arraySum (numberArr) {
    let total = 0; 
numberArr.forEach(function (num){
    total += num; 
}); 
console.log(total);
    }

arraySum([1,2,3]); 
arraySum([5,-2,7,0]); 

function myNum (arrNumber) {
    let out = 0; 
    
    arrNumber.forEach(function (num){
        out += num; 
    });
    console.log(out); 
}

myNum([2,34,5]); 
myNum([42,34,25]); 
myNum([20,314,5]); 
myNum([-2,-34,55]); 