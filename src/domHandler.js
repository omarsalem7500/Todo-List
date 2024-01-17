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

  