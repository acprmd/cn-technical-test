import type { FunctionComponent } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker
interface PeriodFilterProps {
}

const PeriodFilter: FunctionComponent<PeriodFilterProps> = () => {
    return (
        <RangePicker minDate={dayjs().subtract(90, 'days')} maxDate={dayjs()} />
    );
}

export default PeriodFilter;