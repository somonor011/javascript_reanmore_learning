

const students = [
    {name: "Menghoy" , score: 88},
    {name: "Menghor" , score: 96},
    {name: "Chitra" , score: 80},
]

let i = 0

while(i < students.length){
    console.log(`Students: ${students[i].name} has ${students[i].score} scores`);
    i++;
}