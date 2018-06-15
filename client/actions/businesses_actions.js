import * as APIUtil from '../util/businesses_api_util';

export const RECEIVE_CURRENT_BUSINESS_ID = 'RECEIVE_CURRENT_BUSINESS_ID';
export const RECEIVE_CURRENT_BUSINESS = 'RECEIVE_CURRENT_BUSINESS';
export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS_ON_MAP = 'RECEIVE_BUSINESS_ON_MAP'

export const receiveCurrentBusinessId = (id) => ({
    type: RECEIVE_CURRENT_BUSINESS_ID, 
    id: id
})

export const receiveCurrentBusiness = (business) => ({
    type: RECEIVE_CURRENT_BUSINESS, 
    business: business
})

export const receiveBusinesses = (businesses) => ({
    type: RECEIVE_BUSINESSES, 
    businesses: businesses
})

export const setBusinessOnMap = (business) => ({
    type: RECEIVE_BUSINESS_ON_MAP, 
    business: business
})

export const fetchCurrentBusinessInfo = (business_id) => (dispatch) => (
    APIUtil.fetchCurrentBusinessInfo(business_id).then(
        (business) => dispatch(receiveCurrentBusiness(business))
    )
)

export const fetchBusinesses = (user_id) => (dispatch) => (
    APIUtil.fetchBusinesses(user_id).then(
        (businesses) => dispatch(receiveBusinesses(businesses))
    )
)
