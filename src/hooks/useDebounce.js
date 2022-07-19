import { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(debounceTimeout);
    }, [delay, value]);
    return debounceValue;
};

export default useDebounce;
