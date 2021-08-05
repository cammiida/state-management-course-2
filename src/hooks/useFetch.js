import { useEffect, useReducer } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const reducer = (state, action) => {
  switch (action.type) {
    case "reqStart":
      return { ...state, loading: true };
    case "reqError ":
      return { data: null, loading: false, error: action.error };
    case "reqSuccess":
      return { data: action.data, loading: false, error: null };
    default:
      return state;
  }
};

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function init() {
      try {
        dispatch({ type: "reqStart" });
        const res = await fetch(BASE_URL + url);

        if (res.ok) {
          const data = await res.json();
          dispatch({ type: "reqSuccess", data: data });
        } else {
          throw res;
        }
      } catch (e) {
        dispatch({ type: "reqError", error: e });
      }
    }
    init();
  }, [url]);

  return state;
};

export default useFetch;
