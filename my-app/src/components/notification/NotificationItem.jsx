// import useLoginModal from "../../hooks/useLoginModal";
import useCurrentUser from "../../hooks/useCurrentUser";
import useUser from "../../hooks/useUser";
import { useCallback } from "react";
import Avatar from "../Avatar";
// import { AiOutlineMessage } from "react-icons/ai";
// import { ClipLoader } from "react-spinners";
// import { useNavigate } from "react-router-dom";

const NotificationItem =({userId}) =>{
    // const loginModal = useLoginModal();
    const {data: currentUser} = useCurrentUser();
    const {data: user} = useUser(userId);
    // const navigate = useNavigate();
    // console.log("in notification item",currentUser);
    // const goToUser = () =>{
    //     navigate(`/users/${userId}`);
    // }

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
                <Avatar userId={currentUser?.id}/>
                <div>
                    <div className="text-white mt-1">
                        <p>Follow request from {user?.name}</p>
                        <p className="text-md text-neutral-500">@{user?.username}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotificationItem;