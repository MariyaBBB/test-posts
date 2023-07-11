import React from "react";
import UserInfo from "../components/UserInfo";
import { useParams } from "react-router-dom";

export const UsersPage = () => {
    let { id } = useParams(); 
    return (
        <UserInfo userId={id} />
    )
}