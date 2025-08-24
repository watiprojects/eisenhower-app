import { create } from 'zustand';

const useTaskStore = create((set, get) => ({
/*-----------------
STATE
-----------------*/
//the layout is objects with key value pairs

tasks: [], //empty array of tasks which will have {id, text, and iuvalue (ie. importance/urgency value)}
currentStep: 1, // 1: Mind sweep, 2: Review & Categorize, 3: View Results
currentTaskIndex: 0, //index for Step 2 navigation

/*-----------------
ACTIONS
-----------------*/

//addTask accepts text as an arguement
addTask: (text) => {
    const newTask = { 
        id: Date.now(),  
        text, //shorthand because the key and varaible name are the same
        iuvalue: []
    };

    set({
        //update tasks array
        //grab current tasks array from the store
        //make a new array with all the old taks + the new one
        tasks: [...get().tasks, newTask] 
    });
},
//editTask accepts the arguments id and newTest
editTask: (id, newText) => {
    set({
        //loop through all tasks using map

        tasks: get().tasks.map(task =>
            task.id === id? { 
                //if true return new task object with the same properties, but replace text with newText
                ...task, text: newText 
            } : task //if not true, just return the original task
        )
    });
},

})

);