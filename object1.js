// var test={};

// console.log('test',typeof test)


// var person={
//     fristname:'prathmesh',
//     lastname: 'kodag',
//     age:'23',
//     getName:function fullName() {
//         return'prathmesh kodag';
        
//     }
// }

// console.log('person',person,'Data type',typeof person)

// // to get values

// console.log('fristname',person.fristname)

// fullName= person.getName()
// console.log('fullname',fullName)

// person.add='pune'
// person.pincode='410330'

// console.log('person',person)

// console.log('person',person.age)


// // delete person.age

// console.log('person',person)


// person.age='22'

// console.log('person',person)


// person.city=person.add;
// delete person.add;

// console.log('person',person)



// var test1={
//     name1:'js'
// }
// test2={name2:'php'}
// test3={name3:'nodejs'}
// test4= Object.assign(test1,test2,test3)

// console.log('test4',test4)

// var test5=Object.create({})
//  test5.name='js'

//  console.log('test5',test5)

//  console.log('person',person.hasOwnProperty('name'))

//  var entries =Object.entries(person)
// console.log('entries',entries)

// var key=Object.keys(person)

// console.log('keys',key)

// var value= Object.values(person)
// console.log('values',value)


// var test1=obj.name
// console.log(test1)

// obj.name='sanket'
// obj.add.pincode=510209

// console.log(obj)

// delete obj.add
// console.log(obj)

// obj.profiel=obj.work
// delete obj.work
// console.log(obj)

// console.log(obj.first)

// new key word
// object assign
// object creat
// object hasownproperty
// object entries
// object key
// object values

// var test=new Object();
//  test.name='vayu'
// console.log(test)

// var a={name:'prathmesh'}
// var b={lname:'kodag'}
// var c={dob:'24,12,2000'}
// var test=Object.assign(a,b,c)
// console.log(test)

// var test=Object.create({})
// test.name='prathmesh'
// console.log(test)

// var test=obj.hasOwnProperty('fristname')
// console.log(test)
// var test=obj.hasOwnProperty('name')
// console.log(test)

// var test=Object.entries(obj)
// console.log(test)

// var test=Object.values(obj)
// console.log(test)

// var test=Object.keys(obj)
// console.log(test)




// object.keys
// object.values
// Object.entries 
// object.creat
// object.assign
// object.hasownproperty
// object channge key or value
// object delete kry or value

// test=Object.keys(obj)
// console.log(test,typeof test)

// test=Object.values(obj)
// console.log(test)

// test=Object.create({})
// test.name='prathmesh'
// test.surname='kodag'
// console.log(test)

// test=obj.hasOwnProperty('ss')
// console.log(test)


// a={name:'prathmesh'}
// b={surname:'kodag'}
// c=Object.assign(a,b)
// console.log(c)


// obj.name='sanket'
// obj.surname=obj.lname;
// console.log(obj)


// obj.lname=obj.surname
// delete obj.surname
// console.log(obj)

var obj={
  name:'prathmesh',
  lname:'kodag',
  add:{
    city:'pune',
    pincode:'410218'
  },
  work:'student',
  age:'23'
}

var a=Object.entries(obj)
console.log(a)

var a=Object.keys(obj)
console.log(a)

var a=Object.values(obj)
console.log(a)

var a=obj.hasOwnProperty('lnames')
console.log(a)

obj.name='sanket'
console.log(obj)

delete obj.lname

console.log(obj)

obj.lname='kodag'

console.log(obj)

obj.surname=obj.lname
delete obj.lname
console.log(obj)


test=new Object
test.name='vayu'

console.log(test,typeof test)

a={'name':'prathmesh'}
b={'surname':'kodag'}
c={'email':'prathmesh@gmail.com'}

var test=Object.assign(a,b,c)
console.log(test)


var test=Object.create({})
test. name='prathmesh'

console.log(test,typeof test)