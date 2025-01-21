//  function add(...arguments){
//     let result=0;
//     for (let num of arguments){
//          result  += num
//     }
//     return result
//  }

//  console.log(add(2,2,3,3))


 function add(...arrgument){
    let result=0
    for(let nam of arrgument){
        result+= nam;
    }
    return result;
 }

 console.log(add(24,12,2000))
 console.log(add(9,9,2002))
 console.log(add(2036,2020))
 console.log(add(40,56))
 console.log(add(9,6))
 

