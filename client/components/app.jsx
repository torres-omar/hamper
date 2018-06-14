import React from 'react'; 
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import LogInPage from './pages/login_page';
import TicketsViewTab from './pages/tickets_view_tab';
import TicketViewTab from './pages/ticket_view_tab';
import NewTicketTab from './pages/new_ticket_tab';

const App = () => (
    <div> 
        <Switch>
            <AuthRoute exact path="/" component={LogInPage} />
            <ProtectedRoute exact path="/tickets/new" component={NewTicketTab} />
            <ProtectedRoute exact path="/tickets" component={TicketsViewTab} />
            <ProtectedRoute exact path="/tickets/:ticket_id" component={TicketViewTab} />
        </Switch>
    </div> 
);

export default App; 