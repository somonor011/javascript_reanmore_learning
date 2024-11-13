// Object

const cars = {
    model: "BMW",
    year : 2015,
    ifNew: true, // store boolean
    feature: ["a","b"], // store array
    drive: d=()=>{console.log("driving")} 
    // drive(){
    //     console.log("driving") // store function
    // },
}

//update string
cars.model = "Tesla"
//update array in obj
cars.feature[0]="c"

console.log(cars.feature[0]); // line 8
// console.log(cars.drive()); console line 9 -> 11