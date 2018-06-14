import React from 'react';
import TicketsControl from '../dashboard/tickets_control';
import TicketView from '../dashboard/ticket_view';

class TicketViewTab extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <TicketsControl />
                <TicketView />
            </div>
        )
    }
}

export default TicketViewTab;