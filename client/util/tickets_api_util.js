export const fetchUnfulfilledTickets = (business_id,page) => {
    return $.ajax({
        method: "GET", 
        url: `/api/businesses/${business_id}/tickets/unfulfilled/${page}`
    })
}

export const fetchGlobalSearchTickets = (business_id, query) => {
    return $.ajax({
        method: "GET", 
        url: `api/businesses/${business_id}/tickets/search/${query}`
    })
}
