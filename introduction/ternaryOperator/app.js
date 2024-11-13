// ternary operator

// (20 > 10) ? console.log("True") : console.log("False");

// function Age(age){
//     if (age >= 18) {
//         console.log("Adult");
//     } else {
//         console.log("Still young");
//     }
// }

const Age = age => age >=18 ? console.log("Adult") : console.log("Still young"); // arrow func and ternary

Age(30);