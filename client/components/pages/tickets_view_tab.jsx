import React from 'react';
import TicketsView from '../dashboard/tickets_view';
import TicketsControl from '../dashboard/tickets_control';
import TicketSearchBar from '../dashboard/ticket_search_bar';
import TicketView from '../dashboard/ticket_view';
import { ProtectedRoute } from '../../util/route_util';
import { Switch } from 'react-router-dom';

class TicketsViewTab extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="dashboard__main-view">
                <TicketSearchBar />
                <div className="dashboard__tickets-view-and-control"> 
                    <TicketsControl />
                    <Switch>
                        <ProtectedRoute exact path="/dashboard/tickets" component={TicketsView} />
                        <ProtectedRoute exact path="/dashboard/tickets/:ticket_id" component={TicketView} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default TicketsViewTab;