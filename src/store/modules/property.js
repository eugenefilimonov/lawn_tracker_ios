import axios from 'axios';

const SET_PROPERTY = 'SET_PROPERTY';
const SET_ZONES = 'SET_ZONES';

export const handleZoneSubmit = (params) => {
  return (dispatch, getState) => {
    axios.post('http://localhost:3000/api/property_zones', params, { headers: {
      'Authorization': 'Bearer '.concat(getState().application.jwt)
    }}).then(
      response => {
        console.log(response.data);
        dispatch({type: SET_ZONES, data: response.data.property_zones})
      },
      error => {
        console.log(error);
      }
    );
  }
}

export const fetchProperty = () => {
  return (dispatch, getState) => {
    axios.get('http://localhost:3000/api/properties/information', { headers: {
      'Authorization': 'Bearer '.concat(getState().application.jwt)
    }}).then(
      response => {
        dispatch({type: SET_PROPERTY, ...response.data.property})
      },
      error => {
        console.log(error);
      }
    );
  }
}

const initialState = {
  loading: true,
  address: {
    street1: null,
    street2: null,
    city: null,
    state: null,
    postal_code: null,
    country: null,
  },
  zones: []
}

export default reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ZONES: {
      return {
        ...state,
        zones: action.data
      }
    }
    case SET_PROPERTY: {
      return {
        ...state,
        loading: false,
        address: {
          ...state.address,
          ...action.address
        },
        zones: action.property_zones,
        weather_history: action.weather_history,
        growth_potential: action.gp,
        weather_forecast: action.weather_forecast.records
      }
    }
    default:
      return state;
  }
}
