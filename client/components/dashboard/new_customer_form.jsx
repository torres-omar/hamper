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
            () => this.props.history.push('/tickets/new/s2')
        )
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First name
                        <input type="text" onChange={this.handleChange} name="first_name" value={this.state.first_name}/>
                    </label>
                    <label>
                        Last name
                        <input type="text" onChange={this.handleChange} name="last_name" value={this.state.last_name}/>
                    </label>
                    <label>
                        Email
                        <input type="text" onChange={this.handleChange} name="email_address" value={this.state.email_address}/>
                    </label>
                    <label>
                        Phone number
                        <input type="text" onChange={this.handleChange} name="phone_number" value={this.state.phone_number}/>
                    </label>
                    <input type="submit" value="continue" />
                </form>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCustomerForm));