import StyledChatMsg from "../../core-ui/ChatMsg.style"
import { AppContext } from "../../App";
import { useContext } from "react";

import unknown from "../../assets/unknown.jpg"

const ChatMsg = ({msg}) => {

  const{user} = useContext(AppContext);

  const myId = user.id;
  const isMe = msg.sender_id == myId ? true : false;

  const timeString = msg.hour.toString() + ":" + msg.minute.toString() + "," + msg.day + "-" + msg.month + "-" + msg.year;

  
  return (
    <StyledChatMsg isMe={isMe}>
       {!isMe &&
        <img src={msg.profile_img.length === 26 ? unknown : msg.profile_img}/> }
        <div className="msg-body" >
                 <div className="triangle" ></div>
                 <p>{msg.body}</p>
                 <p className="msg-time">{timeString}</p>
        </div>

    </StyledChatMsg>
  )
}

export default ChatMsg