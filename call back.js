
// synchronous call back 
// function test1(){
//     console.log('synchronous call back executed')
    
    
// }

// function test2(callback){
//     console.log('synchronous call back funtion start')
//     callback();
// }

// test2(test1)

// console.log('synchronous call back funtion comaplted')


// Asynchronous call back

// var name1= (dt)=>{
//     console.log('asynchronoud function executed',dt.name)
// }

// var getname =(callback)=>{
//     console.log('asynchronous function contunies')
//     var data={name:'prathmesh'}
//     setTimeout (()=>{
//         console.log('asynchronous funtion compalete')
//         callback(data);
//     },4000) }
//    getname(name1)



// var fn1=(ag)=>{
//     console.log('function executed',ag.age)
// }

// var fn2=(callback)=>{
//     console.log('age required')
//     var ag={age:19}
//     setTimeout(() => {
//         console.log('valid age ',)
//         callback(ag)
        
//     },2000);
// }


// fn2(fn1)


// function one(){
//     console.log('function executed after onther function finish execution')
// }

// function two(callback){
//     console.log('function executed first')
//  callback()
// }

// two(one)


// function person(dt){
//     console.log('we get ',dt.name,'function finish execution')
// }


// function details(callback){
//     console.log('function start execution')
//    const deta={name:'prathmesh'}
//     setTimeout(() => {
//         console.log('deta is correct')
//     }, 2000);
//     callback(deta)

// }

// // details(person);


// function name(){
//     console.log(' good morning')
// }

// function wish(msg){
//     console.log('hello sir')
//    setTimeout(() => {
//    msg()

//    }, 2500);
//    setTimeout(() => {
//     console.log('i am prathmesh')
//    }, 2800);


// }
// wish(name)



// function name(){
//     console.log('good morning')

// }

// function wish(){
//     console.log('welcome to js session')
// }

// function final(msg,deta){
//     console.log('hellow world')
//     setTimeout(() => {
//         msg(wish) 
           
    
// })
// }
// final(wish)



// function Age(){
    
//     setTimeout(() => {
//        var age=prompt('pleas entare your age')
//         if(age>18){
//             console.log('valid age')
//         }else{
//             console.log('invalid age')
//         }
//     }, 3000);
// }

// function test(callback){
//     console.log('wait for responce')
//     setTimeout(() => {
//         callback()
        
//     }, 1000);
// }

// test(Age)


// function name(){
//     class data{
//         constructor(){
//             this.name='prathmesh'
//             this.Surname='kodag'
//         }
        
        
//     }
//     console.log(`hello i am ${this.name} ${this.Surname}`)

        
//     }



// function person(callback){
//     console.log('hello good morning')
//     setTimeout(() => {
//         callback()
//     }, 2000);
// }
//  person(name)


function name(callback){
    console.log('prathmesh')
    setTimeout(()=>{
        console.log('hello good morning')
        callback()
    },1000)
}

function msg(call){
    console.log('how are you')
        console.log('how was the day')
        
    
}
 function wish(){
setTimeout(() => {
    console.log('its good')
    
},2000); }

name(msg)
msg(wish)


















