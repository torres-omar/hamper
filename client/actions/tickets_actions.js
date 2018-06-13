import * as APIUtil from '../util/tickets_api_util';

export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';
export const RECEIVE_SEARCH_TICKETS = 'RECEIVE_SEARCH_TICKETS';

export const receiveTickets = (tickets) => ({
    type: RECEIVE_TICKETS, 
    tickets: tickets
})

export const receiveSearchTickets = (tickets) => ({
    type: RECEIVE_SEARCH_TICKETS, 
    search_tickets: tickets
})

export const fetchUnfulfilledTickets = (business_id, page) => (dispatch) => (
    APIUtil.fetchUnfulfilledTickets(business_id,page).then(
        (tickets) => dispatch(receiveTickets(tickets))   
    )
)

export const fetchGlobalSearchTickets = (business_id, query) => (dispatch) => (
    APIUtil.fetchGlobalSearchTickets(business_id, query).then(
        (tickets) => dispatch(receiveSearchTickets(tickets))
    )
)
