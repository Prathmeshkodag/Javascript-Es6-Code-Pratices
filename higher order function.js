// // sort function
// console.log('...sort funcation..........')
// test=['apple','banana','mango','kiwi','orange']

// console.log('test',test)

// test2=test.sort()
// console.log('test2',test2)


// test3=['z','w','e','x','h','a','m','s']

// console.log('test3',test3.sort())


// // filter method\
// console.log('....filter method.....')



// var test4=test.filter((ele)=> ele.lenght)
// console.log('filterarray',test4)


// // map method
// console.log('....map method.......')

// var a=['3','6','9','8','5']

// var number=a.map((item)=> item*4);
// console.log('number',number)


// var divide=a.map((item)=> item%-1)
// console.log('divided',divide)


// var addition=a.map((item)=> item += 22);

// console.log('addition',addition)

// var subtraction=a.map((item)=> item - 12)

// console.log('subtraction',subtraction)


// // find method
// console.log('.....find method.........')

// var b=['tata','mahindra','kia','bmw','suzuki','volo']

// var tata=b.find((item)=> item =! 'Audi')
// console.log('audi',tata)

// var kia=b.find((item)=> item === 'kia')
// console.log('kia',kia)

// console.log('......filter method.....')
// var sp=b.filter((item)=> item.length>6)

// console.log('filter',sp)

// var km=b.filter((item)=> item .length == 4)

// console.log('km',km)


// // reduce

// console.log('...........reduce..........')

// a1=[1,3,4,7,6,4,8]

// sum=a1.reduce((accumlator ,current)=>{
//     console.log(accumlator, current)
//     return accumlator+current;
// })

// console.log('sum',sum)

// a2=['apple','banana','orange','kiwi','grepas']

// let rd=a2.reduce((accumlator,current)=>{
//     console.log(accumlator,current)
//     return accumlator+current;
// })
// console.log('a2',rd)

// a3=[{'one':1},{'two':2},{'three':3}]
// rd1=a3.reduce((accumlator,current)=>{
//     console.log(accumlator,current)
//     return accumlator+current;
// })
// console.log('rd1',rd1)
// console.log('........map............')

// let addition2=a1.map((item)=>item+10)
// console.log('addition',addition2)


// let subtraction2=a1.map((item)=>item-10)

// console.log('subtraction',subtraction2)

// let multipaly2=a.map((item)=> item*-3)
// console.log('multiplay',multipaly2)


// // every

// console.log('.......every...........')

// p=a2.every((item)=> item.length>2)
//     console.log('p',p)

// p1=a2.every((item)=> item.lenght<6)
// console.log('p1',p1)

// // some

// some1=a2.some((item)=> item=="kiwi")
// console.log('some1',some1)

// some2=a2.some((item)=> item.length>2)
// console.log('some2',some2)


// var test=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
var test=['orange','apple','kiwi','lemon','mango','gava','stroberry','lichi']

// test1=test.filter((ele)=>ele.length>4)
// console.log(test1)

// test1=test.map((ele)=>ele*33)
// console.log(test1)

// test1=test.find((ele)=>ele=='20')
// console.log(test1)

// test1=test.reduce((accumulator,current)=>{
//     console.log(accumulator,current)
//     return accumulator,current;
// })

// test1=test.sort((a,b)=>b.localeCompare(a))
// console.log(test1)

// test1=test.some((ele)=>ele.length>6)
// console.log(test1)

test1=test.every((ele)=>ele.length>2)
console.log(test1)