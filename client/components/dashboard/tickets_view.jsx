import React from 'react';
import { connect } from 'react-redux';
import TicketItem from './ticket_item';

const mapStateToProps = (state) => ({
    tickets: state.entities.tickets
})

class TicketsView extends React.Component{
    constructor(props){
        super(props);
        this.renderTickets = this.renderTickets.bind(this)
    }

    renderTickets(){
        let tickets = []
        this.props.tickets.forEach( (ticket,i)=> {
            tickets.push(<TicketItem ticket={ticket} key={i}/>)
        })
        return tickets
    }

    render(){
        return(
            <ul>
                {this.renderTickets()}
            </ul>
        )
    }
}

export default connect(mapStateToProps, null)(TicketsView);
