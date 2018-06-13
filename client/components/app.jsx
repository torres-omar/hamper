import React from 'react'; 
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import LogInPage from './pages/login_page';
import TicketsTab from './pages/tickets_tab';
import TicketView from './dashboard/ticket_view';

const App = () => (
    <div> 
        <Switch>
            <AuthRoute exact path="/" component={LogInPage} />
            <ProtectedRoute exact path="/tickets/" component={TicketsTab} />
            <ProtectedRoute exact path="/tickets/:ticket_id" component={TicketView} />
        </Switch>
    </div> 
);

export default App; 