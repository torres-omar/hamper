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
                <p>Customer Info</p>
                <button onClick={this.goBack}>back</button>
                <div>
                    <label>
                        Existing customer
                        <input 
                            type="radio"
                            value="existing" 
                            checked={this.state.customer_status == 'existing'}
                            onChange={this.handleRadioChange}
                        />
                    </label>
                    <label>
                        New customer
                        <input 
                            type="radio" 
                            value="new" 
                            checked={this.state.customer_status == 'new'}
                            onChange={this.handleRadioChange}
                        />
                    </label>
                </div>
                {this.renderProperView()}
            </div>
        )
    }
}

export default withRouter(CustomerInfo);