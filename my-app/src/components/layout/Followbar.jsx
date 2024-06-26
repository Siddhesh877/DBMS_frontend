import useUsers from "../../hooks/useUsers";
import Avatar from "../Avatar";

const Followbar = () => {
    const {data: users = []} =useUsers();
        if(users === null){
            return null;
        }
        if(users.length === 0){
            return null;
        }
    return(
        <div className="px-6 py-4 hidden lg:block">
            <div className="bg-neutral-800 rounded-xl p-4">
                <h2 className="text-white text-xl font-semibold">You Can Follow:</h2>
                <div className="flex flex-col gap-6 mt-4">
                    {users.map((user) => (
                        <div key={user.user_id} className="flex flex-row gap-4">
                            <Avatar userId={user.user_id}/>
                            <div className="flex flex-col">
                                <p className="
                                    text-white font-semibold text-sm">
                                        {user.name}
                                </p>
                                <p className="text-neutral-400 text-sm">
                                     {user.username}
                                </p>
                            </div>
                                
                        </div>
                    ))}
                </div>
            </div>            
        </div>
    );
};

export default Followbar;