import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import {AppContext} from "../App";

import StyledEditCategory from "../core-ui/page/EditCategory.style";
import Input from "../components/Input";
import {api} from "../connection"

const AddCategory = () => {
    const{token} = useContext(AppContext);
    const navigate = useNavigate();

    // State
    const[form,setForm] = useState({
      category : {
          value : "" , errMsg: ""
        }
    });

    // Functions
    const onSubmit = async(e) => {
        e.preventDefault();
       
        try {
          const res = await api.post(`/category`, {
            "name" : form.category.value
          }, {
            headers: {'Authorization':`Bearer ${token}`}
            });
    
            navigate("/category");
    
    
    
          } catch (err) {
    
          const payload = err.response.data;
          const message = payload.message;
    
          // navigate to error page
          console.log(message)
          
    
          };
    
           
      };

  return (
    <StyledEditCategory>
        <b>Add Category</b>
        <form>
        <Input type="input" placeholder="category" value={form.category.value} err={form.category.errMsg} setForm={setForm}/>
        <button onClick={onSubmit}>Add</button>
        </form>
    </StyledEditCategory>
  )
}

export default AddCategory;