import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const SessionReducer = (state = {current_user: null}, action) => {
    switch(action.type){
        case RECEIVE_CURRENT_USER: 
            return {current_user: action.current_user}
        default: 
            return state
    }
}

export default SessionReducer;