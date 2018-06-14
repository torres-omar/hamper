import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';


const CurrentBusinessIdReducer = (state = null, action) => {
    switch(action.type){
        case RECEIVE_CURRENT_USER: 
            return action.current_user.startup_business_id
        default: 
            return state
    }
}

export default CurrentBusinessIdReducer;