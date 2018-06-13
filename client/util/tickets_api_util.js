export const fetchUnfulfilledTickets = (business_id,page) => {
    return $.ajax({
        method: "GET", 
        url: `/api/businesses/${business_id}/tickets/unfulfilled/${page}`
    })
}