export const COUNTRY_REQUEST = "COUNTRY_REQUEST";
export const COUNTRY_SUCCESS = "COUNTRY_SUCCESS";
export const COUNTRY_FAILURE = "COUNTRY_FAILURE";

const pokemon_request = () => {
  return { type: COUNTRY_REQUEST };
};
const pokemon_success = (data) => {
  return { type: COUNTRY_SUCCESS, payload: data };
};
const pokemon_failure = (error) => {
  return { type: COUNTRY_FAILURE, payload: error };
};

const peticionCountries = (url) => {
  return (dispatch) => {
    dispatch(pokemon_request());
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
          dispatch(pokemon_success(json));})
      .catch((error)=>dispatch(pokemon_failure(error)));
  };
};

export { peticionCountries };
