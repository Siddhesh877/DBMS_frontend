import React from 'react';
import Sidebar from './layout/Sidebar';
import Followbar from './layout/Followbar';
import useLoginModal from '../hooks/useLoginModal';
import useRegisterModal from '../hooks/useRegisterModal';

const Layer = ({children,registerModal}) =>{
    const loginModal = useLoginModal();
    console.log("in layer")
    const token = localStorage.getItem('token');
    React.useEffect(() => {
        if (!token) {
          loginModal.onOpen();
        }
      }, [token]);
    return (
        <div className="h-screen bg-black">
            <div className="container h-full mx-auto xl:px-30 max-w-6xl">
                <div className="grid grid-cols-4 h-full">
                    <Sidebar/>
                <div className="
                     col-start-2
                     col-span-3
                     lg:col-span-2
                     lg:col-start-2
                     border-x-[1px]
                     border-neutral-800
                    ">
                        {children}
                </div>
                <Followbar/>
                </div>
            </div>
        </div>
            
    );
}

export default Layer;