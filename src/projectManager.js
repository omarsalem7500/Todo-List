import { createProject } from './projectFactory.js';
import { createTodo } from './todoFactory.js';

export const projectManager = {
  projects: [],
  currentProject: null,


  // saveProjectsToLocalStorage() {
  //   localStorage.setItem('projects', JSON.stringify(this.projects));
  // },

  // loadProjectsFromLocalStorage() {
  //   const savedProjects = JSON.parse(localStorage.getItem('projects'));
  //   if (savedProjects) {
  //     this.initializeProjects(savedProjects);
  //   }
  // },

  saveProjectsToLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  },

  loadProjectsFromLocalStorage() {
    const savedProjects = JSON.parse(localStorage.getItem('projects'));
    if (savedProjects) {
      // Recreate the project objects with their methods
      this.projects = savedProjects.map(projectData => {
        const project = createProject(projectData.name);
        project.todos = projectData.todos.map(todoData => {
          return createTodo(todoData.title, todoData.description, todoData.dueDate, todoData.priority, todoData.isComplete);
        });
        return project;
      });
      this.currentProject = this.projects[0];
    }
  },
  
  initializeProjects(savedProjects) {
    if (savedProjects && Array.isArray(savedProjects) && savedProjects.length > 0) {
      this.projects = savedProjects;
      this.currentProject = this.projects[0];
    } else {
      const Inbox = createProject('Inbox');
      console.log(Inbox);
      this.projects.push(Inbox);
      this.currentProject = Inbox;
    }

    console.log("After initializeProjects, currentProject:", this.currentProject);
  },
  addProject(project) {
    
    this.projects.push(project);
    
  },

  addTodoToProject(project, todo) {
  console.log("Adding todo to project:", project);
  console.log("Todo to add:", todo);
    project.addTodo(todo);
  },

  switchProject(project) {
    this.currentProject = project;
  },

  getProjects() {
    return this.projects;
  },

  // removeProject(projectToRemove) {
  //   const index = this.projects.indexOf(projectToRemove);
  //   if (index !== -1) {
  //     this.projects.splice(index, 1);
  //   }

    
  //   if (projectToRemove === this.currentProject) {
  //     this.currentProject = this.projects[0] || null; // Set the first project as the current one, or null if no projects left
  //   }
    
  // },

  removeProject(projectToRemove) {
    const index = this.projects.indexOf(projectToRemove);
    if (index !== -1) {
      // Remove the project from the projects array
      this.projects.splice(index, 1);
  
      // Loop through all projects and delete todos associated with the removed project
      this.projects.forEach(project => {
        project.getTodos().forEach(todo => {
          const todoIndex = project.todos.indexOf(todo);
          if (todoIndex !== -1) {
            project.todos.splice(todoIndex, 1);
          }
        });
      });
    }
  
    if (projectToRemove === this.currentProject) {
      this.currentProject = this.projects[0] || null;
    }
  
    // Save the changes to local storage
    this.saveProjectsToLocalStorage();
  },
  
};






