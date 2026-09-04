import type { MonitoringResponse, Params } from "../types/Types"

const BASE_URL = "http://localhost:8080/api/monitoring"

export async function fetchMonitoring(params: Params): Promise<MonitoringResponse> {
    const filteredParams = Object.entries(params as Record<string, string>).filter(([_key, value]) => value !== null && value !== undefined && value !== '')
    const query = new URLSearchParams(filteredParams).toString()
    const res = await fetch(`${BASE_URL}?${query}`)
    if (!res.ok) throw ('Failed to fetch data!')
    return res.json()
}