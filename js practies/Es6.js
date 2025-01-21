class test{
    constructor(name,surname,age,city){
        this.name=name
        this.surname=surname
        this.age=age
        this.city=city
    }
    greet(){
        console.log(`hello i am ${this.name} ${this.surname} ${this.age} year old lives in ${this.city}`)
    }
}

var bunny=new test('prathmesh','kodag','22','pune')

bunny.greet()


var arr=[1,2,3,4,5,6,7,7];

var [a,b,c,d,e,f,g,h]=arr

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)


var obj={
    name:'prathmesh',
    surname:'kodag',
    age:23,
    city:'pune'
}

var {name,surname,age,city}=obj
var {city:add}=obj
console.log(age)
console.log(city)
console.log(add)




