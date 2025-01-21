// object key
// object values
// object enteris
// object assign
// object creat
// object hasownproperty
// object change key or values
// object delete key or add new 


test={name:'prathmesh kodag',
      age:'22',
      wieght:'70 kg',
      hight:'5.2 inc',
      add:'chincwad',
      dob:'24/12/200'
    
    }

    console.log('test',test,typeof test)

    // object hasOwnProperty its retunr boolen values if give value or key exist in object 
    console.log('........objecthasownproperty.........')

    console.log('test',test.hasOwnProperty('name'))
    console.log('test',test.hasOwnProperty('surname'))
    console.log('test',test.hasOwnProperty('age'))


    console.log('.........object enteris...........')

    // object entries return all the key and value in aaray form 

    test1=Object.entries(test)

    console.log(test1)

    console.log('............object key...............')

    // object keys return all keys of object 
    test2= Object.keys(test)

    console.log('test',test2)


    console.log('...........object value..........')

    // object value return all values of object 
    test3= Object.values(test)

    console.log('test',test3)

    console.log('........object assing..........')

    // object assing two or more object in one object

    var a={name:'abc'}
    var b={lastname:'def'}

    var c= Object.assign(b,a)
    console.log('c',c)

    console.log('.........object creat...........')

    // object creat new object 

    var creat= Object.create({})
    creat.name="gita"

    console.log('creat',creat)


    console.log('.............add new key and value .........')

    test.state="maharashtra"
    test.district='pune'

    console.log('test',test)


    console.log('.........object change key or value')

    test.add='kalamaboli'
    test.district='raigad'

    console.log('test',test)

    test.city=test.add
    delete test.add
    console.log('test',test)


    console.log('.............object pratices.................')

    // object.creat()
    // object.assign()
    // new object()
    // hasOwnProperty()
    // object.entries()
    // object.keys()
    // object.values()


    console.log('..........object.creat..............')

    person=Object.create({})
    person.name='Prathmesh'

    console.log(person,typeof person)

    console.log('...........object assign...............')

    var person1={fname:'prathmesh'}
    var person2={lname:'kodag'}
 var  person3={age:22}

 var  name__=Object.assign(person1,person2,person3)

  console.log(name__)


  console.log('........object new.........')

  person4=new Object()
  person4.name='prathmesh'

  console.log(person4,typeof person4)


  var test1={
    name:'prathmesh',
    lname:'kodag',
    age:23,
    city:'pune',
    work:'student'

  }
   console.log('..........entries..........')
  // object entries

  var person5=Object.entries(test1)
  console.log(person5,typeof person5)

  // object key
  console.log('..........keys..............')
  person6=Object.keys(test1)

  console.log(person6,typeof person6)

  // object values 
  console.log('.........values..................')

  person7=Object.values(test1)

  console.log(person7,typeof person7)

  // hasOwnProperty
  console.log('.........hasOwnproperty..........')
  person8=test1.hasOwnProperty('name')
  console.log(person8)

  person9=test1.hasOwnProperty('fname')
  console.log(person9)


  // add new key pair value to object 

  test1.eduction='graduet'

  console.log(test1)

  // to change key or values
   console.log('....change kays......')
  test1.add=test1.city
  delete  test1.city

  console.log(test1)
  console.log('..........change value......')
  test1.add='chincwad'

  console.log(test1)

  // delete keys
   console.log('........delete keys...........')
  delete test1.add
  console.log(test1)

  // access inside value

  console.log('........access inside value .........')

  console.log(test1.name)

  // if value dose not exist it return undefiend 
  console.log('.......undefiend...........')

  console.log(test1.fname)