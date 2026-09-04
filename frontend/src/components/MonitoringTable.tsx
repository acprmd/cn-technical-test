import type { FunctionComponent } from "react";
import type { Content } from "../types/Types";

interface MonitoringTableProps {
    data?: Content[]
    sortBy?: string
    sortDir?: 'asc' | 'desc'
    page: number
}

const columns = [
    { key: 'callId', label: "Call ID" },
    { key: 'callTimestamp', label: "Call Timestamp" },
    { key: 'csName', label: "Cs Name" },
    { key: 'customerName', label: "Nama Nasabah" },
    { key: 'sentimentScore', label: "Sentiment Score Nasabah" },
]

const MonitoringTable: FunctionComponent<MonitoringTableProps> = ({ data = [], sortBy, sortDir = 'asc', page }) => {
    return (
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th className="px-3 py-2 font-medium text-gray-600">No.</th>
                        {columns.map(column => (<th key={column.key} className="px-3 py-2 font-medium text-gray-600 cursor-pointer select-none hover:bg-gray-100">
                            <span className="flex items-center gap-1">
                                {column.label}
                                {sortBy === column.key &&
                                    (sortDir == 'asc' ? " ↑" : " ↓")}
                            </span>
                        </th>))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, idx) =>
                        <tr key={data.callId}>
                            <td className="px-3 py-2 text-center">{(page * 5) + (idx + 1)}</td>
                            <td className="px-3 py-2">{data.callId}</td>
                            <td className="px-3 py-2">{data.callTimestamp}</td>
                            <td className="px-3 py-2">{data.csName}</td>
                            <td className="px-3 py-2">{data.customerName}</td>
                            <td className={`${+data.sentimentScore < 70 ? 'text-red-600' : 'text-green-600'}`}>{data.sentimentScore}%</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default MonitoringTable;