var  test={
    fristname:'prathemsh',
    lastname:'kodag',
    Age:23,
    gender:'M',
       
    
}

console.log('...........data type...........')
console.log('test',typeof test)

console.log('.......set new key pair value.')
console.log('test',test)

test.city='pune';
test.pin='411033'

console.log('test new key pair ',test);

console.log('......value access inside the object.')
console.log('test',test)

console.log('test value access',test.name);
console.log('test value access',test.city);
console.log('test value access',test.Age);

console.log('..if value dose not exist show undifend...')
console.log('test',test)


console.log('test',test.qualification)
console.log('test',test.college)
console.log('test',test. social)

console.log('.........oblect delet keys................')
console.log('test',test)

// delete test.fristname;
// delete test.Age;
console.log('test delete',test)

console.log('.......change value................')
console.log('test',test)
test.fristname='yau'
test.Age=9
console.log('changing value',test)

console.log('.....change key............')
test.name=test.fristname
test.town=test.city
delete test.fristname;
       test.city;

       console.log('change keys',test)


console.log('......object values.........')

var values=Object.values(test)
console.log('object value',values)

console.log('.......object keys.........')
var keys=Object.keys(test);
console.log('object keys',keys)

console.log('........object entries............')

var entries=Object.entries(test)

console.log('object entries',entries)


console.log('......object hasOwn.proparty.........')

console.log( 'objecthasOwn proparty ',test.hasOwnProperty('name'));

console.log('object hasOwnproperty',test.hasOwnProperty('Agee'));


console.log('..........object creat..................')

var test1=Object.create({});
    test1.name='alaka'
 console.log('object creat',test1);


 console.log('.........object assign............')

 var test2={name:'alaka'};
    test3={age:43};
    test4={gender:'F'};

    test5=Object.assign(test2,test3,test4);

    console.log('object assign',test5)