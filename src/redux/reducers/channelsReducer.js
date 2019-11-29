import {
    IS_DATA_F,
    IS_DATA_L,
    IS_DATA_S
} from '../actions/channelsAction';

const initialState = {
    isLoading: false,
    isFailed: false,
    data: []
};

export function  channelsReducer(state = initialState, action) {
    switch (action.type) {
        case IS_DATA_L:
            return {...state, isLoading: true};
        case IS_DATA_F:
            return {...state, isFailed: true};
        case IS_DATA_S:
            return {...state, data: action.payload && action.payload.results};
        default:
            return state
    }
}
