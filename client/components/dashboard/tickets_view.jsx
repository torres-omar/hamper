import React from 'react';
import { connect } from 'react-redux';
import TicketItem from './ticket_item';
import {fetchTicketsByPage} from '../../actions/tickets_actions';

const mapStateToProps = (state) => ({
    tickets: state.entities.tickets,
    current_business_id: state.ui.current_business_id,
    current_ticket_status: state.ui.current_ticket_status
})

const mapDispatchToProps = (dispatch) => ({
    fetchTicketsByPage: (business_id, ticket_status, page) => dispatch(fetchTicketsByPage(business_id, ticket_status, page))
}) 

class TicketsView extends React.Component{
    constructor(props){
        super(props);
        this.renderTickets = this.renderTickets.bind(this)
        this.state = {
            page: 0
        }

        this.handleNextPage = this.handleNextPage.bind(this)
        this.handlePrevPage = this.handlePrevPage.bind(this)
    }

    componentDidUpdate(prevProps){
        if(this.props.current_ticket_status != prevProps.current_ticket_status){
            this.setState({page: 0})
        }
    }

    renderTickets(){
        let tickets = []
        this.props.tickets.forEach( (ticket,i)=> {
            tickets.push(<TicketItem ticket={ticket} key={i}/>)
        })
        return tickets
    }

    handleNextPage(e){
        e.preventDefault()
        this.props.fetchTicketsByPage(this.props.current_business_id, this.props.current_ticket_status, this.state.page + 1)
        this.setState({page: this.state.page + 1})
    }

    handlePrevPage(e){
        e.preventDefault()
        this.props.fetchTicketsByPage(this.props.current_business_id, this.props.current_ticket_status, this.state.page - 1)
        this.setState({ page: this.state.page - 1 })
    }

    render(){
        return(
            <div className="tickets-view"> 
                <button onClick={this.handleNextPage}>next</button>
                <button style={{
                    display: this.state.page == 0 ? 'none' : 'block'
                }} onClick={this.handlePrevPage}>prev</button>
                <ul>
                    {this.renderTickets()}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsView);
