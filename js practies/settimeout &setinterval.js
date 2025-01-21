  
  setTimeout(() => {
    console.log('student name are executed ')
  }, 3500)
  setTimeout(() => {
  console.log('prathmesh')
    
  },3000);
  console.log('saket')
  setTimeout(() => {
  console.log('vikas')
    
  }, 2000);
  console.log('asuthosh')
  console.log('aniket')
  console.log('harsh')


//   setinterval

// var id=setInterval(function() {
// console.log('hellow')
// }, 5);

// clearInterval(id)

var test=function(){ 
    for(var i=0;i<20; i++)
    console.log(i)}


    setTimeout(() => {
        test();
    }, 4000);