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

export const clearSearchTickets = () => ({
    type: RECEIVE_SEARCH_TICKETS, 
    search_tickets: []
})

export const fetchStatusTickets = (business_id, page, status) => (dispatch) => (
    APIUtil.fetchStatusTickets(business_id,page, status).then(
        (tickets) => dispatch(receiveTickets(tickets))   
    )
)

export const fetchGlobalSearchTickets = (business_id, query, status) => (dispatch) => (
    APIUtil.fetchGlobalSearchTickets(business_id, query, status).then(
        (tickets) => dispatch(receiveSearchTickets(tickets))
    )
)

export const fetchIdSearchTickets = (business_id, query, status) => (dispatch) => (
    APIUtil.fetchIdSearchTickets(business_id, query, status).then(
        (tickets) => dispatch(receiveSearchTickets(tickets))
    )
)

export const fetchNameSearchTickets = (business_id, query, status) => (dispatch) => (
    APIUtil.fetchNameSearchTickets(business_id, query, status).then(
        (tickets) => dispatch(receiveSearchTickets(tickets))
    )
)
