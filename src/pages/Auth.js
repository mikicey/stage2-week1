import { useState } from "react";
import logo from "../assets/dumbmerch-logo.svg";
import Input from "../components/Input";
import StyledAuth from "../core-ui/page/Auth.style.js"


 const Auth = ({setisLogin}) => {
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

    //  check/validate

    // fetch req/store in localstorage

    // 
    setisLogin(true);
  }

  const submitRegisterForm = (e) => {
    e.preventDefault();
    //  check/validate

    // fetch req/store in localstorage

    // 
    setisLogin(true);
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
