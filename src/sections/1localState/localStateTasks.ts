const localStateTasks: string[] = [
  "In the PostSearch component, create a state called 'search' using useState. Set its default value to an empty string.",
  "Add an <input> element in the return part of the component and connect its value to the 'search' state.",
  "Set the onChange event handle on the input element to call a function that sets the state to e.currentTarget.value. I.e. you must define this function.",
  `Connect the input to the argument passed to useFetch so that it is
        '/posts?userId=searchVal' when the search value is not an empty string and only
        '/posts' when it is an empty string.`,
  "In the createContent function, use the loading and error variables returned from the useFetch hook to display a 'loading' string or the error message for loading or errors, respectively.",
];
export default localStateTasks;
