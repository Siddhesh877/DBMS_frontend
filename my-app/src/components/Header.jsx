import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useHeaderProps from "../hooks/useHeaderProps";

const Header = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate('/')
    }
    const { label, showBackArrow } = useHeaderProps();
    return(
        <div className="border-b-[1px] border-neutral-800 p-5">
            <div className="flex flex-row items-center gap-2">
                {
                    showBackArrow && (
                        <BiArrowBack
                            color="white"
                            size={20}
                            className="cursor-pointer
                            hover:opacity-70
                            transition"
                            onClick={goBack}
                        />
                    )
                }
                <h1 className="text-white text-xl font-semibold">{label}</h1>
            </div>
            
        </div>
    );
}

export default Header;