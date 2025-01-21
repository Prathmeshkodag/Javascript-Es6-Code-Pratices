

// var pr1=new Promise((resolve,reject)=>{
//     if(2==2){
//         console.log('resolve')
      
//     } else{
//         'reject'
//     }
// })

// pr1.then((response)=> {
//     console.log(responce)
// },)

//  var age=22
// var pr2=new Promise((resolve, reject) => {
//     if(age>18){
//         console.log('valid')
//     }else{
//         console.log('invalid')
//     }
// })

// pr2.then((responce)=>
// {
//     console.log(responce)
// })


// var pin=(2012)
// var id=[2412]
 
// var pr3=new Promise((resolve, reject) => {
//     if(pin=== id){
//         console.log('valid pin')
//     }
//     else{
//         console.log('incorrect pin')
//     }
// })

// pr3.then((responce)=>{
//     console.log(responce)
// })



// // asynchoronus promisie

//  function test(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             var Data={name:'prathmesh'}
//             if(Data){
//                 console.log(resolve(Data))
//             }else{
//                 console.log(reject(incorrect))
//             }
//         },2000)
//     })
//  }

//  test().then((Data)=>{
//     console.log('data',Data)
//  }).catch((error)=>{
//     console.log('error',error)
//  }).finally(()=>{
//     console.log('promises is completed')
//  })






//  var num='22'
 
//  var test2= new Promise((resolve, reject) => {
//    setTimeout (()=> {if(num==23){
//         resolve('correct')
//     } else{
//         reject('incorrect ')
//     }},1000)
    
//  })
 
// //  test2.then((result)=>{
// //     console.log(result,'result')
// //  }).catch((err)=>{
// //     console.log(err)
// //  }).finally(()=>{
// //     console.log('operation complete')
// //  })
//   var age =19
//  function test3(){
//     new Promise((resolve, reject) => {
//         if(age<=18){
//             resolve('valid age')
//         } else{
//             reject('invalid age')
//         }
//     })
//  }


//     new Promise ((resolve,reject)=>{
//         if(2==2){
//             resolve('correct')
//         }else{
//             reject('incorrect')
//         }
//     })
  

//   Promise .all[a1,a2,a3].then((resl)=>{
//     console.log(resl).catch((err)=>{
//         console.log(err,'err')
//     })
//   })





   
//    var a1=new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve('a1 is executed')
//         })
//     },1000);
   


   
//    var a2= new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('a2 is executed')
            
//         },1000);
//     })
   

//     var a3 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('a3 executed')
            
//         },1000);
//     })
   


//     console.log('..........................................................................')

//     var friendbringticket= new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve('ticket')
//         },2000)
//     })


//     var getpopcorn= friendbringticket.then((t)=>{
//         console.log('freind 1: i got ticket we go inside')
//         console.log('friend 2: wiat i need popcorn i am hungery')
//         return new Promise((resolve, reject) => {
//             resolve(`${t} popcorn`)
//         })
//     })


//     var getcoldringk=getpopcorn.then((t)=>{
//         console.log('friend 1: i got popcorn')
//         console.log('friend 2: i aslo want cold dringk')
//         return new Promise((resolve, reject) => {
//             resolve(`${t} colddringk`)
//         })
//     })

// getcoldringk.then((t)=> console.log(t))



// console.log('...............................................')

// const studentbringbook=new Promise((resolve, reject) => {
// setTimeout(() => {
//     resolve('book')
// }, 1500);
    
// })

// var getbook=studentbringbook.then((b)=>{
//     console.log('student bring book')
//     console.log('teacher ask books to student')
//     console.log('student gives the book to teacher')
//     return new Promise((resolve, reject) => {
//         resolve(` ${b}book`)
//     })
// })

// var getcheck=getbook.then((b)=>{
//     console.log('sir doing cheking of books')
//     console.log('student wait for books ')
//     console.log('sir give books back to the student')
//     return new Promise((resolve, reject) => {
//         resolve(`${b}check`)
//     })
// })

// getcheck.then((b)=>console.log(b))
// var promise1=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const randomNum=Math.random()
//         if(randomNum<2.5){
//            resolve({randomNum:randomNum})
//         }else{
//             reject('randomnum gretar than 2.5')
//         }
//     }, 1000);
// })

// promise1.then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log('finaly executed')
// })


// p1=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promise one executed')
//     },1000);
// })


// p2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('promise two executed')
//     }, 2000);
// })


// p3=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('promise three executed')
//     }, 2500);
// })

