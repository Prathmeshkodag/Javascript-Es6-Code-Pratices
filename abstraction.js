//  function out(val){
//     let x=10;
//     function inner(y){
//         return x*y*val 
//     }
//     return inner(val)
//  }

//  console.log(out(9));



//  function one(){
//     let test='prathmesh'
//     function two(){
//         console.log(test)
//     }
//     return two();
//  }

//  one();


//  function outer(z){
//     let x=1
//     function inside(y){
//         console.log(z*x*y)
//     }
//     return inside(z)
//  }

//  outer(2)





function outside(y){
    let x=10
    function inside(z){
        return  x*y*z
            
    }
    return inside(y)
}

console.log(outside(2))



function name(){
    let a='prathmesh'
    let c='pune'
    function person(){
          let b='kodag'
          console.log('hello i am ',a,b,'lives in ',c)
    }
    return person()
}

console.log(name())


function out(){
    let age=prompt('entare your age')
    function inside(){
        if(age<18){
            alert('you are not eligiable',age)
        } else{
            confirm('you are eligiable',age)
            console.log('welcome')
        }
    }
    return inside()
}
console.log(out())


function name(){
    var a='prathmesh'
    console.log('hello i am ',a)
}
name()

function det(){
    var b='kodag'
    console.log('hello i am',a,b)
}
det()






