import { combineReducers } from 'redux';
import TicketsReducer from './entities/tickets_reducer';
import SearchTicketsReducer from './entities/search_tickets_reducer';
import ShowTicketReducer from './entities/show_ticket_reducer';
import CustomersReducer from './entities/customers_reducer';
import SearchCustomersReducer from './entities/search_customers_reducer';
import ShowCustomerReducer from './entities/show_customer_reducer';
import CurrentBusinessReducer from './entities/current_business_reducer';
import BusinessesReducer from './entities/businesses_reducer';

const EntitiesReducer = combineReducers({
    tickets: TicketsReducer,
    search_tickets: SearchTicketsReducer,
    show_ticket: ShowTicketReducer,
    customers: CustomersReducer,
    search_customers: SearchCustomersReducer,
    show_customer: ShowCustomerReducer,
    current_business: CurrentBusinessReducer,
    businesses: BusinessesReducer
})

export default EntitiesReducer;