import { useState } from "react"
import { StyledComplain } from "../core-ui/page/Complain.style"
import ChatPerson from "../components/chat/ChatPerson"
import ChatMsg from "../components/chat/ChatMsg"
import profile from "../assets/profile.jpg"

const Complain = () => {
  const[msgList,setMsgList] = useState([
   {
    isMe:false,
    profile:profile,
    message:"hey bro",

   },
   {
    isMe:true,
    profile:profile,
    message:"hey",
   },
   {
    isMe:false,
    profile:profile,
    message:"Your products is trash",
   },
   {
    isMe:false,
    profile:profile,
    message:"hey bro",

   },
   {
    isMe:true,
    profile:profile,
    message:"hey",
   },
   {
    isMe:false,
    profile:profile,
    message:"Your products is trash",
   },
   {
    isMe:false,
    profile:profile,
    message:"hey bro",

   },
   {
    isMe:true,
    profile:profile,
    message:"hey",
   },
   {
    isMe:false,
    profile:profile,
    message:"Your products is trash",
   },
  ]);

  const[personList,setPersonList] = useState( [{
    id:1,
    img: profile,
    name:"Mik",
    lastMessage:"hey"
  },
  {
    id:2,
    img: profile,
    name:"Mik",
    lastMessage:"hey"
  },
  {
    id:3,
    img: profile,
    name:"Mik",
    lastMessage:"hey"
  },
  {
    id:4,
    img: profile,
    name:"Mik",
    lastMessage:"hey"
  },
  {
    id:1,
    img: profile,
    name:"Mik",
    lastMessage:"hey"
  },
  {
    id:2,
    img: profile,
    name:"Mik",
    lastMessage:"hey"
  },
  {
    id:3,
    img: profile,
    name:"Mik",
    lastMessage:"hey"
  },
  {
    id:4,
    img: profile,
    name:"Mik",
    lastMessage:"hey"
  },
  {
    id:5,
    img: profile,
    name:"Mik",
    lastMessage:"hey"
  },
  {
    id:6,
    img: profile,
    name:"Mik",
    lastMessage:"hey"
  },
  {
    id:7,
    img: profile,
    name:"Mik",
    lastMessage:"hey"
  },
  {
    id:8,
    img: profile,
    name:"Mik",
    lastMessage:"hey"
  },]);

  return (
    
      <StyledComplain>
           {/* Left */}
           <div className='chat-container'>
                  <div className="chat-list">
                        {personList.map(person => <ChatPerson key={person.id} person={person}/>)}
                  </div>
           </div>

           {/* Line */}
           <div className="middle-line"></div>

           {/* Right */}
           <div className='chatbody'>
                  <div className="messages-container">
                         <div className="messages-list">
                                {msgList.map(msg => <ChatMsg msg={msg}/>)}
                         </div>
                  </div>
                  <form>
                     <input type="text" placeholder="send message"/>
                  </form>
           </div>

      </StyledComplain>
    
  )
}

export default Complain