import React from 'react';
import TicketsView from '../dashboard/tickets_view';
import TicketsControl from '../dashboard/tickets_control';

class TicketsTab extends React.Component{
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

export default TicketsTab;