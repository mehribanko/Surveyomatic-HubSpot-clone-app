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