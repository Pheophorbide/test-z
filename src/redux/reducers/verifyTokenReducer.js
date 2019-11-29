import {
    IS_TOKEN_VERIFY_S
} from '../actions/verifyTokenAction';

const initialState = {
    token: '',
};

export function  verifyTokenReducer(state = initialState, action) {
    switch (action.type) {
        case IS_TOKEN_VERIFY_S:
            return {...state, token: action.payload};
        default:
            return state
    }
}
