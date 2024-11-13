// Filter method

const userData = [
    {
        name: "Hong Somonor",
        age: 18,
        job: "Developer"
    },
    {
        name: "Hong SoChetra",
        age: 15,
        job: "Student"
    },
    {
        name: "Hong MonyOudom",
        age: 8,
        job: "Student"
    }
];

// const filterArray = userData.filter(function (item) {
//     return item.age >10;
// });

const filterArray = userData.filter((item) => item.age > 10)

console.log(filterArray);
