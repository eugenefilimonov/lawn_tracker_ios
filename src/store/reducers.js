import {combineReducers} from 'redux';
import application from './modules/application';
import property from './modules/property';

const reducer = combineReducers({
  application,
  property
});

export default (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = {application: state.application}
  }

  return reducer(state, action);
}
