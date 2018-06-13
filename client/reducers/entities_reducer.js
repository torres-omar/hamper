import { combineReducers } from 'redux';
import TicketsReducer from './entities/tickets_reducer';
import SearchTicketsReducer from './entities/search_tickets_reducer';

const EntitiesReducer = combineReducers({
    tickets: TicketsReducer,
    search_tickets: SearchTicketsReducer
})

export default EntitiesReducer;