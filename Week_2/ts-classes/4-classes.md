# Assignment 4: Task Tracker App with Classes and Async Data

## Project

Build a small TypeScript task tracker app.

The app should create users and tasks, manage task state through class methods, simulate async loading and saving, and print results to the console. The goal is to show that you can structure a slightly larger TypeScript program with clear responsibilities and strong typing.

## App Requirements

Your app must:

1. Create tasks for a small team.
2. Assign tasks to users.
3. Update task status over time.
4. Prevent direct access to internal data that should be controlled by class methods.
5. Simulate loading tasks from an async source.
6. Simulate saving or updating tasks through an async service.
7. Handle both successful and failed async operations.
8. Print a final summary of current tasks grouped or filtered in a useful way.

## TypeScript Concepts That Must Be Demonstrated

Your solution must clearly demonstrate:

- classes
- constructors
- public
- private
- protected or a clear explanation of why it was unnecessary
- readonly
- typed methods
- typed class properties
- Promise<T>
- async
- await
- typed error or failure handling
- separated files or clearly separated sections for models, services, and app flow

## Required Features

### Class Design
Create classes for:
- User
- Task
- TaskManager

Your design must include:
- readonly values that should not change after creation
- private data that should only be changed through methods
- methods that enforce valid updates

### Task Behavior
Your app must support:
- creating a task
- assigning a task
- completing a task
- listing tasks by status
- printing task summaries

### Async Service Layer
Create async functions that simulate:
- fetching tasks
- saving a task
- failing to fetch or save in at least one scenario

These functions must return correctly typed promises.

### App Flow
Your main app logic must:
- create sample users
- create or load tasks
- call async service functions with await
- handle success and failure cases
- print meaningful output at each stage

## Output Expectations

When the program runs, it should print:
- an initial task list
- at least one update after assignment or completion
- at least one successful async operation result
- at least one handled failure case
- a final summary grouped by status, assignee, or priority

## Reflection Questions

1. Why should some class properties be private?
2. Why is readonly useful in this app?
3. What does Promise<Task[]> communicate to another developer?
4. Why is async and await easier to follow in this kind of program?
5. What problems can still happen at runtime even if TypeScript types are correct?
6. Why is it helpful to separate models, services, and app logic?

## Extension

Add typed filters for status and priority, then create an async function that returns only matching tasks.