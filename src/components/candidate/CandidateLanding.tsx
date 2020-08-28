import React from 'react';
import candidatesFromFile from '../../data/candidates.json'
import downArrow from '../../ui-kit/icons/svg/down_caret_with_circle.svg'
import { Candidate, CandidateRequest } from '../../models/Candidate'
import CandidateList from './CandidateList';

export default function CandidateLanding() {

    const [candidates, setCandidates] = React.useState<CandidateRequest>() 

    React.useEffect(() => {

        var candidatesArray:  CandidateRequest = JSON.parse(JSON.stringify(candidatesFromFile));

        setCandidates(candidatesArray)
    
    }, [])

    return (
        <div className="bg-gray-200 h-screen">
            <div className="flex flex-row">
                <div className="text-green-300 h-screen bg-white">
                    <div className="border border-gray100 px-5 py-2 flex flex-row items-center w-48" >
                        <div>
                            Candidate status
                        </div>
                        <div>
                            <img src={downArrow} className="h-4 ml-1" alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="px-5 pt-2">
                    {candidates?.count} candidates
                    <CandidateList candidates={candidates?.results}/>
                </div>
            </div>
            <div>
            </div>
        </div>

    );
}