import type { FunctionComponent } from "react";
import { Button } from "antd"

interface PaginationProps {
    page: number
    totalPages?: number
    onChangePage: (value: number) => void
}

const Pagination: FunctionComponent<PaginationProps> = ({ page, totalPages, onChangePage }) => {

    return (
        <div className="flex justify-between">
            <Button
                className="min-w-24"
                disabled={page === 0}
                onClick={() => onChangePage(page - 1)}
            >
                Previous
            </Button>
            <span className="font-bold">Page {page ? page + 1 : 1} of {totalPages}</span>
            <Button
                className="min-w-24"
                disabled={page + 1 === totalPages || !totalPages}
                onClick={() => onChangePage(page + 1)}
            >
                Next
            </Button>
        </div>
    );
}

export default Pagination;