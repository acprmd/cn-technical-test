import { useEffect, useState, type FunctionComponent } from "react";
import { Input } from "antd"
import useDebounce from "../hooks/useDebounce";

interface SearchInputProps {
    onChange: (value: string) => void
}

const SearchInput: FunctionComponent<SearchInputProps> = ({ onChange }) => {
    const [query, setQuery] = useState('');
    const [debouncedQuery] = useDebounce(query, 300)
    useEffect(() => {
        onChange(debouncedQuery)
    }, [debouncedQuery]);
    return (
        <Input type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
    );
}

export default SearchInput;