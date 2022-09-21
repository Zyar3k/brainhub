import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { FETCH_ERROR, FETCH_SUCCESS } from "../vars/reducerVars";
import { BASE_URL } from "../config_URL";
import appReducer from "../reducers/AppReducer";

const initialState = {
  bookings: [],
};

export const GlobalContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const fetchData = async () => {
    axios
      .get(`${BASE_URL}/bookings`)
      .then((res) => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_ERROR, payload: err.message });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <GlobalContext.Provider
      value={{ state, bookings: state.bookings, fetchData }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default StoreProvider;
