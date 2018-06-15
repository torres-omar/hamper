import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    show_customer: state.entities.show_customer
})

class TicketInfoTab extends React.Component{
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

export default withRouter(connect(mapStateToProps, null)(TicketInfoTab));