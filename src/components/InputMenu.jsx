import React from "react";
import { Form, Button, Stack, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { sortPosts } from "../store/slice";

export default function InputMenu() {
    const dispatch = useDispatch();
    const handleSort = (field, order) => {
        dispatch(sortPosts({ field, order }));
      };

    return (
        <>
            <Stack direction="horizontal" gap={3}>
                <InputGroup className="m-2 w-auto">
                    <Form.Control aria-describedby="basic-addon1"  placeholder="Type to search..." /> 
                    <Button variant="light"> X </Button>  
                    <Button variant="info">Search</Button>                
                </InputGroup>
                    <DropdownButton  variant="info" title="Сортировка">
                        <Dropdown.Item onClick={() => { handleSort('title', 'asc') }} eventKey="1">По возрастанию</Dropdown.Item>
                        <Dropdown.Item onClick={() => { handleSort('title', 'desс') }} eventKey="2">По убыванию</Dropdown.Item>
                    </DropdownButton>
            </Stack>
        </>
    )
}