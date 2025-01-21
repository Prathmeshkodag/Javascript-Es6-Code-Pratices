var srt='   prathmesh'

// lenght 

// for(let i=0;i<srt.length;i++){
//     console.log(srt[i],i)
// }


// console.log(srt.indexOf('h'));

// srt.toUpperCase();
// console.log(srt.toUpperCase());

// console.log(srt.toLowerCase());

// console.log(srt.trim());

// var srt1='kodag'

// console.log(srt.concat(srt1));

// srt.charAt(1);
// console.log(srt.charAt(4));
// console.log(srt.charCodeAt('p'));

// console.log(srt.slice(7,9))
// console.log(srt.split(';'),typeof srt)


// var test=srt.split();

// test.push('kodag');
// console.log(test,typeof test);




// var Test="Prathmesh"


// for(i=0;i<Test.length;i++){
//     console.log(Test[i],i)
// }

// var test=Test.indexOf("s")
// console.log(test);

// var test=Test.toLocaleUpperCase()
// console.log(test);


// var test=Test.charAt(7);

// console.log(test);


// var test=Test.charCodeAt(7)
// console.log(test)


// var test=Test.split();
// console.log(test,typeof test);



// var test=true+true+false+true*3;
// console.log(test,typeof test)



// var ar=['red','blue','green']

//  ar.push('white');
//  console.log(ar)

// ar.pop();
// console.log(ar);

// ar.unshift('gray','yellow');
// console.log(ar);

// ar.shift();
// console.log(ar);

// // var test=ar.slice(0,1);
// // console.log(test);

// // console.log(ar.splice(1,4,'pink'));

// var num=[1,2,3,4]
// console.log(ar.concat(num));
// console.log(ar+num);


// ar.indexOf(0);
// console.log(ar.indexOf("red"));


// var str=ar.join('=');
// console.log(str,typeof str);




// var test=new Object();
// test.name='Prathmesh';
// console.log(test,typeof test);


// var test=Object.create({});

// test.city="Pune";

// console.log(test);

// var a={name:'prathmesh'};
// var b={surname:'Kodag'};

// c=Object.assign(a,b);

// console.log(c);



// var test={
//     name:'prathmesh',
//     surname:'Kodag',
//     city:'Pune',

// }
//  console.log(test.hasOwnProperty("nname"));


// var ent=Object.entries(test);
// console.log(ent);

// var key=Object.keys(test);

// console.log(key);

// var values=Object.values(test);
// console.log(values);


var num=[6,4,3,6,7,8,9,,3,2,5,7,8,3,1,2];


// var test=num.filter((ele)=>ele>=4);{
//     console.log(test)
// };

// var test1=num.filter((ele)=>ele<4);{
//     console.log(test1)
// };


// var test3=num.map((ele)=>ele+2);{
//     console.log(test3)
// };
// var test1=num.filter((ele)=>ele==4);{
//     console.log(test1)
// };


// var test=num.find((ele)=>ele==4);{
//     console.log(test)
// };


// var test=num.sort((a,b)=>a-b);{
//     console.log(test)
// }

// var test=num.some((ele)=>ele==3);{
//     console.log(test)
// };
// console.log(test);

// var test=num.every((ele)=>ele>=1);{
//     console.log(test);
// };



// function Num(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return a+b+c+d;
//             }
//         }
//     }
// }

// console.log(Num(2)(3)(4)(5));


// function Wish(){
//     console.log('I am prathmesh ')
    
// };

// function Name(callback){
//     console.log('Good mornig')
//     setTimeout(()=>{
//        callback()
//     },2000)
//     setTimeout(()=>{
//         console.log('I am from Pune')
//     },3000)
// };


// Name(Wish);

// var promis=new Promise((resolve,reject)=>{
      
//     const name='promise resolve';
//     const test='promise reject';

//     setTimeout(()=>{
//         resolve(name);
//     },100);

//     setTimeout(()=>{
//         reject(test);
//     },101);
// })

// promis.then((resl)=>console.log(resl)).catch((err)=>console.log(err));




// var promis=async()=>{

// }



// var person={
//     name:'Prathmesh',
//     surname:'Kodag',
//     city:'Pune'
// }


// function getperson(wish){
//      console.log(`${wish}  hello I am ${this.name}${this.surname} from ${this.city}`)
// }

// getperson.apply(person,['Good morning'])

// const name=function(){
//     console.log('prathmesh')
// };
// name();











// var Array1=[1,2,3,4,5]

