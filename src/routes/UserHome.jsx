import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import ChallengeModal from "../components/ChallengeModal";
import Link from "../components/Link";
import MenuItemsPage from "./MenuItemsPage";

const UserHome = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const fromJoinSuccess = location.state?.fromJoinSuccess;



    return (
        <>
            <MenuItemsPage />
        </>
    );
};

export default UserHome;
