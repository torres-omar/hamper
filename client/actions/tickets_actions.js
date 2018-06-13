import * as APIUtil from '../util/tickets_api_util';

export const RECEIVE_TICKETS = 'RECEIVE_TICKETS'

export const receiveTickets = (tickets) => ({
    type: RECEIVE_TICKETS, 
    tickets: tickets
})

export const fetchUnfulfilledTickets = (business_id, page) => (dispatch) => (
    APIUtil.fetchUnfulfilledTickets(business_id,page).then(
        (tickets) => dispatch(receiveTickets(tickets))   
    )
)
