import { Button } from 'antd';
import s from './CustomHeader.module.css';
import 'antd/dist/antd.css';

export const CustomHeader: React.FC = () => {
    return (
        <header className={s.header}>
            <div className='bodyRegular'>Главная</div>
            <div className={s.headerMain}>
                <h1>
                    Приветствуем тебя в CleverFit — приложении,
                    <br /> которое поможет тебе добиться своей мечты!
                </h1>
                <Button className={s.headerMainButtons} type='text'>
                    <img src='/icons/gear.svg' alt='gear' />
                    <span className='bodyRegular'>Настройки</span>
                </Button>
            </div>
        </header>
    );
};
