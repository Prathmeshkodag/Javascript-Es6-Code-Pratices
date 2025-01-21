// global scope

// var globalVariable="prathmesh"

// function namee(){
//     // local scope
//     var localVariable="kodag"
//     console.log('fname',globalVariable)
//     console.log('lastname',localVariable)
// }

// namee()




let globalVariable = "GLobal variable";

function display() {
 // local scope
 let localVariable = "Local Variable";
 console.log(globalVariable);
 console.log(localVariable);
};

// console.log(localVariable); error as it is has functional scope

display();
