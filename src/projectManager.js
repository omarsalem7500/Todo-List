import { createProject } from './projectFactory.js';
import { createTodo } from './todoFactory.js';

export const projectManager = {
  projects: [],
  currentProject: null,
  
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







