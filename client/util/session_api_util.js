export const login = (email) => {
    return $.ajax({
        method: "POST", 
        url: 'api/sessions', 
        data: {email : email}
    })
}

export const logout = () => {
    return $.ajax({
        method: "DELETE",
        url: 'api/session'
    })
}

