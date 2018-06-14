import React from 'react';
import TicketsView from '../dashboard/tickets_view';
import TicketsControl from '../dashboard/tickets_control';

class TicketsViewTab extends React.Component{
    constructor(props){
        super(props)
    }

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