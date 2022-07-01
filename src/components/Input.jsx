import React from 'react'

const Input = ({type,placeholder,value,err,setForm}) => {
    const onChangeForm = (e) => {
          setForm(prev => {
            return {
                ...prev,
                [e.target.name] : {
                    value :  e.target.value ,
                    errMsg : ""
                }
            }
          })
    }


  return (
    <div className='form-control'>
    <input type={type} placeholder={placeholder} name={placeholder} value={value} onChange={(e)=>{onChangeForm(e)}}/>
    <p style={{color:"red",position:"absolute"}}>{err}</p>
    </div>
  )
}

export default Input