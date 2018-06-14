import { RECEIVE_TICKET_STATUS } from '../../actions/tickets_actions';

const CurrentTicketStatusReducer = (state = "Unfulfilled", action) => {
    switch(action.type){
        case RECEIVE_TICKET_STATUS: 
            return action.status
        default: 
            return state
    }
}

export default CurrentTicketStatusReducer;