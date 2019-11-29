import React, {memo, useEffect} from 'react';
import {Select} from 'antd';

//redux
import {fetchChannelData} from '../../redux/actions/channelsAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchAuthorizationData} from "../../redux/actions/authorizationAction";
import {checkTokenData, refreshTokenData} from '../../redux/actions/verifyTokenAction';

const Home = ({channels, fetchChannelData, access, checkTokenDat, refreshTokenDataa}) => {
    useEffect(() => {
        const token = localStorage.getItem('token');
        fetchChannelData(token);
    }, []);

    console.log(channels);
    const {Option} =Select;
    function onChange(e) {
        console.log(e)
    }

   return (
       <div>
           <Select onChange={onChange} >
               {
                   channels && channels.map(item => (
                       <Option key={item.id} value={item.id}>{item.name}</Option>
                   ))
               }
            </Select>
       </div>
   )
};

const mapStateToProps = (store) => ({
    channels: store.channels.data,
    access: store.authorization.access,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchChannelData,
    checkTokenData,
    refreshTokenData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(memo(Home));
