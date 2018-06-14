import * as APIUtil from '../util/businesses_api_util';

export const RECEIVE_CURRENT_BUSINESS_ID = 'RECEIVE_CURRENT_BUSINESS_ID';

export const receiveCurrentBusinessId = (id) => ({
    type: RECEIVE_CURRENT_BUSINESS_ID, 
    id: id
})
