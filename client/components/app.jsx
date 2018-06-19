import React from 'react'; 
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import LogInPage from './pages/login_page';
import Dashboard from './pages/dashboard';

const App = () => ( 
    <div className="app">
        <AuthRoute exact path="/login" component={LogInPage} />
        <ProtectedRoute path="/dashboard" component={Dashboard}/>
    </div>
);

export default App; 