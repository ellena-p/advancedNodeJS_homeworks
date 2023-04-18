interface Person {
    name: string;
    age: number;
    gender: "male" | "female";
};
const peopleArray: Person[] =[];
const people = (newPerson:Person) =>{
    peopleArray.push(newPerson)
}


const personOne:Person ={
name:"John",
age: 22,
gender:"male"
}

people(personOne)

const personTwo:Person ={
    name:"Ford",
    age:24,
    gender:"male"
}

people(personTwo)

const personThree:Person ={
    name:"Gill",
    age:23,
    gender:"female"
}

people(personThree)



const filterByProperty  = (people:Array<any>, property:string, value:string|number):Person[]=>{
    const filteredPeople = people
    .filter(person => (person.gender === value && property === "gender") || (person.age === value && property === "age"))
    return filteredPeople
}


console.log(filterByProperty(peopleArray,"gender","male"))
console.log(filterByProperty(peopleArray,"age",22))