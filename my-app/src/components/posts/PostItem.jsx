// import useLoginModal from "../../hooks/useLoginModal";
// import useCurrentUser from "../../hooks/useCurrentUser";
import { useCallback } from "react";
import Avatar from "../Avatar";
import { AiOutlineMessage } from "react-icons/ai";
// import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const PostItem =({data,userId}) =>{
    // const loginModal = useLoginModal();
    // const {data: currentUser} = useCurrentUser();
    const navigate = useNavigate();
    // console.log("in postitem",data);
    const goToUser = () =>{
        navigate(`/users/${userId}`);
    }

    const goToPost = useCallback(()=>{},[])

    return(
  
        <div 
         onClick={goToPost}
         className="border-b-[1px]
         border-neutral-800
         p-5
         cursor-pointer
         hover:bg-neutral-900
         transition">
            <div className="flex flex-row items-start gap-3">
                <Avatar userId={data.user_id}/>
                <div>
                    <div className="
                        flex flex-row items-center gap-2">
                            <p onClick={goToUser} 
                            className="
                                text-white
                                font-semibold
                                cursor-pointer
                                hover:underline">{data.name}</p>
                                <span onClick={goToUser} 
                                className="
                                    text-neutral-500
                                    cursor-pointer
                                    hover:underline
                                    hidden
                                    md:block">{data.username}</span>
                                <span className="text-neutral-500 text-sm">
                                    {data.created_at}
                                </span>
                    </div>
                    <div className="text-white mt-1">
                        {data.content}
                    </div>
                    {/* icons for like, comment, share, etc. */}
                    <div className="flex flex-row items-center mt-3 gap-10">
                        <div className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-sky-500">
                            <AiOutlineMessage size={20}/>
                            <p>{data.comments?.length || 0}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;