import { createTodo } from "./todoFactory.js";

export function createProject(name) {
    return {
      name,
      todos: [],
      
      addTodo(todo) {
        this.todos.push(todo);
      },
      
      removeTodo(todo) {
        const index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
      },
      
      getTodos() {
        return this.todos;
      },
      
      // other methods
    };
  }



//   const project1 = createProject("Household Work");

//   const task1 = createTodo(" Dishses", "Clean the Dishses", "2023-11-28", "high");

//   const task2 = createTodo("vaccum", "vaccumm carpet", "2023-11-28", "high");

//   project1.addTodo(task1);
//   project1.addTodo(task2);

//   console.log(project1.getTodos());

// project1.removeTodo(task1);

// console.log(project1.getTodos());



