import type { FunctionComponent } from "react";
import { Select } from "antd"

interface SentimentFilterProps {
    value: number
    onChange: () => void
}

const options = [
    { key: 'below70', label: 'Di bawah 70%' },
    { key: '70orAbove', label: '70% atau lebih' }
]

const SentimentFilter: FunctionComponent<SentimentFilterProps> = () => {
    return (
        <Select options={options} placeholder="Sentiment score" />
    );
}

export default SentimentFilter;