import type { FunctionComponent } from "react";
import type { Content } from "../types/Types";

interface MonitoringTableProps {
    data?: Content[]
    sortBy?: string
    sortDir?: 'asc' | 'desc'
    onToggleSort: (column: string) => void
    page: number
}

const columns = [
    { key: 'callId', label: "Call ID" },
    { key: 'callTimestamp', label: "Call Timestamp" },
    { key: 'csName', label: "Cs Name" },
    { key: 'customerName', label: "Nama Nasabah" },
    { key: 'sentimentScore', label: "Sentiment Score Nasabah" },
]

const MonitoringTable: FunctionComponent<MonitoringTableProps> = ({ data = [], sortBy, sortDir = 'asc', onToggleSort, page }) => {
    return (
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-sm text-slate-700">
                <thead className="border-b border-slate-200 bg-slate-100">
                    <tr>
                        <th className="px-4 py-3 font-semibold text-slate-600">No.</th>
                        {columns.map(column => (
                            <th
                                key={column.key}
                                onClick={() => onToggleSort(column.key)}
                                className={`cursor-pointer select-none px-4 py-3 font-semibold text-slate-600 transition-colors duration-300 hover:bg-slate-200 ${sortBy === column.key ? 'bg-slate-200' : ''}`}>
                                <span className="flex items-center gap-1 font-bold">
                                    {column.label}
                                    {sortBy === column.key &&
                                        (sortDir == 'asc' ? " ↑" : " ↓")}
                                </span>
                            </th>))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {data.map((data, idx) =>
                        <tr key={data.callId} className="transition-colors hover:bg-slate-50">
                            <td className="px-3 py-2 text-center">{(page * 5) + (idx + 1)}</td>
                            <td className="px-3 py-2">{data.callId}</td>
                            <td className="px-3 py-2">{new Date(data.callTimestamp).toLocaleString()}</td>
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