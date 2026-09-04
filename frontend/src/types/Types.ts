export type SentimentFilter = 'below70' | '70orAbove' | undefined
export type SortDir = 'asc' | 'desc' | undefined

export interface Params {
    page: number
    search?: string
    startDate?: string
    endDate?: string
    sentimentFilter?: SentimentFilter
    sortBy?: string
    sortDir?: SortDir
}

export interface Content {
    callId: string
    callTimestamp: string
    csName: string
    customerName: string
    sentimentScore: number
}

interface Sort {
    empty: boolean
    sorted: boolean
    unsorted: boolean
}

interface Pageable {
    offset: number
    pageNumber: number
    pageSize: number
    paged: boolean
    sort: Sort
    unpaged: boolean
}

export interface MonitoringResponse {
    content: Content[]
    empty: boolean
    first: boolean
    last: boolean
    number: number
    numberOfElements: number
    pageable: Pageable
    sort: Sort
    totalElements: number
    totalPages: number
}