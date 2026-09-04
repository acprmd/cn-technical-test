import type { FunctionComponent } from "react";
import { Input } from "antd"

interface SearchInputProps {
    value: string
    onChange: () => void
}

const SearchInput: FunctionComponent<SearchInputProps> = ({ value, onChange }) => {
    return (
        <Input type="text" placeholder="Search" value={value} onChange={onChange} />
    );
}

export default SearchInput;