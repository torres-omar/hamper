import { combineReducers } from 'redux';
import TicketsReducer from './entities/tickets_reducer';

const EntitiesReducer = combineReducers({
    tickets: TicketsReducer
})

export default EntitiesReducer;