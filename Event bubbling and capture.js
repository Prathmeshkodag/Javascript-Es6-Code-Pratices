// event bubbling

// document.getElementById('outerdiv').addEventListener('click', function (event) {
//     console.log('click on outer div')
    
// },);

// document.getElementById('innerdiv').addEventListener('click', function (event) {
//     console.log('click on inner div')
// },)

// document.getElementById('btn').addEventListener('click',function(event){
//     console.log('click on button')
    
// }, )

document.getElementById('outerDiv').addEventListener('click', function () {
    console.log('Clicked on OuterDiv');
  });
  
  document.getElementById('innerDiv').addEventListener('click', function (event) {
    console.log('Clicked on Inner Div');
    ; // stops the propagation
  });
  
  document.getElementById('btn').addEventListener('click', function (event) {
    console.log('Clicked on button');
  }); // stops the propagation



  