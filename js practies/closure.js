 function fnout(){
    var test={
        name:'prathmesh',
        lname:'kodag',
        age:22,
        city:'pune',
        education:'bsc',
        professinol:'software developer',
    }
    
        function inner() {
            console.log(test)
            
        }
    return inner();
 }

 let closure=fnout()

 closure()