export const fetchCurrentBusinessInfo = (business_id) => {
    return $.ajax({
        method: "GET", 
        url: `api/businesses/${business_id}`
    })
}

export const fetchBusinesses = (user_id) => {
    return $.ajax({
        method: "GET", 
        url: `api/users/${user_id}/businesses`
    })
}