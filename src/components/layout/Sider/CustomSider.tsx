import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './CustomSider.css';
import {
    AndroidFilled,
    AppleFilled,
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';

const { Sider, Content } = Layout;

const SIDEBAR_TRANSITION_TIME = 200;

const CustomSider: React.FC = () => {
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
        <Layout className='layout' style={{ minHeight: '100vh' }}>
            <Sider
                width={208}
                trigger={null}
                theme='light'
                collapsible
                collapsed={collapsed}
                collapsedWidth={64}
            >
                <div className='logo-menu-exit'>
                    <div className='logo-menu'>
                        <div className='icon'>
                            {isLogoCollapsed ? (
                                <img
                                    className='logo-collapsed'
                                    src='/logo-collapsed.svg'
                                    alt='Fit'
                                />
                            ) : (
                                <img className='logo' src='/logo.svg' alt='CleverFit' />
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
                        className: `${
                            collapsed ? 'is-collapsed' : ''
                        } trigger icon-collapsed-background`,
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <div className='exit'>
                        <img className='' src='/icons/exit.svg' alt='exit' />
                        {isLogoCollapsed ? '' : <span>Выход</span>}
                    </div>
                </div>
            </Sider>

            <Layout className='site-layout'>
                <header className='header'>
                    <div className='body-regular'>Главная</div>
                    <div className='header-main'>
                        <h1>
                            Приветствуем тебя в CleverFit — приложении,
                            <br /> которое поможет тебе добиться своей мечты!
                        </h1>
                        <Button className='header-main-buttons' type='text'>
                            <img src='/icons/gear.svg' alt='gear' />
                            <span className='body-regular'>Настройки</span>
                        </Button>
                    </div>
                </header>
                <Content className='content'>
                    <div className='card'>
                        <h6>
                            С CleverFit ты сможешь:
                            <br />— планировать свои тренировки на календаре, выбирая тип и уровень
                            нагрузки;
                            <br /> — отслеживать свои достижения в разделе статистики, сравнивая
                            свои результаты с нормами и рекордами;
                            <br />— создавать свой профиль, где ты можешь загружать свои фото, видео
                            и отзывы о тренировках;
                            <br /> — выполнять расписанные тренировки для разных частей тела, следуя
                            подробным инструкциям и советам профессиональных тренеров.
                        </h6>
                    </div>
                    <div className='cards'>
                        <div className='card'>
                            <h4>
                                CleverFit — это не просто приложение, а твой личный помощник в мире
                                фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
                            </h4>
                        </div>
                        <div className='cards-actions'>
                            <div className='mini-card'>
                                <h6 className='text-mini-card'>Расписать тренировки</h6>
                                <div className='content-button'>
                                    <Button
                                        type='link'
                                        icon={<HeartFilled />}
                                        style={{ color: 'var(--geekblue-6)' }}
                                    >
                                        Тренировки
                                    </Button>
                                </div>
                            </div>
                            <div className='mini-card'>
                                <h6 className='text-mini-card'>Назначить календарь</h6>
                                <div className='content-button'>
                                    <Button
                                        type='link'
                                        icon={
                                            <CalendarTwoTone
                                                twoToneColor={[
                                                    'var(--geekblue-6)',
                                                    'var(--geekblue-6)',
                                                ]}
                                            />
                                        }
                                        style={{ color: 'var(--geekblue-6)' }}
                                    >
                                        Календарь
                                    </Button>
                                </div>
                            </div>
                            <div className='mini-card'>
                                <h6 className='text-mini-card'>Заполнить профиль</h6>
                                <div className='content-button'>
                                    <Button
                                        type='link'
                                        icon={<IdcardOutlined />}
                                        style={{ color: 'var(--geekblue-6)' }}
                                    >
                                        Профиль
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='buttom'>
                        <Button type='link'>
                            <h6 style={{ color: 'var(--geekblue-6)' }}>Смотреть отзывы</h6>
                        </Button>
                        <div className='mini-card'>
                            <div className='buttom-text-card'>
                                <Button type='link'>
                                    <h6 style={{ color: 'var(--geekblue-6)' }}>
                                        Скачать на телефон
                                    </h6>
                                </Button>
                                <span className='body-regular' style={{ color: 'var(--gray-7)' }}>
                                    Доступно в PRO-тарифе
                                </span>
                            </div>
                            <div className='buttom-card-buttons'>
                                <Button
                                    className='body-regular'
                                    type='text'
                                    icon={<AndroidFilled />}
                                >
                                    Android OS
                                </Button>
                                <Button className='body-regular' type='text' icon={<AppleFilled />}>
                                    Apple iOS
                                </Button>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default CustomSider;
