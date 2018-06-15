import { RECEIVE_SHOW_CUSTOMER } from '../../actions/customers_actions';

const ShowCustomerReducer = (state = null, action) => {
    switch(action.type){
        case RECEIVE_SHOW_CUSTOMER: 
            return action.customer 
        default: 
            return state 
    }
}

export default ShowCustomerReducer;