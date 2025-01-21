//  const movie=async()=>{
//     const friendbringticket= new Promise((resolve, reject) => {
//          setTimeout (()=>{
//             resolve('ticket')
//          },1000)
//     })
//     const getpopcorn=new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve('popcorn')
//         },3000)
//     })
//     const getcoke=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('coke')
//         }, 5000);
//     })
       


// const ticket=await friendbringticket
// console.log('freind 1: i got ',ticket)
// console.log('freind 1:we can go inside')
// console.log('freind 2:wait i need popcorn')

// const popcorn=await getpopcorn
// console.log('freind 1:i got ',popcorn)
// console.log('freind 1:know go inside the thetar')
// console.log('friend:wait i need coke')

// const coke=await getcoke
// console.log('freind:i get cook ')
// console.log('freind 2: know go inside')

// return ticket;
//  };

// movie().then(()=> console.log('freind show ticket',ticket))



// const school= async()=>{
//     const studentbringbook= new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('book')
//         }, 1000);
//     })

//     const gethomework=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('homework')
//         }, 2000);
//     })
//     const getcheck= new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('checking')
//         },3000);
//     })

//      const book=await studentbringbook
//      console.log('studentbring',book)
//      console.log('techare:show the home work')

//      const homework=await gethomework
//      console.log('student show',gethomework)
//      console.log('student standt in fornt of techare')

//      const checking=await getcheck
//      console.log('teacher know doing',checking)
//      console.log('techare give books back to student')

//      return book;
// }

// school().then(()=>console.log('student bring',book))


// var freind=async()=>{
//     var getfootball=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('football')
//         }, 1000);
//     })

//     var getshoes=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('shoes')
//         },2000);
//     })

//     var play=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('paly')
//         }, 3000);
//     })
//     var football=await getfootball
//        console.log('take a',football)
//        console.log('where is the ball')
//        console.log('inside the cubaord')

//        var shoes=await getshoes
//        console.log('find where is',shoes)
//        console.log('do you find that shoes')
       
//        var play=await play
//        console.log('yes i got shoes')
//        console.log('let go for',play)

//        return football;
// }

// freind().then(()=>console.log('take a',football))



const Name=async()=>{
    var person=new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve('person')
        }, 1000);
    })

    var wish=new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('wish')
            }, 2000);
    })

    getdetails=await person
    console.log('hello i am')

     getwish=await wish
     console.log('prathmesh')

}
Name().then((result)=>console.log('Successfull',result))
.catch((error)=>console.log('Error accros the excution',error))
.finally(()=>console.log('Function finsh execution'))