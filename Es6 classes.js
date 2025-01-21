//  class person{
//     constructor(name,lname){
//         this.name='prathmesh'
//         this.lname='kodag'
//         this.role='developer'
//     }
//      greet(){
//         console.log(`hi hello i am ${this.name}${this.lname} work as a ${this.role}`)
//      }
//      greet1(){
//         // return 'good morning';
//         console.log(`good morning`)
//      }
//  }

//   const prathmesh= new person('prathmesh','kodag')
// //   console.log(prathmesh.greet1())
//   prathmesh.greet1()
//   prathmesh.greet()



//   var test1=[1,2,3,4,5,6]
//  var[a,b,c,d,e,f,g]=test1
//  console.log(d)  
//  console.log(e)
//  console.log(g,a,b)

//  var test2={name:'prathmesh',
//             age:'22',
//             add:'somatane',
//             city:'pune',
//             role:'developer',


//         }

//         var {name,role}=test2;
//         console.log(name);
//         console.log(role);

//         var{city}=test2
//         console.log(city)

//         console.log(test1,...test1)
//         test3={...test2}
//         console.log(test3)





//    // default parameters 
//       console.log('........default parameters..............')
//    function test(wish='good morning'){
//       console.log(`hellow ${wish}`)
//    }

//    test();
//    test(`prathmesh`)

//    function test1(array=['kodag']){
//       array.forEach(element => {
//          console.log(element)

//       });

//    }


//  function calculateArea(p,s=p) {
//    console.log('area is',p*s)
//  }
//  calculateArea(9)


// function person() {
//    console.log(`hello i am ${person.name} work as ${person.role}`)
// }
// const person = {
//    name: 'prathmesh',
//    role: 'developer'
// };
// person();

// person({
//    name: 'prathmesh',
//    role: 'developer'
// });


// class student {
//     constructor(name,age){
//       this.name=name;
//       this.age=age;
//     }
//     getname(){
//       console.log(`hello i  am ${this.name} i am ${this.age} year old`)
//     }


// }
//   const stud2=new student('prathmesh','22')


//   // stud2.getname()


//   function outer(val){
//    var x=9
//    function inside(y) {
//         return x*y*val      
//    }
//    return inside(val)
//   }
//   // console.log(outer(3))


//   function wish(name1,name2,name3) 
//   {
//    console.log(`good morning ${name1}`)
//    console.log(`good morning ${name2}`) 
//    console.log(`good morning ${name3}`) 
//   }
//   wish('prathmesh','sanket','ashutosh')

//   function Area(a,b=a){
//     console.log('area is ',b)
//   }
//   Area (6)


//   function obj(person={name:'name',lname:'lname',age:0}){
//     console.log(`hello i am ${person.name} ${person.lname} work as developer and i am ${person.age} year old`)

//   }
//    var person={
//     name:'prathmesh',
//     lname:'kodag',
//     age:'23'
//    }

//   //  obj();
//    obj(person)
//    obj({
//     name:'bunny',
//     lname:'abc',
//     age:22,
//    })
  

//    class std{
//     constructor(name,lname){
//       this.name=name
//       this.lname=lname
//     }
//     getstd(){
//       console.log(`${this.name} ${this.lname}`)
//     }
//    }
//     var scl=new std('prathmesh','kodag')

//     scl.getstd()

//     var scl=new std('sanket','kodag')

//     scl.getstd();


// class name{
//   constructor(name,lname){
//     this.name=name;
//     this.lname=lname;
//   }
//   getdetails(){
//     console.log(this.name,this.lname)
//   }
// }

// person=new name('prathmesh','kodag')
// person.getdetails();

// var person=new name('sanket','kodag')
// person.getdetails();


// class person{
//   constructor(name ,role){
//     this.name=name
//     this.role=role 
//   }

//   wish(){
//     console.log(`hello good morning i am ${this.name} work as ${this.role}`)
//   }
// };

// var prathmesh=new person('prathmesh','developer')
// prathmesh.wish();



// function greet(name='guest'){
//   console.log(`hello ${name}`)

// }

// greet('prathmesh')



// function arr(ele=[]){
//   ele.map((ele)=>ele*2)
//   console.log(ele)
// }

// arr([2,3,4,8])


// function add(w,h=w){
//   console.log('add',w*h)
// }

// add(5)



// function wish(person={name:'prathmesh',city:""}){
//   console.log(`hello i am ${person.name} i am from ${person.city}`)

// }


// wish(person={name:'',city:'pune'})


class Wish{
  constructor(){
    this.name='prathmesh',
    this.surname='kodag',
    this.city='pune'
  }
  greet(){
    console.log(`hello i am ${this.name} ${this.surname} and i am from ${this.city}`)
  }
}

const msg=new Wish()
msg.greet()

// function Wish(person={name:'',age:''}){
//     console.log(`hello i am ${person.name}`)
// }

// Wish(person={name:'prathmesh'})