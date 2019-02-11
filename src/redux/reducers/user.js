import { preloadedState } from '../state';

const initialState = {...preloadedState.user};

function user(state = initialState, action) {
  switch(action.type) {
    case 'ADD_ACCESS_TOKEN' : {
      return {...state, ...action.payload}
    };
    default:
      return state; 
  }
}

export default user;
