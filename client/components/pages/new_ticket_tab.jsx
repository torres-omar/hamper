import React from 'react';
import TicketsControl from '../dashboard/tickets_control';

class NewTicketTab extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <TicketsControl />
                <h1>New ticket</h1>
            </div>
        )
    }
}

export default NewTicketTab;