// var Array2=[4,5,6,7];


// function Array(){

//     const Array3=Array1.concat(Array2)

//     console.log(Array3);
// };

// Array();


// 5 litter  and 3 liiter



// function Num(arr){
//     return [...new Set(arr)]
// };


// var a=[1,2,5,3,2,3,1,4,4,3];

// console.log(Num(a))
// console.log(a.reverse());


// const test=a.sort((a,b)=>b-a);
// console.log(test)

// const Home=a.reduce((accum,currnt)=>{
//     return (accum<currnt) ?accum:currnt;
// },a[0]);

// console.log(Home);

// const Test=a.reduce((acc,cur)=>{
//     return (acc>cur)?acc:cur;
// },a[0]);
// console.log(Test);




// const arr=[2,3,1,3,2,4,5,3,4,5,6,3,5];

// const test=[...new Set(arr)];

// const Test=test.sort((a,b)=>a-b)
// console.log(Test);

// const Max=Test.reduce((accm,currnt)=>{
//     return(accm<currnt)?accm:currnt;
// },Test[0]);

// console.log(Max)



// window.localStorage.setItem('name','Prathmesh')
// window.localStorage.clear();

// window.localStorage.setItem('Name','Prathmesh nanaso kodag')
// window.localStorage.setItem('Age','24');

// window.localStorage.removeItem('Age')

// document.cookie='name:prathmesh'

// window.sessionStorage.setItem('name','Prathmesh')
// window.sessionStorage.removeItem('name')

// window.location.href('');
// window.location.assign('');
// window.location.replace();

// window.history.go();
// window.history.forward();
// window.history.back();





// var age=alert('your above 18')
// console.log(age)

// var age=confirm('you are above')

//  if(age){
//     console.log('welocme')
//  }else{
//     console.log('Oops...!')
//  };


// function Age(){
//     var age=prompt('entar your age');
//     if(age>18){
//         console.log('correct')
//     }else if(age==18){
//         console.log('need indenty prrof')
//     }else{
//         console.log('wrong')
//     }
// };
// Age();


// console.log(this)





// class Home {
//     constructor(name,surname){
//         this.name=name
//         this.surname=surname
        
//     }

//     getname(){
//         return  `hello i am ${this.name} ${this.surname}`
//     }
// };

// class Std extends Home{
//     constructor(name,surname,std){
//         super(name,surname)
//         this.std=std
//     }
//      getstd(){
//         console.log(`${super.getname()} studyes in ${this.std}`)
//      }
// }

// const school=new Std('Prathmesh','Kodag','10th')

// console.log(school)




// function Num(a){
      
//     let b=1;
//     function inside(c){
//         return  a*b*c 
//     }
//     return inside(a)
// }
//   console.log(Num(4))


// const a=[1,2,3];

// const b=[4,5,6];


// console.log([...a,...b])


// const c=[...b]
// console.log(c)


// function Arrguments(...arrgument){
//       let result =0;
//       for (let num of arrgument){
//         result += num
//       }
//       return result
// }

// console.log(Arrguments(2,6,7))


// class Person{
//     constructor(){
//         this.name='Prathmesh'
//         this.surname='Kodag'
//     }
//     getwish(){
//         console.log(`hello i am ${this.name} ${this.surname}`)
//    }
   
// }

// const person=new Person()

// person.getwish();



// ( function(){
//     console.log('prathmesh kodag')
// })()


// const Home=function(){
//     console.log('hello this is anamouys function')
// }

// Home();








// var array=[1,2,3,4,5,6,7,8,9]

// const [a,b,c,d,e,f,g,h,i]=array;

// console.log(e)




// const Home=new Promise((resolve,reject)=>{
//      const home='promise is resolve'
//      const test='promise is reject'
//      reject(test)
      
//      resolve(home);
// })

// Home.then((result)=>console.log(result)).catch((error)=>console.log(error))


// const Home=async()=>{
    
//     const Promise1= new Promise((resolve)=>{
//            resolve('promise one resolve')
//     })

//     const Promise2= new Promise((reject)=>{
//         reject('promise two reject')
//     })
     
//     const Home=await Promise1
//     console.log(Home)
//     const Home2=await Promise2
//     console.log(Home2)

// };

// Home().then((result)=>console.log(result)).catch((error)=>console.log(error))



// function Outer(){

//     let a=10;
//     function Inside(){
//         let b=22;
//         console.log(a+b)
//     }
//     return Inside()
// };
// console.log(Outer())


