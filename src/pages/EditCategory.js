import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import StyledEditCategory from "../core-ui/page/EditCategory.style";
import Input from "../components/Input";

const EditCategory = () => {
  const[form,setForm] = useState({
    category : {
      value : "" , errMsg: ""
    },
  });

  const navigate = useNavigate();
  const {id} = useParams();

  const onSubmit = (e) => {
       e.preventDefault();
       navigate("/category");
  }

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