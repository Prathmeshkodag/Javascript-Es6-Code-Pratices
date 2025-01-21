//   function outervariable() {
//     console.log(' outer  closer ')

//      function innervariable() {
//         console.log('inner closer')
//     }
//     return innervariable;
//   }

//   let closer = outervariable()

//   closer()

//   console.log('...............................................')

//   let array=[1,2[3,4],5,6[7,8],9,10]
//   //   const result=[]
//   // function flatten(arr){
//   //   arr.forEach(ele => {
//   //     if(typeof ele=="object"){
//   //     console.log('ele',typeof ele,ele)
//   //     flatten(arr)}
//   //     else{
//   //       result.push(ele)
//   //       console.log('ele',typeof ele,ele)

//   //     }
      
//   //   }

    
//   //   );
//   //   return result
//   // }
//   // // console.log(flatten(array));
//   //   console.log('array',result)
  



// function flattenArray(data){
//   const result=[]
//   function flatten(arr){
//     array.forEach((ele)=>{
//       if(typeof ele=="object"){
//       flatten(ele)}
//       else{
//         result.push(ele)
//       }
//     })
//     return result;
//   }
//   return flatten(data);
// }
// console.log(flattenArray(array))

// // call method
// const person={name:'prathmesh',
//             role: 'developer', 
//              experience:'5 year'  }
//   function f1(name,age) {
//     console.log(`hello i am ${name} ${this.role} with ${this.experience} experience`)
    
//   }

// f1.call(person,'prathmesh')


// // applay method

// function f2(wish ,message) {
//   console.log(`hello  ${wish}  ${message} i am ${this.name} work as ${this.role} with ${this.experience} experience`)
// }
// f2.apply(person,['good morning','how are you?'])



// // bind method

// greetbind=f2.bind(person)
//  greetbind('good morning','how are you?')

//  const greeting=function(){
//   console.log('hellow')
//  }

//  greeting()


// function outer() {
//   let test='prathmesh'
//   function inside(){
//     console.log(test)
//   }
//   return inside;
// }

// closure=outer()
// closure();
 


// function sum(val){
//   let x=10;
//   function sum2(y){
//     return x*y*val
//   }
//   return sum2(val);
// }

// console.log(sum(3))


// function outerFuntion(){
//   let age=17
//    function inside(){
//     if(age>18){
//       console.log('valid age')
//     }else{
//       console.log('invalid age')
//     }
//    }
//    return inside();
  
// }

// closure=outerFuntion();
// closure();


// function outer(){
//   var test='prathmesh'
//   function inner(){
//     return test
//   }
//   return inner()
// }

//  console.log(outer())





//  function out(){
//   var age=17
//     function inside(){
//       if(age>18){
//         console.log('valid age')
//       }else{
//         console.log('invalid age')
//       }

//     }
//     return inside()
//  }

//  console.log(out())


//  function outside(){
//    var password='1'
//    var pin='1234'
//        function inside(){
//         if(pin===password){
//           console.log('correct password')
//         }else{
//           console.log('incorrect password')
//         }
//        }
//        return inside()
//  }

//  console.log(outside())


//  function num(y){
//   var x=5
//     function add(n){
//       return x*y*n
//     }
//     return add(y)
//  }
//  console.log(num(5))


function outer(num){
   let x=2;
   function inner(y){
    return x*y*num
   }
   return inner(num)
}

console.log(outer(4))