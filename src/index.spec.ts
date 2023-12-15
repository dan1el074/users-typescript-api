import { Person } from "./index"

it("shoud say hello", () => {
  expect(new Person().sayMyName()).toBe("hello world")
})
