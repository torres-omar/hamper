import React from 'react'; 
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// renders component if logged out, otherwise redirects to dashboard default url
const Auth = ({ component: Component, path, loggedIn, default_business_id }) => {
    let url = `${default_business_id}/tickets`
    return <Route path={path} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (   
                <Redirect to=url />
            )
    )} />
};

// renders component if logged in, otherwise redirects to the login page
const Protected = ({ component: Component, path, loggedIn }) => (
    <Route path={path} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
);


const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.current_user),
             default_business_id: Boolean(state.session.current_user) ? state.session.current_user.startup_business_id : null};
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));