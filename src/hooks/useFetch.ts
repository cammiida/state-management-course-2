import { useEffect, useReducer } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";

type FetchState = {
  data: any;
  loading: boolean;
  error: Error | null;
};

type FetchAction =
  | {
      type: "reqStart";
    }
  | { type: "reqSuccess"; data: any }
  | { type: "reqError"; error: Error | null };

type Action = {
  type: FetchAction;
};

const initialState: FetchState = {
  data: null,
  loading: false,
  error: null,
};

const reducer = (state: FetchState, action: FetchAction): FetchState => {
  switch (action.type) {
    case "reqStart":
      return { ...state, loading: true };
    case "reqError":
      return { data: null, loading: false, error: action.error };
    case "reqSuccess":
      return { data: action.data, loading: false, error: null };
    default:
      return state;
  }
};

const useFetch = (url: string) => {
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
        dispatch({ type: "reqError", error: new Error("an error occurred") });
      }
    }
    init();
  }, [url]);

  return state;
};

export default useFetch;
