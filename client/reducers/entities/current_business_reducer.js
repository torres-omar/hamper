import { RECEIVE_CURRENT_BUSINESS } from "../../actions/businesses_actions";


const CurrentBusinessReducer = (state = null, action) => {
    switch(action.type){
        case RECEIVE_CURRENT_BUSINESS:
            return action.business 
        default: 
            return state
    }
}

export default CurrentBusinessReducer;