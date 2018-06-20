import React from 'react';
import {createNewCustomer} from '../../actions/customers_actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const mapDispatchToProps = (dispatch) => ({
    createNewCustomer: (data) => dispatch(createNewCustomer(data))
})

const mapStateToProps = (state) => ({
    current_business_id: state.ui.current_business_id
})

class NewCustomerForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email_address: '', 
            phone_number: '',
            business_id: this.props.current_business_id
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        // submit form as post request
        // response (user) should be stored in redux
        // and should redirect to next step in process 
        debugger
        this.props.createNewCustomer(this.state).then(
            () => this.props.history.push('/dashboard/new-ticket-s2')
        )
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="form new-customer-form">
                <label className="form__label-and-field">
                    First name
                    <input type="text" onChange={this.handleChange} name="first_name" value={this.state.first_name}/>
                </label>
                <label className="form__label-and-field">
                    Last name
                    <input type="text" onChange={this.handleChange} name="last_name" value={this.state.last_name}/>
                </label>
                <label className="form__label-and-field">
                    Email
                    <input type="text" onChange={this.handleChange} name="email_address" value={this.state.email_address}/>
                </label>
                <label className="form__label-and-field">
                    Phone number
                    <input type="text" onChange={this.handleChange} name="phone_number" value={this.state.phone_number}/>
                </label>
                <input type="submit" value="continue" className="form__submit-button"/>
            </form>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCustomerForm));