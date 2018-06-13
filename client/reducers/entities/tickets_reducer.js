import { RECEIVE_TICKETS } from '../../actions/tickets_actions';

const TicketsReducer = (state = [], action) => {
    switch(action.type){
        case RECEIVE_TICKETS:
            return action.tickets
        default: 
            return state
    }
}

export default TicketsReducer;