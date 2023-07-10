import React from "react";
import { useGetUserDataQuery } from "../store/posts.api";
import { Spinner, Accordion } from "react-bootstrap";


export default function UserCard({userId}) {
    const { data, isLoading} = useGetUserDataQuery(userId);
    return (
        <>
            {isLoading ? <Spinner /> : 
             <div>
                <Accordion className="me-2 ms-2 mb-4 mt-2">
                    <Accordion.Item>
                        <Accordion.Header>
                            Information about { data.name }
                        </Accordion.Header>
                        <Accordion.Body>
                            <b>Username: </b> {data.username} <br/>
                            <b>Email: </b>{ data.email } <br/>
                            <b>Adress: </b>{ data.address.city} {data.address.street} {data.address.suite} <br/>
                            <b>Tel.</b> {data.phone}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
             </div>
            }
        </>
    )
}