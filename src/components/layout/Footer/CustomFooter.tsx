import { Button } from 'antd';
import s from './CustomFooter.module.css';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

export const CustomFooter: React.FC = () => (
    <footer className={s.buttom}>
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
    </footer>
);
