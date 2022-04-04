// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');
    
    // For the output:
    var message = '';

    if (task.value) {
    
        // Add the item to the array:
        tasks.push(task.value);
        
        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
        
    } // End of task.value IF.
    console.log(tasks);
    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

// Function called when the button is pressed
// Function deletes duplicates from the list
function removeDuplicates(){
    let tasks_1 = Array.from(new Set(tasks));
    message = '<h2>To-Do</h2><ol>';
    for (var i = 0, count = tasks_1.length; i < count; i++) {
        message += '<li>' + tasks_1[i] + '</li>';
    }
    message += '</ol>';
    console.log(tasks_1);
    output.innerHTML = message;

    return false;
}

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;