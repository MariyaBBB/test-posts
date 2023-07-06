import React from "react";
import { useGetUserDataQuery } from "../store/posts.api";
import { Spinner, Card, Image } from "react-bootstrap";


export default function UserCard({userId}) {
    const { data, isLoading} = useGetUserDataQuery(userId);
    return (
        <>
            {isLoading ? <Spinner /> : 
             <div>
                <Card border="dark" style={{ width: '30rem'}} className="mb-2 me-2 ms-2 w-400">
                    <Card.Body>
                        <Card.Title>
                            { data.name }, username {data.username}
                        </Card.Title>
                        <Card.Text>
                            <b>Email: </b>{ data.email } <br/>
                            <b>Адрес: </b>{ data.address.city} {data.address.street} {data.address.suite} <br/>
                            <b>Tel.</b> {data.phone}
                        </Card.Text>
                    </Card.Body>
                </Card>
             </div>
            }
        </>
    )
}