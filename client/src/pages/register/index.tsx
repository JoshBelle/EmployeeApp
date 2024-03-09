import React from 'react';
import { Card, Form, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';
import Layout from '../../components/layout';
import CustomInput from '../../components/customInput';
import PasswordInput from '../../components/customPasswordInput';
import CustomButton from '../../components/customButton';

const Register = () => {
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Войдите" style={{ width: '30rem' }}>
                    <Form onFinish={() => null}>
                        <CustomInput placeholder="Имя" name="name" />
                        <CustomInput
                            placeholder="Email"
                            type="emil"
                            name="email"
                        />
                        <PasswordInput placeholder="Пароль" name="password" />
                        <PasswordInput
                            placeholder="Повторите пароль"
                            name="confirmPassword"
                        />
                        <CustomButton type="primary" htmlType="submit">
                            Зарегистрироваться
                        </CustomButton>
                        <Space direction="vertical" size="large">
                            <Typography.Text>
                                Уже есть аккаунт?{' '}
                                <Link to={Paths.login}>Войти</Link>
                            </Typography.Text>
                        </Space>
                    </Form>
                </Card>
            </Row>
        </Layout>
    );
};

export default Register;
