import { useState, useEffect } from 'react';

export const useCollapsed = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isLogoCollapsed, setIsLogoCollapsed] = useState(false);

    useEffect(() => {
        if (collapsed) {
            setIsLogoCollapsed(collapsed);
            return;
        }
        setIsLogoCollapsed(collapsed);
    }, [collapsed]);

    return { collapsed, setCollapsed, isLogoCollapsed, setIsLogoCollapsed };
};
