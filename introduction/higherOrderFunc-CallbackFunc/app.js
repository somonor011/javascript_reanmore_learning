// Higher Order function and Callback function

function greeting(cbf){
    return `Hello ${cbf()} how are you?`;
}

// function name(){
//     return "Hong Somonor";
// }

// const result = greeting(name);

const result = greeting(function () {return "Hong Somonor";})

// greeting is higher order func and name is callback func 
// callback func paste in higher order func
// higher order func receive parameter that is callback func

console.log(result);