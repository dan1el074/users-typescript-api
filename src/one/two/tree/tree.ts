import { Person } from "@/index"

export class Tree {
  sayTree() {
    const person = new Person()
    return person.sayMyName()
  }
}
