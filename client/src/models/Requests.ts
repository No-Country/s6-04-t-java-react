export type ReportResponse = {
    creationDate?: string
    issue: string
    status: 'ON_REVIEW' | 'RESOLVED'
    userId: number
}

export type ReportList = ReportResponse[]

export type Report = {
    issue: string
    detail: string
    place: string
}

