// // referance copy 
// // array
// var a=[1,2,3,4,[5,6],7,8]

// var b=a
// console.log(b)
// b.push(3,5)
// console.log(b)
// a.pop()
// console.log(a)
// console.log('...........referance.......')
// // object 
// var person={
//     name:'prathmesh',
//     lname:'kodag',
//     age:22,
//     city:'pune',
//     wokr:'developer'
    
// }

// var test=person
// console.log('person',person)
// test.add='chinchwad'
// console.log('test',test)

// delete person.wokr
// console.log(test)



// // shollow copy 
// console.log('..........shollow..........')
// // aaray 

// // array concat 
// console.log('......array concat......')
//  b=a.concat()

//  console.log(b)

// //  spread operater
// console.log('......spread operater.....')

// c=[...a]
// console.log(c)

// // map

// console.log('......map.........')

// d=a.map((ele)=>ele)
// console.log(d)

// // array .slice
// console.log('.........array slice..........')
// e=a.slice(0,8)
// console.log(e)

// // array.from
// console.log('.......array.from..........')

// // f=a.from('a','b')
// // console.log(f)


// // object

// // test1=new Object()
// // test1.person
// // console.log(test1)

// console.log('.........spread...........')

// test1={...person}

// console.log(test1)
// //  oblect creat 
// console.log('............assing...........')
// test2=Object.assign({},person)
// console.log(test2)

// // deep copy
//   console.log('.......depp copy.........')
// // array 
//  test3=JSON.parse(JSON.stringify(a))
//  console.log(test3)
 
//  console.log('test3',test3.shift())
//  console.log(a)

// //  object 
// test4=JSON.parse(JSON.stringify(person))
// console.log(test4)
// console.log(person)

// test4.name='sakshi'
// console.log(test4)
// console.log(person)

// // sperad operator 
// console.log('............sperad operater..........')

// var test='hellow'

// var test1=[...test]
// var test2={...test}
// console.log(test1)
// console.log(test2)


// var test=['prathmesh']

// // console.log([...test])
// var test1=[...test]
// console.log(test1)

// var test={name:'prathmesh'}
// var test2={lname:'kodag'}
// var test3={age:22}

// var test1={...test,...test2,...test3}

// console.log(test1)

// // rest operatore

// console.log('............rest operatore...........')


// function sum(n1,n2,...arrgument){
//   let result=0;
//     for(let i of arrgument){
//      return result+=i;
//     }
//   return result+n1+n2;
// }

// console.log(sum(3,4,5,6,7,8))


function sum(...arrguments){
  let add=0;
  for(let i of arrguments){
    return add+=i
  }
  return add;
}

console.log(sum (4,5,7))