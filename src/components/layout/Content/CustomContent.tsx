import {
    AndroidFilled,
    AppleFilled,
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import s from './CustomContent.module.css';
import 'antd/dist/antd.css';
import { Content } from 'antd/lib/layout/layout';

export const CustomContent: React.FC = () => {
    return (
        <Content className={s.content}>
            <div className={s.card}>
                <h6>
                    С CleverFit ты сможешь:
                    <br />— планировать свои тренировки на календаре, выбирая тип и уровень
                    нагрузки;
                    <br /> — отслеживать свои достижения в разделе статистики, сравнивая свои
                    результаты с нормами и рекордами;
                    <br />— создавать свой профиль, где ты можешь загружать свои фото, видео и
                    отзывы о тренировках;
                    <br /> — выполнять расписанные тренировки для разных частей тела, следуя
                    подробным инструкциям и советам профессиональных тренеров.
                </h6>
            </div>
            <div className={s.cards}>
                <div className={s.card}>
                    <h4>
                        CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса.
                        Не откладывай на завтра — начни тренироваться уже сегодня!
                    </h4>
                </div>
                <div className={s.cardsActions}>
                    <div className={s.miniCard}>
                        <h6 className={s.textMiniCard}>Расписать тренировки</h6>
                        <div className={s.contentButton}>
                            <Button
                                type='link'
                                icon={<HeartFilled />}
                                style={{ color: 'var(--geekblue-6)' }}
                            >
                                Тренировки
                            </Button>
                        </div>
                    </div>
                    <div className={s.miniCard}>
                        <h6 className={s.textMiniCard}>Назначить календарь</h6>
                        <div className={s.contentButton}>
                            <Button
                                type='link'
                                icon={
                                    <CalendarTwoTone
                                        twoToneColor={['var(--geekblue-6)', 'var(--geekblue-6)']}
                                    />
                                }
                                style={{ color: 'var(--geekblue-6)' }}
                            >
                                Календарь
                            </Button>
                        </div>
                    </div>
                    <div className={s.miniCard}>
                        <h6 className={s.textMiniCard}>Заполнить профиль</h6>
                        <div className={s.contentButton}>
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
            <div className={s.buttom}>
                <Button type='link'>
                    <h6 style={{ color: 'var(--geekblue-6)' }}>Смотреть отзывы</h6>
                </Button>
                <div className={s.miniCard}>
                    <div className={s.buttomTextCard}>
                        <Button type='link'>
                            <h6 style={{ color: 'var(--geekblue-6)' }}>Скачать на телефон</h6>
                        </Button>
                        <span className='body-regular' style={{ color: 'var(--gray-7)' }}>
                            Доступно в PRO-тарифе
                        </span>
                    </div>
                    <div className={s.buttomCardButtons}>
                        <Button className='body-regular' type='text' icon={<AndroidFilled />}>
                            Android OS
                        </Button>
                        <Button className='body-regular' type='text' icon={<AppleFilled />}>
                            Apple iOS
                        </Button>
                    </div>
                </div>
            </div>
        </Content>
    );
};
