import React from 'react'; 
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// renders component if logged out, otherwise redirects to dashboard default url
const Auth = ({ component: Component, path, loggedIn}) => {
    return <Route path={path} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (   
                <Redirect to="/tickets" />
            )
    )} />
};

// renders component if logged in, otherwise redirects to the login page
const Protected = ({ component: Component, path, loggedIn }) => (
    <Route path={path} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/login" />
            )
    )} />
);


const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.current_user) }
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));