import { create } from 'zustand';

const useTaskStore = create((set, get) => ({
/*-----------------
STATE
-----------------*/
//the layout is objects with key value pairs

tasks: [], //empty array of tasks which will have {id, text, and iuvalue (ie. importance/urgency value)}
currentStep: 1, // 1: Mind sweep, 2: Review & Categorize, 3: View Results
currentTaskIndex: 0, //index for Step 2 navigation

})

);