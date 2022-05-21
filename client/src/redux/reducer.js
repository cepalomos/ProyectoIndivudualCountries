import {
  COUNTRY_FAILURE,
  COUNTRY_SUCCESS,
  COUNTRY_REQUEST,
  PAGINATION,
  COUNTRIES_ACTIVIDAD,
  COUNTRIES_CONTINENTE,
  COUNTRIES_ALF_ASC,
  COUNTRIES_ALF_DES,
  POBLACION_ASC,
  POBLACION_DES,
} from "./actions.js";

const initialState = {
  loading: false,
  countries: [],
  pagination:[],
  numberPages:[],
  countriesFilter:[],
  currentPage:1,
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
        countriesFilter:action.payload,
        error: "",
      };
    case COUNTRY_FAILURE:
      return {
        ...state,
        loading: false,
        countries: [],
        error: "",
      };
      case PAGINATION:
        return{
            ...state,
            pagination:state.countries.slice(action.payload.star, action.payload.end),
            currentPage:action.payload.currentPage,
            numberPages:action.payload.numberPages
        };
        case COUNTRIES_ACTIVIDAD:
            return {
                ...state,
                countries:state.countriesFilter.filter(({activities})=> ((activities.length !== 0)?activities.some(({nombre})=>nombre === action.payload):false)),
                error:'',
            };
        case COUNTRIES_CONTINENTE:
             return {
                 ...state,
                 countries:state.countriesFilter.filter(({continente})=> continente === action.payload),
                 error:'',
             }
        case COUNTRIES_ALF_ASC:
                return {
                    ...state,
                    countries:[...state.countries.sort(({nombre:a},{nombre:b})=>a>b?1:a<b?-1:0)]
                }
        case COUNTRIES_ALF_DES:
          return {
              ...state,
              countries:[...state.countries.sort(({nombre:a},{nombre:b})=>a<b?1:a>b?-1:0)]
          }
          case POBLACION_ASC:
            return{
                ...state,
                countries:[...state.countries.sort(({poblacion:a},{poblacion:b})=>a-b)],
            }
            case POBLACION_DES:
              return{
                  ...state,
                  countries:[...state.countries.sort(({poblacion:a},{poblacion:b})=>b-a)],
              }

    default:
      return state;
  }
};

export default countriesApi;
