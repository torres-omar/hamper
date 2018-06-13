import React from 'react'; 
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchTickets: () => dispatch(fetchTickets())
})

const mapStateToProps = (state) => ({
})

class TicketsTab extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        // call fetchUnfulfilledTickets method with page 0
        // this.props.fetchUnfulfilledTickets(0)
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.logout();
    }

    render(){
        return(
            <div>
                <h1>Logged in!</h1> 
                <input type="button" onClick={this.handleSubmit} value="sign out"/>
            </div> 
        )
    }
}

export default connect(null, mapDispatchToProps)(TicketsTab);