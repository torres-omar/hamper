import React from 'react';

const TicketItem = ({ticket}) => (
    <li> 
        <p>{ticket.id}</p>
        <p>{ticket.business_id}</p> 
        <p>{ticket.date_dropped_off}</p>
        <p>{ticket.time_dropped_off}</p>
    </li>
)

export default TicketItem;