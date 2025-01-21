//   var p1=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('p1 is executed')
//     },1000);
//   })

//   var p2=new Promise((resolve, reject) => {
//        setTimeout(() => {
//         resolve('p2 is executed')
//        },1000);
//   })


//   var p3=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p3 is executed')
//     }, 1000);
//   })

// //   Promise.all([p1,p2,p3]).then((res)=>{
// //      console.log(res)
// //   }).catch((err)=>{
// //     console.log(err)
// //   })


// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })



// console.log('...............................................................................')


// var getnewphone=new Promise((resolve, reject) => {
//     resolve('phone')
// })


//  var bdaygift=getnewphone.then((p)=>{
//     console.log('today is your bday ')
//     console.log('this is for you')
//     console.log('what is this')
//     return new Promise((resolve, reject) => {
//         resolve(`${p}gift`)
//     })
//  })


//  var getcake=bdaygift.then((p)=>{
//     console.log('your new phone')
//     console.log('happy brithday')
//     console.log('know cut the cake')
//     return new Promise((resolve, reject) => {
//         resolve(`${p}cake`)
//     })
//  })
//      timeout=setTimeout(() => {
//         getnewphone,bdaygift,getcake
//      },3000);
//  getcake.then((p)=>console.log(p))



// var letsplanetrip= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('trip')
//     },2000);
// })

// var aragethebus=letsplanetrip.then((t)=>{
//     console.log('guyes plane for trip')
//     console.log('where to go and how many days')
//     console.log('how much expensive for one person ')
//     console.log('which mood of transport to use for travel ')
//     console.log('we arragen one mini bus for every one ')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            resolve(`${t}bus`) 
//         }, 2000);
//     })
// })

// var contrymoney=aragethebus.then((t)=>{

//     console.log('start to arrange money for trip')
//     console.log('araound 5k for one person for 3 days')
//     console.log ('we stay over there for 3 days and 2 night')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${t}money`)
//         }, 1000);
//     })
// })


// var dicidedestination=contrymoney.then((t)=>{
//     console.log('please suggest any one place where we go for three days ')
//     console.log('know its raniy session please aviod to go beaches ')
//     console.log ('we can go for forest adventure trip ')
//     console.log('every agrey for this?')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${t}destination`)
//         }, 500);
//     })
// })

// dicidedestination.then((t)=>console.log(t))



var bookcheckingday=new Promise((resolve, reject) => {
    resolve('book')
},)

var techareaskbook=bookcheckingday.then((t)=>{
    console.log('techare ask book to student')
    console.log('student collecat books one by one')
   return new Promise((resolve, reject) => {
    resolve(`${t}techare`)
})
})
var getbookback=techareaskbook.then((t)=>{
    console.log('teachare finsh checking')
    console.log('student get there book back')
    console.log('student open there own book and know there mistake')
    return new Promise((resolve, reject) => {
       resolve(`${t}back`) 
    },)
})

getbookback.then((t)=>console.log('teachare ask book to student'))
.catch((error)=>{
    console.log(error)
})