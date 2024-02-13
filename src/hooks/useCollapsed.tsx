import { useState, useEffect } from 'react';

const SIDEBAR_TRANSITION_TIME = 200;

export const useCollapsed = () => {
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

    return { collapsed, setCollapsed, isLogoCollapsed, setIsLogoCollapsed };
};
