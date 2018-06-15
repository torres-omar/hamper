export const fetchCurrentBusinessInfo = (business_id) => {
    return $.ajax({
        method: "GET", 
        url: `api/businesses/${business_id}`
    })
}