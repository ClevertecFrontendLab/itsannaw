import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import s from './MainPage.module.css';
import { CustomContent, CustomFooter, CustomHeader, CustomSider } from '@components/layout';

export const MainPage: React.FC = () => (
    <Layout className={s.layout}>
        <CustomSider />
        <Layout className={s.siteLayout}>
            <CustomHeader />
            <CustomContent />
            <CustomFooter />
        </Layout>
    </Layout>
);
