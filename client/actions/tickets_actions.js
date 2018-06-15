import * as APIUtil from '../util/tickets_api_util';

export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';
export const RECEIVE_SEARCH_TICKETS = 'RECEIVE_SEARCH_TICKETS';
export const RECEIVE_SHOW_TICKET = 'RECEIVE_SHOW_TICKET';
export const RECEIVE_TICKET_STATUS = 'RECEIVE_TICKET_STATUS';

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

export const receiveShowTicket = (ticket) => ({
    type: RECEIVE_SHOW_TICKET,
    ticket: ticket
})

export const changeTicketStatus = (status) => ({
    type: RECEIVE_TICKET_STATUS, 
    status: status
})

export const clearShowTicket = () => ({
    type: RECEIVE_SHOW_TICKET, 
    ticket: null
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

export const fetchShowTicket = (ticket_id) => (dispatch) => (
    APIUtil.fetchShowTicket(ticket_id).then(
        (ticket) => dispatch(receiveShowTicket(ticket))
    )
)

export const notifyCustomer = (ticket_id) => (dispatch) => (
    APIUtil.notifyCustomer(ticket_id).then(
        (ticket) => dispatch(receiveShowTicket(ticket))
    )
)

export const createNewTicket = (data, business_id) => (dispatch) => (
    APIUtil.createNewTicket(data, business_id).then(
        (ticket) => dispatch(receiveShowTicket(ticket))
    )
)

export const fulfillTicket = (ticket_id) => (dispatch) => (
    APIUtil.fulfillTicket(ticket_id).then(
        (ticket) => dispatch(receiveShowTicket(ticket))
    )
)