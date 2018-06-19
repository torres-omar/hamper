import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import TicketsViewTab from './tickets_view_tab';
import CustomerInfo from './new_ticket/customer_info';
import TicketInfo from './new_ticket/ticket_info';
import SettingsTab from './settings_tab';
import Icons from '../dashboard/icons';

const Dashboard = () => (
    <div className="dashboard">
        <ProtectedRoute path="/dashboard" component={Icons} />
        <Switch>
            <ProtectedRoute exact path="/dashboard/new-ticket-s1" component={CustomerInfo} />
            <ProtectedRoute exact path="/dashboard/new-ticket-s2" component={TicketInfo} />
            <ProtectedRoute exact path="/dashboard/businesses" component={SettingsTab} />
            <ProtectedRoute path="/dashboard/tickets" component={TicketsViewTab} />
        </Switch>
    </div>
);

export default Dashboard; 