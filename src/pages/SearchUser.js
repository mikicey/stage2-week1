import {useState,useContext} from "react"
import {useNavigate} from "react-router-dom";

import StyledSearchUser from "../core-ui/page/SearchUser.style"
import UserCard from "../components/UserCard";
import Input from "../components/Input"

import {api} from "../connection";
import { AppContext } from "../App";
import Alert from "../components/Alert";





const SearchUser = () => {
    const { token } = useContext(AppContext);
    const navigate = useNavigate();

    // States
    const[form, setForm] = useState({
        search : {
            value : "",
            errMessage: ""
        }
    });

    const[userList,setUserList] = useState([]);
    const[errMsg,setErrMsg] = useState("")

    // Function
    const getUsers = async() => {
        try {
           const res = await api.get("/users",{
            headers: {'Authorization':`Bearer ${token}`}
           });

           const payload = res.data;
           const users = payload.data.users;

           setUserList(users);

        } catch(err) {

            const payload = err.response.data;
            const message = payload.message;

            // navigate to error page
            console.log(message)

        };
    };

    const submitForm = (e) => {
    e.preventDefault();
    setErrMsg("")

    if(!form.search.value.length){
        return setErrMsg("Input can't be empty.")
    }

    getUsers();

    };

  return (
    <StyledSearchUser>
         {errMsg && <Alert message={errMsg}/>}
         <form>
              <Input type="text" placeholder="search" value={form.search.value} err={form.search.errMessage} setForm={setForm}/>
              <button className="search-btn" onClick={submitForm}>Search User</button>
         </form>

         <div className="user-container">
               <div className="user-list">
                    {userList.length === 0 ? <div style={{textAlign:"center",fontSize:"24px"}}>No user found..</div> 
                    : userList.map(user => <UserCard key={user.user_id} user={user} navigate={navigate} api={api} token={token}/>)
                    }
                    
               </div>
         </div>
    </StyledSearchUser>
  )
}

export default SearchUser