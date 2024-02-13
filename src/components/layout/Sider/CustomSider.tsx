import React, { useEffect } from 'react';
import s from './CustomSider.module.css';
import {
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { Grid, Layout, Menu } from 'antd';
import { useCollapsed } from '@hooks/useCollapsed';

const { useBreakpoint } = Grid;
const { Sider } = Layout;

export const CustomSider: React.FC = () => {
    const { collapsed, setCollapsed, isLogoCollapsed } = useCollapsed();
    const screens = useBreakpoint();

    const IconMenu = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined;
    const iconColor = { color: 'var(--geekblue-9)' };

    useEffect(() => {
        if (screens.xs) {
            setCollapsed(true);
        }
    }, [screens, setCollapsed]);

    return (
        <>
            <Sider
                width={screens.xs ? 106 : 208}
                trigger={null}
                theme='light'
                collapsible
                collapsed={collapsed}
                collapsedWidth={screens.xs ? 0 : 64}
                style={screens.xs ? { position: 'fixed', zIndex: 10 } : {}}
            >
                <div className={s.logoMenuExit}>
                    <div className={s.logoMenu}>
                        <div className={s.icon}>
                            {screens.xs ? (
                                <img src='/logo-mobile.svg' alt='CleverFit' />
                            ) : isLogoCollapsed ? (
                                <img src='/logo-collapsed.svg' alt='Fit' />
                            ) : (
                                <img className={s.logo} src='/logo.svg' alt='CleverFit' />
                            )}
                        </div>
                        <Menu
                            className={`${s.menu} mob-menu`}
                            theme='light'
                            items={[
                                {
                                    key: '1',
                                    icon: screens.xs ? null : (
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
                                    icon: screens.xs ? null : <HeartFilled style={iconColor} />,
                                    label: 'Тренировки',
                                },
                                {
                                    key: '3',
                                    icon: screens.xs ? null : <TrophyFilled style={iconColor} />,
                                    label: 'Достижения',
                                },
                                {
                                    key: '4',
                                    icon: screens.xs ? null : <IdcardOutlined style={iconColor} />,
                                    label: 'Профиль',
                                },
                            ]}
                        />
                    </div>
                    <span className={s.iconCollapsed} data-test-id='sider-switch-mobile'>
                        <IconMenu
                            className={`trigger ${collapsed ? 'is-collapsed' : ''} ${
                                s.iconCollapsedBackground
                            }`}
                            data-test-id='sider-switch'
                            onClick={() => setCollapsed(!collapsed)}
                        />
                    </span>
                    <div className={s.exit}>
                        {screens.xs ? '' : <img className='' src='/icons/exit.svg' alt='exit' />}
                        {isLogoCollapsed ? '' : <span className={s.exitText}>Выход</span>}
                    </div>
                </div>
            </Sider>
        </>
    );
};
