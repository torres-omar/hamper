import React from 'react';
import { connect } from 'react-redux';

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
        this.props.tickets.forEach( (ticket)=> {
            tickets.push(<li>{ticket.id}</li>)
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
