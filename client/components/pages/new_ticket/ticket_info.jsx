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

    goBack(){
        this.props.history.push('/tickets/new/s1')
    }

    renderCustomerInfo(){
        if(this.props.show_customer){
            return(
                <div>
                    <p>{this.props.show_customer.first_name}</p>
                    <p>{this.props.show_customer.last_name}</p>
                    <NewTicketForm />
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.goBack}>back</button>
                {this.renderCustomerInfo()}
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, null)(TicketInfo));