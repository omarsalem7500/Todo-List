// import { projectManager } from './projectManager.js';
// import { createTodo } from './todoFactory.js';
// import { createProject } from './projectFactory.js';

// export const domHandler = {
//   initializeEventListeners: () => {
//     const addProjectBtn = document.getElementById('addProjectBtn');
//     const addTodoBtn = document.getElementById('addTodoBtn');

//     addProjectBtn.addEventListener('click', () => {
//       domHandler.clearForms();
//       document.getElementById('projectForm').style.display = 'block';
//     });

//     addTodoBtn.addEventListener('click', () => {
//       domHandler.clearForms();
//       document.getElementById('todoForm').style.display = 'block';
//     });

//     const submitProjectBtn = document.getElementById('submitProjectBtn');
//     const submitTodoBtn = document.getElementById('submitTodoBtn');

//     submitProjectBtn.addEventListener('click', domHandler.handleSubmitProject);
//     submitTodoBtn.addEventListener('click', domHandler.handleSubmitTodo);
//   },

//   clearForms: () => {
//     const projectForm = document.getElementById('projectForm');
//     const todoForm = document.getElementById('todoForm');
//     projectForm.querySelector('#projectName').value = '';
//     todoForm.querySelector('#todoTitle').value = '';
//     todoForm.querySelector('#todoDescription').value = '';
//     todoForm.querySelector('#todoDueDate').value = '';
//     todoForm.querySelector('#todoPriority').value = '';
//   },

//   renderProject: (project) => {
//     const projectsList = document.querySelector('.projectsList');
//     const projectContainer = domHandler.createProjectElement(project);

//     projectsList.appendChild(projectContainer);

//     projectContainer.addEventListener('click', () => {
//       projectManager.currentProject = project;
//       // domHandler.renderTodosForActiveProject();
//     });

//     return projectContainer;
//   },

//   createProjectElement: (project) => {
//     const projectsList = document.querySelector('.projectsList');
//     const projectContainer = document.createElement('div');

//     projectContainer.classList.add('project-container');

//     const projectHeader = document.createElement('h3');
//     projectHeader.textContent = project;

//     projectContainer.appendChild(projectHeader);
//     projectsList.appendChild(projectContainer);

//     return projectContainer;
//   },

//   renderTodosForActiveProject: () => {
//     const todosList = document.getElementById('todosList');
//     todosList.innerHTML = ''; // Clear existing content

//     projectManager.currentProject.getTodos().forEach(todo => {
//       domHandler.renderTodo(todo);
//     });
//   },

//   createTodoElement: (todo) => {
//     const todoContainer = document.createElement('div');
//     const todoInfo = `Title: ${todo.title}, DueDate: ${todo.dueDate}, Priority: ${todo.priority}, Description: ${todo.description}`;
//     todoContainer.textContent = todoInfo;

//     return todoContainer;
//   },

//   renderTodo: (todo) => {
//     const todosList = document.getElementById('todosList');
//     todosList.appendChild(domHandler.createTodoElement(todo));
//   },

//   handleSubmitProject: () => {
//     const projectNameInput = document.getElementById('projectName');
//     const projectName = projectNameInput.value;

//     if (projectName) {
//       const newProject = domHandler.renderProject(projectName);
//       const projectData = createProject(projectName);

//       projectManager.addProject(projectData);
//       projectManager.currentProject = projectData;
//     }

//     domHandler.clearForms();
//   },

//   handleSubmitTodo: () => {
//     const titleInput = document.getElementById('todoTitle');
//     const descriptionInput = document.getElementById('todoDescription');
//     const dueDateInput = document.getElementById('todoDueDate');
//     const priorityInput = document.getElementById('todoPriority');

//     const title = titleInput.value;
//     const description = descriptionInput.value;
//     const dueDate = dueDateInput.value;
//     const priority = priorityInput.value;

//     if (title && dueDate && priority) {
//       const newTodo = createTodo(title, description, dueDate, priority);
//       projectManager.addTodoToProject(projectManager.currentProject, newTodo);
//       domHandler.renderTodo(newTodo);
//     }

//     domHandler.clearForms();
//   },
// };
