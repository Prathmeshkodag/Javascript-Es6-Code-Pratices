// function name(){
//     return function (){
//       let p=['prathmesh']
//       return function(){
//         r=['nanaso']
//         return function (){
//             a=['kodag']
//          return p.concat(r).concat(a)
//         }
//       }
//     }
// };

// // console.log(name('prathmesh','nanaso','kodag'))
// console.log(name())
//   var add=(test)=>(test1)=>(test3)=>{
//     return test.concat(test1).concat(test3)
//   }

// console.log(add('prathmesh','nanaso','kodag'))

function add(a){
  return function (b){
   return function(c){
    return function (d){
      return a*b*c*d
    }
   }
  }
};

console.log(add(22)(3)(4)(9))



var sum=(test)=>(test1)=>(test2)=>(test3)=>(test4)=>(test5)=>{
  return test*test1*test2*test3*test4*test5
}

console.log(sum(22)(33)(44)(55)(66)(77))



var add=((a,b,c,d,e,f,g)=>{
  return a+b+c+d+e+f+g
})

console.log(add(2,3,4,5,6,7,8))





