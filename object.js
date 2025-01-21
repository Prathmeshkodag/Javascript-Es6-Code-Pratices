
console.log('test1', typeof test1);

let test2 = {
    firstname: 'prathmesh',
    lastname: 'kodag',
    age: '22',
    std: 'Ty',
    Add: 'Pune,wakad',
    gender: 'M',
    college: 'DPU',
    getName: function () {
        return 'Prathmesh kodag';
    },
    contact: [
        { no1: '9876543210' },
        { no2: '9887564576' },
        { no3: '9875467889' },


    ]

}

console.log('test2', test2, typeof test2);
console.log('firstname', test2.firstname);
console.log('lastname', test2.lastname);
console.log('Age', test2.age);
console.log('STD', test2.std);
console.log('ADD', test2.Add);
console.log('contact', test2.contact);
console.log('contact no1', test2.contact[0]);
console.log('contact no2', test2.contact[1]);
console.log('contactno3', test2.contact[2]);
console.log('Gender', test2.gender);
console.log('College', test2.college);

let fullName = test2.getName();
console.log('fullname', fullName);