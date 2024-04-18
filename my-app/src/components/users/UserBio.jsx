import useUser from "../../hooks/useUser";
import useCurrentUser from "../../hooks/useCurrentUser";
import Button from "../Button";
import { useCallback } from "react";
import { BiCalendar } from "react-icons/bi";
import useEditModal from "../../hooks/useEditModal";
import useFollow from "../../hooks/useFollow";
import toast from "react-hot-toast";



const UserBio = ({userId})=>{
    const {data: currentUser} = useCurrentUser();
    const {data: fetchedUser} = useUser(userId);
    const { followRequest, data, error } = useFollow(userId);
    // console.log(userId)
    const user_id = parseInt(currentUser?.id)
    const userid = parseInt(userId,10);
    // console.log("current",user_id)
    const editModal = useEditModal();
    const onClick = useCallback(()=>{
        // console.log("in userbio callback")
        editModal.onOpen();
        console.log(editModal.isOpen)
    },[editModal]);
    
    const clickFollow = useCallback(async ()=>{
        const response = await followRequest();
        console.log(response);
        toast.success('Follow request sent');
    },[])
    
    return(
        <div className="border-b-[1px] border-neutral-800 pb-4">
        <div className="flex justify-end p-2">
            {user_id == userid?(
                <Button secondary label="Edit" onClick={onClick}/>
            ):(
                <Button 
                    onClick={clickFollow}
                    label="Follow"
                    secondary/>
            )}
        </div>
        <div className="mt-8 px-4">
            <div className="flex flex-col">
                <p className="text-white text-2xl font-semibold">
                    {fetchedUser?.name}
                </p>
                <p className="text-md text-neutral-500">
                    @{fetchedUser?.username}
                </p>
            </div>
            <div className="flex flex-col mt-4">
                <p className="text-white">
                    {fetchedUser?.description}
                </p>
                <div className="flex
                 flex-row
                 items-center
                 gap-2
                 mt-4
                 text-neutral-500">
                    <BiCalendar size={24}/>
                    <p>
                        {/* Joined {createdAt} */}
                    </p>
                </div>
            </div>
            <div className="flex flex-row items-center mt-4 gap-6">
                <div className="flex flex-row items-center gap-1">
                    <p className="text-white">
                        {/* {fetchedUser?.followingIds?.length} */}
                    </p>
                    <p className="text-neutral-500">
                        Following
                    </p>
                </div>
                <div className="flex flex-row items-center gap-1">
                    <p className="text-white">
                        {/* {fetchedUser?.followers_count || 0} */}
                    </p>
                    <p className="text-neutral-500">
                        Followers
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default UserBio;