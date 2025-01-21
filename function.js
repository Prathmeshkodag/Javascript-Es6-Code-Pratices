// function test1(a, b, c) {
//     return a + b + c;

// } console.log(test1(3, 6, 4));




// function test2(age = 18) {
//     if (age >= 18) {
//         console.log('return', true)
//     }
//     else {
//         console.log('return', false)
//     }

// }

// console.log(test2(age = 18));

// console.log(test2(age = 16));

// console.log(test2(age = 21));

// console.log(test2(age = 19));

// var n1=12
//     n2=9

// function test3(n1,n2,op) {
//     switch (op) {
//         case '+':{
//             console.log('aadition',n1+n2)
//         };
            
//             break;
//             case '-':{
//                 console.log('sub',n1-n2)
//             };
//             break;
//             case '*':{
//                 console.log('multiplay',n1*n2)
//             };
//             break;
//             case '%':{
//                 console.log('divided',n1%n2)
//             };
//             break;
    
//         default:
//             // console.log('invalid operation')
//             break;
//     }
// }


    


//     // function test4(a1,a2,){
//     //     if(test4=='+'){
//     //         console.log('addition',a1+a2);
//     //     }
//     //     else if(test4=='-'){
//     //         console.log('sub',a1-a2)
//     //     }
//     //     else if(test4=='*'){
//     //         console.log('multiplay',a1*a2)}

//     //     else if(test4=='%'){
//     //         console.log('divided',a1%a2)
//     //     }
//     //     else{
//     //         console.log('invalid')
//     //     }
//     // }
//     test3(10,27 ,'+')
//     test3(10,27 ,'-')
//     test3(10,27 ,'*')
//     test3(10,27 ,'%')





//     function pincode(pin=410206){
//         if(pin='410206'){
//             console.log('correct pin')
//         }
//         else{
//             console.log('incorrect pin')
//         }
//     }

//     console.log('pin',pincode())


    
        
//     function wish(name1,name2){
//         return`${name1} good morning`
//         return`${name2} good morning`

//     }
//  console.log(wish('prathmesh',))
//  console.log(wish('sanket',))



// function wish(name1,name2){
//     console.log(name1,'good morning')
//     console.log(name2,'good morning')

// }

// wish('prathmesh','sanket')

// var a=2
// var b=4

// function sum(a,b) {
//     console.log(a+b)
//     console.log(a-b)
//     console.log(a*b)
//     console.log(a/b)

    
// }

// sum(2,9)


// function prathmesh(age){
//     if(age>18){
//         console.log('valid age')
//     }else{
//         console.log('invalid age')
//     }
// }

// prathmesh(17)
// prathmesh(22)

 function number(n1,n2,op){

    switch (op) {
        case '+':{
            console.log('add',n1+n2)
        }
            
            break;
            case '-':{
                console.log('sub',n1-n2)
            }
            break;
            case '*':{
                console.log("mult",n1*n2)
            }
             break;
        default:
            console.log('invalid function')
            break;
    }
 }

number(10,12,'+')
number(10,12,'-')
number(10,12,'*')

function person(age=18){
    if(age>=18){
        console.log(age,'ture')
    }else{
        console.log(age,'false')
    }
}

// console.log(person(age=14))
// console.log(person(age=18))
// console.log(person(age=19))
// console.log(person(age=17))


// function name(name1,name2,name3){
//     return`${name1} good morning`
//     return`${name2} good morning`
//     return`${name3} good morning`

// }

// console.log(name('prathmesh'))
// console.log(name('sanket'))
// console.log(name('alka'))


// function wish(name1,name2,name3){
//        console.log(name1,'good morning')
//        console.log(name2,'good morning')
//        console.log(name3,'good morning')

// }
// wish('prathmesh','sanket','alka')



function age(){
    let age=prompt('entar your age')
    if(age>=18){
        console.log(age,'age are eligiable')
    }else{
        console.log(age,'age is not eligiable')
    }
}

console.log(age())