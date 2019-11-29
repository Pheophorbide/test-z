import {
    IS_AUTHORIZATION_DATA_S,
    IS_AUTHORIZATION_DATA_L,
    IS_AUTHORIZATION_DATA_F
} from '../actions/authorizationAction';

const initialState = {
    isLoading: false,
    isFailed: false,
    access: '',
    refresh: ''
};

export function  authorizationReducer(state = initialState, action) {
    switch (action.type) {
        case IS_AUTHORIZATION_DATA_L:
            return {...state, isLoading: true};
        case IS_AUTHORIZATION_DATA_F:
            return {...state, isFailed: true};
        case IS_AUTHORIZATION_DATA_S:
            return {...state, access: action.payload && action.payload.access, refresh: action.payload && action.payload.refresh};
        default:
            return state
    }
}
