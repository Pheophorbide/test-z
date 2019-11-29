import React, {memo} from 'react';
import store from '../../redux/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import Router from '../router/Router';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter basename={'z'}>
                <Router />
            </BrowserRouter>
        </Provider>
    );
}

export default memo(App);
