import type { FunctionComponent } from "react";
import { Empty } from 'antd'

const StateEmpty: FunctionComponent = () => {
    return (
        <Empty description='No records match your search or filters' />
    );
}

export default StateEmpty;