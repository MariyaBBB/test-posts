import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";

export default function NaviBar() {

    return(
    <>
        <Navbar collapseOnSelect expand="expand" bg="dark" data-bs-theme="dark" className="mb-3">
            <Navbar.Brand className="ms-2"> Blog Post</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ms-5">
                    <Nav.Link>Список постов</Nav.Link>
                    <Nav.Link>Обо мне</Nav.Link>
                </Nav>    
            </Navbar.Collapse>
            <Navbar.Collapse className="mt-3">
                    <Image 
                        src="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_girl_female_woman_profile_smiley_happy_people_icon_181662.png"
                        rounded="rounded"
                        height="30"
                        className="ms-2 me-1"
                    />
                    <Navbar.Text>Моисеева Мария </Navbar.Text>
                    <Navbar.Text className="ms-2">mash.moiseeva24@gmail.com</Navbar.Text>
            </Navbar.Collapse> 
        </Navbar>
    </>)
}