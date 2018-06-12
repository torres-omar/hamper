import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'; 

// action creators (return an action)
export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER, 
    current_user: user 
});

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS, 
    errors: errors 
});


// functional action creators (return functions that themselves dispatch actions)
export const login = (email) => (dispatch) => (
    APIUtil.login(email)
        .then((user) => dispatch(receiveCurrentUser(user)),
        (errors) => dispatch(receiveSessionErrors(errors.responseJSON)))
);

export const logout = () => (dispatch) => (
    APIUtil.logout()
        .then((user) => dispatch(receiveCurrentUser(null)),
        (errors) => dispatch(receiveSessionErrors(errors.responseJSON)))
);







