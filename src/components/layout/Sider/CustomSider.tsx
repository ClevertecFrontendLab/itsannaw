import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import s from './CustomSider.module.css';
import {
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const SIDEBAR_TRANSITION_TIME = 200;

export const CustomSider: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isLogoCollapsed, setIsLogoCollapsed] = useState(false);

    useEffect(() => {
        if (collapsed) {
            setIsLogoCollapsed(collapsed);
            return;
        }
        setTimeout(() => {
            setIsLogoCollapsed(collapsed);
        }, SIDEBAR_TRANSITION_TIME);
    }, [collapsed]);

    return (
        <>
            <Sider
                width={208}
                trigger={null}
                theme='light'
                collapsible
                collapsed={collapsed}
                collapsedWidth={64}
            >
                <div className={s.logoMenuExit}>
                    <div className={s.logoMenu}>
                        <div className={s.icon}>
                            {isLogoCollapsed ? (
                                <img src='/logo-collapsed.svg' alt='Fit' />
                            ) : (
                                <img className={s.logo} src='/logo.svg' alt='CleverFit' />
                            )}
                        </div>
                        <Menu
                            theme='light'
                            items={[
                                {
                                    key: '1',
                                    icon: (
                                        <CalendarTwoTone
                                            twoToneColor={[
                                                'var(--geekblue-9)',
                                                'var(--geekblue-9)',
                                            ]}
                                        />
                                    ),
                                    label: 'Календарь',
                                },
                                {
                                    key: '2',
                                    icon: <HeartFilled style={{ color: 'var(--geekblue-9)' }} />,
                                    label: 'Тренировки',
                                },
                                {
                                    key: '3',
                                    icon: <TrophyFilled style={{ color: ' var(--geekblue-9)' }} />,
                                    label: 'Достижения',
                                },
                                {
                                    key: '4',
                                    icon: <IdcardOutlined style={{ color: 'var(--geekblue-9)' }} />,
                                    label: 'Профиль',
                                },
                            ]}
                        />
                    </div>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: `trigger ${collapsed ? 'is-collapsed' : ''} ${
                            s.iconCollapsedBackground
                        }`,
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <div className={s.exit}>
                        <img className='' src='/icons/exit.svg' alt='exit' />
                        {isLogoCollapsed ? '' : <span className={s.exitText}>Выход</span>}
                    </div>
                </div>
            </Sider>
        </>
    );
};
