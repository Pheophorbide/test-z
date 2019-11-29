import React, {PureComponent, useEffect} from 'react';
import {withRouter, Route} from 'react-router-dom';
import Loading from '../_shared/Loading';
import {Form, Layout} from "antd";
import Login from '../login/Login';

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

        await checkTokenData(access);
        await refreshTokenData(access);
    };



    render() {
        const {access, checkTokenData, refreshTokenData} = this.props;

        return (
            <Layout className={"layout"}>
                <Login/>
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
