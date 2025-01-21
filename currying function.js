// //  function inside function at multiplay levels
// // one function deepend of another function
// // help to creat higher order function 
// //  reduce the error of in our function by dividing into somller function every hove one responcbilty
// // help to bulding moduler or reuseble code


// function sum (a) {
//     return function(b){
//         return function (c){
//             return function (d) {
//                 return a*b*c+d
                
//             }
//         }
//     }
    
// };
//  console.log(sum(2)(3)(5)(7))

//  var sum=((e,f,g,h,i)=>e+f+g+h+i)(
//     console.log(sum(5,6,7,8,7))
//  )
    
 
    
 
 

//  var sum=(test1)=>(test2)=>(test3)=>(test4)=>
//     { return test1-test2-test3-test4}

//     console.log(sum(23)(34)(53)(42))



//     function sum__(a){
//         return function(b){
//             if(b){
//                 return sum__( a*b)
//             }else{
//                 return a;
//             }
//         }

//     };
//  console.log(sum__(5)(8)(2)(56)())


function sum(a){
    return function (b){
        return function(c){
        return function(d){
            return a*b+c-d
        }
        }
}
}

// console.log(sum(21)(13)(41)(15))


function test(a){
    return function (b){
        if(b){
            return test(a*b)
        }else{
            return a;
        }
    }
}

// console.log(test(2)(3)(5)(4)(6)())



function add(a){
    return function(b){
        return function(c){
            return function(d){
                return a*b*c*d
            }
        }
    } 
}


console.log(add(2)(3)(4)(5))


function sum(a){
    return function (b){
        return function (c){
            return function (d){
                return a+b-c%d
            }
        }
    }
}

console.log(sum(2)(4)(6)(7))


function num(a){
    return function(b){
        if(b){
          return  num(a+b) 
        }else{
           return a
        }
    }
}
console.log(num(2)(3)())