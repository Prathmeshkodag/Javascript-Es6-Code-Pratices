1 // to get todays day

var today = new Date()
var day = today.getDay()
var daylist = ['sunday', 'monday', 'tuesday', 'wednesday', 'thrusday', 'firday', 'satarday']

console.log('todays day:' + daylist[day] + '.')


2 // to get todays date


var date = new Date()
var day = date.getDate()
// var date=[14,15,16,17,18,19,20]
console.log(day)

3 //  to get todays date and aslo inculd months or year 
var today = new Date()
var dd = today.getDate()

var mm = today.getMonth() + 1;
var test = today.getFullYear()


today = dd + '-' + mm + '-' + test
console.log(today)



// 4 to get square root of tringle three side

var s1 = 3;
var s2 = 6;
var s3 = 6;
var s = (s1 + s2 + s3) / 2;

var squar = Math.sqrt(s * ((s - s1) * (s - s2) * (s - s3)))

console.log('square root', squar)





// 5 to rooted string left form to right 

// function animate_string(id){
//     var element=document.getElementById(id)
//     var text=element.childNodes[0]
//     var text=textNode.Date;


//     setInterval(function() {

//         text=text[text.lenght-1]+ text.substring(0,text.lenght-1)
//         textNode.date=text
//     }, 10);
// }


// 6 to determine give year is leap year or not 

function leapyear(year) {
    return (year % 100 == 0) ? (year % 400 == 0) : (year % 4 == 0)
}

// console.log(leapyear(2016))
// console.log(leapyear(2026))
// console.log(leapyear(2020))
// console.log(leapyear(2036))
// console.log(leapyear(1916))


var leapyear = year => new Date(year, 1, 29).getMonth() === 1;
console.log(leapyear(1865))
console.log(leapyear(1765))
console.log(leapyear(1565))
console.log(leapyear(1630))
console.log(leapyear(1680))
console.log(leapyear(2016))




//  to 1st january on sunday for 2014 year to 2050

for (year = 2014; year <= 2050; year++) {
    var d = new Date(year, 0, 1)
    if (d.getDay() === 0)
        console.log('1st january on this year' + year)
}
// console.log('1st january on this year'+year)



// 24 decembare on monday form 2000 to 2070

for (year = 2000; year <= 2070; year++) {
    var d = new Date(year, 2, 3)
    if (d.getDay() === 2)
        console.log('24 decembare on monday on this year' + year)
}


// 8 to match guess number to random number in between 1 to 24

// var num=Math.ceil(Math.random()*24)
// console.log(num);
// var gnum=prompt('guess the number between 1 to 24 ')
// if(num==gnum){
//     console.log('numberare match')
// }else{
//     console.log('number are not match',+num)
// }


// 9
var today = new Date()
var bday = new Date(today.getFullYear(), 12, 24)
if (today.getMonth() == 12 && today.getDay() > 24) {
    bday.setFullYear(bday.getFullYear() + 1)
}
var oneday = 1000 * 60 * 60 * 23
console.log(Math.ceil((bday.getTime() - today.getTime()) / (oneday) + 'reaminig days for bday'))



// 10 

// function multiplayby(){
//     num1=document.getElementById('firstnumber').value ;
//     num2=document.getElementById('secondnumber').value;
//     document.getElementById('result').innerHTML=num1* num2;
// }
// function divdedby(){
//     num1=document.getElementById('firstnumber').value;
//     num2=document.getElementById('secondnumber').value;
//     document.getElementById('result').innerHTML=num1/num2;
// }

function multiplyBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}



// 11  check the integare whetare the 8 or two numbers have sum of difference is 8



function check8(x, y) {
    if (x == 8 || y == 8) {
        return true
    } if (x + y == 8 || Math.abs(x - y) == 8) {
        return true
    } else {
        return false
    }
}


console.log(check8(4, 8))
console.log(check8(14, 24))
console.log(check8(22, 45))
console.log(check8(42, 22))
console.log(check8(25, 13))
console.log(check8(24, 32))
console.log(check8(8))





// 12 concat two string except of first charectares

function concat(str1, str2) {
    str1 = str1.substring(1, str1.length);
    str2 = str2.substring(1, str2.lenght);
    return str1 + str2;
}

console.log(concat('prathmesh', 'kodag'))


test = ('java ')
test2 = ('javascript')

var c1 = test.substring(1, test.lenght);
var c2 = test2.substring(1, test2.lenght);
console.log('', c1 + c2)



// 13  return sum of give array integers


function sumofarray(num) {
    return num[0] + num[1] + num[2]
}

console.log(sumofarray([22, 34, 56]))


function sumofarray1(num) {
    return num[0] + num[1] - num[2] * num[3] % num[4] / num[5]
}

console.log(sumofarray1([11, 22, 33, 44, 55, 66]))



// 14 to revesr te element of the array
var arra = [1, 2, 3]

function revers(array) {
    return arra.map((element, idx, arr) => arr[(arr.length - 1) - idx])
}

console.log(revers())


// 15 to get first and last integer of array 

function integer(nums) {
    let array = []
    array.push(nums[0], nums[nums.length - 1])



    return array;
}

console.log(integer([12, 12, 34, 56, 78, 77]))
console.log(integer([12]))
// console.log(integer([0,9,8]))
console.log(integer([0, 0]))



