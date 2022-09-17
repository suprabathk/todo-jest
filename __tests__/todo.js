/* eslint-disable no-undef */
const todo = require("../todo");
const { all, add, markAsComplete } = todo();

describe("TODO test suite", () => {
  beforeAll(() => {
    add({
      title: "Wake Up",
      dueDate: "2022-09-17",
      completed: true,
    });
  });
  test("Add task", () => {
    let lengthBefore = all.length;
    add({
      title: "Eat",
      dueDate: "2022-09-17",
      completed: false,
    });
    expect(all.length).toBe(lengthBefore + 1);
  });
  test("Mark task as complete", () => {
    all[0].completed = false;
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
