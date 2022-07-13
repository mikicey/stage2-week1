import { useState,useEffect,useContext } from "react";
import { useNavigate,useParams } from "react-router-dom";

import { AppContext } from "../App";

import StyledEditCategory from "../core-ui/page/EditCategory.style";
import Input from "../components/Input";

import {api} from "../connection"

const EditCategory = () => {
  const {token} = useContext(AppContext);
  const navigate = useNavigate();
  const {id} = useParams();

  // State
  const[form,setForm] = useState({
    category : {
      value : "" , errMsg: ""
    },
  });

  // Use Effects
  useEffect(()=>{
   
  getInputs();

  },[]);



  // Functions
  const getInputs = async () => {
    try {
      const res = await api.get(`/category/${id}`, {
        headers: {'Authorization':`Bearer ${token}`}
        });

        // Extract data
      const payload = res.data;
      const name = payload.data.category.name;

      setForm({
        category : {
          value : name,
          errMsg : ""
        }
      });



      } catch (err) {

      
      const payload = err.response.data;
      const message = payload.message;

      // navigate to error page
      console.log(message)
      

      };
  };
  
  const onSubmit = async(e) => {
    e.preventDefault();
   
    try {
      const res = await api.put(`/category/${id}`, {
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
      <b>Edit Category</b>
      <form>
           <Input type="input" placeholder="category" value={form.category.value} err={form.category.errMsg} setForm={setForm}/>
           <button onClick={onSubmit}>Save</button>
      </form>
    </StyledEditCategory>
  )
}

export default EditCategory