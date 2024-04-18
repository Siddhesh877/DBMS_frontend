import usePost from "../../hooks/usePost";
import PostItem from "./PostItem";
// import {useState,useEffect} from 'react';
// import axios from "axios";
// import useToken from "../../hooks/useToken";
// import Header from "../Header";
import { ClipLoader } from 'react-spinners';

const PostFeed = ({userId})=>{
    const { data: posts, isLoading } = usePost(userId);

    if (isLoading && posts.length === 0) {
        return (
          <div className="text-center">
            <ClipLoader color="lightblue" size={80} />
          </div>
        );
      }

    // console.log(posts);
    return(
        <>
         {posts.map((post)=>(
             <PostItem key={post.post_id}
              data={post} 
              userId={userId}/>
        ))}
        </>
    );
}

export default PostFeed;