import React from 'react';
import {withRouter} from 'react-router-dom';


class TicketsViewItem extends React.Component{
    constructor(props){
        super(props)
        this.handleTicketSelect = this.handleTicketSelect.bind(this)
    }

    handleTicketSelect(e){
        e.preventDefault();
        this.props.history.push(`/dashboard/tickets/${this.props.ticket.id}`)
    }

    render(){
        return(
            <div className="tickets-view__item" onClick={this.handleTicketSelect}>
                <p>id: {this.props.ticket.id}</p>
                <p>drop-off date: {this.props.ticket.date_dropped_off}</p>
                <p>customer: {this.props.ticket.customer_first_name} {this.props.ticket.customer_last_name}</p>
            </div>
        )
    }
}

export default withRouter(TicketsViewItem);