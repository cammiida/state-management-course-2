const localStateTasks = [
  {
    id: 1,
    text: "Create an input connected to a state using useState",
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
