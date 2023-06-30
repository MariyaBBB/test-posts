import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import { Form, Button, Stack, InputGroup } from "react-bootstrap";

const src = 'https://jsonplaceholder.typicode.com/posts/';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);    

    const getText = (e) => {
        console.log(e);
        setFilteredPosts(posts.filter(p => p.title.includes(e)))
        console.log(filteredPosts);
    }
    useEffect(() => {
        axios
            .get(src)
            .then(data => setPosts(data.data))
    }, [])
    return(
        <>  
            <Stack direction="horizontal" gap={3}>
                <InputGroup className="m-2 w-auto">
                    <Form.Control onInput={(e) => getText(e.target.value)} aria-describedby="basic-addon1"  placeholder="Type to search..." /> 
                    <Button variant="light"> X </Button>  
                    <Button variant="info">Search</Button>                
                </InputGroup>
            </Stack>
          { posts.map(post => (
            <Post
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
            ></Post>
          ))}
        </>
    )
}