import { RECEIVE_BUSINESSES } from '../../actions/businesses_actions';

const BusinessesReducer = (state = [], action) => {
    switch(action.type){
        case RECEIVE_BUSINESSES:
            return action.businesses 
        default: 
            return state 
    }
}

export default BusinessesReducer;