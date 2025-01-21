// test=['honda','suzuki','volvo','tata','mahindra','audi','bmw']
// console.log('.......every..................')
// // given condition saticfied by all the element its return ture 
// every=test.every((item)=>item.lenght>3)
// console.log('every',every)

// every1=test.every((item)=>item.lenght>10)
// console.log('every1',every1)


// console.log('...........some.............')

// // it return boolen value if one of the element given condition saticfied

// some=test.some((item)=>item.lenght=8)
// console.log('some',some)

// some1=test.some((item)=>item=='kiwi')
// console.log('some1',some1)


// some2=test.some((item)=>item.lenght=3)
// console.log('some2',some2)


// console.log('...........sort...............')
// // sort the element in asending or decending order

// sort=test.sort()
// console.log('sort',sort)


// console.log('..........find.........')
// // to find the praticulare element from array condition satisfies 
// // its return value or else undefined

// find=test.find((item)=>item=='bmw')
// console.log('find',find)

// find1=test.find((item)=>item==='mustang')
// console.log('find',find1)

// console.log('..........map................')
//  test1=[1,2,3,4,5,6,7,8,]
// map=test1.map((item)=>item=item++)
// console.log('map',map)


// console.log('.....fliter........')

// filter=test1.filter((ele)=>ele.lenght)
// console.log('filter',filter)



// console.log('..........reduce....................')

// test2=[23,43,56,34,12,75]

// sum=test2.reduce((accumulator, current)=>{
//     console.log(accumulator,current)
//     return accumulator+current;
// })

// console.log('sum',sum)


console.log('........pratice higher order function 11/7/23..........')

// fliter
// map
// find


// 1 fliter 
console.log('............fliter...........')

var fruit=['apple','kiwi','orange','mango','banana','painapple']

var fltr=fruit.filter((ele)=>ele.length>6)
console.log(fltr)

var fltr=fruit.filter((ele)=> ele=='kiwi')
console.log(fltr)

var fltr=fruit.filter((ele)=>ele.length<1)
console.log(fltr)


// 2 map 
console.log('...........map.............')
var mp=fruit.map((ele)=> ele.length>3)
console.log(mp)

var mp=fruit.map((ele)=>ele=ele)
console.log(mp)

// 3 find 
console.log('.........find.........')
var fnd=fruit.find((ele)=> ele ==='6')
console.log(fnd)

var fnd=fruit.find((ele)=> ele=='kiwi')
console.log(fnd)

var fnd=fruit.find((ele)=> ele=='mango')
console.log(fnd)

// 4 sort 
console.log('..........sort.........')
console.log(fruit.sort((a,b)=>a.localeCompare(b)))
console.log(fruit.sort((a,b)=>a.localeCompare(b)).reverse())
console.log(fruit.sort((a,b)=>b.localeCompare(a)))


// 5 some 
 console.log('......some..........')
sm=fruit.some((ele)=>ele='4')
console.log(sm)

var sm=fruit.some((ele)=> ele=='kiwi')
console.log(sm)

// every
console.log('.......every.........')

var evry=fruit.every((ele)=>ele.length>=4)
console.log(evry)

