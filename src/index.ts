import { Tree } from "@/one/two/tree/tree"

export class Person {
  sayMyName() {
    return "hello world"
  }
}

const tree = new Tree()
console.log(tree.sayTree())
