export type Report = {
    creationDate?: string
    issue: string
    status: 'ON_REVIEW' | string
    userId: number
}

export type ReportList = Report[]

