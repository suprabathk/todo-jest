/* eslint-disable no-undef */
const todo = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todo();
const today = new Date();
const yesterday = new Date(new Date().setDate(today.getDate() - 1));
const tommorow = new Date(new Date().setDate(today.getDate() + 1));

describe("TODO test suite", () => {
  beforeAll(() => {
    add({
      title: "Wake Up",
      dueDate: today.toLocaleDateString("en-CA"),
      completed: false,
    });
  });
  test("Add task", () => {
    let lengthBefore = all.length;
    add({
      title: "Eat",
      dueDate: today.toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(lengthBefore + 1);
  });
  test("Mark task as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Over due tasks", () => {
    const overduecount = overdue(all).length;
    add({
      title: "work",
      dueDate: yesterday.toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(overdue(all).length).toBe(overduecount + 1);
  });
  test("Due today tasks", () => {
    const duetodaycount = dueToday(all).length;
    add({
      title: "work1",
      dueDate: today.toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueToday(all).length).toBe(duetodaycount + 1);
  });
  test("Due later tasks", () => {
    const duelatercount = dueLater(all).length;
    add({
      title: "work2",
      dueDate: tommorow.toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueLater(all).length).toBe(duelatercount + 1);
  });
});
