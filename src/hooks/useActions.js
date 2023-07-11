import { useDispatch } from "react-redux"
import { setPosts, sortPosts } from "../store/slice"
import { bindActionCreators } from "@reduxjs/toolkit";

const allActions = {
    ...sortPosts, ...setPosts
}

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(allActions, dispatch);
}