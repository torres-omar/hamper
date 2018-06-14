import React from 'react';
import TicketsView from '../dashboard/tickets_view';
import TicketsControl from '../dashboard/tickets_control';
// import { connect } from 'react-redux';

// const mapDispatchToProps = (dispatch) => ({
//     fetchStatusTickets: (business_id, page, status) => dispatch(fetchStatusTickets(business_id, page, status))
// })

// const mapStateToProps = (state) => ({
//     current_busines_id: state.entities.current_business_id
// })

class TicketsViewTab extends React.Component{
    constructor(props){
        super(props)
    }

    // componentDidMount() {
    //     // call fetchStatusTickets method with page 0
    //     let business_id = this.props.current_busines_id;
    //     this.props.fetchStatusTickets(business_id, 0, this.state.ticket_status);
    // }

    render(){
        return(
            <div>
                <TicketsControl />
                <TicketsView />
            </div>
        )
    }
}

export default TicketsViewTab;