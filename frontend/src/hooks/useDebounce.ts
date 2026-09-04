import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number): [T, boolean] {
    const [debouncedValue, setDebounceValue] = useState(value);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const handler = setTimeout(() => {
            setDebounceValue(value);
            setLoading(false)
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return [debouncedValue, loading];
}
