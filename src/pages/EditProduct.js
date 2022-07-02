import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

import React from 'react'
import StyledEditProduct from '../core-ui/page/EditProduct.style'
import Input from "../components/Input";

const EditProduct = () => {

  const[form,setForm] = useState(
    {
      name : {
        value : "" , errMsg: ""
      },
      desc : {
        value : "" , errMsg: ""
      },
      price : {
        value : "" , errMsg: ""
      },
      qty : {
        value : "" , errMsg: ""
      },
    }
  )

  const onChange = (e) => {
     setForm(prev => {
      return {
        ...prev,
        [ e.target.name ] : e.target.value 
      }
     })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/product");
}

  const navigate = useNavigate();
  const {id} = useParams();

  return (
    <StyledEditProduct>
         <b>Edit Product</b>
      <div className="upload-img">
          <button>Upload Image</button>
          <div className="">Mouse.jpg</div>
      </div>
      <form>
           <Input type="input" placeholder="name" value={form.name.value} err={form.name.errMsg} setForm={setForm}/>
           <div className="form-control">
                <textarea style={form.desc.errMsg ? {border:"1px solid red"} : {}} placeholder="description" name="desc" value={form.desc.value} onChange={onChange}>{form.desc.value}</textarea>
                <p>{form.desc.errMsg}</p>
           </div>
           <Input type="input" placeholder="price" value={form.price.value} err={form.price.errMsg} setForm={setForm}/>
           <Input type="input" placeholder="qty" value={form.qty.value} err={form.qty.errMsg} setForm={setForm}/>
           <button onClick={onSubmit}>Save</button>
      </form>
    </StyledEditProduct>
  )
}

export default EditProduct