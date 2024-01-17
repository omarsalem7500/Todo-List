import { format, parseISO } from 'date-fns';

export function createTodo(title, description, dueDate, priority) {
    const parsedDueDate = parseISO(dueDate);
    const formattedDueDate = format(parsedDueDate, "MMM d, yyyy h:mm a");
    return {
      title,
      description,
      dueDate: formattedDueDate,
      priority,
      isComplete: false,

      updateDetails(newTitle, newDescription, newDueDate, newPriority) {
        this.title = newTitle || this.title;
        this.description = newDescription || this.description;
        this.dueDate = newDueDate || this.dueDate;
        this.priority = newPriority || this.priority;

      },
      
      markAsComplete() {
        this.isComplete = true; 
      },
      
    };
  }



    
