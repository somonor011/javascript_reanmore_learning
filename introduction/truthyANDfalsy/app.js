// turthy and falsy 

/* 
    - falsy : "" , 0 , null , undefined , NaN ទាំងអស់នេះជា falsy 
*/

// example :

const txt = "";

if(txt){
    console.log("true");
} else {
    console.log("false");
}

// - truthy : អ្វីក៏ដោយអោយតែមានតម្លៃ
 
const greeting = "hello";

if(greeting) {
    console.log("Truthy");
} else {
    console.log("Falsy")
}