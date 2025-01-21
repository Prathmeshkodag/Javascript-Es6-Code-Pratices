//  string.lenght
// string.indexof
// string.uppercase
// string.lowercase
// string.trim
// string.concat
// string.chartcode
// string.cgartAtcode


var test=('prathmesh')

console.log('.......lenght......')
 lent=test.length
 console.log('test',lent)

 console.log('........indexof..........')

indx=test.indexOf('t')
console.log('indx',indx)

console.log('......uppercase........')
 
console.log('test',test.toLocaleUpperCase())

console.log('.....tolowercase..........')

console.log('test',test.toLocaleLowerCase())

console.log('........trim.............')

var test1="  prathmesh    "
console.log('test1',test1)
console.log('test1',test1.trim())

console.log('.......concat.......')

test2=('orange')
test3=('red')

test4=test2.concat(':') .concat(test3)

console.log('test4',test4)

console.log('......charAt.......')

code=test.charAt(6)
console.log('charAT',code)

console.log('......charcodeAt.......')

codeat=test.charCodeAt(5)
console.log('codeat',codeat)

console.log('.....substring..........')

sub=test.substring()
console.log('sub',sub)


console.log('pratces')

// lenght
// indexof
// uppercase
// lowercase
// trim
// trimstart
// trimend
// concat
// replace
// slice
// substring
// substr
// charAt
// charcodeAt
// codepointAt
// lastindexof
// spilt

var name1='    prathmesh kodag      '

// 1 length this method return length of index

console.log('.................lenght.......................')

console.log(name1.length)

// 2 indexof this method return index of charecter of givin string
console.log('.................indexof..........................')

  test2=name1.indexOf('k')
  console.log(test2)

// 3 uppercase this method convert the string into to uppercase

console.log('.................uppercase................')

test3=name1.toLocaleUpperCase()
console.log(test3)

// 4 lowercase this method convert the string into lowercase

console.log('................lowercase...................')

test4=name1.toLocaleLowerCase()
console.log(test4)

// 5 trim  this method remove the whitespace form straing or ending of string 

console.log('...........trim...............')
console.log(name1)
test5=name1.trim()

console.log(test5)

// 6 trimstart this method only remove the whitespace form starting form the string

console.log ('.........trimstart.........')
console.log(name1)

test6=name1.trimStart()
console.log(test6)

// 7 trimend this method only remove whitespce form ending of the string
console .log ('..........trimend.............')

console.log(name1)

test7=name1.trimEnd()
console.log(test7)

// 8 charAt this methods return a characetar at specified index

console.log('.........charAt.............')

test8=name1.charAt(7)
console.log(test8)

// 9 charcodeAt this method return unicode charecater at specified index

console.log('...........charcodeAt.................')

test9=name1.charCodeAt(7)
console.log(test9)

// 10 codepointAt this metho return unicode value at specified index

console.log('.......codepointAt..........')

test10=name1.codePointAt(7)
console.log(test10)

// 11 replace this method replace value to other specified value in string
console.log('........reaplce.................')
test11=name1.replace('prathmesh','sakshi')

console.log(test11)

// 12 slice this method take straing index or ending index and extract the value and return new string

console.log('.......slice...........')

test12=name1.slice(6,9)
console.log(test12)

// 13 substring it similare to slice 
 console.log('.........substring...........')

 test13=name1.substring(3,7)

 console.log(test13)

//  14 subsrt this method semilare to slice but second arrgument take as lenght of exract value 

console.log('.........subsrt..........')

test14=name1.substr(6,2)

console.log(test14)

// 15 concat  this method join two or more string 

console.log('.........string.............')

var st1=('js')
var st2=(';')
var st3=('php')

test15=st1.concat(st2).concat(st3)

console.log(test15)


// spilt    ; string can be converted to an array by using of spilt
console.log('........spilt............')


test16=name1.spilt(',');
console.log(test16)