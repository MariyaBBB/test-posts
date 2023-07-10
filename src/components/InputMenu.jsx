import React, { useState } from "react";
import { Form, Button, Stack, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPosts, sortPosts } from "../store/slice";

export default function InputMenu() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const handleSort = (field, order) => {
        dispatch(sortPosts({ field, order }));
      };

    const handleFilter = (toSearch) => {
        dispatch(filterPosts({ toSearch }));
        setInputValue(toSearch);
      };

    return (
        <>
            <Stack direction="horizontal" gap={3}>
                <InputGroup className="m-2 w-auto">
                    <Form.Control onInput={(e) => handleFilter(e.target.value)} aria-describedby="basic-addon1" value={inputValue} placeholder="Type to search..." /> 
                    <Button variant="light" onClick={() => handleFilter('')}> X </Button>  
                    <Button variant="info" onClick={(e) => handleFilter(inputValue)} >Search</Button>                
                </InputGroup>
                    <DropdownButton  variant="info" title="Сортировка">
                        <Dropdown.Item onClick={() => { handleSort('title', 'asc') }} eventKey="1">По возрастанию</Dropdown.Item>
                        <Dropdown.Item onClick={() => { handleSort('title', 'desс') }} eventKey="2">По убыванию</Dropdown.Item>
                    </DropdownButton>
            </Stack>
        </>
    )
}