import { FaFeather } from 'react-icons/fa';
import { useCallback } from 'react';
import useLoginModal from '../../hooks/useLoginModal';

const SidebarLogo = () => {
    const loginModal = useLoginModal();
    const onClick = useCallback(()=>{
        console.log('clicked');
        loginModal.onOpen();
        console.log(loginModal.isOpen)
    },[loginModal])
    return(
        <div onClick={onClick}>
            <div className='
            mt-6
            lg:hidden
            h-14
            w-14
            p-4
            rounded-full
            flex
            items-center
            justify-center
            bg-sky-500
            hover:bg-opacity-80
            transition
            cursor-pointer'> 
            <FaFeather size={24} color='white'/>
            </div>
            <div className='
            mt-6
            hidden
            lg:block
            px-4
            py-2
            rounded-full
            bg-sky-500
            hover:bg-opacity-90
            cursor-pointer
            transition'>
                <p className='
                hidden
                lg:block
                text-center
                font-semibold
                text-white
                text-[20px]'>
                    Post
                </p>
            </div>
        </div>
    );
};

export default SidebarLogo;