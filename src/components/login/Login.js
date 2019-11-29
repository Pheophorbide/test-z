import React, {memo} from 'react';
import {Form, Input, Button} from 'antd';

//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchAuthorizationData} from '../../redux/actions/authorizationAction';
import {checkTokenData, refreshTokenData} from '../../redux/actions/verifyTokenAction';

const LoginForm = ({form, fetchAuthorizationData}) => {
    const {getFieldDecorator} = form;

    function onSubmit(e) {
        e.preventDefault();

        form.validateFields((err, values) => {
            if(!err) {
                fetchAuthorizationData(values)
            }
        });
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Item>
                {
                    getFieldDecorator("email")(
                        <Input
                            type={"text"}
                            placeholder={"email"}
                        />
                    )
                }
            </Form.Item>
            <Form.Item>
                {
                    getFieldDecorator("password")(
                        <Input
                            type={"password"}
                            placeholder={"password"}
                        />
                    )
                }
            </Form.Item>
            <Button htmlType={"submit"}>Отправить</Button>
        </Form>
    )
};

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchAuthorizationData,
}, dispatch);

const Login = Form.create()(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(memo(Login));
