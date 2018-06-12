export const login = (email) => {
    let init = {
        method: "POST", 
        body: new URLSearchParams(`email=${email}`)
    }
    return fetch('api/session', init).then(
        function(response){
            return response.json
        }
    )
}

export const logout = () => {
    return fetch('api/session', {method: "DELETE"}).then(
        function(response){
            return response.json 
        }
    )
}

