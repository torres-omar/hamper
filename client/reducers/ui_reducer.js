import { combineReducers } from 'redux';
import CurrentBusinessIdReducer from './ui/current_business_id_reducer';
import CurrentTicketStatusReducer from './ui/current_ticket_status_reducer';
// import CurrentCustomerShowIdReducer from './ui/current_customer_show_id_reducer';

const UIReducer = combineReducers({
    current_business_id: CurrentBusinessIdReducer,
    current_ticket_status: CurrentTicketStatusReducer
})

export default UIReducer;