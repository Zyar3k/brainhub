import { FETCH_ERROR, FETCH_SUCCESS } from "../vars/reducerVars";

export default function appReducer(state, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        loading: false,
        bookings: action.payload,
        error: "",
      };
    case FETCH_ERROR:
      return {
        loading: false,
        bookings: [],
        error: "Something went wrong!",
      };
    default:
      return state;
  }
}
