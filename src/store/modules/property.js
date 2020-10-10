import axios from 'axios';

const SET_PROPERTY = 'SET_PROPERTY';

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
    case SET_PROPERTY: {
      return {
        loading: false,
        address: {
          ...state.address,
          ...action.address
        },
        zones: action.property_zones
      }
    }
    default:
      return state;
  }
}
