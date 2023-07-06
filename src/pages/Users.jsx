import React, {useEffect} from "react";
import UserInfo from "../components/UserInfo";
import { useParams } from "react-router-dom";

export const Users = () => {
    let { id } = useParams(); 
    return (
        <UserInfo userId={id} />
    )
}