var arra = [22, 33, 4, 5, 677, 88, 87]
var arrp = arra.push([0], [length - 1])

console.log(arrp)


// 16 find types of given angel
// angel between 0 to 90 is acute angle
// angle == 90 is right angle
// angle 90 to 180 is absulate angle
// angle >180 is straight angel 



function typeofangel(angel) {
    if (angel < 90) {
        return 'Acute angle'
    } if (angel === 90) {
        return 'Right angel'
    } if (angel < 180) {
        return 'Absulate angel'
    } else {
        return 'Straight angel'
    }
}

console.log(typeofangel(45))
console.log(typeofangel(90))
console.log(typeofangel(130))
console.log(typeofangel(179))
console.log(typeofangel(240))


// 17 revesr the given string 

function stringrevers(str) {
    return str.split("").reverse().join("")
}

console.log(stringrevers('prathmesh'))
console.log(stringrevers('javascript'))



// 18 multiply by the one integer to onther integer

function divide(num, b) {
    if (b == 1)
        return num;
    else {
        while (num * b === 0) {
            num *= b
        }
        return num
    }



}

console.log(divide(8, 4))


//19 check the point are inside the circel

function circelpoint(a, b, x, y, r) {
    var points = (a - x) * (a - x) + (b - y) * (b - y)
    r *= r
    if (points < r) {
        return true
    } else {
        return false
    }
}

console.log(circelpoint(1, 2, 3, 4, 5, 6))
console.log(circelpoint(6, 5, 4, 3, 2, 1))
console.log(circelpoint(4, 5, 3, 6, 2, 7))

// 20 rottate the element of the array to left

function arr(array) {
    return [array[1], array[2], array[0]]
}

console.log(arr([1, 2, 3]))
console.log(arr([24, 22, 14]))
console.log(arr(['nanaso', 'kodag', 'prathmesh']))
console.log(arr([, , , 3, 5]))


// 21 to rotate the element of array to right

function right(array) {
    return [array[3], array[2], array[1], array[0]]
}

console.log(right([1, 2, 3, 4]))

function replaceindex(array) {
    return [array[4], array[0], array[1], array[2], array[3]]
}
console.log(replaceindex([0, 22, 24, 12, 4]))


// 22 creat new array with middel element of two array


function newarray(a, b) {
    let array = []
    array.push(a[2], b[2])

    return array
}
console.log(newarray([1, 2, 3], [4, 5, 6]))
console.log(newarray([1, 2, [3, 4]], [[1, 2], 3, [true, false]]))
console.log(newarray(['php', 'js', 'html', 'css'], [1, 2, 3, 4]))


// 23 add two integer without the carrying

function integer(n1, n2) {
    var result = 0
    x = 1
    while (n1 > 0 && n2 > 0) {
        result += x * ((n1 + n2) % 10)
        n1 = Math.floor(n1 / 10)
        n2 = Math.floor(n2 / 10)
        x *= 10
    }
    return result;
}

console.log(integer(122, 334))
console.log(integer(222, 911))
console.log(integer(220, 330))

// 24 sum of the all digit occurs in array

function sum(str) {
    var sum = 0
    for (var i = 0; i < str.length; i++) {
        if (/[0-9]/.test(str[i])) sum += parseInt(str[i])
    }
    return sum;
}
console.log(sum('ed34vdsvc53'))
console.log(sum('2m3,4,5'))
console.log(sum('2,4,5'))
console.log(sum('w,e,r,t,y,u'))



// 25 sum of 7 and 8 multiple under 100

var sum = 0
for (var x = 0; x < 100; x++) {
    if (x % 7 === 0 || x % 8 === 0) {
        sum += x
    }
}

console.log(sum)


//  compute the greates gcd in two integer

// var n1=435
// var n2=858

// var gcd;
// while(n1!=n2){
//     if(n1>n2){
//         n1=n1-n2
//     }else{
//         n2=n2-n1
//     }
   
// }
// var gcd=n1;
//     console.log(gcd)

    // var n3=52
    // var n4=34
    // var gcd;
    // while(n3!=n4){
    //     if(n3<n4){
    //         n3=n3-n4
    //     }else{
    //         n4=n4-n3
    //     }
    // }

    // var gcd=n3;
    // console.log(gcd)


    // 26  display the largest integer in between two number

    var n1=43
    var n2=44
    if(n1>n2){
        console.log('this' +n1+ ' number are gerater than' +n2+ '.')
    }if(n1<n2){
        console.log('this' +n2+ 'are getare than' +n1+ '.')
    }else{
        console.log('this are equal')
    }


    // var a=6;
    // var b=7;
    // var c=12;
    var a=31;
    var b=25
    var c=43;


    if(a>b&&a>c){
        if(b>z){
            console.log(a+','+b+','+c)
        }else{
            console.log(a+','+c+','+b)
        }
    } else if (b>a&&b>c) {
        if(a>c){
            console.log(b+','+a+','+c)
        }else{
            console.log(b+','+c+','+a)
        }
    } else if(c>a&&c>b){
        if(a>b){
            console.log(c+','+a+','+b)
        }else{
            console.log(c+','+b+','+a)
        }
    }
        
    