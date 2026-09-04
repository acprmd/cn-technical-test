import type { FunctionComponent } from "react";
import { Select } from "antd"
import type { SentimentFilterType } from "../types/Types";

interface SentimentFilterProps {
    value: SentimentFilterType
    onChange: (e: SentimentFilterType) => void
}

const options = [
    { value: 'below70', label: 'Di bawah 70%' },
    { value: '70orAbove', label: '70% atau lebih' }
]

const SentimentFilter: FunctionComponent<SentimentFilterProps> = ({ value, onChange }) => {
    return (
        <Select options={options} allowClear value={value} onChange={(v) => { onChange(v) }} placeholder="Sentiment score" />
    );
}

export default SentimentFilter;