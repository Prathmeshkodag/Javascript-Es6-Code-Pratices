// var icecreamshop=async()=>{
//    var getorder=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('order')
//     },1000 );
//    })

//    var startproducation= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('producation')
//     }, 2000);
//    })

//    var serveorder=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('serve')
//     }, 3000);
//    })


//    var order=await getorder
//    console.log('custmore give ',order,'to shop kipper')
//    console.log('print bill for custmore those give order')
//    console.log('told to them wait for 15 min')

//    var producation=await startproducation
//    console.log('start ice cream',producation)
//    console.log('take fruits and milk')
//    console.log('take corn or baul')

//    var serve=await serveorder
//    console.log('ice cream is ready know',serve,'to custmore')

// }


   
//    icecreamshop().then(()=>console.log('custmore give ',getorder,'to shop kipper'))
//    .catch((err)=>console.log(err)).finally(()=>console.log('order is completed'))




// var icecreamshop=async()=>{
//     var getorder=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('order')
//         }, 1000);
//     })

//     var startproduction=new Promise((resolve, reject) => {
//         setTimeout(() => {
//         resolve('production')
            
//         },2000);
//     })

//     var giveorder=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('serve order')
//         }, 3000);
//     })

//     var order=await getorder
//     console.log('get',order,'from custmore')
//     console.log('print one bill for taken order')
//     console.log('told custmore to wait 15 min for order')

//     var producation =await startproduction
//     console.log('start icecream',producation)
//     console.log('cut sooe fruits get some milk')

//     var serve=await giveorder
//     console.log(serve,'order to custmore')
//     console.log('thank you ')
// }
// icecreamshop().then(()=>console.log('get',order,'from custmore')).catch((error)=>console.log(error))
// .finally(()=>console.log('promises excuted'))



// async function Api(){
//      try {
//          const res=await fetch('https://fakestoreapi.com/products/')
//          if(!res.ok){
//             throw new Error ('network error')
//          }
//          const data= await res.json()
//          return data


//      } catch (error) {
//         console.error('error fetching api')
//         throw error
//      }

// } 
// Api().then((data)=>console.log('data',data))
// .catch((error)=>console.log(error))


// async function API(){
//     const responce=await fetch('https://fakestoreapi.com/products/')
//     const data=responce.json()
//     return data
// }
// API().then((data)=>console.log(data))

// fetch('https://fakestoreapi.com/products/')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

async function data(){
    const responce=await fetch('https://fakestoreapi.com/products/1')
    try {
        if(!responce.ok){
            throw new Error('network error')
        }
        const data= await responce.json()
        return data
    } catch (error) {
        console.error('fetching error')
        throw error
    }
}
 data().then((data=>console.log(data)))














