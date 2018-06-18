import React from 'react';
import TicketsView from '../dashboard/tickets_view';
import TicketsControl from '../dashboard/tickets_control';
import TicketSearchBar from '../dashboard/ticket_search_bar';
import Icons from '../dashboard/icons';


import { withRouter } from 'react-router-dom';

class TicketsViewTab extends React.Component{
    constructor(props){
        super(props)
        this.handleNewTicketRedirect = this.handleNewTicketRedirect.bind(this)
        this.handleSettingsRedirect = this.handleSettingsRedirect.bind(this)
    }

    handleNewTicketRedirect() {
        // e.preventDefault()
        this.props.history.push('/tickets/new/s1')
    }

    // componentDidMount(){
    //     this.props.history.push('/tickets')
    // }

    handleSettingsRedirect(){
        this.props.history.push('/settings')
    }

    render(){
        return(
            <div className="dashboard__main-view">
                <TicketSearchBar />
                <input type="button" onClick={this.handleNewTicketRedirect} value="new ticket" />
                <TicketsControl />
                <TicketsView />
            </div>
        )
    }
}

export default withRouter(TicketsViewTab);