  var test=[1,2,3,4,5,6,7,8]

//   var iterator=test[Symbol.iterator]();

//   console.log(iterator.next())
//   console.log(iterator.next())
//   console.log(iterator.next())
//   console.log(iterator.next())
//   console.log(iterator.next())
//   console.log(iterator.next())
//   console.log(iterator.next())
//   console.log(iterator.next())
//   console.log(iterator.next())


//   var person={
//     name:'prathmesh',
//     lname:'kodag',
//     age:23,
//     city:'pune'

//   }

// //   var iterator=person[Symbol.iterator]();

// //   console.log(iterator.next())
// //   console.log(iterator.next())
// //   console.log(iterator.next())
// //   console.log(iterator.next())



// var test2=[1,2,[3,4],true,false,['one','two']]

// var iterator=test2[Symbol.iterator]();

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())


// genrator

// console.log('=========== genrator==================')

//  var id;

//  function settime(){
//     id=setTimeout(() => {
//         console.log('generator are executed or completed')
//     }, 2000);
//  }






 
// function* generatorSequence(){
//     yield;settime();
//     yield;2
//     yield;3
//     yield;4
//     yield;5
//     yield;6
//     yield;7

// }

// var generator=generatorSequence()

// // console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())



// var test1=[1,2,3,4,5,6,7,8,9]

// var test2=test1[Symbol.iterator]();
// console.log(test2.next())
// console.log(test2.next())
// console.log(test2.next())
// console.log(test2.next())
// console.log(test2.next())
// console.log(test2.next())
// console.log(test2.next())
// console.log(test2.next())
// console.log(test2.next())
// console.log(test2.next())


// var arr=[1,'prathmesh',true,false,[1,2,3],2]

// var arr1=arr[Symbol.iterator]();

// console.log(arr1.next())
// console.log(arr1.next())
// console.log(arr1.next())
// console.log(arr1.next())
// console.log(arr1.next())
// console.log(arr1.next())
// console.log(arr1.next())


// function*generator(){
//   yield;'prathmesh'
//   yield;'kodag'
//   yield;'23'
//   yield;'pune'
//   yield;'9665105728'
//   yield;'prathmeshkodag51@gmail.com'

// }

// var person=generator()

// console.log(person.next())
// console.log(person.next())
// console.log(person.next())
// console.log(person.next())
// console.log(person.next())
// console.log(person.next())
// console.log(person.next())

// var add=[4,5,3,6,2,1,'m',true,[1,2,3]]

// var iterator=add[Symbol.iterator]();

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
 // console.log(iterator.next())
// console.log(iterator.next())

// function wish(){
//   console.log('welcome, good morning')
// }
// function settime(callback){
//   callback() 

//   setTimeout(() => {
//   console.log('generator are excuted and completed , thank you') 
//   },2000);

// }

// function*generator(){
//    yield;settime(wish)
//   yield;'prathmesh'
//   yield;'Kodag'
//   yield;'Pune'
//   yield;'12345678909'
//   yield;'prathmesh@gmail.com'
  
// }

// var person=generator()

// // console.log(person.next())
// console.log(person.next())
// console.log(person.next())
// console.log(person.next())
// console.log(person.next())
// console.log(person.next())

// var arr=[1,2,3,4,[true,false,],null,undefined,,,]

// var iterator=arr[Symbol.iterator]()

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
function wish(){
  console.log('good morning')
}
function msg(callback){
     callback()
  setTimeout(() => {
    console.log('excution finish')
  }, 1000);}
function*generator(){
  yield;"prathmesh"
  yield;'kodag'
  yield;'pune'
  yield;'22'
  yield;'prathmeshkodag@gamial.com'
  yield;msg(wish)
}

var person=generator()

console.log(person.next())
console.log(person.next())
console.log(person.next())
console.log(person.next())
console.log(person.next())
console.log(person.next())
console.log(person.next())
console.log(person.next())

