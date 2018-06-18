import React from 'react';
import TicketsControl from '../dashboard/tickets_control';
import TicketView from '../dashboard/ticket_view';
import {withRouter} from 'react-router-dom';
import TicketSearchBar from '../dashboard/ticket_search_bar';
import Icons from '../dashboard/icons';

class TicketViewTab extends React.Component{
    constructor(props){
        super(props);
        this.handleNewTicketRedirect = this.handleNewTicketRedirect.bind(this)
    }

    handleNewTicketRedirect() {
        // e.preventDefault()
        this.props.history.push('/tickets/new/s1')
    }

    render(){
        return(
            <div>
                <TicketsControl />
                <div>
                    <input type="button" onClick={this.handleNewTicketRedirect} value="new ticket" />
                    <TicketSearchBar />
                </div>
                <TicketView />
            </div>
        )
    }
}

export default withRouter(TicketViewTab);