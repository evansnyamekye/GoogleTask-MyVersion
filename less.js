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