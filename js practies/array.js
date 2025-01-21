// array
// length
// push  
// pop 
// shift
// unshift
// Slice 
// splice 
// concat
// join
// spilt
// indexof


// var a=['apple','banana','chery','kiwi','mango','watermelon']

// console.log('.............lenght.........')
// console.log('a',a)
// indx=a.length

// console.log('length',indx,typeof a)

// console.log('..........push.........')

// pus=a.push('grepas')

// console.log('push',pus)
// console.log('a',a)

// console.log('.......pop.............')

// popp=a.pop()
// console.log('a',a)
// console.log('pop',popp)

// console.log('.......indexof.........')
// idnxx=a.indexOf('kiwi')
// console.log('a',a)
// console.log('indexof',idnxx)

// console.log('.....shift.........')

// sft=a.shift()

// console.log('a',a)
// console.log('shift',sft)


// console.log('......unshift........')

// unsft=a.unshift('orange','berry')
// console.log('a',a)
// console.log('unshift',unsft)

// console.log('............slice........')
// slic=a.slice(2,5)
// console.log('a',a)
// console.log('slice',slic)

// console.log('........splice..........')

// splc=a.splice(0,0,'bule berry')

// console.log('a',a)
// console.log('splice',splc)

// console.log('......concat.........')

// var test=[1,2,3,4]
//     test2=['one','two','three']

//     console.log('test3',test.concat(test2))




    console.log('...........array pratice 11/7/2023........')

    // array.push
    // array.pop
    // array.unshift
    // array.shift
    // array.slice
    // array.splice
    // array.cocnat
    // array.lenght
    // array.indexof
    // array.join


    var car=['honda','tata','mahindra','volvo']

    // 1 array.push add the element at the edn of the array
    console.log('....array push.......')
     console.log(car)
     car.push('suzuki')
     console.log(car)

    //  2 array.pop remove the last element of the array

    console.log('...........array pop...........')
    console.log(car)
    car.pop()

    console.log(car)

    // 3 array.unshift add one or more element at the begining of array
     console.log('........array.unshift............')
   console.log(car)
     car.unshift('marcediz','kia')
     console.log(car)


    //  4 array.shift reamove the first element of the array ani return the remove element

    console.log('.........array.shift...........')
      console.log(car)

    console.log(car.shift())

    // 5 array.slice it return copy as array it take starting or ending index
    console.log('....array slice.......')
    console.log(car)

console.log(car.slice(3,4))

// 6 array.splice  its change the content of array by adding ,replacing and removing the element at specified index
 console.log('........array.splice........')
console.log(car)

car.splice(0,0,'toyota')

console.log(car)


// 7 array.lenght it return the lenght of array 

console.log('......array.lenght..........')

console.log(car.length)

// 8 array.indexof  it reutrn the indexof first charactare
//   of specified element found in array or -1 element not found in array

console.log('.......indexof.....')

console.log(car.indexOf('tata'))


// 9 array.concat  it return the new array marrage of two or more array
 console.log('......array.concat.......')
num1=[1,2,3,4,5]
num2=[6,7,8,9,10]

num3=num1.concat(num2)

console.log(num3)

// array.join  it return string with specified separetare


console.log(car.join(';'))


s='prathmesh#nanaso#kodag#'
s1=s.split('#')
s2=s1.join()
console.log(s2)