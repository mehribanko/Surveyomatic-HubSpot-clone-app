import axios from 'axios';
import { FETCH_USER } from './types';

// this is an action creator
const fetchUser = () => {
    return function(dispatch){
        axios.get('/api/current_user')
            .then(res => { type: FETCH_USER, payload: res})
    }
}