// map method

const userData = [
    {
        name : "Hong Somonor",
        age  : 18,
        job  : "Developer"
    },
    {
        name : "Hong SoChetra",
        age  : 15,
        job  : "Student"
    },
    {
        name : "Hong MonyOudom",
        age  : 8,
        job  : "Student"
    }
];

const newArr = userData.map(function(item){ // 3 param (item,index,arr) but usually use 1 param
    return item;
});

console.log(newArr);