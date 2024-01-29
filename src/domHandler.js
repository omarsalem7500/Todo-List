import { projectManager } from './projectManager.js';
import { createTodo } from './todoFactory.js';
import { createProject } from './projectFactory.js';

// export const domHandler = {
    
//   initializeEventListeners: () => {
//     //const projectsList = document.querySelector('.projectsList');
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
//   handleSubmitProject: () => {
//     const projectNameInput = document.getElementById('projectName');
//     const projectName = projectNameInput.value;
//     const projectsList = document.querySelector('.projectsList');

//     if(projectName){
//         const project = createProject(projectName);
//         projectManager.currentProject = project;
//         const projectContainer = document.createElement('div');

//         projectContainer.classList.add('project-container');
    
//         const projectHeader = document.createElement('h3');
//         projectHeader.textContent = projectName;
    
//         projectContainer.appendChild(projectHeader);
//         projectsList.appendChild(projectContainer);

//         const deleteButtonProject = document.createElement("BUTTON");
//         deleteButtonProject.textContent = "Delete";
//         projectContainer.appendChild(deleteButtonProject);
       

//         deleteButtonProject.addEventListener('click', () =>{
//           projectManager.removeProject(project);
//           console.log(projectManager.getProjects());
//           projectContainer.innerHTML = "";
//         });


//         projectManager.addProject(project);

//         projectContainer.addEventListener('click', () => {
//           // Set the clicked project as the current project
//           projectManager.currentProject = project;
//           // Clear the todosList before rendering new todos
//           const todosList = document.getElementById('todosList');
//           todosList.innerHTML = '';
//           // Render todos for the active project
//           project.getTodos().forEach(todo => {
//             const todoContainer = document.createElement('div');
//             const todoInfo = `Title: ${todo.title}, DueDate: ${todo.dueDate}, Priority: ${todo.priority}, Description: ${todo.description}`;
//             todoContainer.textContent = todoInfo;

            
//             const deleteButtonTodo = document.createElement("BUTTON");
//             deleteButtonTodo.textContent = "Delete";
//             todoContainer.appendChild(deleteButtonTodo);
          

//             deleteButtonTodo.addEventListener('click', () =>{
//               projectManager.currentProject.removeTodo(todo);
//               console.log(projectManager.currentProject.getTodos());
//               todosList.removeChild(todoContainer);
//               //todoContainer.innerHTML = "";
//             });
//             todosList.appendChild(todoContainer);
//           });

//         });

//         domHandler.clearForms();
//     }
//   },

//   handleSubmitTodo: () => {
//     const todosList = document.getElementById('todosList');
//     const titleInput = document.getElementById('todoTitle');
//     const descriptionInput = document.getElementById('todoDescription');
//     const dueDateInput = document.getElementById('todoDueDate');
//     const priorityInput = document.getElementById('todoPriority');

//     const title = titleInput.value;
//     const description = descriptionInput.value;
//     const dueDate = dueDateInput.value;
//     const priority = priorityInput.value;

//     if (title && description && dueDate && priority) {
//       const newTodo = createTodo(title, description, dueDate, priority);
//       console.log("The current project is" + projectManager.currentProject.name);
//       projectManager.addTodoToProject(projectManager.currentProject, newTodo);
//       const todoContainer = document.createElement('div');
//       const todoInfo = `Title: ${newTodo.title}, DueDate: ${newTodo.dueDate}, Priority: ${newTodo.priority}, Description: ${newTodo.description}`;
//       todoContainer.textContent = todoInfo;
//       //todosList.appendChild(todoContainer);

//       const deleteButtonTodo = document.createElement("BUTTON");
//       deleteButtonTodo.textContent = "Delete";
//       todoContainer.appendChild(deleteButtonTodo);
     

//       deleteButtonTodo.addEventListener('click', () =>{
//         projectManager.currentProject.removeTodo(newTodo);
//         console.log(projectManager.currentProject.getTodos());
//         todosList.removeChild(todoContainer);
//         //todoContainer.innerHTML = "";
//       });

//        todosList.appendChild(todoContainer);
      
//     }

//     domHandler.clearForms();
    
//   },



  


// };

// import { projectManager } from './projectManager.js';
// import { createTodo, createProject } from './todoFactory.js';

