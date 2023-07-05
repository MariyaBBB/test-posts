import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

export default function Pages({ postsPerPage, totalPosts, paginate }) {
    const pagesNumber = [];
    const [active, setActive] = useState();

    for( let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pagesNumber.push(i);
    }
    return(
        <div className="align-items-center">
            <Pagination>
                {pagesNumber.map((page, i) => (
               
                    <Pagination.Item className="ms-2" key={i} onClick={() => {paginate(page); setActive(page)}} active={page === active}>
                        {page}
                    </Pagination.Item>
                    ))
                }
            </Pagination>
        </div>
    )
}

