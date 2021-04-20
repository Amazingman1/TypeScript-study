class Person {
  // public name :string
  constructor(public name:string) {
    // this.name = name
  }
}

// const person = new Person('json')
// console.log(person.name);

class Teacher extends Person {
  constructor(public age: number) {
    super('json')
  }
}
const teacher = new Teacher(19)
console.log(teacher.age);
console.log(teacher.name);
