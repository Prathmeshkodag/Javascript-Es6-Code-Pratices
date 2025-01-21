
// to get average marks form below student


var student=[['prathmesh',85],['vikas',75],['asuthosh',65],['sanket',79],['aniket',87]]
var averagemarks=0

for(i=0;i<student.length;i++){
    averagemarks+=student[i][1]
    var avg=(averagemarks/student.length)

}
console.log('avegar marks'+(averagemarks)/student.length)

if(avg<60){
    console.log('grade is f')
} else if(avg<70){
    console.log('grade is D')
 }else if(avg<80){
    console.log('grade is C')
  }else if(avg<90){
    console.log('Grade is B')
  }else if(avg>100){
    console.log('Grade is A')
  }



//   2 return number 1 to 50 and aslo return  divided by 3 or divided by 5 in fornt of that number
  
  for (i=0; i<=50;i++){
    if(i%3===0 && i%5===0){
        console.log(i, 'divided by 3 & divided by 5')
    } else if(i%3===0){
        console.log(i, 'divided by 3')
    } else if(i%5===0){
        console.log(i, 'divided by 5')
    }
  }


//  3 to get odd or even number form 1 to 25 number

for(var i=1; i<=25;i++){
    if(i===0){
        console.log(i+'it is even number')
    }else if(i%2===0){
        console.log(i+'it is even number')
    }else{
        console.log(i+'it is odd number')
    }
}


// 4 to get *  by using for loop

var x,y,chr;
for(x=1;x<=6;x++){
    for(y=1;y<x;y++){
        chr=chr+'*'
    }
    console.log(chr)
    chr=''
}

// var x,y,chr;
// for(x=6;x>=1;x--){
//     for(y=6; y<x;y--){
//         chr=chr+'*'
//     }
//    console.log(chr)
//    chr=''
// }

// 5 invoke the function by callback  and settimeout

function outer(callback){
    setTimeout(callback,2000)

    
   
}
function inside(){
    console.log('hello world')
}
// outer(inside)


// 6 convertr the callback function into promises base

// function callfunction(a,b,callback){
//     setTimeout(() => {
//         var resutl=a+b;
//         if(resutl%2===0){
//             callback(null,result)
//         }else{
//             callback(new Error ('Result is not odd!'),null)
//         }
//     },2000 );
// }

// function promisesfunction(a,b){
//     return new Promise((resolve, reject) => {
//         callfunction(a,b,(error,result)=>{
//             if(error){
//                 reject(error)
//             }else{
//                 resolve(result)
//             }
//         })
//     })
// }

// promisesfunction(2,3).then(result=>{
//     console.log(result).catch(error=>{
//         console.log(Error.massage)
//     })
// })

// 7 multiplay array element
var arr=[2,3,4,5,6]
  var multiplay=arr.map((itm)=>itm*5)
  {
    console.log(multiplay)
  }





function multiplay(){
    console.log(5*arr[0])
    console.log(5*arr[1])
    console.log(5*arr[2])
    console.log(5*arr[3])
    console.log(5*arr[4])

}

// multiplay()

//  to get reddingstatus of book

var libery=[
    {
        tittel:'Bill Gates',
        Author:'The Road Ahead',
        readingstatus:true
    },
    {
       tittel:'Steve Jobs',
       author:'Walter Isaacson',
       readingstatus:true
    },
    {
        tittel:'hidden truth of india',
        author:'abc',
        readingstatus:false
    }
]
 for(var i=0;i<libery.length;i++){
    var book='"'+libery[i].tittel+'"'+'by'+libery[i].author+'.'
    if(libery[i].readingstatus){
        console.log('allready read'+book)
    }else{
        console.log('you need to read this '+book)
    }
 }

// 8 to get object lenght

// Object.obsize=function(myobj){
//     var osize=0,key
//     for(key in myobj){
//         if(myobj.hasOwnProperty(key))osize++;
//     }
//     return osize;
// }

// var person={
//     name:'prathmesh',
//     age:'22',
//     city:'pune',
//     add:'somatane',
// }

// var objsize=Object.obsize(person)
// console.log('length of person object',objsize)


Object.objsize=function(Myobct){
     var osize=0,key;
     for(key in Myobct){
        if(Myobct.hasOwnProperty(key))osize++;
     }
     return osize;
}

var person={
    name:'prathmesh',
    lname:'kodag',
    age:'23',
    city:'pune',
    add:{
        location:'pcmc',
        areaname:'nigadi',
        landmark:'abc chowk',
        pincode:445564,
    },
    work:'developer',
    exp:'2 years'

}

var objsize=Object.objsize(person)
console.log('lenght of object',objsize)


// 9 to get diameter of cylindrical with four decimal 

function cylindrical(clyhight,clyradius){
    this.clyhight=clyhight
    this.clyradius=clyradius
}
cylindrical.prototype.Valume=function(){
    var radius=this.clyradius/2;
    return this.clyhight*Math.PI*radius*radius;
}

cyl=new cylindrical(8,6)
console.log(cyl.Valume().toFixed(4))


// 10 bubble sort algoritham 

Array.prototype.bubblestrap=function(){
    var is_sorted=false
    while(!is_sorted){
        is_sorted=true
        for(var n=0; n<this.length;n++){
            if(this[n]>this[n+1]){
                var x=this[n+1]
                 this[n+1]=this[n]
                 this[n]=x
                 is_sorted=false

            }
        }
    }
    return this 
}
console.log([4,5,-6,8,2,10,-5,-3].bubblestrap())



// to subset of string

String.prototype.substring=function(){
    var subset=[]
     for(var m=0;m<this.length;m++){
        for(var n=m+1;n<this.length+1;n++){
        subset.push(this.slice(m,n))
        }
     }
     return subset
}
console.log('prathmesh'.substring())