import StyledChatPerson from "../../core-ui/ChatPerson.style"
import unknown from "../../assets/unknown.jpg"

const ChatPerson = ({person,setActivePerson,setClickedPerson,clickedPerson}) => {
  const Clicked = person.user_id == clickedPerson ? true : false; 
  
  const timeString = person.hour.toString() + ":" + person.minute.toString() + "," + person.day + "-" + person.month + "-" + person.year;

  return (
    <StyledChatPerson Clicked={Clicked}>
        <img src={person.profile_img.length === 26 ? unknown : person.profile_img} onClick={()=>{setActivePerson(person.room_id);setClickedPerson(person.user_id)}}/>
        <div onClick={()=>{setActivePerson(person.room_id);setClickedPerson(person.user_id)}}>
             <span>{person.username}</span>
             <p>{person.last_msg}</p>
        </div>
        <span style={{marginLeft:"48px"}}>{timeString}</span>
    </StyledChatPerson>
  )
}

export default ChatPerson