import { createProject } from './projectFactory.js';
import { createTodo } from "./todoFactory.js";
import { projectManager } from './projectManager.js';
import { domHandler } from './domHandler.js';



const task1 = createTodo(" Dishses", "Clean the Dishses", "2023-11-28", "high");

const task2 = createTodo("vaccum", "vaccumm carpet", "2023-11-28", "low");

const task3 = createTodo("dust", "dust tables", "2023-11-29", "medium");


const task4 = createTodo("dinner", "cook dinner", "2023-11-30", "high");


const task5 = createTodo("groceries", "buy groceries", "2023-11-30", "low");

const task6 = createTodo("brush teeth", "brush teeth", "2023-11-30", "low");


const project1 = createProject('Project 1');
const project2 = createProject('Project 2');
const project3 = createProject('Project 3');

projectManager.addProject(project1);
projectManager.addProject(project2);
projectManager.addProject(project3);

 projectManager.initializeProjects();


projectManager.addTodoToProject(project1, task1);
projectManager.addTodoToProject(project1, task2);
projectManager.addTodoToProject(project2, task3);
projectManager.addTodoToProject(project2, task4);
projectManager.addTodoToProject(project3, task5);
projectManager.addTodoToProject(project3, task6);

// Set an initial active project
// projectManager.currentProject = project1;



projectManager.addTodoToProject(projectManager.currentProject, task6);




// Example of rendering all projects and todos for the active project
domHandler.renderTodosForActiveProject();




console.log(project2.getTodos());
console.log(project3.getTodos());