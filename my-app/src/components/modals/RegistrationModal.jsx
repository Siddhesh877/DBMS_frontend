import Input from "../Input";
import Modal from "../Modal";
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const RegisterModal = () =>{

const loginModal = useLoginModal();
const registerModal = useRegisterModal();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");
const [username, setUsername] = useState("");
const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate();

const onSubmit = useCallback(async() => {},[loginModal]);
console.log("in register modal");
const onToggle = useCallback(() => {
    if(isLoading){
        return;
    }
    registerModal.onClose();
    loginModal.onOpen();
 },[isLoading, registerModal, loginModal]);

 const bodyContent =(
    <div className="flex flex-col gap-4">
        <Input 
         placeholder="Email"
         onChange={(e)=> setEmail(e.target.value)}
         value={email}
         disabled={isLoading}
         />
         <Input 
         placeholder="Name"
         onChange={(e)=> setEmail(e.target.value)}
         value={name}
         disabled={isLoading}
         />
         <Input 
         placeholder="Username"
         onChange={(e)=> setEmail(e.target.value)}
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
        <p>Already have an account?
            <span
              onClick={onToggle}
              className="text-white
               cursor-pointer
               hover:underline"
            >Sign in</span>
        </p>
    </div>
);
    return(
        <Modal
         disabled={isLoading}
         isOpen={registerModal.isOpen}
         onClose={registerModal.onClose}
         onSubmit={onSubmit}
         title="Create an account"
         actionLabel="Register"
         body={bodyContent}
         footer={footerContent}
        />
    );
}

export default RegisterModal;