import type { FunctionComponent } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker

const DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss'
interface PeriodFilterProps {
    onChangeStartDate: (value: string | undefined) => void
    onChangeEndDate: (value: string | undefined) => void
}

const PeriodFilter: FunctionComponent<PeriodFilterProps> = ({ onChangeStartDate, onChangeEndDate }) => {

    return (
        <RangePicker
            allowClear
            minDate={dayjs().subtract(3, 'month')}
            maxDate={dayjs()}
            onChange={(e) => {
                onChangeStartDate(e?.[0]?.startOf('day').format(DATE_FORMAT))
                onChangeEndDate(e?.[1]?.endOf('day').format(DATE_FORMAT))
            }} />
    );
}

export default PeriodFilter;