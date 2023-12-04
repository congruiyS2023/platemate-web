import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import ChallengeModal from "../components/ChallengeModal";
import Link from "../components/Link";

const UserHome = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const fromJoinSuccess = location.state?.fromJoinSuccess;

    const handleJoin = () => {
        navigate('/reward/join-challenge');
    }

    const handleJoinSuccess = () => {
        navigate('/reward/join-challange-success');
    }

    return (    
        <div>
            <ChallengeModal/>
            {!fromJoinSuccess && (
                <Link onClick={handleJoin}>
                    JOIN ZERO-WASTE CHALLENGE!
                </Link>
            )}
            {fromJoinSuccess && (
                <Link onClick={handleJoinSuccess}>
                    YOU HAVE JOINED THE CHALLENGE!
                </Link>
            )}
        </div>
    );
};

export default UserHome;
