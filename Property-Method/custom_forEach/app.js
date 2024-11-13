// Custom forEach

const names = ["Sok", "Tola", "Meng", "Kosal"];

// create higher older function
function myForEach(cbf, arr) {
    for (let i = 0; i < arr.length; i++) {
        cbf(arr[i],i,arr);
    }
} // this is forEach method . It's background forEach method


myForEach(function (item) {
    console.log(item);
}, names);


