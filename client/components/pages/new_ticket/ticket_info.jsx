import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import NewTicketForm from '../../dashboard/new_ticket_form';

const mapStateToProps = (state) => ({
    show_customer: state.entities.show_customer
})

class TicketInfo extends React.Component{
    constructor(props){
        super(props)
        this.goBack = this.goBack.bind(this)
    }

    componentDidMount(){
        if(this.props.show_customer == null){
            this.props.history.push('/dashboard/new-ticket-s1')
        }
    }

    goBack(){
        this.props.history.push('/dashboard/new-ticket-s1')
    }

    renderCustomerInfo(){
        if(this.props.show_customer){
            return(
                <div className="ticket-info-view__customer-name">
                    <p>{this.props.show_customer.first_name} {this.props.show_customer.last_name}</p>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="dashboard__main-view dashboard__new-ticket-view">
                <h1>New Ticket</h1>
                <h3>Ticket info</h3>
                <div className="button__back-button">
                    <button onClick={this.goBack}>back</button>
                </div>
                <div>
                    <div className="ticket-info-view">
                        {this.renderCustomerInfo()}
                        <NewTicketForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, null)(TicketInfo));