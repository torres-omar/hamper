import { RECEIVE_SEARCH_TICKETS } from "../../actions/tickets_actions";

const SearchTicketsReducer = (state = [], action) => {
    switch(action.type){
        case RECEIVE_SEARCH_TICKETS:
            return action.search_tickets
        default: 
            return state 
    }
}

export default SearchTicketsReducer;