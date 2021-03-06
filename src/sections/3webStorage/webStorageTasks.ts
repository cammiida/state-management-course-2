const webStorageTasks: string[] = [
  `
        In the TaskList component, add a useState that keeps track of whether a
        status is checked or not. Initialize the useState to the tasks prop,
        mapped to add a 'checked' field to each task.
      `,
  `
        Add a useEffect with the newly created status in the dependency array.
        Inside it, set a localStorage value through 'localStorage.setItem' with
        'tasks' as the key, and the tasks state as the data. <br />
        Hint: you might have to stringify the data
      `,
  `
        In the same component, create a 'handleTaskToggle' method that takes the id
        of a task as input. Add the method to the onChange event on the checkbox
        input. Inside the method, use the setState method for the state defined
        above, find the task with that id and update it to the opposite of the
        previous value.
      `,
  `
        Great, we have successfully saved the tasks with checked status to
        localstorage (check the application tab in the developer tools). Now we
        just need to remember these previously saved tasks when mounting the
        component. To do this, we will add an initialize method and call it
        inside the initialization of the state. In the implementation of this method, we want to check
        whether there is any data in localstorage. If there is, use that, and if
        not, return the mapping of the incoming tasks as before.

        We should probably compare and combine the two states, but let's keep it simple for now.
     `,
  `
        Update the mapped value in the return of the component to the new state
        instead of the tasks prop. And of course, we need to add the checked prop to the checkbox input too!
      `,
  `
       One last thing: Because TasksList is being used by several components, the localStorage key "tasks" 
       will crash, and wrong tasks will be loaded. We should therefore also supply the localStorage key 
       from the component that uses the TasksList component. Add this to the props in the TaskList component
       and supply it from all other components that are using it. Afterwards, use the prop as the key for the
       localStorage instead of the string "tasks".
      `,
];

export default webStorageTasks;
