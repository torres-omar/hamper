import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_CURRENT_BUSINESS_ID } from '../../actions/businesses_actions';


const CurrentBusinessIdReducer = (state = null, action) => {
    switch(action.type){
        case RECEIVE_CURRENT_USER: 
            if(action.current_user){
                return action.current_user.startup_business_id
            }else{
                return null
            }
        case RECEIVE_CURRENT_BUSINESS_ID:
            return action.id
        default: 
            return state
    }
}

export default CurrentBusinessIdReducer;