import { Button } from 'antd';
import s from './CustomHeader.module.css';

export const CustomHeader: React.FC = () => (
    <header className={s.header}>
        <div className='bodyRegular'>Главная</div>
        <div className={s.headerMain}>
            <h1>
                Приветствуем тебя в CleverFit — приложении,
                <br /> которое поможет тебе добиться своей мечты!
            </h1>
            <Button className={s.headerMainButtons} type='text'>
                <img className={s.gear} src='/icons/gear.svg' alt='gear' />
                <span className='bodyRegular'>Настройки</span>
            </Button>
            <Button className={s.gearMobile} shape='circle' icon={<img src='/icons/gear.svg' alt='gear' />} />
        </div>
    </header>
);
