let people = [
{
name: 'yes',
age: '34',
city: 'delhi'
},
{
name: 'yes raj',
age: '35',
city: 'mumbai'
},
{
name: 'raj',
age: '37',
city: 'kolkata'
}
]

let exists = people.some( person => person.name === 'yes');
console.log('Step 1 = '+exists);

let personObject = people.filter(person => person.name === 'yes');
console.log(personObject);

let personIndex = people.findIndex(person => person.name === 'raj');
console.log(personIndex);