import axios from 'axios';
import { FETCH_USER } from './types';

// this is an action creator, it is refactored to use reduxThunk.
// when this action creator gets called, it instantly returns a function. 
// reduxThunk sees that we are returning a function instead of a normal action object, and passes
// dispatch function as an argument

export const fetchUser = () => async (dispatch) => {
      const res = await axios.get('/api/current_user');
      dispatch({ type: FETCH_USER, payload: res.data});
    }


// before refactoring the code to make it more lean
// export const fetchUser = () => {
//     return function(dispatch){
//         axios.get('/api/current_user')
//             .then(res => dispatch({ type: FETCH_USER, payload: res}));
//     }
// }
// this part handles the payment
// we are sending the token back to the server, the server sends back a response, 
// the response is a user modal with info about user and their credits
// user modal is save din auth reducer. 
// when a user pay some money to buy credits, api will send the token (received from Stripe API) 
// back to the server, node js api will follow up and update the number of credits the user has and will send 
// back the current user modal (in an auth reducer) 
export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token); 
  dispatch({type: FETCH_USER, payload: res.data});
}