// Promise.race([p1,p2,p3]).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log('finaly executed')
// })


// var bringticket=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket')
//     }, 2000);
// })

// friendgetticket=bringticket.then((t)=>{
//     console.log('friend get metro ticket')
//     console.log('did you get return ticket as well')
//     console.log('lets go to the platform and wait for train ')
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//         resolve(`${t}friend`)
//        }, 2500); 
//     })
// })

// waitfortrain=friendgetticket.then((t)=>{
//     console.log('train is on the time')
//     console.log('here we train is coming')
//     console.log('lets go inside the train')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${t}train`)
//         }, 3000);
//     })
// })


// waitfortrain.then((t)=>console.log(t))



// var movie=async()=>{
//     const getticket=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('ticket')
//         }, 1000);
//     })


//     getfood=new Promise((resolve, reject) => {
//         setTimeout(() => {
//            resolve('food') 
//         }, 2000);
//     })


//     getcolddrink=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('colddrink')
//         }, 3000);
//     })


//     const ticket=await getticket
//     console.log('friend one did you get',ticket)
//     console.log('friend two yes i got ticket')
//     console.log('friend three lest go inside')
//     console.log('friend one wiat i need some food')


//     const food=await getfood
//     console.log('friend three ok i get some',food)
//     console.log('friend two ok find you get some food we wait for you')
//     console.log('friend three lest go i get food')
//     console.log ('friend one wiat we forgot to get cold drink')

//     const colddrink=await getcolddrink
//      console.log('friend one wait i well get some cold drink')
//      console.log('friend one i get cold drink know we can go ')

    
// }

// movie().then((t)=>console.log(t))



// var movie=new Promise((resolve, reject) => {
//     setTimeout(() => {
//          resolve('movie')
//     }, 2000);
// })

// var ticket=movie.then((b)=>{
//     console.log('lets go for movie')
//     console.log('book movie ticket on bookmyshow')
//     console.log('which movie we should go to watch')
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`${b}ticket`)
//     }, 3000);
// })
// })

// var food=ticket.then((b)=>{
//     console.log('any one movie we watch')
//     console.log('now get some snaks')
//     console.log('aslo get some cloddrink')
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(`${b} food`)
//       }, 3000);
//     })
// }) 

// food.then((b)=>console.log(b))

//   var age=prompt('entare your age')
// var age=new Promise((resolve, reject) => {
//        if(age>18){
//         resolve('valid age')
//        }else{
//         reject('invalid age')
//        }
// })

// // age.then((responce)=>console.log(responce))


// var game=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('game')
//     }, 2000);
// })

// var fc=game.then((g)=>{
//     console.log('let play fc 24')
//     console.log('yes lets go i am very excating')
//     console.log('its been so mony days i am play vedio game')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${g}fc`)
//         }, 3000);
//     })
// })


// var proclub=fc.then((g)=>{
//     console.log('we play proclub divison')
//     console.log('my level is 44')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${g} proclub`)
//         }, 4000);
//     })
// })

// proclub.then((g)=>console.log(g))
// .catch((error)=>console.log(error))
// .finally((g)=>console.log('promise is excuted'))


// function Name(){
//     data='hello good morning'
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(data)
//         }, 1000);
//     })


// person=Name.then((d)=>{
//     console.log('i am prathmesh kodag')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${d}person`)
//         }, 2000);
//     })
// })
// }
// Name().then((result)=>console.log(result))


// var Name=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Name')
//     }, 1000);
// })

// var person=Name.then((d)=>{
//     console.log('hello good morning')
//     setTimeout(() => {
//         return new Promise((resolve, reject) => {
//             resolve(`${d}person`)
//         })
//     }, 2000);
// })

// var wish=person.then((d)=>{
//     console.log('I am prathmesh kodag')
//     setTimeout(() => {
//         return new Promise((resolve, reject) => {
//             resolve(`${d}wish`)
//         })
//     }, 3000);
// })

// wish.then((result)=>console.log(result))


// function Name(){
//     const data="hellow world"
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(data)
//         }, 1000);
//     })
// }

// Name().then((result)=>console.log(result))
// .catch((error)=>console.log(error))


var test=new Promise((resolve, reject) => {
     setTimeout(()=>{
        console.log('hellow')
     },1000) 
     setTimeout(() => {
         reject('erro')
     },2000);   

})
test.then((res)=>console.log(res))
.catch((error)=>console.log(error))
.finally(()=>console.log('finally execution'))