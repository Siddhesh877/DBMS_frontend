import Input from "../Input";
import Modal from "../Modal";
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const LoginModal = () =>{

const loginModal = useLoginModal();
const registerModal = useRegisterModal();
const [isLoading, setIsLoading] = useState(false);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
console.log("in login modal");
const navigate = useNavigate();

const onSubmit = useCallback(async () => { 
    try{
        setIsLoading(true);
        //Call API for login
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json" 
           }
           
           let bodyContent = JSON.stringify({
             "username":"firstuser",
             "password":"firstuser"
           });
           
           let reqOptions = {
             url: "http://10.10.88.205:8000/login",
             method: "POST",
             headers: headersList,
             data: bodyContent,
           }
           
           let response = await axios.request(reqOptions);
           localStorage.setItem('token', response.data.access_token);
           toast.success('Logged in');
           loginModal.onClose();
           navigate('/');
        // console.log(response);

    }
    catch(error){
        console.error(error);
    }
    finally{
        setIsLoading(false);
    }
 },[]);

const onToggle = useCallback(() => {
    if(isLoading){
        return;
    }
    loginModal.onClose();
    registerModal.onOpen();
 },[isLoading,registerModal, loginModal])

const bodyContent =(
    <div className="flex flex-col gap-4">
        <Input 
         placeholder="Username"
         onChange={(e)=> setUsername(e.target.value)}
         value={username}
         disabled={isLoading}
         />
        <Input
            placeholder="Password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
            type="password"
        />
    </div>
 );

 const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
        <p>first time using this app?
            <span
              onClick={onToggle}
              className="text-white
               cursor-pointer
               hover:underline"
            >create an account</span>
        </p>
    </div>
);
    return(
        <Modal
         disabled={isLoading}
         isOpen={loginModal.isOpen}
         onClose={loginModal.onClose}
         onSubmit={onSubmit}
         title="Login"
         actionLabel="Sign In"
         body={bodyContent}
         footer={footerContent}
        />
    );
}

export default LoginModal;