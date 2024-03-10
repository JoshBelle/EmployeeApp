import React, { useState } from 'react';
import { Card, Form, Row, Space, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Paths } from '../../paths';
import Layout from '../../components/layout';
import CustomInput from '../../components/customInput';
import PasswordInput from '../../components/customPasswordInput';
import CustomButton from '../../components/customButton';
import { UserData, useLoginMutation } from '../../app/services/auth';
import { isErrorWithMessage } from '../../utils/isErrorWithMessage';
import ErrorMessage from '../../components/errorMessage';



const Login = () => {
    const navigate = useNavigate()
    const [loginUser, loginUserResult] = useLoginMutation();
    const [error, setError] = useState('')

    const login = async (data: UserData) => {
        try {
            await loginUser(data).unwrap()
            navigate('/')
        } catch (err) {
            const maybeError = isErrorWithMessage(err)

            if (maybeError) {
                setError(err.data.message)
            } else {
                setError('Неизвестная ошибка')
            }
        }
    };

    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Войдите" style={{ width: '30rem' }}>
                    <Form onFinish={login}>
                        <CustomInput
                            placeholder="Email"
                            type="emil"
                            name="email"
                        />
                        <PasswordInput placeholder="Пароль" name="password" />
                        <CustomButton type="primary" htmlType="submit">
                            Войти
                        </CustomButton>
                        <Space direction="vertical" size="large">
                            <Typography.Text>
                                Нет аккаунта?{' '}
                                <Link to={Paths.register}>
                                    Зарегистрироваться
                                </Link>
                            </Typography.Text>
                            <ErrorMessage message={error}></ErrorMessage>
                        </Space>
                    </Form>
                </Card>
            </Row>
        </Layout>
    );
};

export default Login;
