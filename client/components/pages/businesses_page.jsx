import React from 'react';

// we want to see a list of all the businesses for the current user
// so we should have a fetch businesses action creator 
// and we should store all the businesses in redux

// but opon loading the tickets page, we should be able to see the tickets 
// for the business chosen ('go to business' button) 

// so chosen businesses should be saved in redux as well
// the question is, do we need to store only the id or all the information for the chosen businesses. 
// probably just the businesses id, since that is all we need to fetch tickets for a businesses. 
// the route for that particular request only requires that param. 

// reloading the page should thus keep us at the chosen business. 
// signing out and signing back in should us the default business in settings


class BusinessesPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Hello from businesses page</h1>
            </div>
        )
    }
}

export default BusinessesPage;