export const domHandler = {
  initializeEventListeners: () => {
    const addProjectBtn = document.getElementById('addProjectBtn');
    const addTodoBtn = document.getElementById('addTodoBtn');

    addProjectBtn.addEventListener('click', () => {
      domHandler.clearForms();
      document.getElementById('projectForm').style.display = 'block';
      document.getElementById('todoForm').style.display = 'none'; // Hide todo form
    });

    addTodoBtn.addEventListener('click', () => {
      domHandler.clearForms();
      document.getElementById('todoForm').style.display = 'block';
      document.getElementById('projectForm').style.display = 'none'; // Hide project form
    });

    const submitProjectBtn = document.getElementById('submitProjectBtn');
    const submitTodoBtn = document.getElementById('submitTodoBtn');

    submitProjectBtn.addEventListener('click', () => {
      domHandler.handleSubmitProject();
      document.getElementById('projectForm').style.display = 'none'; // Hide project form after submission
    });

    submitTodoBtn.addEventListener('click', () => {
      domHandler.handleSubmitTodo();
      document.getElementById('todoForm').style.display = 'none'; // Hide todo form after submission
    });
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

  createButton: (text, clickHandler) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    console.log("delete button created");
    return button;
  },

  // createTodoContainer: (todo) => {
  //   const todoContainer = document.createElement('div');
  //   todoContainer.classList.add('todo-container');

  //   const todoInfo = `Title: ${todo.title}, DueDate: ${todo.dueDate}, Priority: ${todo.priority}, Description: ${todo.description}`;
  //   todoContainer.textContent = todoInfo;

  //   const deleteButtonTodo = domHandler.createButton('Delete', () => {
  //     console.log("delete button created");
  //     projectManager.currentProject.removeTodo(todo);
  //     console.log(projectManager.currentProject.getTodos());
  //     todosList.removeChild(todoContainer);
  //   });

  //   // todoContainer.appendChild(deleteButtonTodo);

  //   const editButtonTodo = domHandler.createButton('Edit', () => {
  //     console.log("edit button created");
  //     document.getElementById('todoForm').style.display = 'block';
  //     // const title = titleInput.value;
  //     // const description = descriptionInput.value;
  //     // const dueDate = dueDateInput.value;
  //     //  const priority = priorityInput.value;
  //     // projectManager.currentProject.updateDetails(title, description, dueDate, priority);
  //     console.log(projectManager.currentProject.getTodos());
      
  //   });
  //   console.log("delete button created");
  //   todoContainer.appendChild(deleteButtonTodo);
  //   todoContainer.appendChild(editButtonTodo);

  //   return todoContainer;
  // },

   createTodoContainer: (todo) => {
    const todoContainer = document.createElement('div');
  todoContainer.classList.add('todo-container');

  const displayDetails = () => {
    const detailsContainer = document.createElement('div');
    detailsContainer.innerHTML = `
      <p>Title: ${todo.title}</p>
      <p>Due Date: ${todo.dueDate}</p>
      <p>Priority: ${todo.priority}</p>
      <p>Description: ${todo.description}</p>
    `;
    return detailsContainer;
  };

  const deleteButtonTodo = domHandler.createButton('Delete', () => {
    projectManager.currentProject.removeTodo(todo);
    console.log(projectManager.currentProject.getTodos());
    todosList.removeChild(todoContainer);
  });

  const editButtonTodo = domHandler.createButton('Edit', () => {
    const editableForm = document.createElement('form');
    editableForm.innerHTML = `
      <label for="editTodoTitle">Title:</label>
      <input type="text" id="editTodoTitle" value="${todo.title}" required>

      <label for="editTodoDescription">Description:</label>
      <textarea id="editTodoDescription" rows="3">${todo.description}</textarea>

      <label for="editTodoDueDate">Due Date:</label>
      <input type="date" id="editTodoDueDate" value="${todo.dueDate}" required>

      <label for="editTodoPriority">Priority:</label>
      <select id="editTodoPriority" required>
        <option value="low" ${todo.priority === 'low' ? 'selected' : ''}>Low</option>
        <option value="medium" ${todo.priority === 'medium' ? 'selected' : ''}>Medium</option>
        <option value="high" ${todo.priority === 'high' ? 'selected' : ''}>High</option>
      </select>

      <button type="button" id="submitEditTodoBtn">Update</button>
    `;

    // Event listener for the Update button in the editable form
    editableForm.querySelector('#submitEditTodoBtn').addEventListener('click', () => {
      const updatedTitle = editableForm.querySelector('#editTodoTitle').value;
      const updatedDescription = (editableForm.querySelector('#editTodoDescription').value  || todo.dueDate);
      const updatedDueDate = editableForm.querySelector('#editTodoDueDate').value;
      const updatedPriority = editableForm.querySelector('#editTodoPriority').value;

      // Update the todo details using the existing updateDetails method
      // projectManager.currentProject.todo.updateDetails(updatedTitle, updatedDescription, updatedDueDate, updatedPriority);
        todo.updateDetails(updatedTitle, updatedDescription, updatedDueDate, updatedPriority);


      const todoInfo = `Title: ${updatedTitle}, DueDate: ${updatedDueDate}, Priority: ${updatedPriority}, Description: ${updatedDescription}`;
       todoContainer.textContent = todoInfo;

      // Switch back to displaying todo details
      todoContainer.innerHTML = '';
      todoContainer.appendChild(displayDetails());
      todoContainer.appendChild(editButtonTodo);
      todoContainer.appendChild(deleteButtonTodo);
    });

    // Replace the content of the todoContainer with the editable form
    todoContainer.innerHTML = '';
    todoContainer.appendChild(editableForm);
  });

  todoContainer.appendChild(displayDetails());
  todoContainer.appendChild(editButtonTodo);
  todoContainer.appendChild(deleteButtonTodo);

  return todoContainer;
  },
  
  

  

  handleSubmitProject: () => {
    const projectNameInput = document.getElementById('projectName');
    const projectName = projectNameInput.value;
    const projectsList = document.querySelector('.projectsList');

    if (projectName) {
      const project = createProject(projectName);
      projectManager.currentProject = project;

      const projectContainer = document.createElement('div');
      projectContainer.classList.add('project-container');

      const projectHeader = document.createElement('h3');
      projectHeader.textContent = projectName;

      projectContainer.appendChild(projectHeader);

      const deleteButtonProject = domHandler.createButton('Delete', () => {
        projectManager.removeProject(project);
        console.log(projectManager.getProjects());
        projectContainer.innerHTML = '';
      });

      projectContainer.appendChild(deleteButtonProject);
      projectManager.addProject(project);

      projectContainer.addEventListener('click', () => {
        projectManager.currentProject = project;
        const todosList = document.getElementById('todosList');
        todosList.innerHTML = '';

        project.getTodos().forEach(todo => {
          const todoContainer = domHandler.createTodoContainer(todo);
          todosList.appendChild(todoContainer);
        });
      });

      projectsList.appendChild(projectContainer);
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
      projectManager.addTodoToProject(projectManager.currentProject, newTodo);

      const todoContainer = domHandler.createTodoContainer(newTodo);
      todosList.appendChild(todoContainer);
      domHandler.clearForms();
    }
  },
};