//  class student1{
//    constructor(name,lname){
//       this.name=name
//       this.lname=lname
//    }
//    getpersonaldetials(){
//     return`${this.name}${this.lname}`
//    }
//  }

//  class student2 extends student1{
//     constructor(name,lname,role){
//         super(name,lname);
        
//         // this.role=role;
//     }
//     getdetails(){
//         return`hello i am${super.getpersonaldetials()} ${super.getpersonaldetials()} work as${this.role}`
//     }
//  }

//  const student=new student2('prathmesh','kodag','developer')
//   console.log( student.getdetails())


//   // encapsulation

//  function per(){
//   let name='prathmesh'
//   let lname='kodag'
//   const getname=function(){
//   console.log(name,lname)
//   }
//  }

// //  getname()
   
// function per1(){
//   let name='prathmesh'
//   let lname='kodag'

//   console.log(name,lname)
// }

// per1()



class t22 {
  constructor(name,lname){
    this.name=name
    this.lname=lname
  }
  getname(){
    return`${this.name} ${this.lname}`
  }
}

class t24 extends t22{
  constructor(name,lname,age){
    super(name,lname)
    this.age=age

  }
  getdetails(){
    return`hello i am ${super.getname()} ${super.getname()} i am ${this.age} year old`
  }
}

const per =new t24('prathmesh','kodag','22')

console.log(per.getdetails())