import React from 'react'; 
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import LogInPage from './pages/login_page';
import TicketsViewTab from './pages/tickets_view_tab';
import TicketViewTab from './pages/ticket_view_tab';
import CustomerInfoTab from './pages/new_ticket/customer_info_tab';
import TicketInfoTab from './pages/new_ticket/ticket_info_tab';
import SettingsTab from './pages/settings_tab';
import Icons from './dashboard/icons';

const App = () => ( 
    <div className="app">
        <AuthRoute exact path="/login" component={LogInPage} />
        <div className="dashboard">
            <ProtectedRoute path = "/" component={Icons} />
            <Switch>
                <ProtectedRoute exact path="/tickets/new/s1" component={CustomerInfoTab} />
                <ProtectedRoute exact path="/tickets/new/s2" component={TicketInfoTab} />
                <ProtectedRoute exact path="/tickets" component={TicketsViewTab} />
                <ProtectedRoute exact path="/tickets/:ticket_id" component={TicketViewTab} />
                <ProtectedRoute exact path="/businesses" component={SettingsTab} />
            </Switch>
        </div>
    </div>
);

export default App; 