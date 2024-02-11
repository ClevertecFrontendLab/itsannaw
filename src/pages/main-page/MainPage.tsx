import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import s from './MainPage.module.css';
import { CustomContent, CustomHeader, CustomSider } from '@components/layout';


export const MainPage: React.FC = () => {
    return (
        <Layout className={s.layout} style={{ minHeight: '100vh' }}>
            <CustomSider />
            <Layout className={s.siteLayout}>
                <CustomHeader />
                <CustomContent />
            </Layout>
        </Layout>
    );
};
