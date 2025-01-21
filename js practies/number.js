var test=34.6578
// tofixed method
console.log('...........tofixied..............')
fixed=test.toFixed(1)

console.log('fixed',fixed)

console.log('....toprecision.........')

precision=test.toPrecision(3)
console.log('precision',precision)

console.log('......tostring............')

string=test.toString()
console.log('string',string,typeof string)


console.log('......parseint..........')

num='1234'

parse=parseInt(num)
console.log('parse',parse,typeof parse)


console.log('.......parsefloat...........')

num1='34.32'

parse=parseFloat(num1)
console.log('parse',parse,typeof parse)

console.log('.......pratice........')

// tofixed
//   toPrecision
// toString
// parseInt
// parseFloat
// math method
// Math.round
// Math.floor

// 1 tofixed (fixed a number to specific number of decimal)
 console.log('tofixed')
var test=23.55262
 test1=test.toFixed(1)

 console.log(test1)


//  2 toprecision  formate given number to specific lenght
console.log('toprecision')

test2=test.toPrecision(3)

console.log(test2)


// 3 tostring  (convert the number into a string)
 console.log ('tostring')

 test3=test.toString()
console.log(test3,typeof test3)

// 4 parseInt ( parse a string and return intager value)

console.log('parseInt')

test4=parseInt(test)
console.log(test4)

// 5 parsefloat (parse a string and return floating point of the number)

console.log('parsefloat')

test5=parseFloat('23.67.8.9')

console.log(test5)

// 6math.round (return neraest integare of given number)
console.log('Math.round')
test6=Math.round('46.532')
console.log(test6)

// 7Math.floar(return neraest integare gretan than less tham or equal to)

console.log('Math.floar')

test7=Math.floor(324.54)

console.log(test7)

// 8 valueof()  retrun a number as number

console.log('valueof')

test8=test.valueof();
console.log(test8)
