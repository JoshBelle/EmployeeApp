import React from 'react';
import style from './index.module.css';
import { Layout, Space, Typography } from 'antd';
import { LoginOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import CustomButton from '../customButton';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

const Header = () => {
    return (
        <Layout.Header className={style.header}>
            <Space>
                <TeamOutlined className={style.teamIcons}></TeamOutlined>
                <Link to={Paths.home}>
                    <CustomButton type="ghost">
                        <Typography.Title level={1}>
                            Сотрудники
                        </Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
            <Space>
                <Link to={Paths.register}>
                    <CustomButton icon={<UserOutlined />} type="ghost">
                        Зарегистрироваться
                    </CustomButton>
                </Link>
                <Link to={Paths.login}>
                    <CustomButton icon={<LoginOutlined />} type="ghost">
                        Войти
                    </CustomButton>
                </Link>
            </Space>
        </Layout.Header>
    );
};

export default Header;
