import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { fetchMonitoring } from "../api/MonitoringApi"
import type { MonitoringResponse, Params } from "../types/Types";


export const useMonitoringData = () => {
    const [page, setPage] = useState<Params["page"]>(0);
    const [search, setSearch] = useState<Params["search"]>('');
    const [startDate, setStartDate] = useState<Params["startDate"]>(undefined);
    const [endDate, setEndDate] = useState<Params["endDate"]>(undefined);
    const [sentimentFilter, setSentimentFilter] = useState<Params["sentimentFilter"]>(undefined);
    const [sortBy, setSortBy] = useState<Params["sortBy"]>("");
    const [sortDir, setSortDir] = useState<Params["sortDir"]>("desc");
    const [data, setData] = useState<Partial<MonitoringResponse>>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        fetchMonitoring({ search, startDate, endDate, sentimentFilter, sortBy, sortDir })
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [page, search, startDate, endDate, sentimentFilter, sortBy, sortDir])

    const updateFilter = <T>(setter: Dispatch<SetStateAction<T>>) => {
        return (value: T) => {
            setPage(0)
            setter(value)
        }
    }

    const toggleSort = (column: string) => {
        if (sortBy === column) {
            setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
        } else {
            setSortBy(column)
            setSortDir('asc')
        }
    }

    return {
        page, setPage,
        search, sentimentFilter, sortBy, sortDir,
        data, loading, error,
        setSearch: updateFilter(setSearch),
        setStartDate: updateFilter(setStartDate),
        setEndDate: updateFilter(setEndDate),
        setSentimentFilter: updateFilter(setSentimentFilter),
        toggleSort
    }
}