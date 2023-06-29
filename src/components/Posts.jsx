import React, { useEffect, useState } from "react";
import { getPosts } from "./helpers/API";
import axios from "axios";
import { Card, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const src = 'https://jsonplaceholder.typicode.com/posts/';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get(src)
            .then(data => setPosts(data.data))
    }, [])
    return(
        <>
          { posts.map(post => (
            <Card key={post.id}>
                <Card.Body className="">
                    <Card.Title>
                        <Link
                        to="/about">
                            <Image
                                src="https://media.istockphoto.com/id/1087531642/vector/male-face-silhouette-or-icon-man-avatar-profile-unknown-or-anonymous-person-vector.jpg?s=612x612&w=0&k=20&c=FEppaMMfyIYV2HJ6Ty8tLmPL1GX6Tz9u9Y8SCRrkD-o="
                                roundedCircle
                                height="60" 
                                />
                        </Link>
                    { post.title }</Card.Title>        
                    <Card.Text>{ post.body }</Card.Text>
                    <Button variant="light" className="">Комментарии</Button>
                </Card.Body>
            </Card>
          ))}
        </>
    )
}