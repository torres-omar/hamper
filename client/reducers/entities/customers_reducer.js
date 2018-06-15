import { RECEIVE_CUSTOMERS } from '../../actions/customers_actions';

const CustomersReducer = (state = [], action) => {
    switch(action.type){
        case RECEIVE_CUSTOMERS: 
            return state.customers
        default: 
            return state 
    }
}


export default CustomersReducer;