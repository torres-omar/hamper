import React from 'react'; 
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import Errors from '../shared/errors';

const mapDispatchToProps = (dispatch) => ({
    login: (email) => dispatch(login(email))
})


class LogInForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            show_errors: false, 
            errors: []
        } 

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    handleChange(event){
        this.setState({email: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault(); 
        // no need to redirect upon succesful login
        // AuthRoute makes sure to redirect as soon as user is logged in
        this.props.login(this.state.email).then(
            () => {return}, 
            (response) => this.setState({show_errors: true, errors: Object.values(response.errors)})
        )
    }

    renderErrors(){
        if(this.state.show_errors){
            return(
                <Errors errors={this.state.errors}/>
            )
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
                <input type="text" onChange={this.handleChange} value={this.state.email} />
                <input type="submit"/>
                {this.renderErrors()}
            </form> 
        )
    }
}

export default withRouter(connect(null, mapDispatchToProps)(LogInForm));