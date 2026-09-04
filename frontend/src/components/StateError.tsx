import { Alert } from "antd";
import type { FunctionComponent } from "react";

interface StateErrorProps {
    description: string
}
const StateError: FunctionComponent<StateErrorProps> = ({ description }) => {
    return (
        <Alert type="error" title={'Something went wrong'} description={description} />
    );
}

export default StateError;