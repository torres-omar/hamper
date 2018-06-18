import React from 'react';
import TicketsView from '../dashboard/tickets_view';
import TicketsControl from '../dashboard/tickets_control';
import TicketSearchBar from '../dashboard/ticket_search_bar';
import Icons from '../dashboard/icons';


import { withRouter } from 'react-router-dom';

class TicketsViewTab extends React.Component{
    constructor(props){
        super(props)
        this.handleSettingsRedirect = this.handleSettingsRedirect.bind(this)
    }

    handleSettingsRedirect(){
        this.props.history.push('/settings')
    }

    render(){
        return(
            <div className="dashboard__main-view">
                <TicketSearchBar />
                <div className="dashboard__tickets-view-and-control"> 
                    <TicketsControl />
                    <TicketsView />
                </div>
            </div>
        )
    }
}

export default withRouter(TicketsViewTab);