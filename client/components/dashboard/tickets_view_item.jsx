import React from 'react';

const TicketsViewItem = ({ticket}) => (
    <div className="tickets-view__item"> 
        <p>{ticket.id}</p>
        <p>{ticket.business_id}</p> 
        <p>{ticket.date_dropped_off}</p>
        <p>{ticket.time_dropped_off}</p>
    </div>
)

export default TicketsViewItem;