import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";

import React from 'react'
import StyledEditProduct from '../core-ui/page/EditProduct.style'
import Input from "../components/Input";

const EditProduct = () => {
  const navigate = useNavigate();
  const {id} = useParams();

 
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

  useEffect(()=>{
    const productsArray = JSON.parse(localStorage.getItem("products"));
    const product = productsArray.filter(prod => prod.product_id == id)[0];
   
    setForm({
      name : {
        value : product.product_name, errMsg: ""
      },
      desc : {
        value : product.product_desc, errMsg: ""
      },
      price : {
        value : product.price , errMsg: ""
      },
      qty : {
        value : product.product_qty , errMsg: ""
      },
    })
  },[])


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
    const productsArray = JSON.parse(localStorage.getItem("products"));
    const newProductsArray = productsArray.map(prod => {
     
     if(prod.product_id == id){
       return {...prod,
               product_name:form.name.value,
               product_img:"",
               price:form.price.value,
               product_qty:form.qty.value,
              product_desc:form.desc.value}
     } else { return prod }

    });

    localStorage.setItem("products",JSON.stringify(newProductsArray));

    navigate("/product");
}

  

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