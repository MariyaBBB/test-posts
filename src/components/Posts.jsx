import React, { useState } from "react";
import Post from "./Post";
import { Spinner } from "react-bootstrap";
import { useGetPostsQuery } from "../store/posts.api";
import Pages from "./Pages";

export default function Posts() {
    const { data, isLoading, error } = useGetPostsQuery();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data ? data.slice(firstPostIndex, lastPostIndex): 'error';
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
    return(
        <>  
          { isLoading ? <Spinner> </Spinner>:
          currentPosts.map(post => (
            <Post
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
            ></Post>
          ))}
               {data ? 
                        <Pages 
                            postsPerPage={postsPerPage} 
                            totalPosts={data.length}
                            paginate={paginate}
                        /> : <></>
               }

        </>
    )
}