import StyledChatPerson from "../../core-ui/ChatPerson.style"

const ChatPerson = ({person}) => {
  return (
    <StyledChatPerson>
        <img src={person.img}/>
        <div>
             <span>{person.name}</span>
             <p>{person.lastMessage}</p>
        </div>
    </StyledChatPerson>
  )
}

export default ChatPerson