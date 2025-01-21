var movie=async()=>{
     var getticket=new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('ticket')
            
        }, 1000);
     })

     var getfood=new Promise((resolve, reject) => {
        setTimeout(() => {
        reject('food')
            
        }, 2000);
     })

     var getmv=new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('movie')
            
        }, 3000);
     })

     var ticket=await getticket
     console.log('lets go for moive',)
     console.log('book movie ',ticket ,' for tonight')
     console.log('tcket are books')

     var food=await getfood
     console.log('we need some snake ')
     console.log(' bring some popcorn coke or chips')
     console.log('do you get ',food,'?')

     var  mv=await getmv
     console.log('lest go inside')
     console.log(mv,' start soon')

     return ticket;
}

movie().catch((error)=>{
    console.log('oops something worng............')
})