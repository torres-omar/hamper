import { RECEIVE_BUSINESS_ON_MAP } from '../../actions/businesses_actions';

const BusinessOnMapReducer = (state = null, action) => {
    switch(action.type){
        case RECEIVE_BUSINESS_ON_MAP:
            return action.business
        default: 
            return state
    }
}

export default BusinessOnMapReducer;