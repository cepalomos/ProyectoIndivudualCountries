export const COUNTRY_REQUEST = "COUNTRY_REQUEST";
export const COUNTRY_SUCCESS = "COUNTRY_SUCCESS";
export const COUNTRY_FAILURE = "COUNTRY_FAILURE";
export const PAGINATION = "PAGINATION";
export const COUNTRIES_CONTINENTE = "COUNTRIES_CONTINENTE";
export const COUNTRIES_ACTIVIDAD = "COUNTRIES_ACTIVIDAD";
export const COUNTRIES_ALF_ASC = "COUNTRIES_ALF_ASC";
export const COUNTRIES_ALF_DES = "COUNTRIES_ALF_DES";
export const POBLACION_DES = "POBLACION_DES";
export const POBLACION_ASC = "POBLACION_ASC";

const countriesRequest = () => {
  return { type: COUNTRY_REQUEST };
};
const countriesSuccess = (data) => {
  return { type: COUNTRY_SUCCESS, payload: data };
};
const countriesFailure = (error) => {
  return { type: COUNTRY_FAILURE, payload: error };
};
const countries_page = (numberPages, star, end, currentPage) => {
    return {
      type: PAGINATION,
      payload: { numberPages, star, end, currentPage },
    };
  };
  const countriesContinente = (continente) => {
    return { type: COUNTRIES_CONTINENTE, payload: continente };
  };
  const countriesActividad = (actividad) => {
    return { type: COUNTRIES_ACTIVIDAD, payload: actividad };
  };
  const countriesAlfAsc = () => {
    return { type: COUNTRIES_ALF_ASC };
  };
  const countriesAlfDes = () => {
    return { type: COUNTRIES_ALF_DES };
  };
  const poblacionDes = () => {
    return { type: POBLACION_DES };
  };
  const poblacionAsc = () => {
    return { type: POBLACION_ASC };
  };

const peticionCountries = (url) => {
  return (dispatch) => {
    dispatch(countriesRequest());
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
          dispatch(countriesSuccess(json));})
      .catch((error)=>dispatch(countriesFailure(error)));
  };
};
const countriesOrder = (option) => {
    return (dispatch) => {
      switch (option) {
        case "AASC":
          return dispatch(countriesAlfAsc());
        case "PASC":
          return dispatch(poblacionAsc());
        case "PDES":
          return dispatch(poblacionDes());
        case "ADES":
          return dispatch(countriesAlfDes());
        default:
          dispatch(countriesAlfAsc());
      }
    };
  };
  const countriesPagination = (arraylength, currentPage) => {
    return (dispatch) => {
      let numberPages = [];
      const pagesTotal = Math.ceil(arraylength / 10);
      for (let i = 1; i <= pagesTotal; i++) {
        numberPages.push(i);
      }
      if (currentPage <= pagesTotal) {
        let star = (currentPage - 1) * 10;
        let end = star + 10;
        dispatch(countries_page(numberPages, star, end, currentPage));
      } 
      // else if (pagesTotal === 0) {
      //   dispatch(countriesFailure("No hay informacion"));
      // }
    };
  };
export { peticionCountries, countriesOrder, countriesPagination,countriesContinente,countriesActividad };
