import { FETCH_USER } from "../actions/types";

/* eslint-disable import/no-anonymous-default-export */
export default function(state = {}, action) {
    console.log(action);
    switch(action.type){
        case FETCH_USER:
            return action.payload || false;
        default: 
            return state;
    }
}
