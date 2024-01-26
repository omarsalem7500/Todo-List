import { projectManager } from './projectManager.js';
import { createTodo } from './todoFactory.js';
import { createProject } from './projectFactory.js';

export const domHandler = {
    
  initializeEventListeners: () => {
    //const projectsList = document.querySelector('.projectsList');
    const addProjectBtn = document.getElementById('addProjectBtn');
    const addTodoBtn = document.getElementById('addTodoBtn');

    addProjectBtn.addEventListener('click', () => {
      domHandler.clearForms();
      document.getElementById('projectForm').style.display = 'block';
    });

    addTodoBtn.addEventListener('click', () => {
      domHandler.clearForms();
      document.getElementById('todoForm').style.display = 'block';
    });

    const submitProjectBtn = document.getElementById('submitProjectBtn');
    const submitTodoBtn = document.getElementById('submitTodoBtn');

    submitProjectBtn.addEventListener('click', domHandler.handleSubmitProject);
    submitTodoBtn.addEventListener('click', domHandler.handleSubmitTodo);
  },

  clearForms: () => {
    const projectForm = document.getElementById('projectForm');
    const todoForm = document.getElementById('todoForm');
    projectForm.querySelector('#projectName').value = '';
    todoForm.querySelector('#todoTitle').value = '';
    todoForm.querySelector('#todoDescription').value = '';
    todoForm.querySelector('#todoDueDate').value = '';
    todoForm.querySelector('#todoPriority').value = '';
  },
  handleSubmitProject: () => {
    const projectNameInput = document.getElementById('projectName');
    const projectName = projectNameInput.value;
    const projectsList = document.querySelector('.projectsList');

    if(projectName){
        const project = createProject(projectName);
        projectManager.currentProject = project;
        const projectContainer = document.createElement('div');

        projectContainer.classList.add('project-container');
    
        const projectHeader = document.createElement('h3');
        projectHeader.textContent = projectName;
    
        projectContainer.appendChild(projectHeader);
        projectsList.appendChild(projectContainer);

        projectManager.addProject(project);

        projectContainer.addEventListener('click', () => {
          // Set the clicked project as the current project
          projectManager.currentProject = project;
          // Clear the todosList before rendering new todos
          const todosList = document.getElementById('todosList');
          todosList.innerHTML = '';
          // Render todos for the active project
          project.getTodos().forEach(todo => {
            const todoContainer = document.createElement('div');
            const todoInfo = `Title: ${todo.title}, DueDate: ${todo.dueDate}, Priority: ${todo.priority}, Description: ${todo.description}`;
            todoContainer.textContent = todoInfo;
            todosList.appendChild(todoContainer);
          });

        });

        domHandler.clearForms();
    }
  },

  handleSubmitTodo: () => {
    const todosList = document.getElementById('todosList');
    const titleInput = document.getElementById('todoTitle');
    const descriptionInput = document.getElementById('todoDescription');
    const dueDateInput = document.getElementById('todoDueDate');
    const priorityInput = document.getElementById('todoPriority');

    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;

    if (title && description && dueDate && priority) {
      const newTodo = createTodo(title, description, dueDate, priority);
      console.log("The current project is" + projectManager.currentProject.name);
      projectManager.addTodoToProject(projectManager.currentProject, newTodo);
      const todoContainer = document.createElement('div');
      const todoInfo = `Title: ${newTodo.title}, DueDate: ${newTodo.dueDate}, Priority: ${newTodo.priority}, Description: ${newTodo.description}`;
      todoContainer.textContent = todoInfo;
      todosList.appendChild(todoContainer);
      
    }

    domHandler.clearForms();
    
  },

  

//   renderTodosForActiveProject: () => {
//     const todosList = document.getElementById('todosList');
//     todosList.innerHTML = ''; // Clear existing content

//     projectManager.currentProject.getTodos().forEach(todo => {
//       domHandler.renderTodo(todo);
//     });
//   },
};

  