export const fetchCustomers = (business_id) => {
    return $.ajax({
        method: "GET",
        url: `api/businesses/${business_id}/customers`
    })
}

export const fetchSearchCustomers = (busines_id, query) => {
    return $.ajax({
        method: 'GET',
        url: `api/businesses/${busines_id}/customers/search/${query}`
    })
}

export const fetchShowCustomer = (customer_id) => {
    return $.ajax({
        method: 'GET', 
        url: `api/customers/${customer_id}`
    })
}

export const createNewCustomer = (data) => {
    return $.ajax({
        method: "POST", 
        url: `api/businesses/${data.business_id}/customers`,
        data: {
            customer: data
        }
    })
}