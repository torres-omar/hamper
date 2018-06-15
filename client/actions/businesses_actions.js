import * as APIUtil from '../util/businesses_api_util';

export const RECEIVE_CURRENT_BUSINESS_ID = 'RECEIVE_CURRENT_BUSINESS_ID';
export const RECEIVE_CURRENT_BUSINESS = 'RECEIVE_CURRENT_BUSINESS';

export const receiveCurrentBusinessId = (id) => ({
    type: RECEIVE_CURRENT_BUSINESS_ID, 
    id: id
})

export const receiveCurrentBusiness = (business) => ({
    type: RECEIVE_CURRENT_BUSINESS, 
    business: business
})

export const fetchCurrentBusinessInfo = (business_id) => (dispatch) => (
    APIUtil.fetchCurrentBusinessInfo(business_id).then(
        (business) => dispatch(receiveCurrentBusiness(business))
    )
)
