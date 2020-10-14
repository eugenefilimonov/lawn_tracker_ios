import deviceStorage from '../../services/deviceStorage';
import axios from 'axios';

const USER_VERIFIED = 'USER_VERIFIED';
const USER_LOGOUT = 'USER_LOGOUT';
const AUTH_ERROR = 'AUTH_ERROR';

export const verifyUser = () => dispatch => {
  token = deviceStorage.loadJWT().then(
    response => {
      dispatch({ type: USER_VERIFIED, jwt: response, loading: false })
    }
  );
}

export const userLogout = () => dispatch => {
  deviceStorage.deleteJWT().then(
    response => {
      dispatch({ type: USER_LOGOUT });
    }
  )
}
export const createUser = (params) => {
  return (dispatch)=> {
    return axios.post('http://localhost:3000/api/users', params)
      .then(
        response => {
          deviceStorage.saveJWT(response.data.token)
          dispatch({ type: USER_VERIFIED, jwt: response.data.token, loading: false })
        },
        error => {
          dispatch({ type: AUTH_ERROR, authError: 'Something went wrong'})
        }
      );
  }
}

export const userLogin = (params) => {
  return (dispatch)=> {
    return axios.post('http://localhost:3000/api/sessions', params )
      .then(
        response => {
          deviceStorage.saveJWT(response.data.token)
          dispatch({ type: USER_VERIFIED, jwt: response.data.token, loading: false })
        },
        error => {
          dispatch({ type: AUTH_ERROR, authError: 'Invalid Email or Password'})
        }
      );
  }
}

const initialState = {
  loading: true,
  jwt: null,
  authError: null
}

export default function reducer(state = initialState, action){
  switch(action.type) {
    case USER_VERIFIED: {
      return {
        loading: false,
        jwt: action.jwt,
        authError: null
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        jwt: null,
        authError: null
      };
    }
    case AUTH_ERROR: {
      return {
        ...state,
        authError: action.authError
      }
    }
    default:
      return state;
  }
};
