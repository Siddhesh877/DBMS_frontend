import toast from "react-hot-toast";
import useCurrentUser from "../hooks/useCurrentUser";
import useLoginModal from "../hooks/useLoginModal";
import usePost from "../hooks/usePost";
import useRegisterModal from "../hooks/useRegisterModal";
import { useState,useCallback, useEffect } from "react";
import Button from "./Button";
import Avatar from "./Avatar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";

const Form = ({placeholder,isComment,postId}) => {
    const navigate = useNavigate();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const {data:currentUser} = useCurrentUser();
    const {updateData} = usePost();
    const token = localStorage.getItem('token');

    const [body,setBody] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    

    const onSubmit = useCallback(async()=>{
        try{
            setIsLoading(true);
            //post the post
            if(token){
            const response = await axios.post(
                'http://10.10.88.205:8000/createpost',
                { title: "title",
                  content: body,
                  description: "description"
                },
                {
                  headers: {
                    'Authorization': `Bearer ${token}` // Assuming token is stored in localStorage
                  }
                }
            );
            updateData(response.data);
            // console.log("in form",response);
        }
              //   setResponse(response.data); // Set the response data
              setBody('');
              
            toast.success('Posted successfully');
            // navigate(window.location.pathname);
            
            
        }catch(error){ 
            console.error(error);
            toast.error('Something went wrong');
        }finally{
            setIsLoading(false);
        }
    },[body,updateData]);

    return(
        <div className="border-b-[1px] border-neutral-800 px-5 py-2">
            {currentUser?(
            <div className="flex flex-row gap-4">
                <div>
                    <Avatar userId={currentUser?.user_id}/>
                </div>
                <div className="w-full">
                    <textarea 
                        disabled={isLoading}
                        onChange={(e)=>setBody(e.target.value)}
                        value={body}
                        className="disable:opacity-80
                            w-full
                            peer
                            resize-none
                            mt-3
                            bg-black
                            ring-0
                            outline-none
                            text-[20px]
                            placeholder-neutral-500
                            text-white"
                        placeholder={placeholder}
                    ></textarea>
                    <hr className="opacity-0
                    peer-focus:opacity-100
                    h-[1px]
                    w-full
                    border-neutral-800
                    transition"/>
                    <div className="mt-4 flex flex-row justify-end">
                        <Button 
                        disabled={isLoading || !body}
                        onClick={onSubmit}
                        label="Post"/>
                    </div>
                </div>
            </div>):(
            <div className="py-8">
                <h1 className="
                    text-white
                    text-2xl
                    text-center
                    mb-4
                    font-bold">
                    Welcome
                </h1>
                <div className="flex flex-row items-center justify-center gap-4">
                    <Button label="Login" onClick={loginModal.onOpen}/>
                    <Button label="Register" onClick={registerModal.onOpen} secondary/>
                </div>
            </div>
            )}
        </div>
    );
}
export default Form;