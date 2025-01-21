// var test1=[1,2,3,4,5,6,7,];
//     test2=[true,false,true,false,true];
//     test3=['one','two','three','four','five'];
//     test4=[{'one':1},{'two':2},{'three':3}];
//     test5=[[1,2],[2,3],[4,5],[5,7],];
//     test6=['one',2,null,undefined,{'one':1},true,false];

//     console.log('test1',test1, typeof test1)
//     console.log('test1',test2, typeof test2)
//     console.log('test1',test3, typeof test3)
//     console.log('test1',test4, typeof test4)
//     console.log('test1',test5, typeof test5)
//     console.log('test1',test6, typeof test6)


// array.push =push the element at the end


// console.log(name)
// name.push('gray')
// console.log(name)

// array.pop =remove the element form last index of array

// console.log(name)
// name.pop()
// console.log(name)


// array.shift =remove first element form array and return remove element

// console.log(name)
// console.log(name.shift())


// Array.unshift = add one more elements at the start of array

// console.log(name)
// name.unshift('lemongreen','hotpink','black')

// console.log(name)


// Array.slice = extract the part given starting index or ending index form array

// console.log(name)
// console.log(name.slice(3,5))


// aaray.splice = its manuplate array by adding replace or deleting 

// console.log(name)
// name.splice(2,1,'black','hotpink')
// console.log(name)

// array.indexOf = it return index of element of aaray 

// console.log(name)
// console.log(name.indexOf('range'))


// Array.concat mariage two or more arrays

// var arr1=['prathmesh']
// var arr2=['nanaso']
// var arr3=['kodag']
// var person=[]
// console.log(person.concat(arr1,arr2,arr3))

// Array.join it return string with spcyfied sperater

// console.log(name,typeof name)
// name.join(',')
// console.log(name,typeof name)
// name.split('')
// console.log(name)

// Array.length it return lenght of array

// console.log(name)

// name.length
// console.log(name)


// const test=name.filter((ele)=>ele.length<4)
// console.log(test)

// const test=name.map((ele)=>ele.length>4)
// console.log(test)

// test=name.find((ele)=>ele=='reen')
// console.log(test)


// test=name.some((ele)=>ele.length==4)
// console.log(test)

// test =name.every((ele)=>ele.length>=3)
// console.log(test)




// var test=name.pop()

// console.log(test)
// console.log(name)

// console.log(name.push('gray'))
// console.log(name)

// var test=name.unshift('pink','yellow')

// console.log(test)
// console.log(name)

// var test=name.shift()
// console.log(test)

// console.log(name)
// var test=name.slice(4,5)
// var test=name.splice( 'blueberry',7,2)
// console.log(test)

// var test=name.join('""')
// console.log(test,typeof test)

// test=name.length
// console.log(test)

// var a=['prathmesh']
// var b=['kodag']

// var test=a.concat(b)
// console.log(a.concat(b))

// var test=name.indexOf('blue')

// console.log(name.indexOf('blue'))

const name=['red','orange','green','blue','pink']

// var test=name.filter((ele)=>ele.length>=4)
// console.log(test)

var num=[23,43,67,42,78,54,67,32,42,78,12,87,56,2]
var test=num.map((ele)=>ele*2)
// console.log(test)
var test=num.find((ele)=>ele==42)
// console.log(test*2)

// var test=name.some((ele)=>ele%2==1)
// console.log(test)
// var test=name.every((ele)=>ele%2==1)
// console.log(test)

// var test=num.reduce((accumlator,current)=>{
//     console.log(accumlator,current)
//     return accumlator,current;
// })

// var test=name.sort((a,b)=>a-b)
// console.log(test)


var strr='hello prathmesh kodag';

function Stringg(str){
    var word=str.indexOf(0);
    var word1=word.UpperCase();
    return word1;
};

console.log(Stringg(strr));