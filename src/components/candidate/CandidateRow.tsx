import React from 'react';
import { Candidate } from '../../models/Candidate'
import ApplicationRow from './ApplicationRow';

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
        <React.Fragment>
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
                    <div className="flex flex-col pr-5">
                        {candidate?.applications?.map((application) => (
                            <div key={application.id}>
                                <ApplicationRow
                                    application={application}
                                    candidate={candidate}
                                />
                            </div>
                        ))}

                    </div>
                }

            </div>
        </React.Fragment>
    );
}