import { useState,useEffect,useContext } from "react";
import { useNavigate,useParams } from "react-router-dom";

import { AppContext } from "../App";


import StyledEditProduct from '../core-ui/page/EditProduct.style'
import Input from "../components/Input";

import {api} from "../connection";

const EditProduct = () => {
  const {token} = useContext(AppContext);
  const navigate = useNavigate();
  const {id} = useParams();

//  State
  const[originalImg,setOriginalImg] = useState(null);

  const[form,setForm] = useState(
    {
      image : {
       value : "" , errMsg: ""
      },
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

// Use Effects
 useEffect(()=>{
    getInputs();
 },[])
 
// Functions
  const onChange = (e) => {
     setForm(prev => {
      return {
        ...prev,
        [ e.target.name ] : {
          
         value : e.target.value ,
         errMsg : prev[e.target.name].errMsg

        }
      }
     })
  }

  const onSelect = (e) => {
    setForm(prev => {
      return {
        ...prev,
        image : {
          value : e.target.files[0] ,
          errMsg : "" }
      }
     })
  }

  const getInputs = async () => {
    try {
      const res = await api.get(`/product/${id}`, {
        headers: {'Authorization':`Bearer ${token}`}
        });

        // Extract data
      const payload = res.data;
      const product = payload.data.product;

      setForm( {
        image : {
         value :  "", errMsg: ""
        },
        name : {
          value : product.title , errMsg: ""
        },
        desc : {
          value : product.desc , errMsg: ""
        },
        price : {
          value : product.price , errMsg: ""
        },
        qty : {
          value : product.qty , errMsg: ""
        },
      });

      setOriginalImg(product.image)



      } catch (err) {

      
      const payload = err.response.data;
      const message = payload.message;

      // navigate to error page
      console.log(message)
      

      };
  };

  const onSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image",form.image.value);
    formData.append("title",form.name.value);
    formData.append("desc",form.desc.value);
    formData.append("price",form.price.value);
    formData.append("qty",form.qty.value);
    formData.append("category_id",8);


    try {
      await api.put(`/product/${id}`, formData , {
        headers: {'Authorization':`Bearer ${token}`}
        });

        
        navigate("/product");


      } catch (err) {
      const payload = err.response.data;
      const message = payload.message;

      // navigate to error page
      console.log(message)
      };

    
}

  

  return (
    <StyledEditProduct>
         <b>Edit Product</b>
      <div className="upload-img">
          <button>Upload Image</button>
          <input type="file" onChange={onSelect} name="image"/>
          <span style={{marginLeft:"24px"}}> Original Image: </span>
          <img src={originalImg} style={{width:"64px",marginLeft:"8px"}}/>
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