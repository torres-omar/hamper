import { RECEIVE_SEARCH_CUSTOMERS } from '../../actions/customers_actions';

const SearchCustomersReducer = (state = [], action) => {
    switch(action.type){
        case RECEIVE_SEARCH_CUSTOMERS:
            return action.customers 
        default: 
            return state
    }
}

export default SearchCustomersReducer;