import React from 'react'; 
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShowTicket, clearShowTicket, notifyCustomer } from '../../actions/tickets_actions';

const mapStateToProps = (state) => ({
    show_ticket: state.entities.show_ticket
})

const mapDispatchToProps = (dispatch) => ({
    fetchShowTicket: (ticket_id) => dispatch(fetchShowTicket(ticket_id)),
    clearShowTicket: () => dispatch(clearShowTicket()),
    notifyCustomer: (ticket_id) => dispatch(notifyCustomer(ticket_id))
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
    }

    componentDidMount(){
        this.props.fetchShowTicket(this.props.match.params.ticket_id)
    }

    renderTicket(){
        if(this.props.show_ticket){
            return(
                <div>
                    <h1>{this.props.show_ticket.customer_first_name}</h1>
                    <h1>{this.props.show_ticket.customer_last_name}</h1>
                </div>
            )
        }
    }

    componentWillUnmount(){
        this.props.clearShowTicket()
    }

    goBack(){
        this.props.history.push('/tickets')
    }

    sendNotification(){
        this.props.notifyCustomer(this.props.show_ticket.id).then(
            ()=>{this.setState({notification_response: 'Notified customer!'}),
            ()=>{this.setState({notification_response: 'An error occured'})}     
        })
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
            <div>
                <button onClick={this.goBack}>back</button>
                <button onClick={this.sendNotification} style={{
                    display: this.props.show_ticket && this.props.show_ticket.status == "Unfulfilled" ? 'block' : 'none'
                }}>notify</button>
                {this.renderNotificationResponse()}
                {this.renderTicket()}
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TicketView));