import axios from "axios";
import { useEffect, useReducer } from "react";

const ACTIONS = {
  API_REQ: "api_req",
  FETCH_DATA: "fetch_data",
  ERROR: "error"
};

const initialState = {
  data: [],
  loading: false,
  error: null
};

function reducer(state, { type, payload }) {
  console.log(payload);

  switch (type) {
    case ACTIONS.API_REQ:
      return { ...state, data: [], loading: true };
    case ACTIONS.FETCH_DATA:
      return { ...state, data: payload.data, loading: false };
    case ACTIONS.ERROR:
      return { ...state, data: [], error: true };
    default:
      return state;
  }
}

function UseFetch(url) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.API_REQ });
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data });
        console.log(res);
      })
      .catch((e) => {
        dispatch({ type: ACTIONS.ERROR, payload: e.error });
      });
  }, [url]);

  return state;
}

export default UseFetch;
