  // function test(){
  //   console.log('prathmesh kodag')
  // }

  // function test2(){
  //   console.log('22')
  // }

  // function test3(){
  //   console.log('pune')
  // }

  // timeout=setTimeout(() => {
  //     test(),test2(),test3()
  // }, 2000);


  // clearTimeout(timeout)


  console.log('...........Asynchronous timer pratices........12/7/2023')

  // settimeout 
  var person=setTimeout(() => {
    console.log('prathmesh')
  }, 1000);

    console.log(person)

    test=clearTimeout(person)


   function test1(){
    console.log('prathmesh')
   }

   function test2(){
    console.log('kodag')
   }

   function test3(){
    console.log('pune')

   }

   set1=setTimeout(() => {
      test1()
   },2000 );

   set2=setTimeout(() => {
      test2()
   },3000);
    
   set3=setTimeout(() => {
     test3()
   }, 4000);


   var person={
    name:'abc',
    lname:'abc',
    city:'abc',
    age:'abc',
    work:'abc'
   }

   set4=setTimeout(()=>{
    console.log(person)
   },2000)

   set5=setTimeout(() => {
    console.log(person.name)
   }, 6000);


   set6=clearTimeout(set5)
   console.log(set6)


   console.log('..............setinterval.........')

  //  setinterval

  function set8(){
    console.log('prathmesh')
  }

  set7=setInterval(()=>{
    set8()
  },3)

  clear=clearInterval(set7)

  console.log(clear)