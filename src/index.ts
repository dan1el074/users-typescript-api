export class Person {
  sayMyName() {
    return "hello world"
  }
}

const person = new Person()
console.log(person.sayMyName())
