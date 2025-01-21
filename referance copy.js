var test=[1,2,3,4,[3,4,5],7,8,9]

// var test1=test
// console.log(test1)

// test1.push(24)
// console.log(test1)

// delete test1[4]
// console.log(test1)
// console.log(test)
var obj={
    name:'prathmesh',
    lname:'kodag',
    age:'23',
    address:{
      location:'somatane',
      pincode:'410218',
      city:'pune',
    }
}

// var obj1=new Object(obj)
// console.log(obj1)
// obj1.name='vayu'
// console.log(obj1)
// console.log(obj)


// // shollow copy

// var test1=[].concat(test)
// console.log(test1)

// test1.pop();
// console.log(test1)
// console.log(test)

// var test1=[...test]
// console.log(test1)
// test1.shift()
// console.log(test1)
// test1.unshift(2)
// console.log(test1)


// var obj1={...obj}
// console.log(obj1)
// obj.address.city='mumbai'
// console.log(obj1)

var obj1= Object.assign({},obj)
console.log(obj);
obj1.address.pincode='410209'
console.log(obj1)