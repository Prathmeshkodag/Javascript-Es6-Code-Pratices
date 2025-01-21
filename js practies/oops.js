// class
// console.log('.........oops class............')

// class std{
//     constructor(name,div,rollno){
//         this.name=name
//         this.div=div
//         this.rollno=rollno
//     }
//     getdtl(){
//         console.log(`name=${this.name}  div=${this.div}  rollno=${this.rollno}`)
//     }
// }

// var scl=new std('prathmesh',12,27)

// scl.getdtl();
// var scl=new std('sanket',10,33)

// scl.getdtl();

// // abstraction

// console.log('..........abstraction..............')

// function outside(sum){
//     var x=-10
//     function inside(y){
//        return x+y+sum
//     }
//     return inside(sum)
// }

// console.log(outside(1))



// inheritance 

// console.log('..........inheritance................')

// class scl{
//     constructor(name,std){
//         this.name=name
//         this.std=std
//     }
//     getdtl(){
//         return`${this.name} ${this.std}`
//     }
// }

// class div extends scl{
//     constructor(name,std,rollno,div){
//         super(name,std)
        
//         this.rollno=rollno
//         this.div=div
//     }
//    getstd(){
//     return`std name ${this.name} stander ${this.std} rollno= ${this.rollno} div=${this.div}`
//    }
// } 

// const person =new div('prathmesh','12th',28,'D')

// console.log(person.getstd());


// // object level

// var test={
//     name:'prathmesh',
//     age:23,
//     std:'ty',
//     getclg(){
//         return`hello i am ${this.name} study in ${this.std} and my ${this.div}`
//     }
// }

// var test1={
//     div:'d',
//     rollno:23,
//     __proto__:test
// }


// console.log('test',test)
// console.log('object',test1.getclg())

class test{
    constructor(){
        this.name='prathmesh'
        this.lname='kodag'
        this.city='pune'
    }
    getdtl(){
        return` hello i am ${this.name} live in ${this.city}`
    }
}

// var obj=new test()
// console.log(obj.getdtl())

getdtl()