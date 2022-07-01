import StyledChatMsg from "../../core-ui/ChatMsg.style"

const ChatMsg = ({msg}) => {
  return (
    <StyledChatMsg isMe={msg.isMe}>
       {!msg.isMe &&
        <img src={msg.profile}/> }
        <div className="msg-body" >
                 <div className="triangle" ></div>
                 <p>{msg.message}</p>
        </div>

    </StyledChatMsg>
  )
}

export default ChatMsg