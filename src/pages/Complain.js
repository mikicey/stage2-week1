import { useState , useEffect , useContext} from "react"
import { useNavigate, useParams} from "react-router-dom"

import { StyledComplain } from "../core-ui/page/Complain.style"
import ChatPerson from "../components/chat/ChatPerson"
import ChatMsg from "../components/chat/ChatMsg"
import profile from "../assets/unknown.jpg"

import {api} from "../connection";
import {AppContext} from "../App"



const Complain = () => {
  let {id} = useParams();
  const {token} = useContext(AppContext);
  const navigate = useNavigate();
  

  // States
  const[msgList,setMsgList] = useState([
    {
     isMe:false,
     profile:profile,
     message:"hey bro",
 
    },
   
   ]);
 
   const[personList,setPersonList] = useState( [{
     id:1,
     img: profile,
     name:"Mik",
     lastMessage:"hey"
   },
   ]);

  // UseEffects
  useEffect(()=>{
    getMessageList(id)
  },[])


  // Functions
  const getFriends = () => {

  };

  const getMessageList = (roomid) => {

  };

  const postMessage = () => {

  };

  const deleteMessage = () => {

  };

  return (
    
      <StyledComplain>
           {/* Left */}
           <div className='chat-container'>
                  <button className="search-btn" onClick={()=>{navigate("/searchuser")}}>Search Users</button>
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