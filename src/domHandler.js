import { projectManager } from './projectManager.js';
import { createTodo } from './todoFactory.js';
import { createProject } from './projectFactory.js';


export const domHandler = {
  initializeEventListeners: () => {

    
    // ... (existing event listeners)

    // Move the code for creating and displaying the "Inbox" project outside the event listeners
    const projectsList = document.querySelector('.projectsList');

    // Create a DOM element for the "Inbox" project
    // const inboxProjectContainer = document.createElement('div');
    // inboxProjectContainer.classList.add('project-container');

    // const inboxProjectHeader = document.createElement('h3');
    // inboxProjectHeader.textContent = 'Inbox';

    // inboxProjectContainer.appendChild(inboxProjectHeader);

    // const deleteButtonInbox = domHandler.createButton('Delete', () => {
    //   // Handle delete action for the "Inbox" project
    //   console.log("Deleting Inbox project is not allowed");
    // });

    // inboxProjectContainer.appendChild(deleteButtonInbox);

    // // Add a click event listener to switch to the "Inbox" project when clicked
    // inboxProjectContainer.addEventListener('click', () => {
    //   projectManager.switchProject(projectManager.projects[0]);
    //   const todosList = document.getElementById('todosList');
    //   todosList.innerHTML = '';

    //   projectManager.currentProject.getTodos().forEach(todo => {
    //     const todoContainer = domHandler.createTodoContainer(todo);
    //     todosList.appendChild(todoContainer);
    //   });
    // });

    // // Append the "Inbox" project to the projects list
    // projectsList.appendChild(inboxProjectContainer);

    // Add the following code to the existing event listeners
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

    submitProjectBtn.addEventListener('click', () => {
      domHandler.handleSubmitProject();
      document.getElementById('projectForm').style.display = 'none'; // Hide project form after submission
    });

    submitTodoBtn.addEventListener('click', () => {
      domHandler.handleSubmitTodo();
      document.getElementById('todoForm').style.display = 'none'; // Hide todo form after submission
    });
  },

  // ... (existing code)
  



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
      <p>Complete: <input type="checkbox" ${todo.isComplete ? 'checked' : ''} id="completeCheckbox"></p>
    `;
    const completeCheckbox = detailsContainer.querySelector('#completeCheckbox');
    completeCheckbox.addEventListener('change', () => {
      todo.updateDetails(undefined, undefined, undefined, undefined, completeCheckbox.checked);
    });
    return detailsContainer;
  };



  const deleteButtonTodo = domHandler.createButton('Delete', () => {
    projectManager.currentProject.removeTodo(todo);
    projectManager.saveProjectsToLocalStorage();
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
  
  
  createProjectContainer: (project) => {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    const projectHeader = document.createElement('h3');
    projectHeader.textContent = project.name;

    projectContainer.appendChild(projectHeader);

    const deleteButtonProject = domHandler.createButton('Delete', () => {
      projectManager.removeProject(project);
      projectManager.saveProjectsToLocalStorage();
      console.log(projectManager.getProjects());
      projectContainer.innerHTML = '';
    });

    projectContainer.appendChild(deleteButtonProject);

    projectContainer.addEventListener('click', () => {
      projectManager.currentProject = project;
      const todosList = document.getElementById('todosList');
      todosList.innerHTML = '';

      project.getTodos().forEach(todo => {
        const todoContainer = domHandler.createTodoContainer(todo);
        todosList.appendChild(todoContainer);
      });
    });

    return projectContainer;
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
        projectManager.saveProjectsToLocalStorage();
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
      projectManager.saveProjectsToLocalStorage();
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
      projectManager.saveProjectsToLocalStorage();
    }

  },
};
