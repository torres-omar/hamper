export const fetchStatusTickets = (business_id,page,status) => {
    return $.ajax({
        method: "GET", 
        url: `/api/businesses/${business_id}/tickets/${status}/${page}`
    })
}

export const fetchGlobalSearchTickets = (business_id, query, status) => {
    return $.ajax({
        method: "GET", 
        url: `api/businesses/${business_id}/tickets/search/${query}/${status}`
    })
}

export const fetchIdSearchTickets = (business_id, query, status) => {
    return $.ajax({
        method: "GET", 
        url: `api/businesses/${business_id}/tickets/search/id/${query}/${status}`
    })
}

export const fetchNameSearchTickets = (business_id, query, status) => {
    return $.ajax({
        method: "GET", 
        url: `api/businesses/${business_id}/tickets/search/cname/${query}/${status}`
    })
}

export const fetchShowTicket = (ticket_id) => {
    return $.ajax({
        method: "GET",
        url: `api/tickets/${ticket_id}`
    })
}

export const notifyCustomer = (ticket_id) => {
    return $.ajax({
        method: "GET", 
        url: `api/tickets/${ticket_id}/notify`
    })
}

export const createNewTicket = (data, business_id) => {
    return $.ajax({
        method: "POST", 
        url: `api/businesses/${business_id}/tickets`,
        data: {
            ticket: data
        }
    })
}

export const fulfillTicket = (id) => {
    return $.ajax({
        method: "GET", 
        url: `api/tickets/${id}/fulfill`
    })
}

export const fetchTicketsByPage = (business_id, ticket_status, page) => {
    return $.ajax({
        method: 'GET', 
        url: `api/businesses/${business_id}/tickets/${ticket_status}/${page}`
    })
}
