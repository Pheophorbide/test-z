import { combineReducers } from 'redux';
import {authorizationReducer} from './authorizationReducer';
import {verifyTokenReducer} from './verifyTokenReducer';
import { reducer as reduxFormReducer } from 'redux-form';

export const rootReducer = combineReducers({
    form: reduxFormReducer,
    authorization: authorizationReducer,
    token: verifyTokenReducer
});
