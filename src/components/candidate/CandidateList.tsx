import React from 'react';
import downArrow from '../../ui-kit/icons/svg/down_caret_with_circle.svg'
import { Candidate, CandidateRequest } from '../../models/Candidate'
import CandidateRow from './CandidateRow';

type CandidateListProps = {
    candidates: Array<Candidate> | undefined;
};

export default function CandidateList({
    candidates
}: CandidateListProps) {

    return (
        <div className="bg-gray-200 h-full w-screen">
            <div className="flex flex-row">
                <div className="w-1/6">
                    Candidate Name
                </div>
                <div className="w-1/6">
                    Candidate Status
                </div>
                <div className="w-1/6">
                    Applications
                </div>
                <div className="w-1/6">
                    Last Action
                </div>
            </div>
            <hr></hr>
            {candidates?.map((candidate) => (
                <div key={candidate.id}>
                    <CandidateRow candidate={candidate} />
                </div>
            ))}
        </div>

    );
}