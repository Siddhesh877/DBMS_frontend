import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUber } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";
import SidebarLogo from "./SidebarLogo";
import useCurrentUser from "../../hooks/useCurrentUser";
import SidebarLogoutButton from "./SidebarLogoutButton";

const Sidebar = () => {
    const { data } = useCurrentUser();
    // const userId = parseInt(currentUser?.user_id);
    const userId = parseInt(data?.id);
    // console.log("in sidebar ",userId);
    const items = [
    {
        label: 'Home',
        href: '/',
        icon: BsHouseFill
    },
    {
        label: 'Notifications',
        href: '/notifications',
        icon: BsBellFill
    },
    {
        label: 'Profile',
        href: `/users/${userId}`,
        icon: FaUber
    }];

    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo/>
                    {items.map((item) => (
                        <SidebarItem
                            key={item.label}
                            label={item.label}
                            href={item.href}
                            icon={item.icon}
                        />
                    ))}
                    {data ? <SidebarLogoutButton/> : <SidebarTweetButton/>}
                    
                </div>
            </div>
        </div>
    );
}
export default Sidebar;