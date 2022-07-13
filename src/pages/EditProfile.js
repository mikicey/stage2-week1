import { useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../App";


import StyledEditProduct from '../core-ui/page/EditProduct.style'
import Input from "../components/Input";

import {api} from "../connection";

const EditProfile = () => {
  const {token} = useContext(AppContext);
  const navigate = useNavigate();
  
//  State
  

  const[form,setForm] = useState(
    {
      image : {
        value : "" , errMsg: ""
      },
      phone : {
       value : "" , errMsg: ""
      },
      gender : {
        value : "" , errMsg: ""
      },
      country : {
        value : "" , errMsg: ""
      },
      city : {
        value : "" , errMsg: ""
      },
      address : {
        value : "" , errMsg: ""
      },
    }
  )

// Use Effects
 useEffect(()=>{
    getInputs();
 },[])
 
// Functions

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
      const res = await api.get(`/profile}`, {
        headers: {'Authorization':`Bearer ${token}`}
        });

        // Extract data
      const payload = res.data;
      const profile = payload.data;

      setForm( {
        image : {
         value :  profile.image, errMsg: ""
        },
        gender : {
          value : profile.gender , errMsg: ""
        },
        phone : {
          value : profile.phone , errMsg: ""
        },
        country : {
          value : profile.country , errMsg: ""
        },
        city : {
          value : profile.city , errMsg: ""
        },
        address : {
            value : profile.address , errMsg: ""
          },
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

    const formData = new FormData();

    formData.append("image",form.image.value);
    formData.append("gender",form.gender.value);
    formData.append("phone",form.phone.value);
    formData.append("country",form.country.value);
    formData.append("city",form.city.value);
    formData.append("address",form.address.value);


    try {
      await api.put(`/profile`, formData , {
        headers: {'Authorization':`Bearer ${token}`}
        });

        
        navigate("/myprofile");


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
      </div>
      <form>
           <Input type="input" placeholder="phone" value={form.phone.value} err={form.phone.errMsg} setForm={setForm}/>
           <Input type="input" placeholder="gender" value={form.gender.value} err={form.gender.errMsg} setForm={setForm}/>
           <Input type="input" placeholder="country" value={form.country.value} err={form.country.errMsg} setForm={setForm}/>
           <Input type="input" placeholder="city" value={form.city.value} err={form.city.errMsg} setForm={setForm}/>
           <Input type="input" placeholder="address" value={form.address.value} err={form.address.errMsg} setForm={setForm}/>
           <button onClick={onSubmit}>Save</button>
      </form>
    </StyledEditProduct>
  )
}

export default EditProfile;