import React, {PureComponent, useEffect} from 'react';
import {withRouter, Route, Switch} from 'react-router-dom';
import Loading from '../_shared/Loading';
import { Layout} from "antd";
import Login from '../login/Login';
import Home from '../home/Home';

//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchAuthorizationData} from '../../redux/actions/authorizationAction';
import {checkTokenData, refreshTokenData} from '../../redux/actions/verifyTokenAction';

class AppRouter extends PureComponent {
    componentDidMount() {
        this.initialRequest();
    }

    initialRequest = async () => {
        const {access, checkTokenData, refreshTokenData} = this.props;
        const token = localStorage.getItem('token');
        await checkTokenData(token);
        await refreshTokenData(token);
    };

    render() {
        //const {access, checkTokenData, refreshTokenData} = this.props;

        return (
            <Layout className={"layout"}>
                <Switch>
                    <Route exact component={Login} path={'/'}/>
                    <Route exact component={Home} path={'/home'}/>
                    <Route component={Login} />
                </Switch>
            </Layout>
        )
    }
}

const mapStateToProps = (store) => ({
    access: store.authorization.access,
    refresh: store.authorization.refresh,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    checkTokenData,
    refreshTokenData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppRouter));
