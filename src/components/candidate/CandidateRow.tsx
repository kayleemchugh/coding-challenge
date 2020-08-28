import React from 'react';
import { Candidate, Application } from '../../models/Candidate'
import ApplicationRow from './ApplicationRow';
var moment = require('moment');


type CandidateRowProps = {
    candidate: Candidate | undefined;
};

export default function CandidateRow({
    candidate
}: CandidateRowProps) {

    const formattedDate = moment(candidate?.profile.updated).format('LLL')

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
                        {/* {candidate?.applications[0]} */}
                    </div>
                    <div className="w-1/6">
                        {candidate?.applications.length}
                    </div>
                    <div className="w-1/6">
                    {formattedDate}
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