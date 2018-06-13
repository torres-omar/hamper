export const fetchUnfulfilledTickets = (business_id,page) => {
    return $.ajax({
        method: "GET", 
        url: `/api/businesses/${business_id}/tickets/unfulfilled/${page}`
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
