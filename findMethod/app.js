// find method : return only one element
// if string return string

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
        age: 15,
        job: "Student"
    }
];

const findUser = userData.find((item)=> item.age == 15);

console.log(findUser);