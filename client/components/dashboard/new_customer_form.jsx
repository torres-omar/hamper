import React from 'react';

class NewCustomerForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email_address: '', 
            phone_number: '',
            street_address: '',
            zip_code: '', 
            apt_number: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    // handleSubmit(e){
        // submit form as post request
        // response (user) should be stored in redux
        // and should redirect to next step in process 
    // }

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
                    <label>
                        Street address
                        <input type="text" onChange={this.handleChange} name="street_address" value={this.state.street_address}/>
                    </label>
                    <label>
                        Apt number
                        <input type="text" onChange={this.handleChange} name="apt_number" value={this.state.apt_nunber}/>
                    </label>
                    <label>
                        Zip code
                        <input type="text" onChange={this.handleChange} name="zip_code" value={this.state.zip_code}/>
                    </label>
                    <input type="submit" value="continue" />
                </form>
            </div>
        )
    }
}

export default NewCustomerForm;