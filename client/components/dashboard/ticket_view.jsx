import React from 'react'; 
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShowTicket, clearShowTicket, notifyCustomer, fulfillTicket } from '../../actions/tickets_actions';

const mapStateToProps = (state) => ({
    show_ticket: state.entities.show_ticket
})

const mapDispatchToProps = (dispatch) => ({
    fetchShowTicket: (ticket_id) => dispatch(fetchShowTicket(ticket_id)),
    clearShowTicket: () => dispatch(clearShowTicket()),
    notifyCustomer: (ticket_id) => dispatch(notifyCustomer(ticket_id)),
    fulfillTicket: (ticket_id) => dispatch(fulfillTicket(ticket_id))
})

class TicketView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notification_response: null
        }
        this.renderTicket = this.renderTicket.bind(this);
        this.goBack = this.goBack.bind(this);
        this.sendNotification = this.sendNotification.bind(this);
        this.fulfillTicket = this.fulfillTicket.bind(this);
    }

    componentDidMount(){
        this.props.fetchShowTicket(this.props.match.params.ticket_id)
    }

    renderTicket(){
        if(this.props.show_ticket){
            return(
                <div className="ticket-view__ticket-info">
                    <h1>id: {this.props.show_ticket.id}</h1>
                    <h1>drop-off-date: {this.props.show_ticket.date_dropped_off}</h1>
                    <h1>status: {this.props.show_ticket.status}</h1>
                    <h1>customer: {this.props.show_ticket.customer_first_name} {this.props.show_ticket.customer_last_name}</h1>
                    <h1>bag weight: {this.props.show_ticket.bag_weight} lb</h1>
                    <h1>grand total: ${this.props.show_ticket.grand_total}</h1>
                </div>
            )
        }
    }

    componentWillUnmount(){
        this.props.clearShowTicket()
    }

    goBack(){
        this.props.history.push('/dashboard/tickets')
    }

    sendNotification(){
        this.props.notifyCustomer(this.props.show_ticket.id).then(
            ()=>{this.setState({notification_response: 'Notified customer!'}),
            ()=>{this.setState({notification_response: 'An error occured'})}     
        })
    }

    fulfillTicket(){
        this.props.fulfillTicket(this.props.show_ticket.id).then(
            () => this.setState({notification_response: 'Ticket fulfilled!'})
        )
    }

    renderNotificationResponse(){
        if(this.state.notification_response){
            return(
                <p>{this.state.notification_response}</p>
            )
        }
    }

    render(){
        return(
            <div className="ticket-view-area">
                <div className="ticket-view-area__back-button"> 
                    <button onClick={this.goBack}>back</button>
                </div>
                <div className="ticket-view">
                    <div className="ticket-view__action-button">
                        <button onClick={this.sendNotification} style={{
                            display: this.props.show_ticket && this.props.show_ticket.status == "Unfulfilled" ? 'block' : 'none'
                        }}>notify</button>
                        <button onClick={this.fulfillTicket} style={{
                            display: this.props.show_ticket && this.props.show_ticket.status == "Notified" ? 'block' : 'none'
                        }}>fulfill</button>
                    </div>
                    {this.renderNotificationResponse()}
                    {this.renderTicket()}
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TicketView));