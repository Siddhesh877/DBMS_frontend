import useNotification from "../../hooks/useNotifications";
import { ClipLoader } from 'react-spinners';
import NotificationItem from "./NotificationItem";

const Notifications = () =>{
    const { data: notifications, isLoading } = useNotification();
    if (isLoading) {
        return (
          <div className="text-center">
            <ClipLoader color="lightblue" size={80} />
          </div>
        );
      }
    return (
        <>
         {notifications.map((notification,index)=>(
             <NotificationItem key={index}
              userId={notification.user}/>
        ))}
        </>
    );
}
export default Notifications;