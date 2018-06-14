import { RECEIVE_SHOW_TICKET } from '../../actions/tickets_actions';

const ShowTicketReducer = (state = null, action) => {
    switch(action.type){
        case RECEIVE_SHOW_TICKET: 
            return action.ticket
        default: 
            return state
    }
}

export default ShowTicketReducer;