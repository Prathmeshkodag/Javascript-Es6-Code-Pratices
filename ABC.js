// // call method



// // function test(name, age){
// //     console.log(`hello i am ${this.name} ${this.surname} work as ${this.role}  in ${this.city}`)
// // }

// // test.call(person)


// // console.log('..........applay...........')

// // function test1(wish,message){
// //     console.log(`${wish} ${message} i am ${this.name} work as ${this.role} in ${this.city} for last 5 years`)

// // }

// // test1.apply(person,['good morning','hello','how are you ?'])

// // console.log('........bind..........')

// // bind=test1.bind(person)
// // bind('namaskar','welcome')


// // // bind 

// // console.log('...........bind...........')

// // greet=test1(person)
// // greet('good evening','how was the day')


// // var person={name:'prathmesh',
// //             surname:'kodag',
// //             age:'22',
// //             role:'Developer',
// //             city:'pune'
// // }


// // function name(name,city){
// //     console.log(`i hello i am ${this.name}${this.surname} and i am from ${this.city}`)
// //     // console.log(`work as ${this.role} and ${this.age} year old`)
// // }

// // name.call(person)

// // function test(wish,message){
// //     console.log(` ${wish} ${message}  i am ${this.name}`)
// // }

// // // test.apply(person,['how are you?','good morning'])


// // wish=test.bind(person)
// // wish=['good morning','how are you?']
// // console.log(wish)

// // ?anonymous function

// // var wish=function(){
// //   console.log('good morning')
// // }

// // wish();

// // var num=[1,2,3,4,5,6];num.map(function(no){
//     // console.log(no*2)
// // })

// // num();

// // (function(){
// //     console.log('hello wolrd')
// // })();


// // (function(){
// //     let sum=0;
// //     for(i=0;i<=5;i++){
// //         sum=sum+i
// //     }
// //     console.log(sum)
// // })();


// var person={
//     name:'prathmesh',
//     surname:'kodag',
//     city:'pune',
//     age:'22'
// }

// function Name(){
//     console.log(`hello i am ${this.name} i am from ${this.city}`)
// }
// Name.call(person)


// function Wish(wish,greet){
//     console.log(`${wish} ${greet} i am ${this.name} ${this.surname}`)
// }

// Wish.apply(person,['good morning','how are you'])



    