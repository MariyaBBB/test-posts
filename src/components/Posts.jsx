import React from "react";
import Post from "./Post";
import { Form, Button, Stack, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { useGetPostsQuery } from "../store/posts.api";

export default function Posts() {
    const { data, isLoading, error } = useGetPostsQuery();
    console.log(data);  
  
    return(
        <>  
            <Stack direction="horizontal" gap={3}>
                <InputGroup className="m-2 w-auto">
                    <Form.Control aria-describedby="basic-addon1"  placeholder="Type to search..." /> 
                    <Button variant="light"> X </Button>  
                    <Button variant="info">Search</Button>                
                </InputGroup>
                    <DropdownButton variant="info" title="Сортировка">
                        <Dropdown.Item eventKey="1">По возрастанию</Dropdown.Item>
                        <Dropdown.Item eventKey="2">По убыванию</Dropdown.Item>
                    </DropdownButton>
            </Stack>
          { isLoading ? 'Loading' :
            data.map(post => (
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