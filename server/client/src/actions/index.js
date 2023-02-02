import axios from 'axios';
import { FETCH_USER } from './types';

// this is an action creator
const fetchUser = () => {
    axios.get('/api/current_user');
}