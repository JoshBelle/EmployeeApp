import React from 'react';
import { Layout as Antloyout } from 'antd';
import style from './index.module.css';
import Header from '../header';

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div className={style.main}>
            <Header />
            <Antloyout.Content
                style={{ height: '100%', backgroundColor: 'transparent' }}
            >
                {children}
            </Antloyout.Content>
        </div>
    );
};

export default Layout;
