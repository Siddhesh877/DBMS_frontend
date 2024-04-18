import { TiSocialTumbler  } from "react-icons/ti";

const SidebarLogo = () => {
    return(
        <div 
      className="
        rounded-full 
        h-14
        w-14
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer
    ">
      <TiSocialTumbler  size={28} color="white" />
    </div>
    );
};

export default SidebarLogo;