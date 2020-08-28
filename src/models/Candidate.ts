
export interface Candidate {
    id: number,
    name: string,
    email: string
}

export interface CandidateRequest {
    count: number,
    page: number,
    num_pages: number,
    next: string | null,
    previous: string | null,
    results : Array<Candidate>
}