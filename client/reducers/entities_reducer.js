import { combineReducers } from 'redux';
import TicketsReducer from './entities/tickets_reducer';
import SearchTicketsReducer from './entities/search_tickets_reducer';
import ShowTicketReducer from './entities/show_ticket_reducer';

const EntitiesReducer = combineReducers({
    tickets: TicketsReducer,
    search_tickets: SearchTicketsReducer,
    show_ticket: ShowTicketReducer
})

export default EntitiesReducer;