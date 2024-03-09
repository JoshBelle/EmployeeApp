import React from 'react';
import { Card, Form, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';
import Layout from '../../components/layout';
import CustomInput from '../../components/customInput';
import PasswordInput from '../../components/customPasswordInput';
import CustomButton from '../../components/customButton';

const Login = () => {
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Войдите" style={{ width: '30rem' }}>
                    <Form onFinish={() => null}>
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
                        </Space>
                    </Form>
                </Card>
            </Row>
        </Layout>
    );
};

export default Login;
