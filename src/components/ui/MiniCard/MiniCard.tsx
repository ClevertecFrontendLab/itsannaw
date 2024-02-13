import React from 'react';
import { Button } from 'antd';
import s from './MiniCard.module.css';

export const MiniCard: React.FC<MiniCardProps> = ({ title, icon, buttonText, buttonColor }) => (
    <div className={s.miniCard}>
        <h6 className={s.textMiniCard}>{title}</h6>
        <div className={s.contentButton}>
            <Button type='link' icon={icon} style={{ color: buttonColor }}>
                {buttonText}
            </Button>
        </div>
    </div>
);
