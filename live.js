function msg(wish){
    this.wish=wish
    return function () {
        console.log(`${this.wish} prashant`);
        return function (){
            console.log(`${this.wish} prathmesh`)
            return function(){
                console.log(`${this.wish} siddhi`)
               return a=b=c; 
            }
            
        }
    } ;
   
};
console.log(msg('good morning'))


// var test=[1,2,3,4,5]

// var[a,b,c,d]=test

// console.log(d)
// console.log(c)
// console.log(a)
// console.log(b)

// test1=[...test]
// console.log(test1)

// var test={
//     name:"prathmesh",
//     lname:'kodag',
//     age:22,
//     city:'pune',
//     add:{pincode:410206,
//          landmark:'near ganpati mandir'}
// }

// var{name,age}=test
// console.log(age)
// var{add:landmark}=test
// console.log(landmark)

// function abc(test){
//     const{name,age,add:landmark}=test
//     console.log(name,age,landmark)

    
    
// }
// var test={
//     name:"prathmesh",
//     lname:'kodag',
//     age:22,
//     city:'pune',
//     add:{pincode:410206,
//          landmark:'near ganpati mandir'}
// }
// abc(test)



// function test1(){
//     console.log('function two')
// }

// function test2(callback){
//    console.log('function one')
//    callback();
// }

// test2(test1)