// function Name(){
//       console.log('hello i am Prathmesh')
// };

// function Wish(callback){
//      console.log('Good morning')
//      setTimeout(()=>{
//         callback()
//      },3000)
// }

// Wish(Name)


// const Person={
//     name:'Prathmesh',
//     surname:'Kodag'
// }

// function Getdetials(wish){
//      console.log(`${wish} hello i am ${this.name} ${this.surname}`)
// };

// // Getdetials.call(Person)

// Getdetials.apply(Person,['Good morning'])



// const test=Object.create({})
// test.name='Prathmesh'
// console.log(test,typeof test)


// const test=new Object 
// test.name='Prathmesh Kodag'

// console.log(test,typeof test)


// const a={name:'Prathmesh'}
// const b={surname:'Kodag'}
// const c=Object.assign(a,b);
// console.log(c,typeof c)


// const Person={
//     namee:'Prathmesh',
//     surname:'Kodag',
//     std:'10th',
//     city:'Pune',
// };


// const test=Person.hasOwnProperty('namee')
// console.log(test)
// const test1=Person.hasOwnProperty('cityy')
// console.log(test1)




// const test=Object.keys(Person)
// console.log(test);
// const test1=Object.values(Person)
// console.log(test1);
// const test2=Object.entries(Person)
// console.log(test2)


//   delete Person.std
// console.log(Person)



// const array=['red','orange','blue','green']

// array.push('Yellow');

// console.log(array,typeof array)

// array.pop();

// console.log(array);

// array.shift();
// console.log(array);

// array.unshift('gray','black');

// console.log(array);


// // console.log(array.slice(0,2))
// // console.log(array.splice(0,6,'pink'))


// // const array1=[2,3,4,5,6,7]

// // console.log(array.concat(array1))

// console.log(array.indexOf('blue'),'array')

// console.log(array.length)



const str='   grdfsedcvfgrdswthjyftrdbvnhh';

// const test=str.toLowerCase();
// console.log(test)

// const test=str.trim();
// console.log(test)

// const str1='3242232323232423';
// console.log(str.concat(str1));

// const test=str.charAt(12);
// console.log(test)


// const test=str.charCodeAt(5);
// console.log(test)


// const test=str.substring(4,15);
// console.log(test)

// const test=str.split();
// console.log(test,typeof test)



// let a=10;
// let a=11;

// console.log(a+b)


// const a=10;
// const b=11;

// console.log(a+b)



// console.log(12+23)
// console.log(12-23)
// console.log(12*23)
// console.log(12%23)
// console.log(12)


// let a=18;

// console.log(a+=5);
// console.log(a-=5);
// console.log(a*=5)
// console.log(a%=5);


// let b=19;

// console.log(a!=b);
// console.log(a==b);
// console.log(a>b);
// console.log(a<b);




// var a=19;
// if(a>15){
//     console.log('true')
// }else{
//     console.log('false')
// }

// function Num(a){
//     if(a%2==0){
//         console.log('2')
//     }else if(a%3==0){
//        console.log('3')
//     }else if (a%4==0){
//         console.log('4')
//     }else{
//         console.log('error')
//     }
// }


// Num(99)


// var num=2;

// switch(num){
//    case 2:
//     console.log('num is 2')
//     break;
//     case 3:
//         console.log('num is 3')
//     break;
//     case 4:
//         console.log('num is 4');
//      default:
//         console.log('error')   
// }



// for(i='Prathmesh';i;i++){
//     console.log(i)
// };


// var a='Prathmesh';

// for(var i=0;i<a.length;i++){
//     console.log(a[i],i)
// }
//  let v=0
// while (v<25) {
//      console.log(v);
//     v++
// }


// function NUm(){
//     let b='Kodag'
// }

// console.log(b)


// var a=1
// do{
//     console.log(a)
//     a++
// }while(a<25)

//  window.localStorage.setItem('Name','Prathmesh');
//  window.localStorage.removeItem('Name');
//  window.localStorage.removeItem('setItem');


let s='eeefdff45556564rwrfddsfd424327757hdfgdsfsdfddcdrere'

// const test=/d/;
// console.log(test.test(s))




// const test1=/ff/;
// console.log(test1.test(s))
//  const test=/f/g;
//  console.log(s.match(test))



// const test2=/c/g;
// console.log(s.match(test2))
const test=/[0-9]/g;
console.log(s.match(test))
const test1=/[a-z]/g;
console.log(s.match(test1))

console.log(s.replace(test,'avbc'))













































