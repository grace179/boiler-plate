import {LOGIN_USER} from '../action/types';

export default function(state={}, action){
  switch (action.type) {
    case LOGIN_USER:
      return {...state, logiSuccess: action.payload};
      
    default:
      return state;
  }
}