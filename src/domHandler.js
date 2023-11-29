import { createProject } from './projectFactory.js';
import { createTodo } from "./todoFactory.js";
import { projectManager } from './projectManager.js';



export const domHandler = {
  renderProject(project) {
    const projectsList = document.querySelector('.projectsList');

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    const projectHeader = document.createElement('h3');
    projectHeader.textContent = project.name;
    projectContainer.appendChild(projectHeader);

    // Attach click event to change the active project
    projectContainer.addEventListener('click', () => {
      projectManager.currentProject = project;
      this.renderTodosForActiveProject();
    });

    projectsList.appendChild(projectContainer);
  },

  renderTodosForActiveProject() {
    // const activeProjectTodos = document.querySelector('.activeProjectTodos');
    
   
    
    const todosList = document.querySelector('.todosList');

    
   

    // Clear existing content
    todosList.innerHTML = '';

    // Render todos for the active project
    if (projectManager.currentProject) {
      const ulElement = document.createElement('ul');

      projectManager.currentProject.getTodos().forEach(todo => {
        const liElement = document.createElement('li');
        const todoInfo = `Title: ${todo.title}, Name: ${todo.dueDate}`;
        liElement.textContent = todoInfo;
        ulElement.appendChild(liElement);
      });

      todosList.appendChild(ulElement);

    }

    const projectsList = document.querySelector('.projectsList');

    
   

    
    projectsList.innerHTML = '';

    projectManager.projects.forEach(project => {
      this.renderProject(project);
    });
  },

  // ... (other DOM-related functions)
};
