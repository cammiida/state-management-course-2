import { Task } from "../types";

const localStateTasks: Task[] = [
  {
    id: 1,
    text: `Create a state using useState in the PostSearch component. Add an input element in the return and connect its 
    value to this state. Set the onChange property on the input element to a function that sets the state to 
    e.currentTarget.value`,
  },
  {
    id: 2,
    text: `Connect the input to the argument passed to useFetch so that it is
        '/posts?userId=searchVal' when the search value is not empty and only
        '/posts' if it is.`,
  },
  {
    id: 3,
    text: "Use the loading and error variables returned from the useFetch hook to display a 'loading' string or the error message for loading or errors, respectively.",
  },
];
export default localStateTasks;
