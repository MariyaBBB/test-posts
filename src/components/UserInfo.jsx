import React from "react";
import { useGetUserPostsQuery } from "../store/posts.api";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Post from "./Post";
import UserCard from "./UserCard";

export default function UserInfo({ userId, match }) {
    const {data, isLoading} = useGetUserPostsQuery(userId);

    if(data) console.log(userId, data);
    return(
        <>
            <Button variant="info" className="ms-4" as={Link} to="/">Назад</Button>
            <h1>Посты пользователя</h1>
            <UserCard userId={userId}/>
            { isLoading ? <Spinner></Spinner> :
                data.map( post => (
                    <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    userId={userId}
                    >
                    </Post>
                ))
            }
        </>
    )

}