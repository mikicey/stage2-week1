import { useState,useEffect } from "react";
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

  useEffect(()=>{
    const categoriesArray = JSON.parse(localStorage.getItem("categories"));
    const category = categoriesArray.filter(cat => cat.category_id == id)[0];
   
    setForm({
      category : {
        value : category.category_name,
        errMsg : ""
      }
    })
  },[])

  const onSubmit = (e) => {
       e.preventDefault();
       const categoriesArray = JSON.parse(localStorage.getItem("categories"));
       const newCategoriesArray = categoriesArray.map(cat => {
        
        if(cat.category_id == id){
          return {...cat,category_name:form.category.value}
        } else { return cat }

       });

       localStorage.setItem("categories",JSON.stringify(newCategoriesArray));

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