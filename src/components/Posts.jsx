import React, { useEffect, useState } from "react";
import Post from "./Post";
import { Spinner } from "react-bootstrap";
import { useGetPostsQuery } from "../store/posts.api";
import Pages from "./Pages";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../store/slice";

export default function Posts() {
    const { filteredPosts } = useSelector((state) => state.posts);
    const { data: fetchedData, isLoading } = useGetPostsQuery();
    const dispatch = useDispatch();
   
    useEffect(() => {
        if (fetchedData) {
            dispatch(setPosts(fetchedData));
        }
    }, [fetchedData, dispatch]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = filteredPosts ? filteredPosts.slice(firstPostIndex, lastPostIndex): 'error';
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
                userId={post.userId}
            ></Post>
          ))}
               {filteredPosts ? 
                        <Pages 
                            postsPerPage={postsPerPage} 
                            totalPosts={filteredPosts.length}
                            paginate={paginate}
                        /> : <></>
               }
        </>
    )
}