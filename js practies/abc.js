  var person={name:'prathmesh',
  surname:'kodag',
  age:'22',
  role:'Developer',
  city:'pune',
  name:'bunny'
}



function test(name,surname){
    console.log(`hello i am ${this.name} ${this.surname} i am ${this.age} year old work as ${this.role}in ${this.city}`)


}

test.call(person)



var person1={
    name:'php',
    name:'js',
    name:'pyathon',
    name:'css',
    name:'html'

}
function test1(name){
    console.log(`${this.name} ${this.name}`)
}

test1.call(person)


// applay

console.log('...............applay...........')

function test3(wish,massage){
    console.log(`${wish}${massage} hello i am ${this.name} ${this.surname}`)
}

test3.apply(person,['Good morning', 'how are you '])


// bind 

console.log('...........bind...........')

greet=test3.bind(person)
greet('good evening','how was the day')