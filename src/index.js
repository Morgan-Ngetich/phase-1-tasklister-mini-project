document.addEventListener("DOMContentLoaded", () => {
  // your code here
    
  //Getting the new-task-description ID
  const taskForm = document.getElementById('create-task-form')
  const taskList = document.getElementById('tasks')
  const taskDescription = document.getElementById('new-task-description')


  //Prevent the description from reloading the page
   taskForm.addEventListener('submit', function(event) {
    event.preventDefault()
   
 



  //Create a new list from the task-description
  const taskItem = document.createElement('li') 
  taskItem.textContent = taskDescription.value //After selecting the input element, '.value' is used to access the current value (i.e., the text input) of that input field.

  //append the new task to the task list
  taskList.appendChild(taskItem)
  
 

//Could also be done this way.
// const taskList = document.getElementById('new-task-description'); 
// const taskItem = document.createElement('li');
// taskItem.textContent = taskDescription;
// taskList.appendChild(taskItem);
//The appendChild method to add it as the last child of an existing element with the id ''




//Create a button to remove tasks
const removeButton = document.createElement('button')
removeButton.textContent = 'Remove'
removeButton.addEventListener( 'click', () => taskList.removeChild(taskItem))
removeButton.style.backgroundColor = "red"
//Append the task and remove button to the list
taskItem.appendChild(removeButton)
taskList.appendChild(taskItem)

//Clear the Input filed
document.getElementById('new-task-description').value = ''
})
});



