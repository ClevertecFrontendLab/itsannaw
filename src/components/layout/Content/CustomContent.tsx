import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import s from './CustomContent.module.css';
import { Content } from 'antd/lib/layout/layout';
import { MiniCard } from '@components/ui';

export const CustomContent: React.FC = () => (
    <Content className={s.content}>
        <div className={s.card}>
            <h6>
                С CleverFit ты сможешь:
                <br />— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                <br /> — отслеживать свои достижения в разделе статистики, сравнивая свои результаты
                с нормами и рекордами;
                <br />— создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о
                тренировках;
                <br /> — выполнять расписанные тренировки для разных частей тела, следуя подробным
                инструкциям и советам профессиональных тренеров.
            </h6>
        </div>
        <div className={s.cards}>
            <div className={s.card}>
                <h4>
                    CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                    откладывай на завтра — начни тренироваться уже сегодня!
                </h4>
            </div>
            <div className={s.cardsActions}>
                <MiniCard
                    title='Расписать тренировки'
                    icon={<HeartFilled />}
                    buttonText='Тренировки'
                    buttonColor='var(--geekblue-6)'
                />
                <MiniCard
                    title='Назначить календарь'
                    icon={
                        <CalendarTwoTone
                            twoToneColor={['var(--geekblue-6)', 'var(--geekblue-6)']}
                        />
                    }
                    buttonText='Календарь'
                    buttonColor='var(--geekblue-6)'
                />
                <MiniCard
                    title='Заполнить профиль'
                    icon={<IdcardOutlined />}
                    buttonText='Профиль'
                    buttonColor='var(--geekblue-6)'
                />
            </div>
        </div>
    </Content>
);
