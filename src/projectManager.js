import { createProject } from './projectFactory.js';
import { createTodo } from "./todoFactory.js";

export const projectManager = {
  projects: [],
  currentProject: null,
  
  initializeProjects(savedProjects) {
    // Initialize projects from local storage or create a default project
    // Add them to the projects array
  
    if (savedProjects && Array.isArray(savedProjects) && savedProjects.length > 0) {
      this.projects = savedProjects;
      this.currentProject = this.projects[0]; 
    } else {
      // Create a default project using the projectFactory
      const Inbox = createProject('Inbox');
      this.projects.push(Inbox);
      this.currentProject = Inbox; 
    }
  },
  addProject(project) {
    
    this.projects.push(project);
    
  },

  addTodoToProject(project, todo) {
    project.addTodo(todo);
  },

  switchProject(project) {
    this.currentProject = project;
  },

  getProjects() {
    return this.projects;
  },

  removeProject(projectToRemove) {
    const index = this.projects.indexOf(projectToRemove);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }

    
    if (projectToRemove === this.currentProject) {
      this.currentProject = this.projects[0] || null; // Set the first project as the current one, or null if no projects left
    }
  },
};


//    const project1 = createProject("Household Work");

//     const task1 = createTodo(" Dishses", "Clean the Dishses", "2023-11-28", "high");

//    const task2 = createTodo("vaccum", "vaccumm carpet", "2023-11-28", "high");

//    project1.addTodo(task1);
//    project1.addTodo(task2);

//    const projects = projectManager; 

//     projectManager.initializeProjects();

//    projectManager.addProject(project1); 

//    projectManager.addTodoToProject(project1, task1);
   
//    projectManager.addTodoToProject(project1, task2);

//    console.log( projectManager['projects']); 

//    console.log(projectManager.currentProject);

//    projectManager.switchProject(project1);

//    console.log(projectManager.currentProject);

//    console.log(projectManager.currentProject.removeTodo(task1));

//    console.log(projectManager.currentProject);

//    projectManager.removeProject(project1);

//    console.log( projectManager['projects']); 





