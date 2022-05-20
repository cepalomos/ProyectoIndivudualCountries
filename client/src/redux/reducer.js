import {
  COUNTRY_FAILURE,
  COUNTRY_SUCCESS,
  COUNTRY_REQUEST,
} from "./actions.js";

const initialState = {
  loading: false,
  countries: [],
  error: "",
};

const countriesApi = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRY_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
        error: "",
      };
    case COUNTRY_FAILURE:
      return {
        ...state,
        loading: false,
        countries: [],
        error: "",
      };
    default:
      return state;
  }
};

export default countriesApi;
