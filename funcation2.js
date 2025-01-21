function calci(n1, n2) {
    return n1 + n2;
   }
   
   console.log(calci(5,4));
   
   // using switch
   
   function calculator(num1, num2, op) {
    switch (op) {
     case '+':
      console.log('Addition: ', num1 + num2);
      break;
     case '-':
      console.log('Substraction: ', num1 - num2);
      break;
     case '*':
      console.log('Multiply: ', num1 * num2);
      break;
     case '/':
      console.log('Division: ', num1 / num2);
      break;
     case '%':
      console.log('Mod: ', num1 % num2);
      break;
     default:
      console.log('Invalid operation');
      break;
    }
   }
   
   //using nested if..else
//    function calculator(num1, num2, op) {
//     if (op == '+') {
//      console.log('Addition: ', num1 + num2);
//     } else if (op == '-') {
//      console.log('Substraction: ', num1 - num2);
//     } else if (op == '*') {
//      console.log('Multiply: ', num1 * num2);
//     } else if (op == '/') {
//      console.log('Division: ', num1 / num2);
//     } else if (op == '%') {
//      console.log('Mod: ', num1 % num2);
//     } else {
//      console.log('Invalid operation');
//     }
//    }
   
   
   calculator(4, 5, '+'); //9
   calculator(4, 5, '-'); //-1
   calculator(4, 5, '*'); //20
   calculator(4, 5, '/'); //0.8
   calculator(4, 5, '%'); //4
   calculator(4, 5, '^'); //Invalid Operation
   