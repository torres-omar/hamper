import React from 'react'; 
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShowTicket, clearShowTicket } from '../../actions/tickets_actions';

const mapStateToProps = (state) => ({
    show_ticket: state.entities.show_ticket
})

const mapDispatchToProps = (dispatch) => ({
    fetchShowTicket: (ticket_id) => dispatch(fetchShowTicket(ticket_id)),
    clearShowTicket: () => dispatch(clearShowTicket())
})

class TicketView extends React.Component{
    constructor(props){
        super(props);
        this.renderTicket = this.renderTicket.bind(this);
        this.goBack = this.goBack.bind(this)
    }

    componentDidMount(){
        this.props.fetchShowTicket(this.props.match.params.ticket_id)
    }

    renderTicket(){
        if(this.props.show_ticket){
            return(
                <h1>{this.props.show_ticket.customer_first_name}</h1>
            )
        }
    }

    componentWillUnmount(){
        this.props.clearShowTicket()
    }

    goBack(){
        this.props.history.push('/tickets')
    }

    render(){
        return(
            <div>
                <button onClick={this.goBack}>back</button>
                {this.renderTicket()}
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TicketView));