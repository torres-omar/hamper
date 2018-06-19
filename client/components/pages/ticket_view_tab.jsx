import React from 'react';
import TicketsControl from '../dashboard/tickets_control';
import TicketView from '../dashboard/ticket_view';
import {withRouter} from 'react-router-dom';
import TicketSearchBar from '../dashboard/ticket_search_bar';

class TicketViewTab extends React.Component{
    constructor(props){
        super(props);
        this.handleNewTicketRedirect = this.handleNewTicketRedirect.bind(this)
    }

    render(){
        return(
            <div className="dashboard__main-view">
                <TicketSearchBar />
                <div className="dashboard__tickets-view-and-control">
                    <TicketsControl />
                    <TicketView />
                </div>
            </div>
        )
    }
}

export default withRouter(TicketViewTab);