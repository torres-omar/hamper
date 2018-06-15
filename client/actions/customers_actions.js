import * as APIUtil from '../util/customers_api_util';

export const RECEIVE_CUSTOMERS = 'RECEIVE_CUSTOMER';
export const RECEIVE_SEARCH_CUSTOMERS = 'RECEIVE_SEARCH_CUSTOMERS';

export const receiveCustomers = (customers) => ({
    type: RECEIVE_CUSTOMERS, 
    customers: customers
})

export const clearSearchCustomers = () => ({
    type: RECEIVE_SEARCH_CUSTOMERS, 
    customers: []
})

export const receiveSearchCustomers = (customers) => ({
    type: RECEIVE_SEARCH_CUSTOMERS,
    customers: customers
})

export const fetchCustomers = (business_id) => (dispatch) => (
    APIUtil.fetchCustomers(business_id).then(
        (customers) => dispatch(receiveCustomers(customers))
    )
)

export const fetchSearchCustomers = (business_id, query) => (dispatch) => (
    APIUtil.fetchSearchCustomers(business_id, query).then(
        (customers) => dispatch(receiveSearchCustomers(customers))
    )
)