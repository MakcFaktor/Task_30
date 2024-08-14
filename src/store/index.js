import {thunk} from 'redux-thunk'
import { createStore, applyMiddleware  } from 'redux';

const rootReducer = (state = {data: null}, action) => {
  switch (action.type) {
    case 'GET':
      return {data: action.payload};

      case 'RESET':
      return {data: null};
    default:
      return state;
  }
};

export const store = createStore(rootReducer, applyMiddleware(thunk));

export function fetchByEndpoint(endpoint) {
  return async function fetchByEndpointThunk(dispatch) {
    try {
      const response = await fetch(`https://swapi.dev/api/${endpoint}`);
      const data = await response.json();
      
      dispatch(({type: 'GET', payload: data}))
    } catch(err) {
      
      console.log('something went wrong');
    }
  }
}
