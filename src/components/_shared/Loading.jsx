import React, {memo} from 'react';
import {Spin} from 'antd';

const Loading = () => (
        <Spin className={"loader"}/>
);

export default memo(Loading);
