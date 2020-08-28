import React from 'react';
import downArrow from '../../ui-kit/icons/svg/down_caret_with_circle.svg'
import { Candidate, Application } from '../../models/Candidate'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

type ApplicationRowProps = {
    application: Application | undefined;
    candidate: Candidate
};

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function ApplicationRow({
    application,
    candidate
}: ApplicationRowProps) {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div>
               <h2 id="simple-modal-title" className="text-green-500"><b>Candidate Details</b></h2>
                <div>
                    {candidate.name}
                </div>
                <div>
                    {candidate.email}
                </div>
                <div>
                    Home cell: {candidate.profile.phone_cell}
                </div>
                <div>
                    Work phone: {candidate.profile.phone_work}
                </div>
                <div>
                    Nimble score: {candidate.profile.nimble_score}
                </div>
            </div>
            <div className="flex flex-col pt-2">
            <h2 className="text-green-500"><b>Position Details</b></h2>
                <div>
                    {application?.role.title}
                </div>
                <div>
                    {application?.role.jobboard_title}
                </div>
            </div>
        </div>
    );

    return (
        <React.Fragment>
            <div className="flex flex-col pl-5" onClick={handleOpen}>
                <div key={application?.id}>
                    <div className="flex flex-row">
                        <div className="w-1/6">
                            {application?.role.title}
                        </div>
                        <div className="w-1/6">
                            {application?.new_status.label}
                        </div>
                        <div className="w-1/6">
                        </div>
                        <div className="w-1/6">
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </React.Fragment>

    );
}