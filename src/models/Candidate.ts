export interface CandidateRequest {
    count: number,
    page: number,
    num_pages: number,
    next: string | null,
    previous: string | null,
    results: Array<Candidate>
}


export interface Candidate {
    id: number,
    name: string,
    email: string,
    profile: Profile,
    applications: Array<Application>

}

export interface Profile {
    district_id: number | null,
    updated: Date,
    nimble_score: number,
    phone_work: string,
    phone_cell: string,
}

export interface Application {
    id: number,
    role: SchoolApplicationRole
    new_status: ApplicationNewStatus
}

export interface SchoolApplicationRole {
    id: number,
    title: string,
    status: number,
    active_status: number,
    school: School
}

export interface School {
    id: number
}

export interface ApplicationNewStatus {
    id: number,
    label: string,
    school_admin_view_access: boolean,
    school_admin_move_access: boolean,
    school_admin_move_district: boolean,
    status_type: number,
    color: number,
    _order: number
}
