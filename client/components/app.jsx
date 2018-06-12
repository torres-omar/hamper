import React from 'react'; 
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import LoginPage from './pages/login_page';


const App = () => (
    <div> 
        <Switch>
            <AuthRoute exact path="/login" component={LoginPage} />
        </Switch>
    </div> 
);

export default App; 