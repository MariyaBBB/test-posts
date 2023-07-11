import React from "react";
import { Card, Image, Spinner } from "react-bootstrap";
import { useGetCommentsQuery } from "../store/posts.api";

export default function Comments({postId, display}) {
    const { data, isLoading } = useGetCommentsQuery(postId);
    return(
        <>  
            { isLoading ? <Spinner></Spinner>:
                data.map(c => (
                <Card.Header key={c.id} className={display ? 'd-block mt-1 border-0 mb-3' : 'd-none'}  >
                    <Card.Title className="h6"> <Image 
                        src="https://zazakon.ru/sites/default/files/default_images/avatar.png"
                        height="25"
                        roundedCircle
                        className="me-2"
                    />{c.email}:</Card.Title>
                    <Card.Title className="h6">{c.name}</Card.Title>
                    <Card.Text className="border-1">{c.body}</Card.Text>
                </Card.Header>
            ))}
        </>
    )
}