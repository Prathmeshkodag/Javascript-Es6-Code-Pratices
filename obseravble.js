class Observable{
    constructor(functionThatTakesOberserver){
        this.functionThatTakesOberserver=functionThatTakesOberserver
    }

    subscribe(Observable){
        return this.functionThatTakesOberserver(Observable)
    }
}





const observable=new Observable((observable)=>{
    try{ 
        observable.next('prathmesh nanaso kodag')
        observable.next('form pune')
        observable.next('work as develaper')
        observable.next(' i am 22 year old')
        observable.complete();

    } catch (err){
        observable.error('oops wait somthing went worng....!')
    }   
})

const subscribeobj={
    next:(val)=>{
        console.log(val)
    },

    next:(err)=>{
        console.log(err)
    },

    next:()=>{
        console.log(complete)
    },
    
}

const subscribe=observable.subscribe(subscribeobj)