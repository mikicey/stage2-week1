import { useState } from "react";

import { pushError,emailChecker } from "../auth";

import logo from "../assets/dumbmerch-logo.svg";
import Input from "../components/Input";
import StyledAuth from "../core-ui/page/Auth.style.js"


 const Auth = ({setUser}) => {
  const[auth,setAuth] = useState("register");

  const[loginForm,setLoginForm]=useState({
    email : {
      value : "" , errMsg: ""
    },
    password : {
      value : "" , errMsg: ""
    },
  });

  const[registerForm,setRegisterForm]=useState({
    name : {
      value : "" , errMsg: ""
    },
    email : {
      value : "" , errMsg: ""
    },
    password : {
      value : "" , errMsg: ""
    },
  });




  

  const submitLoginForm = (e) => {
    e.preventDefault();

    // sebenernya post req ke server
    const users = JSON.parse(localStorage.getItem("users"));


    //  sebenernya validasi di server
    if(users.findIndex(user => user.email === loginForm.email.value) === -1){
      return pushError(setLoginForm,"email","Email isnt registered yet");
    }

    const user = users.filter(user => user.email === loginForm.email.value)[0];

    if(user.password !== loginForm.password.value){
      return pushError(setLoginForm,"password","Password invalid")
    }


    // sebenernya ketika menerima respons bahwa password & username benar
    setUser(user);
  }

  const submitRegisterForm = (e) => {
    e.preventDefault();

    //  Validate format

    // username
    if(registerForm.name.value === ""){
      return pushError(setRegisterForm,"name","Name cannot be empty");

    };

    // email
    if(!emailChecker(registerForm.email.value)){
       return pushError(setRegisterForm,"email","Email format incorrect")
    };

        //  Validate Duplicate
        const users = JSON.parse(localStorage.getItem("users"));
        const duplicateUser = users.find(user => user.email === registerForm.email.value);
    
        if(duplicateUser){
          return pushError(setRegisterForm,"email","Email already registered");
        };



    //  pw
    if(registerForm.password.value.length < 8){
      return pushError(setRegisterForm,"password","Minimal password length is 8")
    };





    // Push User
    const newUser = {
      id : users.length + 10,
      email : registerForm.email.value,
      password : registerForm.password.value,
      username: registerForm.name.value,
      isAdmin:false
    }

    users.push(newUser);

    localStorage.setItem("users",JSON.stringify(users));

    setUser(newUser);

  }
  

  return (
    <>
      <StyledAuth>

          <div className="auth-desc">
                <img src={logo} alt="logo" style={{width:"264px"}}/>
                <h1>Easy, Fast and Reliable</h1>
                <p>Go shopping for merchandise, just go to dumb merch shopping. 
                The biggest merchandise in <b>Indonesia</b></p>
                <div className="btn-group">
                    <button className="login-btn" onClick={()=>{setAuth("login")}}>Login</button>
                    <button className="register-btn" onClick={()=>{setAuth("register")}}>Register</button>
                </div>
          </div>

          <div className="auth-form">
                {auth === "register" ? <b>Register</b> : <b>Login</b>}

                <form>

                   {auth === "register" ? 
                     <>
                        <Input type={"text"} placeholder={"name"} value={registerForm.name.value} err={registerForm.name.errMsg} setForm={setRegisterForm}/>
                        <Input type={"email"} placeholder={"email"} value={registerForm.email.value} err={registerForm.email.errMsg} setForm={setRegisterForm}/>
                        <Input type={"password"} placeholder={"password"} value={registerForm.password.value} err={registerForm.password.errMsg} setForm={setRegisterForm}/>
                     </> :
                     <>
                        <Input type={"email"} placeholder={"email"} value={loginForm.email.value} err={loginForm.email.errMsg} setForm={setLoginForm}/>
                        <Input type={"password"} placeholder={"password"} value={loginForm.password.value} err={loginForm.password.errMsg} setForm={setLoginForm}/>
                     </>
                   }
                   
                   {auth === "register" ? 
                      <button onClick={submitRegisterForm}>Register</button>
                    : <button onClick={submitLoginForm}>Login</button>
                   }
                </form>
          </div>
      </StyledAuth>
    </>
  )
}

export default Auth;
