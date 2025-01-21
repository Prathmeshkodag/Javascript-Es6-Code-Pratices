// function add(...arrgument){
//     let result='';
//     for(let concat of arrgument){
//         result += concat 
//     }
//     return result;
// }

// console.log(add('prathmesh','kodag'))


// function sum(...arrgument){
//     let result=0;
//     for(let num of arrgument){
//         result += num
//     }
//     return result;
// }

// console.log(sum(24,22,9))

function name(...arrgument){
    let name='';
    for(let surname of arrgument){
        name += surname
    }
    return name
}
console.log (name('prathmesh','kodag'))
console.log (name('sanket','kodag'))


