import { useState , useEffect , useContext} from "react"
import { useNavigate, useParams} from "react-router-dom"

import { StyledComplain } from "../core-ui/page/Complain.style"
import ChatPerson from "../components/chat/ChatPerson"
import ChatMsg from "../components/chat/ChatMsg"


import {api} from "../connection";
import {pushError} from "../auth/index";
import {AppContext} from "../App";



const Complain = () => {
  let {id} = useParams();
  const {token} = useContext(AppContext);
  const navigate = useNavigate();
  

  // States
   const[activePerson,setActivePerson] = useState(Number(id));
   const[clickedPerson,setClickedPerson] = useState(null)
   
   const[msgList,setMsgList] = useState([]);
   const[personList,setPersonList] = useState( []);

   const[form,setForm] = useState({
       message : {
              value : "",
              errMsg : ""
       }
   });

 

  // Use Effects
  useEffect(()=>{

    if(activePerson !== 0) getMessageList(activePerson)

  },[activePerson]);



  useEffect(()=>{
    getFriendMessages()
  },[])


  // Functions
  const getFriendMessages = async() => {
      try {

         const res = await api.get(`/messages`,{
              headers : {'Authorization':`Bearer ${token}`}
         });

         const payload = res.data;
         const messages = payload.data.messages;

         setPersonList(messages);

      } catch(err) {
         const payload = err.response.data;
         const message = payload.message;

          // navigate to error page
         console.log(message)
      }
  };

  const getMessageList = async(roomid) => {
       try{
             const res = await api.get(`/messages/${roomid}`,{
              headers: {'Authorization':`Bearer ${token}`}
             });

             const payload = res.data;
             const messages = payload.data.messages;
             setMsgList(messages);

       } catch(err) {

             const payload = err.response.data;
             const message = payload.message;

              // navigate to error page
              console.log(message)

       }
  };

  const postMessage = async(roomid) => {

       
      try {
          
          await api.post(`/message/${roomid}`, {message : form.message.value} ,{
              headers: {'Authorization':`Bearer ${token}`}
          });

          getMessageList(roomid)
          getFriendMessages();
      } catch(err) {

       const payload = err.response.data;
       const message = payload.message;

       // navigate to error page
       console.log(message)

      }
  };

  const deleteMessage = async() => {

  };

  const onChange = (e) => {
        setForm((prev)=>{
              return {
                     ...prev,
                     [e.target.name] :{
                            value:e.target.value,
                            errMsg : prev[e.target.name].errMsg
                     } 
              }
        })
  }

  const onSubmit = (e) => {
     e.preventDefault();
     

     if(!form.message.value){
       return pushError(setForm,"message","Cannot send empty text")
     };


     
     postMessage(activePerson);

     setForm({
       message : {
              value : "",
              errMsg : ""
       }
   })
  }

  return (
    
      <StyledComplain>
           {/* Left */}
           <div className='chat-container'>
                  <button className="search-btn" onClick={()=>{navigate("/searchuser")}}>Search Users</button>
                  <div className="chat-list">
                        {personList ? personList.map(person => <ChatPerson key={person.room_id} person={person} setActivePerson={setActivePerson} setClickedPerson={setClickedPerson} clickedPerson={clickedPerson}/>) : <p>You don't have any active messages...</p>}
                  </div>
           </div>

           {/* Line */}
           <div className="middle-line"></div>

           {/* Right */}
           <div className='chatbody'>
                  <div className="messages-container">
                         <div className="messages-list">
                                {activePerson == 0 ? <p>Please click one of your friends and start chatting!!</p>  :  msgList.map(msg => <ChatMsg key={msg.message_id} msg={msg}/>)}
                         </div>
                  </div>
                {activePerson != 0 &&  <form onSubmit={onSubmit}>
                     <input name="message" type="text" placeholder="Send message" onChange={onChange} value={form.message.value}/>
                  </form> }
           </div>

      </StyledComplain>
    
  )
}

export default Complain