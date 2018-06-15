import React from 'react';
import TicketsControl from '../../dashboard/tickets_control';
import CustomerSearchBar from '../../dashboard/customer_search_bar';
import NewCustomerForm from '../../dashboard/new_customer_form';
import { withRouter } from 'react-router-dom';

class CustomerInfoTab extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            customer_status: "existing"
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
                <CustomerSearchBar />
            )
        }else if(this.state.customer_status == 'new'){
            return(
                <NewCustomerForm />
            )
        }
    }

    goBack(){
        this.props.history.push('/tickets')
    }

    render(){
        return(
            <div>
                <TicketsControl />
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

export default withRouter(CustomerInfoTab);