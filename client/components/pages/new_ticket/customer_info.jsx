import React from 'react';
import ExistingCustomerView from '../../dashboard/existing_customer_view';
import NewCustomerView from '../../dashboard/new_customer_view';
import { withRouter } from 'react-router-dom';

class CustomerInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            customer_status: "new"
        }

        this.handleRadioChange = this.handleRadioChange.bind(this)
        this.renderProperView = this.renderProperView.bind(this)
        this.goBack = this.goBack.bind(this)
    }    

    handleRadioChange(e){
        this.setState({customer_status: e.target.value})
    }

    renderProperView(){
        if(this.state.customer_status == 'existing'){
            return(
                <ExistingCustomerView />
            )
        }else if(this.state.customer_status == 'new'){
            return(
                <NewCustomerView />
            )
        }
    }

    goBack(){
        this.props.history.push('/dashboard/tickets')
    }

    render(){
        return(
            <div className="dashboard__main-view dashboard__new-ticket-view">
                <h1>New ticket</h1>
                <h3>Customer Info</h3>
                <button onClick={this.goBack}>back</button>
                <div className="new-ticket__customer-options">
                    <label className="radio-option new-ticket_customer-option">
                        Existing customer
                        <input 
                            type="radio"
                            value="existing" 
                            checked={this.state.customer_status == 'existing'}
                            onChange={this.handleRadioChange}
                            className="radio-option__button"
                        />
                    </label>
                    <label className="radio-option new-ticket-customer-option">
                        New customer
                        <input 
                            type="radio" 
                            value="new" 
                            checked={this.state.customer_status == 'new'}
                            onChange={this.handleRadioChange}
                            className="radio-option__button"
                        />
                    </label>
                </div>
                {this.renderProperView()}
            </div>
        )
    }
}

export default withRouter(CustomerInfo);