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

//STEP 1: MIND SWEEP

//addTask accepts text as an arguement
addTask: (text) => {
    const newTask = { 
        id: Date.now(),  
        text, //shorthand because the key and varaible name are the same
        important: false,
        urgent: false 
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

//delete task
deleteTask: (id) => 
    set((state) => ({
        //create an array including items that are not the current id
        tasks: state.tasks.filter((t) => t.id !== id),
    })),

// STEP 2: REVIEW & CATEGORIZE

toggleImportant: (id) =>
    set((state) => ({
        tasks: state.tasks.map((t) => 
            //if the task id matches, copy all of the task's properties, then invert the current setting for important, if id does not match return task as is
            t.id === id ? {...t, important: !t.important } : t
        ),
    })),

toggleUrgent: (id) => 
    set((state) => ({
        //as above but using urgent
        tasks: state.tasks.map((t) =>
        t.id === id ? {...t, urgent: !t.urgent } : t
        ),
    })),
})

);