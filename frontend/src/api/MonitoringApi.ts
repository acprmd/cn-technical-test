import type { MonitoringResponse, Params } from "../types/Types"

const BASE_URL = "http://localhost:8080/api/monitoring"

export async function fetchMonitoring(params: Params): Promise<MonitoringResponse> {
    const filteredParams = Object.entries(params as unknown as Record<string, string>).filter(([_key, value]) => value !== null && value !== undefined && value !== '')
    const query = new URLSearchParams(filteredParams).toString()
    const res = await fetch(`${BASE_URL}?${query}`)
    if (!res.ok) {
        let message = "Something went wrong loading the data"
        try {
            const body = await res.json()
            if (body.error) message = body.error
        } catch (error) {
        }
        throw new Error(message)
    }
    return res.json()
}