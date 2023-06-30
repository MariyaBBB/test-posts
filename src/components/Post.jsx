import React, {useState} from "react";
import { Card, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Comments from "./Comments";

export default function Post ({id, title, body}) {
    const [display, setDisplay] = useState(false);
    return(
        <Card border="dark" className="mb-2 me-2 ms-2">
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
                    { title }</Card.Title>        
                    <Card.Text>{ body }</Card.Text>
                    <Button variant="info" onClick={() => setDisplay(!display)}>Комментарии</Button>
                    <Comments postId={id} display={display}/>
                </Card.Body>
            </Card>
    )
}