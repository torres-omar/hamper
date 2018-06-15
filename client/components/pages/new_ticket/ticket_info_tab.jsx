import React from 'react';
import {withRouter} from 'react-router-dom';

class TicketInfoTab extends React.Component{
    constructor(props){
        super(props)
        this.goBack = this.goBack.bind(this)
    }

    goBack(){
        this.props.history.push('/tickets/new/s1')
    }

    render(){
        return(
            <div>
                <button onClick={this.goBack}>back</button>
                <p>Ticket info</p>
            </div>
        )
    }
}

export default withRouter(TicketInfoTab);