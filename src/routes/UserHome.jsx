import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import ChallengeModal from "../components/ChallengeModal";
import Link from "../components/Link";
import MenuItemsPage from "./MenuItemsPage";

const UserHome = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const fromJoinSuccess = location.state?.fromJoinSuccess;

    const handleJoin = () => {
        navigate('/user-home/join-challenge');
    }

    const handleJoinSuccess = () => {
        navigate('/user-home/join-challange-success');
    }

    return (
        <>
            <div className="py-2">
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
            <MenuItemsPage />
        </>
    );
};

export default UserHome;
