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





