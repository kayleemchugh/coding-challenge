import React from 'react';
import downArrow from '../../ui-kit/icons/svg/down_caret_with_circle.svg'
import { Candidate, CandidateRequest } from '../../models/Candidate'

type CandidateRowProps = {
    candidate: Candidate | undefined;
};

export default function CandidateRow({
    candidate
}: CandidateRowProps) {

    const [expand, setExpand] = React.useState(false)

    const toggleExpand = () => {
        setExpand(!expand)
    }

    return (
        <div key={candidate?.id}>
            <div className="flex flex-row" onClick={toggleExpand}>
                <div className="w-1/6">
                    {candidate?.name}
                </div>
                <div className="w-1/6">
                    {/* {candidate.applications.lastIndex.} */}
                </div>
                <div className="w-1/6">
                    {candidate?.applications.length}
                </div>
                <div className="w-1/6">
                    {candidate?.profile.updated}
                </div>
            </div>
            <hr></hr>
            {expand &&
                <div className="flex flex-col pr-5" onClick={toggleExpand}>
                    {candidate?.applications?.map((application) => (
                        <div key={application.id}>
                            <div className="flex flex-row">
                                <div className="w-1/6">
                                    {application.role.title}
                                </div>
                                <div className="w-1/6">
                                    {application.new_status.label}
                                </div>
                                <div className="w-1/6">
                                </div>
                                <div className="w-1/6">
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            }

        </div>

    );
}